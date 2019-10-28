window.device = false;
window.globalWidth = 0;
window.headerBody = 0;
var MainPath = window.location.href;
const fetch = require('node-fetch');

var general = function () { };
general.constructor = general;
//variable for General

general.jsonApplication = "application/json";
general.jsonContent = "json";
general.htmlApplication = "text/plain";
general.htmlContent = "text";

window.apiUrls = [
    {
        "apiForInfo": {
        "url": "https://www.omdbapi.com/?t=tt3896198&",
        "state": true,
        "searchKeyCount": 4,
        "searchResultItemCount": 2, 
        "apikey": "d61dc003",
            "url": {
                "urlKeys": [
                    {"search": "/", "status": "true"},
                    {"list": "list?key=", "status": "true"},
                ]
            }
        }
    }
];

window.errorText = {
    inputCharCount:"En az 3 karakter girişi yapmalısınız.",
    inputCharError: "Yanlış karakter kullandınız.",
    notData:"Aradığınız kelimelere göre arama sonucu yok.",
    notDesc:"There is no caption in this movie."
}

window.layoutModule = {
    init: function () {
        layoutModule.startSingleProcess();
        layoutModule.events();
        (function (w) {
            var user = layoutModule.setCookie("user_auth","true")
            var Path = MainPath;
            var pointers = {
                item: $('.item:first'),
                itemCount: $('.item').length,
            };
            w.$pointers = pointers;
        }(window));
    },
    events: function () {
        $(window).on('load', function(){
            layoutModule.deviceState();
        });
    },
    startSingleProcess: function () {
        //Call Functions
        layoutModule.iEVersionDetect();
        layoutModule.deviceState();
        $('iframe[name="google_conversion_frame"]').css('display', 'none');
    },
    deviceState: function () {
        if (window.innerWidth >= 320 && window.innerWidth <= 1024) {
            device = true;
            $('body').addClass('device');
        } else {
            device = false;
            $('body').removeClass('device');
        }
    },
    iEVersionDetect: function () {
        var userAgent = navigator.userAgent;

        if (userAgent.indexOf("MSIE 7.0") > 0) {
            document.all(1).className = document.all(1).className + " ie7";
        } else if (userAgent.indexOf("MSIE 8.0") > 0) {
            document.all(1).className = document.all(1).className + " ie8";
        } else if (userAgent.indexOf("MSIE 9.0") > 0) {
            $('html').addClass("ie9");
        } else if (userAgent.indexOf("MSIE 10.0") > 0) {
            $('html').addClass("ie10");
        } else if (userAgent.indexOf("rv:11.0") > 0) {
            $('html').addClass("ie11");
        }
    },
    scrollToItem: function (item) {
        $('html, body').animate({ scrollTop: $(item).offset().top - 200 }, "slow");
    },
    PageLoadingStart: function (itemListBoxBase,type) {
        layoutModule.PageLoadingStop(itemListBoxBase);
        var loader = '<div id="main-loading">' +
                        '<div class="loading-container">' +
                            '<div class="loader">' +
                                '<span class="svg-icon loader-icon">' +
                                    '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">'+
                                        '<path ng-attr-d="{{config.pathCmd}}" ng-attr-fill="{{config.color}}" stroke="none" d="M5 50A45 45 0 0 0 95 50A45 50 0 0 1 5 50" fill="#28292f" transform="rotate(130.647 50 52.5)">'+
                                            '<animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 52.5;360 50 52.5" keyTimes="0;1" dur="1.5s" begin="0s" repeatCount="indefinite"></animateTransform>'+
                                        '</path>'+
                                    '</svg>' +
                                '</span>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
        if (type=="append") {
             $(itemListBoxBase).append(loader);
        } else {
            $(itemListBoxBase).html(loader);
        }
    },
    PageLoadingStop: function (itemListBoxBase){
        if(itemListBoxBase) {
            $(itemListBoxBase).find('#main-loading').fadeIn().remove();
        }
    },
    setCookie: function (c_name, value, exdays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
        document.cookie = c_name + "=" + c_value;
    },
    getCookie: function (c_name) {
        var c_value = document.cookie;
        var c_start = c_value.indexOf(" " + c_name + "=");
        if (c_start == -1) {
            c_start = c_value.indexOf(c_name + "=");
        }
        if (c_start == -1) {
            c_value = null;
        } else {
            c_start = c_value.indexOf("=", c_start) + 1;
            var c_end = c_value.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = c_value.length;
            }
            c_value = unescape(c_value.substring(c_start, c_end));
        }
        return c_value;
    },
}

layoutModule.init();

var timerCookie = layoutModule.getCookie("user_auth");

import { List } from "./List.js";
import { Search } from "./Search.js";