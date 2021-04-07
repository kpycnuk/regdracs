//-------------------------------------------------------------------------
// ==UserScript==
// @name     deactivate_itt_version_check_on_regdracs
// @namespace https://regdracs.minjust.gov.ua/
// @version  1
// @description попытка отключить проверку версии ITT користувача на сайте ДРАЦС (предлагаемая версия 1.3.1.58 конфликтует с АРКАНом)
// @author       Kpyc
// @match       http*://*regdracs.minjust.gov.ua/
// @run-at       document-start
// @grant    none
// ==/UserScript==

window.addEventListener ("load", pageFullyLoaded);

// create object to store what to change
var URLtoReplace = {
    iit_agjs: true,
    iit_js: false,
    CssGFont: true
};

var newiit_agjs = "https://kpycnuk.github.io/regdracs/iit_agjs.js"; //The JS file to load in replacment od old JS file
var newiit_js = "https://kpycnuk.github.io/regdracs/iit_js.js"; //The JS file to load in replacment od old JS file
var newCssGFont = "https://fonts.googleapis.com/css?family=Open+Sans:400,300,600&amp;subset=latin,cyrillic";

// сгенерирую дополнительные символы для предотвращения кеширования скрипта
var appendToName = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
newiit_agjs = newiit_agjs.concat("?v=", appendToName);
newiit_js = newiit_js.concat("?v=", appendToName);

var iit_agjs = "/bundles/iit_agjs?v="; //The old JS file as it is named in inspect element (make sure its spelled EXACTLY the same)
var iit_js = "/bundles/iit_js?v="; //The old JS file as it is named in inspect element (make sure its spelled EXACTLY the same)
var CssGFont = "http://fonts.googleapis.com/css?family=Open+Sans:400,300,600&amp;subset=latin,cyrillic"

RegExp.escape = function(string) {
    return string.replace(/[-\/?+.]/g, '\\$&')
};

var iit_agjsPattern = new RegExp(RegExp.escape(iit_agjs), "i"); //Create the RegExp pattern with the /i switch to make it case-insensitive
var iit_jsPattern = new RegExp(RegExp.escape(iit_js), "i"); //Create the RegExp pattern with the /i switch to make it case-insensitive
var CssGFontPattern = new RegExp(RegExp.escape(CssGFont), "i");

function injectScript(originalPage) { //Function injectScript replaces the file
    console.log('Replace stage 2: Replace text matching', 'with');

    //Modify the HTML code that we got, replacing the old JS file with the new one
    var moddedPage = originalPage; 
    if (URLtoReplace.iit_agjs) {
        moddedPage = moddedPage.replace(iit_agjsPattern, newiit_agjs);
    } else if (URLtoReplace.iit_js) {
        moddedPage = moddedPage.replace(iit_jsPattern, newiit_js);
    } else if (URLtoReplace.CssGFont) {
        moddedPage = moddedPage.replace(CssGFontPattern, newCssGFont);
    }
    
    document.open();
    console.log('Replace stage 3: Write new HTML to page...');
    document.write(moddedPage); //Write to the page the new HTML code
    document.close();

    // не сработало
    //$("html").replaceWith(moddedPage);
}



function pageFullyLoaded () {
    console.log('Replace stage 1: target HTML');
    injectScript(document.documentElement.outerHTML); //Run function injectScript with the page's HTML as oldPage in the function

    
    setTimeout(function() {
                           var alertBlock = document.getElementsByClassName("formCustomAlert");
                           if (alertBlock.length > 0) {
                               // проверю, что в отображаемом сообщении  содержиться текст ошибки версии
                               let containText = alertBlock[0].textContent.includes(EndUserStrings.getString(EndUserStrings.WEB_LIBRARY_INSTALLED_VERSION_NOT_SUPPORTED));

                               if(containText) {
                                    // получу родительский элемент и удалю полностью блок
                                    var alertBlockParrent = alertBlock[0].parentNode;
                                    alertBlockParrent.remove();
                               }
                               
                           }
  }, 3000);

}
