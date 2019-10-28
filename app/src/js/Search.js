export const Search = "Search.js";
console.log('init for script: ' + Search);

const searchButton = document.querySelector('[data-js=search-btn]');
const loadMoreButton = document.querySelector('[data-js=load-more]');
const searchInput = document.querySelector('[data-js=search-input]');
var itemListBoxBase = $('.omdb-app__search--area');
var itemListBox = $(itemListBoxBase).find('[data-js=item-list-area]');
var item = $(itemListBox).find('.item').clone().eq(0);

window.searchModule = {
    init: function () {
        $(window).on('load', function () {
            searchModule.events();
        });
    },
    events: function () {
        if (apiUrls[0].apiForInfo.state == true && window.location.pathname == "/" ) {
            searchButton.addEventListener("click", function () {
                if (searchInput.value.length > apiUrls[0].apiForInfo.searchKeyCount) {
                    searchModule.searchKey();
                } 
            });
            searchInput.addEventListener("keyup", function (e) {
                if (searchInput.value.length > apiUrls[0].apiForInfo.searchKeyCount) {
                    searchModule.searchKey();
                    $('.search-result').fadeIn();
                } else {
                    $('.omdb-app__search--area').removeClass('with-search-result active');
                    $('.search-result').fadeOut();
                }
            });
            $('body').on('click','[data-js=load-more]',function(e){

                window.location.href = window.location.href.replace('?','') + apiUrls[0].apiForInfo.url.urlKeys[1].list +searchInput.value;
            });
        }
    },

    searchKey: function () {
        var count = 0;
        var allHtmlText = '';
        item.remove();
        itemListBoxBase.addClass('with-search-result active');
        layoutModule.PageLoadingStart(itemListBox);
        const url = 'https://www.omdbapi.com/?i=tt3896198&apikey=' + apiUrls[0].apiForInfo.apikey + '&s=';
        const searchString = searchInput.value;
        const queryString = url + searchString;
        const html = fetch(queryString)
        .then(res => res.json().then(data => data.Search))
        .then(parsedData => {
            if (parsedData != undefined) {
                parsedData.forEach(movie => {
                    if (parsedData !== undefined) {
                        $.each(parsedData, function (index, value) {
                            if (count < apiUrls[0].apiForInfo.searchResultItemCount) {
                                $.getJSON("https://www.omdbapi.com/?", {
                                    apikey: apiUrls[0].apiForInfo.apikey,
                                    i: value.imdbID
                                }, function (movieData) {
                                    if (movieData) {
                                        if (movieData.Poster != "N/A") {
                                            item.find('[data-item-bind=item-img] img').attr({
                                                title: movieData.Title,
                                                alt: movieData.Title,
                                                src: movieData.Poster
                                            }).removeClass('pad100');
                                            item.find('[data-item-bind=item-img] source').attr({
                                                srcset: movieData.Poster,
                                            });
                                        } else {
                                            item.find('[data-item-bind=item-img] img').attr({
                                                title: movieData.Title,
                                                alt: movieData.Title,
                                                src: "/loading.gif"
                                            }).addClass('pad100');
                                            item.find('[data-item-bind=item-img] source').attr({
                                                srcset: "/loading.gif",
                                            });
                                        }
                                        item.find('[data-item-bind=item-name]').html(movieData.Title + " " + movieData.Year)
                                        item.find('[data-item-bind=item-imdb-point]').html(movieData.imdbRating)
                                        item.find('[data-item-bind=item-imdb-level]').html("10")
                                        item.find('[data-item-bind=item-description]').html("Dil :" + movieData.Language + "</br>" + "Oyuncular :" + movieData.Actors)
                                        item.find('[data-item-bind=item-url]').attr('data-id', movieData.imdbID)
                                        if (movieData.Poster != "N/A") {
                                            item.find('[data-item-bind=item-description2]').html(movieData.Plot)
                                        } else {
                                            item.find('[data-item-bind=item-description2]').html(errorText.notDesc).addClass('red')
                                        }
                                        item.removeClass('d-none');
                                        allHtmlText += item[0].outerHTML;
                                    }
                                    itemListBox.html(allHtmlText);
                                    $('.search-result-area').append('<div class="load-more-area"> <a class="load-more-btn" data-js="load-more"> DAHA FAZLA SONUÇ » </a> </div>');
                                })
                                count++;
                            }
                        });
                    }
                });
            }
        });
    }, 
}

searchModule.init();