//-------------------------------------------------------------------------
// ==UserScript==
// @name     deactivate_itt_version_check_on_regdracs
// @namespace https://regdracs.minjust.gov.ua/
// @version  1
// @description попытка отключить проверку версии ITT користувача на сайте ДРАЦС (предлагаемая версия 1.3.1.58 конфликтует с АРКАНом)
// @author       Kpyc
// @match       http*://*regdracs.minjust.gov.ua/*
// @run-at       document-start
// @grant    none
// ==/UserScript==

/*ТОЛЬКО в Firefoxe есть "ивент" который срабатывает ПЕРЕД выполнением скрипта страницы
используя его можно без проблем точечно заменить конкретную функцию.

Без этого ивента это тоже возможно, но нормально не срабатывает
*/ 

window.addEventListener ("beforescriptexecute", beforeScriptExecute);


function beforeScriptExecute(){
    if (typeof EUSignCP != "undefined") {
        EUSignCP.prototype._checkVersion = function(n) {
            return !0
        }
    }
}