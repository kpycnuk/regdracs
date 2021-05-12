// !!! �������� ���� ���� ����� ���� �� � ���������� ���������
//-------------------------------------------------------------------------
// ==UserScript==
// @name     deactivate_itt_version_check_on_usr_minjust
// @namespace https://usr.minjust.gov.ua/
// @version  1
// @description ������� ��������� �������� ������ ITT ����������� �� ����� �������� �����
// @author       Kpyc
// @match       http*://*usr.minjust.gov.ua/*
// @run-at       document-start
// @grant    none
// ==/UserScript==

/*
    07.05.2021 ��������� ���������� �������� ������ ITT ����������� �� ����� ������� �� �������� �����.
    ����� ������ ����� ��, �� ����� ���������� �� ����� ������: ������ ������ ����� � ������ ��������� � �������, ��� ������
    ������������ ��������� "webpackJsonp". ������� ������� � ������� ��� � �������������� ����� ��������� �� ���.

    ����� �������, ��-����� ������ ��� �������, ������� �������: https://gist.github.com/MPThLee/3ccb554b9d882abc6313330e38e5dfaa
    ��������� ��� �������� ��� ��������� ������� � "Developer Menus" ��� ��������, �� ��������� ��� ���� ��������� �� ������� ��� ������ �� ����
*/

window.addEventListener ("load", execute);


function execute(){
   // console.log(window.webpackJsonp);

    if ( window != null && typeof window != "undefined") {
        deleteEUSignCPCheckVersion();
    }


}

function deleteEUSignCPCheckVersion() {
    const req = typeof(webpackJsonp) === "function" ? webpackJsonp([], {
        '__extra_id__': (module, exports, req) => exports.default = req
    }, ['__extra_id__']).default : webpackJsonp.push([[], {
        '__extra_id__': (module, exports, req) => module.exports = req
    }, [['__extra_id__']]]);

    delete req.m['__extra_id__'];
    delete req.c['__extra_id__'];
    const find = (filter) => {
        const cacheOnly = false;
        for (let i in req.c) {
            if (req.c.hasOwnProperty(i)) {
                let m = req.c[i].exports;
                if (m && m.__esModule && m.default && filter(m.default))
                    return m.default;
                if (m && filter(m))
                    return m;
            }
        }
        if (cacheOnly) {
            console.warn('Cannot find loaded module in cache');
            return null;
        }
        console.warn('Cannot find loaded module in cache. Loading all modules may have unexpected side effects');
        for (let i = 0; i < req.m.length; ++i) {
            try {
                let m = req(i);
                if (m && m.__esModule && m.default && filter(m.default))
                    return m.default;
                if (m && filter(m))
                    return m;
            }
            catch (e) {
            }
        }
        console.warn('Cannot find module');
        return null;
    };

    const findByUniqueProperties = (propNames) => find(module => propNames.every(prop => module[prop] !== undefined));
    if (findByUniqueProperties(["EUSignCP"]).EUSignCP.prototype._checkVersion) {
        // �������� �������
        findByUniqueProperties(["EUSignCP"]).EUSignCP.prototype._checkVersion = (n) => {return !0}
        console.log("�������! (Kpyc)");
        return null
    } else {
        console.log("�������� �� ���������");
    }

    

}