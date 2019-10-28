/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/src/css/General.scss":
/*!**********************************!*\
  !*** ./app/src/css/General.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./app/src/css/General.scss?");

/***/ }),

/***/ "./app/src/js/General.js":
/*!*******************************!*\
  !*** ./app/src/js/General.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.js */ \"./app/src/js/List.js\");\n/* harmony import */ var _Search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search.js */ \"./app/src/js/Search.js\");\nwindow.device = false;\nwindow.globalWidth = 0;\nwindow.headerBody = 0;\nvar MainPath = window.location.href;\nconst fetch = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n\nvar general = function () { };\ngeneral.constructor = general;\n//variable for General\n\ngeneral.jsonApplication = \"application/json\";\ngeneral.jsonContent = \"json\";\ngeneral.htmlApplication = \"text/plain\";\ngeneral.htmlContent = \"text\";\n\nwindow.apiUrls = [\n    {\n        \"apiForInfo\": {\n        \"url\": \"https://www.omdbapi.com/?t=tt3896198&\",\n        \"state\": true,\n        \"searchKeyCount\": 4,\n        \"searchResultItemCount\": 2, \n        \"apikey\": \"d61dc003\",\n            \"url\": {\n                \"urlKeys\": [\n                    {\"search\": \"/\", \"status\": \"true\"},\n                    {\"list\": \"list?key=\", \"status\": \"true\"},\n                ]\n            }\n        }\n    }\n];\n\nwindow.errorText = {\n    inputCharCount:\"En az 3 karakter girişi yapmalısınız.\",\n    inputCharError: \"Yanlış karakter kullandınız.\",\n    notData:\"Aradığınız kelimelere göre arama sonucu yok.\",\n    notDesc:\"There is no caption in this movie.\"\n}\n\nwindow.layoutModule = {\n    init: function () {\n        layoutModule.startSingleProcess();\n        layoutModule.events();\n        (function (w) {\n            var user = layoutModule.setCookie(\"user_auth\",\"true\")\n            var Path = MainPath;\n            var pointers = {\n                item: $('.item:first'),\n                itemCount: $('.item').length,\n            };\n            w.$pointers = pointers;\n        }(window));\n    },\n    events: function () {\n        $(window).on('load', function(){\n            layoutModule.deviceState();\n        });\n    },\n    startSingleProcess: function () {\n        //Call Functions\n        layoutModule.iEVersionDetect();\n        layoutModule.deviceState();\n        $('iframe[name=\"google_conversion_frame\"]').css('display', 'none');\n    },\n    deviceState: function () {\n        if (window.innerWidth >= 320 && window.innerWidth <= 1024) {\n            device = true;\n            $('body').addClass('device');\n        } else {\n            device = false;\n            $('body').removeClass('device');\n        }\n    },\n    iEVersionDetect: function () {\n        var userAgent = navigator.userAgent;\n\n        if (userAgent.indexOf(\"MSIE 7.0\") > 0) {\n            document.all(1).className = document.all(1).className + \" ie7\";\n        } else if (userAgent.indexOf(\"MSIE 8.0\") > 0) {\n            document.all(1).className = document.all(1).className + \" ie8\";\n        } else if (userAgent.indexOf(\"MSIE 9.0\") > 0) {\n            $('html').addClass(\"ie9\");\n        } else if (userAgent.indexOf(\"MSIE 10.0\") > 0) {\n            $('html').addClass(\"ie10\");\n        } else if (userAgent.indexOf(\"rv:11.0\") > 0) {\n            $('html').addClass(\"ie11\");\n        }\n    },\n    scrollToItem: function (item) {\n        $('html, body').animate({ scrollTop: $(item).offset().top - 200 }, \"slow\");\n    },\n    PageLoadingStart: function (itemListBoxBase,type) {\n        layoutModule.PageLoadingStop(itemListBoxBase);\n        var loader = '<div id=\"main-loading\">' +\n                        '<div class=\"loading-container\">' +\n                            '<div class=\"loader\">' +\n                                '<span class=\"svg-icon loader-icon\">' +\n                                    '<svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\">'+\n                                        '<path ng-attr-d=\"{{config.pathCmd}}\" ng-attr-fill=\"{{config.color}}\" stroke=\"none\" d=\"M5 50A45 45 0 0 0 95 50A45 50 0 0 1 5 50\" fill=\"#28292f\" transform=\"rotate(130.647 50 52.5)\">'+\n                                            '<animateTransform attributeName=\"transform\" type=\"rotate\" calcMode=\"linear\" values=\"0 50 52.5;360 50 52.5\" keyTimes=\"0;1\" dur=\"1.5s\" begin=\"0s\" repeatCount=\"indefinite\"></animateTransform>'+\n                                        '</path>'+\n                                    '</svg>' +\n                                '</span>' +\n                            '</div>' +\n                        '</div>' +\n                    '</div>';\n        if (type==\"append\") {\n             $(itemListBoxBase).append(loader);\n        } else {\n            $(itemListBoxBase).html(loader);\n        }\n    },\n    PageLoadingStop: function (itemListBoxBase){\n        if(itemListBoxBase) {\n            $(itemListBoxBase).find('#main-loading').fadeIn().remove();\n        }\n    },\n    setCookie: function (c_name, value, exdays) {\n        var exdate = new Date();\n        exdate.setDate(exdate.getDate() + exdays);\n        var c_value = escape(value) + ((exdays == null) ? \"\" : \"; expires=\" + exdate.toUTCString());\n        document.cookie = c_name + \"=\" + c_value;\n    },\n    getCookie: function (c_name) {\n        var c_value = document.cookie;\n        var c_start = c_value.indexOf(\" \" + c_name + \"=\");\n        if (c_start == -1) {\n            c_start = c_value.indexOf(c_name + \"=\");\n        }\n        if (c_start == -1) {\n            c_value = null;\n        } else {\n            c_start = c_value.indexOf(\"=\", c_start) + 1;\n            var c_end = c_value.indexOf(\";\", c_start);\n            if (c_end == -1) {\n                c_end = c_value.length;\n            }\n            c_value = unescape(c_value.substring(c_start, c_end));\n        }\n        return c_value;\n    },\n}\n\nlayoutModule.init();\n\nvar timerCookie = layoutModule.getCookie(\"user_auth\");\n\n\n\n\n//# sourceURL=webpack:///./app/src/js/General.js?");

