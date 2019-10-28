export const List = "List.js";
console.log('init for script: ' + List);

window.listModule = {
    init: function () {
        listModule.events();
    },
    events: function () {
        $(window).scroll(function () {
            listModule.scrollToTop();
        });
        $(window).on('load', function(){
            window.location.pathname.search('list') >= 1 ? listModule.keyLoadMoreData() : null;
        });
        $('body').on('click','[data-js=search-close]', function (){
            window.location = "/";
        });
    },
    scrollToTop: function (i, t) {
        $(window).scroll(function () {
            $(".scroll-to-top-area").css('opacity','1');
        });
        $(".scroll-to-top-area").on('click', function () {
            $("html, body").animate({
                scrollTop: 0
            }, 400);
        });
    },
    keyLoadMoreData: function (){
        let count = 0;
        var itemListBoxBase = $('.omdb-app__list--area');
        var itemListBox = $(itemListBoxBase).find('[data-js=item-list-area]');
        var item = $(itemListBox).find('.item').clone().eq(0);
        var allHtmlText = '';
        const url = 'https://www.omdbapi.com/?i=tt3896198&apikey=' + apiUrls[0].apiForInfo.apikey + '&s=';
        const searchString = keys;
        const queryString = url + searchString;

        const html = fetch(queryString)
        .then(res => res.json().then(data => data.Search))
        .then(parsedData => {
            parsedData.forEach(movie => {
                $.each(parsedData, function (index, value) {
                    var length = parsedData.length;
                    if(index <= length){
                        $.getJSON("https://www.omdbapi.com/?", {
                            apikey: apiUrls[0].apiForInfo.apikey,
                            i: value.imdbID
                        }, function (movieData) {
                            if (movieData && count >= length ) {
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
                            count++;
                        })
                    }
                });
            });
        });
    }
}

listModule.init();