/***/ }),

/***/ "./app/src/js/List.js":
/*!****************************!*\
  !*** ./app/src/js/List.js ***!
  \****************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"List\", function() { return List; });\nconst List = \"List.js\";\nconsole.log('init for script: ' + List);\n\nwindow.listModule = {\n    init: function () {\n        listModule.events();\n    },\n    events: function () {\n        $(window).scroll(function () {\n            listModule.scrollToTop();\n        });\n        $(window).on('load', function(){\n            window.location.pathname.search('list') >= 1 ? listModule.keyLoadMoreData() : null;\n        });\n        $('body').on('click','[data-js=search-close]', function (){\n            window.location = \"/\";\n        });\n    },\n    scrollToTop: function (i, t) {\n        $(window).scroll(function () {\n            $(\".scroll-to-top-area\").css('opacity','1');\n        });\n        $(\".scroll-to-top-area\").on('click', function () {\n            $(\"html, body\").animate({\n                scrollTop: 0\n            }, 400);\n        });\n    },\n    keyLoadMoreData: function (){\n        let count = 0;\n        var itemListBoxBase = $('.omdb-app__list--area');\n        var itemListBox = $(itemListBoxBase).find('[data-js=item-list-area]');\n        var item = $(itemListBox).find('.item').clone().eq(0);\n        var allHtmlText = '';\n        const url = 'https://www.omdbapi.com/?i=tt3896198&apikey=' + apiUrls[0].apiForInfo.apikey + '&s=';\n        const searchString = keys;\n        const queryString = url + searchString;\n\n        const html = fetch(queryString)\n        .then(res => res.json().then(data => data.Search))\n        .then(parsedData => {\n            parsedData.forEach(movie => {\n                $.each(parsedData, function (index, value) {\n                    var length = parsedData.length;\n                    if(index <= length){\n                        $.getJSON(\"https://www.omdbapi.com/?\", {\n                            apikey: apiUrls[0].apiForInfo.apikey,\n                            i: value.imdbID\n                        }, function (movieData) {\n                            if (movieData && count >= length ) {\n                                if (movieData.Poster != \"N/A\") {\n                                    item.find('[data-item-bind=item-img] img').attr({\n                                        title: movieData.Title,\n                                        alt: movieData.Title,\n                                        src: movieData.Poster\n                                    }).removeClass('pad100');\n                                    item.find('[data-item-bind=item-img] source').attr({\n                                        srcset: movieData.Poster,\n                                    });\n                                } else {\n                                    item.find('[data-item-bind=item-img] img').attr({\n                                        title: movieData.Title,\n                                        alt: movieData.Title,\n                                        src: \"/loading.gif\"\n                                    }).addClass('pad100');\n                                    item.find('[data-item-bind=item-img] source').attr({\n                                        srcset: \"/loading.gif\",\n                                    });\n                                }\n                                item.find('[data-item-bind=item-name]').html(movieData.Title + \" \" + movieData.Year)\n                                item.find('[data-item-bind=item-imdb-point]').html(movieData.imdbRating)\n                                item.find('[data-item-bind=item-imdb-level]').html(\"10\")\n                                item.find('[data-item-bind=item-description]').html(\"Dil :\" + movieData.Language + \"</br>\" + \"Oyuncular :\" + movieData.Actors)\n                                item.find('[data-item-bind=item-url]').attr('data-id', movieData.imdbID)\n                                if (movieData.Poster != \"N/A\") {\n                                    item.find('[data-item-bind=item-description2]').html(movieData.Plot)\n                                } else {\n                                    item.find('[data-item-bind=item-description2]').html(errorText.notDesc).addClass('red')\n                                }\n                                item.removeClass('d-none');\n                                allHtmlText += item[0].outerHTML;\n                            }\n                            itemListBox.html(allHtmlText);\n                            count++;\n                        })\n                    }\n                });\n            });\n        });\n    }\n}\n\nlistModule.init();\n\n\n//# sourceURL=webpack:///./app/src/js/List.js?");

/***/ }),

/***/ "./app/src/js/Search.js":
/*!******************************!*\
  !*** ./app/src/js/Search.js ***!
  \******************************/
/*! exports provided: Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Search\", function() { return Search; });\nconst Search = \"Search.js\";\nconsole.log('init for script: ' + Search);\n\nconst searchButton = document.querySelector('[data-js=search-btn]');\nconst loadMoreButton = document.querySelector('[data-js=load-more]');\nconst searchInput = document.querySelector('[data-js=search-input]');\nvar itemListBoxBase = $('.omdb-app__search--area');\nvar itemListBox = $(itemListBoxBase).find('[data-js=item-list-area]');\nvar item = $(itemListBox).find('.item').clone().eq(0);\n\nwindow.searchModule = {\n    init: function () {\n        $(window).on('load', function () {\n            searchModule.events();\n        });\n    },\n    events: function () {\n        if (apiUrls[0].apiForInfo.state == true && window.location.pathname == \"/\" ) {\n            searchButton.addEventListener(\"click\", function () {\n                if (searchInput.value.length > apiUrls[0].apiForInfo.searchKeyCount) {\n                    searchModule.searchKey();\n                } \n            });\n            searchInput.addEventListener(\"keyup\", function (e) {\n                if (searchInput.value.length > apiUrls[0].apiForInfo.searchKeyCount) {\n                    searchModule.searchKey();\n                    $('.search-result').fadeIn();\n                } else {\n                    $('.omdb-app__search--area').removeClass('with-search-result active');\n                    $('.search-result').fadeOut();\n                }\n            });\n            $('body').on('click','[data-js=load-more]',function(e){\n\n                window.location.href = window.location.href.replace('?','') + apiUrls[0].apiForInfo.url.urlKeys[1].list +searchInput.value;\n            });\n        }\n    },\n\n    searchKey: function () {\n        var count = 0;\n        var allHtmlText = '';\n        item.remove();\n        itemListBoxBase.addClass('with-search-result active');\n        layoutModule.PageLoadingStart(itemListBox);\n        const url = 'https://www.omdbapi.com/?i=tt3896198&apikey=' + apiUrls[0].apiForInfo.apikey + '&s=';\n        const searchString = searchInput.value;\n        const queryString = url + searchString;\n        const html = fetch(queryString)\n        .then(res => res.json().then(data => data.Search))\n        .then(parsedData => {\n            if (parsedData != undefined) {\n                parsedData.forEach(movie => {\n                    if (parsedData !== undefined) {\n                        $.each(parsedData, function (index, value) {\n                            if (count < apiUrls[0].apiForInfo.searchResultItemCount) {\n                                $.getJSON(\"https://www.omdbapi.com/?\", {\n                                    apikey: apiUrls[0].apiForInfo.apikey,\n                                    i: value.imdbID\n                                }, function (movieData) {\n                                    if (movieData) {\n                                        if (movieData.Poster != \"N/A\") {\n                                            item.find('[data-item-bind=item-img] img').attr({\n                                                title: movieData.Title,\n                                                alt: movieData.Title,\n                                                src: movieData.Poster\n                                            }).removeClass('pad100');\n                                            item.find('[data-item-bind=item-img] source').attr({\n                                                srcset: movieData.Poster,\n                                            });\n                                        } else {\n                                            item.find('[data-item-bind=item-img] img').attr({\n                                                title: movieData.Title,\n                                                alt: movieData.Title,\n                                                src: \"/loading.gif\"\n                                            }).addClass('pad100');\n                                            item.find('[data-item-bind=item-img] source').attr({\n                                                srcset: \"/loading.gif\",\n                                            });\n                                        }\n                                        item.find('[data-item-bind=item-name]').html(movieData.Title + \" \" + movieData.Year)\n                                        item.find('[data-item-bind=item-imdb-point]').html(movieData.imdbRating)\n                                        item.find('[data-item-bind=item-imdb-level]').html(\"10\")\n                                        item.find('[data-item-bind=item-description]').html(\"Dil :\" + movieData.Language + \"</br>\" + \"Oyuncular :\" + movieData.Actors)\n                                        item.find('[data-item-bind=item-url]').attr('data-id', movieData.imdbID)\n                                        if (movieData.Poster != \"N/A\") {\n                                            item.find('[data-item-bind=item-description2]').html(movieData.Plot)\n                                        } else {\n                                            item.find('[data-item-bind=item-description2]').html(errorText.notDesc).addClass('red')\n                                        }\n                                        item.removeClass('d-none');\n                                        allHtmlText += item[0].outerHTML;\n                                    }\n                                    itemListBox.html(allHtmlText);\n                                    $('.search-result-area').append('<div class=\"load-more-area\"> <a class=\"load-more-btn\" data-js=\"load-more\"> DAHA FAZLA SONUÇ » </a> </div>');\n                                })\n                                count++;\n                            }\n                        });\n                    }\n                });\n            }\n        });\n    }, \n}\n\nsearchModule.init();\n\n//# sourceURL=webpack:///./app/src/js/Search.js?");

/***/ }),

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// ref: https://github.com/tc39/proposal-global\nvar getGlobal = function () {\n\t// the only reliable means to get the global object is\n\t// `Function('return this')()`\n\t// However, this causes CSP violations in Chrome apps.\n\tif (typeof self !== 'undefined') { return self; }\n\tif (typeof window !== 'undefined') { return window; }\n\tif (typeof global !== 'undefined') { return global; }\n\tthrow new Error('unable to locate global object');\n}\n\nvar global = getGlobal();\n\nmodule.exports = exports = global.fetch;\n\n// Needed for TypeScript and Webpack.\nexports.default = global.fetch.bind(global);\n\nexports.Headers = global.Headers;\nexports.Request = global.Request;\nexports.Response = global.Response;\n\n//# sourceURL=webpack:///./node_modules/node-fetch/browser.js?");

/***/ }),

/***/ 0:
/*!****************************************************************!*\
  !*** multi ./app/src/js/General.js ./app/src/css/General.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./app/src/js/General.js */\"./app/src/js/General.js\");\nmodule.exports = __webpack_require__(/*! ./app/src/css/General.scss */\"./app/src/css/General.scss\");\n\n\n//# sourceURL=webpack:///multi_./app/src/js/General.js_./app/src/css/General.scss?");

/***/ })

/******/ });