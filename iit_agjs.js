function InheritObject(n, t) {
    n.prototype = Object.create(t.prototype);
    n.prototype.constructor = n
}
function IsEndUserTransferableObject(n) {
    return n == null || typeof n != "object" ? !1 : n.className != "EndUserTransferableObject" && n.parentClassName != "EndUserTransferableObject" ? !1 : !0
}
function EndUserException(n, t) {
    this.errorCode = n;
    this.message = t;
    this.toString = function() {
        return this.message + " (" + this.errorCode + ")"
    }
    ;
    this.GetErrorCode = function() {
        return this.errorCode
    }
    ;
    this.GetMessage = function() {
        return this.message
    }
}
var EU_SIGN_WEB_INSTALL_DOWNLOAD_URL = "https://iit.com.ua/download/productfiles", EU_SIGN_WEB_INSTALL_WIN = "EUSignWebInstall.exe", EU_SIGN_WEB_INSTALL_MAC = "EUSignWebInstall.pkg", EU_SIGN_WEB_INSTALL_LINUX_X32 = "euswi.deb", EU_SIGN_WEB_INSTALL_LINUX_X64 = "euswi.64.deb", EU_SIGN_WEB_INSTALL_LINUX_RPM_X32 = "euswi.rpm", EU_SIGN_WEB_INSTALL_LINUX_RPM_X64 = "euswi.64.rpm", EU_SIGN_WEB_INSTALL_LINUX_TAR_X32 = "euswi.tar", EU_SIGN_WEB_INSTALL_LINUX_TAR_X64 = "euswi.64.tar", EU_SIGN_WEB_INSTALL_UNIX_X32 = null, EU_SIGN_WEB_INSTALL_UNIX_X64 = null, EU_SIGN_WEB_INSTALL_ANDROID = "EUSignWebInstall.apk", EU_SIGN_WEB_UPDATE_WIN = "EUSignWebUpdate.exe", EU_SIGN_WEB_UPDATE_MAC = EU_SIGN_WEB_INSTALL_MAC, EU_SIGN_WEB_UPDATE_LINUX_X32 = EU_SIGN_WEB_INSTALL_LINUX_X32, EU_SIGN_WEB_UPDATE_LINUX_X64 = EU_SIGN_WEB_INSTALL_LINUX_X64, EU_SIGN_WEB_UPDATE_LINUX_RPM_X32 = EU_SIGN_WEB_INSTALL_LINUX_RPM_X32, EU_SIGN_WEB_UPDATE_LINUX_RPM_X64 = EU_SIGN_WEB_INSTALL_LINUX_RPM_X64, EU_SIGN_WEB_UPDATE_LINUX_TAR_X32 = EU_SIGN_WEB_INSTALL_LINUX_TAR_X32, EU_SIGN_WEB_UPDATE_LINUX_TAR_X64 = EU_SIGN_WEB_INSTALL_LINUX_TAR_X64, EU_SIGN_WEB_UPDATE_UNIX_X32 = EU_SIGN_WEB_INSTALL_UNIX_X32, EU_SIGN_WEB_UPDATE_UNIX_X64 = EU_SIGN_WEB_INSTALL_UNIX_X64, EU_SIGN_WEB_UPDATE_ANDROID = EU_SIGN_WEB_INSTALL_ANDROID, EU_SIGN_WEB_MANUAL_WIN = "EUSignWebOManual.pdf", EU_SIGN_WEB_MANUAL_MAC = "EUSignWebOManual.pdf", EU_SIGN_WEB_MANUAL_LINUX = "EUSignWebOManual.pdf", EU_SIGN_WEB_MANUAL_UNIX = null, EU_SIGN_CHROME_WEB_EXTENSION_INSTALL = "https://chrome.google.com/webstore/detail/%D1%96%D1%96%D1%82-%D0%BA%D0%BE%D1%80%D0%B8%D1%81%D1%82%D1%83%D0%B2%D0%B0%D1%87-%D1%86%D1%81%D0%BA-1-%D0%B1%D1%96%D0%B1%D0%BB/jffafkigfgmjafhpkoibhfefeaebmccg?utm_source=chrome-app-launcher-info-dialog", EU_SIGN_FIREFOX_WEB_EXTENSION_INSTALL = "https://eu.iit.com.ua/download/productfiles/eusw@iit.com.ua.xpi", EU_SIGN_OPERA_WEB_EXTENSION_INSTALL = EU_SIGN_CHROME_WEB_EXTENSION_INSTALL, EU_SIGN_APPLET_CODEBASE = "https://sign.eu.iit.com.ua", EU_SIGN_APPLET_CODE = "com.iit.certificateAuthority.endUser.libraries.signJava.EndUser.class", EU_SIGN_APPLET_NAME = "EUSignJava.jar", EU_SIGN_APPLET_VERSION = "1.3.102", EU_SIGN_APPLET_CHECK_JRE_URL = "https://www.java.com/ru/download/installed.jsp", EU_SIGN_APPLET_LOAD_DELAY = 100, EU_SIGN_APPLET_LOAD_WAITS = 1200, EU_SIGN_AGENT_DEFAULT_ADDRESS = "localhost", EU_SIGN_AGENT_DEFAULT_HTTP_POPT = "8081", EU_SIGN_AGENT_DEFAULT_HTTPS_POPT = "8083", EU_SIGN_WEB_EXTENSION_ADDRESS_CHROME = "chrome-extension://jffafkigfgmjafhpkoibhfefeaebmccg/", EU_SIGN_WEB_EXTENSION_ADDRESS_FIREFOX = "eusw@iit.com.ua", EU_SIGN_WEB_EXTENSION_ADDRESS = EU_SIGN_WEB_EXTENSION_ADDRESS_CHROME, EU_SIGN_WEB_NPAPI_ADDRESS = "application/x-eusign-cp", EU_SIGN_WEB_NPAPI_LOAD_DELAY = 100, EU_SIGN_WEB_NPAPI_LOAD_WAITS = 50, EU_SIGN_WEB_ACTIVE_X_ADDRESS = "clsid:B7E24C75-E343-4DA2-A8D3-C80970FB7D7B", EU_SIGN_WEB_ACTIVE_X_LOAD_DELAY = 100, EU_SIGN_WEB_ACTIVE_X_LOAD_WAITS = 50, EU_SIGN_WEB_MONITOR_STATUS_INTERVAL = 6e5, EU_SIGN_CP_IFACE_VERSION = "1.3.56", EU_SIGN_CP_ENCODING_UTF_8 = "UTF-8", EU_SIGN_CP_ENCODING_UTF_16_LE = "UTF-16LE", EU_SIGN_CP_ENCODING_CP1251 = "windows-1251", EndUserUTF8Coder = function() {
    this.vendor = "JSC IIT";
    this.classVersion = 1;
    this.className = "EndUserUTF8Coder"
}, EndUserUTF16LECoder, EndUserCP1251Coder, EndUserStringCoder, EndUserDateCoder, EndUserBase64Coder, eu_wait, EndUserBrowserInfo, EndUserUint8Array, EndUserTransferableObject, EndUserByteArray, EndUserKeyMedia, EndUserFileStoreSettings, EndUserProxySettings, EndUserTSPSettings, EndUserOCSPSettings, EndUserLDAPSettings, EndUserCMPSettings, EndUserModeSettings, EndUserOCSPAccessInfoModeSettings, EndUserOCSPAccessInfoSettings, EndUserKeyMediaSettings, EndUserOwnerInfo, EndUserTimeInfo, EndUserSignInfo, EndUserSenderInfo, EndUserCertificateInfo, EndUserCertificateInfoEx, EndUserCertificate, EndUserCRLInfo, EndUserCRLDetailedInfo, EndUserPrivateKeyInfo, EndUserJKSPrivateKey, EndUserRequestInfo, EndUserInfo, EndUserParams, EndUserOperationContext, EndUserSession, EndUserSCClientStatistic, EndUserDeviceContext, EndUserTransportHeader, EndUserCryptoHeader, EndUserContext, EndUserHashContext, EndUserPrivateKeyContext, EndUserError, EndUserStrings, EndUserLibraryLoader;
EndUserUTF8Coder.prototype.encode = function(n) {
    for (var i = [], r = 0, t, u = 0; u < n.length; u++)
        t = n.charCodeAt(u),
        t < 128 ? i[r++] = t : t < 2048 ? (i[r++] = t >> 6 | 192,
        i[r++] = t & 63 | 128) : (i[r++] = t >> 12 | 224,
        i[r++] = t >> 6 & 63 | 128,
        i[r++] = t & 63 | 128);
    return i
};
EndUserUTF8Coder.prototype.decode = function(n) {
    for (var r = [], i = 0, f = 0, t, u, e; i < n.length; )
        t = n[i++],
        t < 128 ? r[f++] = String.fromCharCode(t) : t > 191 && t < 224 ? (u = n[i++],
        r[f++] = String.fromCharCode((t & 31) << 6 | u & 63)) : (u = n[i++],
        e = n[i++],
        r[f++] = String.fromCharCode((t & 15) << 12 | (u & 63) << 6 | e & 63));
    return r.join("")
};
EndUserUTF16LECoder = function() {
    this.vendor = "JSC IIT";
    this.classVersion = 1;
    this.className = "EndUserUTF16LECoder"
};
EndUserUTF16LECoder.prototype.encode = function(n) {
    for (var i = [], r, t = 0; t < n.length; t++)
        r = n.charCodeAt(t),
        i.push(r & 255),
        i.push((r & 65280) >> 8);
    return i
};
EndUserUTF16LECoder.prototype.decode = function(n) {
    var i = 0, r = "", t;
    if (n.length % 2 != 0)
        return null;
    for (t = n.length,
    t > 0 && n[t - 2] == 0 && n[t - 1] == 0 && (t -= 2); i < t; )
        r += String.fromCharCode(n[i] | n[i + 1] << 8),
        i += 2;
    return r
};
EndUserCP1251Coder = function() {
    this.vendor = "JSC IIT";
    this.classVersion = 1;
    this.className = "EndUserCP1251Coder";
    this.m_cp1251_table = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        11: 11,
        12: 12,
        13: 13,
        14: 14,
        15: 15,
        16: 16,
        17: 17,
        18: 18,
        19: 19,
        20: 20,
        21: 21,
        22: 22,
        23: 23,
        24: 24,
        25: 25,
        26: 26,
        27: 27,
        28: 28,
        29: 29,
        30: 30,
        31: 31,
        32: 32,
        33: 33,
        34: 34,
        35: 35,
        36: 36,
        37: 37,
        38: 38,
        39: 39,
        40: 40,
        41: 41,
        42: 42,
        43: 43,
        44: 44,
        45: 45,
        46: 46,
        47: 47,
        48: 48,
        49: 49,
        50: 50,
        51: 51,
        52: 52,
        53: 53,
        54: 54,
        55: 55,
        56: 56,
        57: 57,
        58: 58,
        59: 59,
        60: 60,
        61: 61,
        62: 62,
        63: 63,
        64: 64,
        65: 65,
        66: 66,
        67: 67,
        68: 68,
        69: 69,
        70: 70,
        71: 71,
        72: 72,
        73: 73,
        74: 74,
        75: 75,
        76: 76,
        77: 77,
        78: 78,
        79: 79,
        80: 80,
        81: 81,
        82: 82,
        83: 83,
        84: 84,
        85: 85,
        86: 86,
        87: 87,
        88: 88,
        89: 89,
        90: 90,
        91: 91,
        92: 92,
        93: 93,
        94: 94,
        95: 95,
        96: 96,
        97: 97,
        98: 98,
        99: 99,
        100: 100,
        101: 101,
        102: 102,
        103: 103,
        104: 104,
        105: 105,
        106: 106,
        107: 107,
        108: 108,
        109: 109,
        110: 110,
        111: 111,
        112: 112,
        113: 113,
        114: 114,
        115: 115,
        116: 116,
        117: 117,
        118: 118,
        119: 119,
        120: 120,
        121: 121,
        122: 122,
        123: 123,
        124: 124,
        125: 125,
        126: 126,
        127: 127,
        1027: 129,
        8225: 135,
        1046: 198,
        8222: 132,
        1047: 199,
        1168: 165,
        1048: 200,
        1113: 154,
        1049: 201,
        1045: 197,
        1050: 202,
        1028: 170,
        160: 160,
        1040: 192,
        1051: 203,
        164: 164,
        166: 166,
        167: 167,
        169: 169,
        171: 171,
        172: 172,
        173: 173,
        174: 174,
        1053: 205,
        176: 176,
        177: 177,
        1114: 156,
        181: 181,
        182: 182,
        183: 183,
        8221: 148,
        187: 187,
        1029: 189,
        1056: 208,
        1057: 209,
        1058: 210,
        8364: 136,
        1112: 188,
        1115: 158,
        1059: 211,
        1060: 212,
        1030: 178,
        1061: 213,
        1062: 214,
        1063: 215,
        1116: 157,
        1064: 216,
        1065: 217,
        1031: 175,
        1066: 218,
        1067: 219,
        1068: 220,
        1069: 221,
        1070: 222,
        1032: 163,
        8226: 149,
        1071: 223,
        1072: 224,
        8482: 153,
        1073: 225,
        8240: 137,
        1118: 162,
        1074: 226,
        1110: 179,
        8230: 133,
        1075: 227,
        1033: 138,
        1076: 228,
        1077: 229,
        8211: 150,
        1078: 230,
        1119: 159,
        1079: 231,
        1042: 194,
        1080: 232,
        1034: 140,
        1025: 168,
        1081: 233,
        1082: 234,
        8212: 151,
        1083: 235,
        1169: 180,
        1084: 236,
        1052: 204,
        1085: 237,
        1035: 142,
        1086: 238,
        1087: 239,
        1088: 240,
        1089: 241,
        1090: 242,
        1036: 141,
        1041: 193,
        1091: 243,
        1092: 244,
        8224: 134,
        1093: 245,
        8470: 185,
        1094: 246,
        1054: 206,
        1095: 247,
        1096: 248,
        8249: 139,
        1097: 249,
        1098: 250,
        1044: 196,
        1099: 251,
        1111: 191,
        1055: 207,
        1100: 252,
        1038: 161,
        8220: 147,
        1101: 253,
        8250: 155,
        1102: 254,
        8216: 145,
        1103: 255,
        1043: 195,
        1105: 184,
        1039: 143,
        1026: 128,
        1106: 144,
        8218: 130,
        1107: 131,
        8217: 146,
        1108: 186,
        1109: 190
    };
    this.m_ut8_table = unescape("%u0402%u0403%u201A%u0453%u201E%u2026%u2020%u2021%u20AC%u2030%u0409%u2039%u040A%u040C%u040B%u040F%u0452%u2018%u2019%u201C%u201D%u2022%u2013%u2014%u0000%u2122%u0459%u203A%u045A%u045C%u045B%u045F%u00A0%u040E%u045E%u0408%u00A4%u0490%u00A6%u00A7%u0401%u00A9%u0404%u00AB%u00AC%u00AD%u00AE%u0407%u00B0%u00B1%u0406%u0456%u0491%u00B5%u00B6%u00B7%u0451%u2116%u0454%u00BB%u0458%u0405%u0455%u0457")
};
EndUserCP1251Coder.prototype.encode = function(n) {
    for (var r = [], i, t = 0; t < n.length; t++) {
        if (i = n.charCodeAt(t),
        !(i in this.m_cp1251_table))
            throw "Character " + n.charAt(t) + " isn't supported by win1251!";
        r.push(this.m_cp1251_table[i])
    }
    return r
};
EndUserCP1251Coder.prototype.decode = function(n) {
    for (var t, r = "", i = 0; i < n.length; i++)
        t = n[i],
        r += t >= 192 && t <= 255 ? String.fromCharCode(t - -848) : t >= 128 && t <= 191 ? this.m_ut8_table.charAt(t - 128) : String.fromCharCode(t);
    return r
};
EndUserStringCoder = {};
EndUserStringCoder.GetCoder = function(n) {
    n = n.toUpperCase();
    switch (n) {
    case EU_SIGN_CP_ENCODING_UTF_8:
        return new EndUserUTF8Coder;
    case EU_SIGN_CP_ENCODING_UTF_16_LE:
        return new EndUserUTF16LECoder;
    case EU_SIGN_CP_ENCODING_CP1251:
        return new EndUserCP1251Coder;
    default:
        return null
    }
};
EndUserStringCoder.ArrayToString = function(n, t) {
    var i, r, u;
    if (typeof n == "undefined" && (n = EU_SIGN_CP_ENCODING_UTF_8),
    i = EndUserStringCoder.GetCoder(n),
    i == null) {
        r = EndUserError.ERROR_BAD_PARAMETER;
        u = EndUserError.getErrorDescriptionEx(r, 0);
        throw new EndUserException(r,u);
    }
    return i.decode(t)
};
EndUserDateCoder = function() {
    this.vendor = "JSC IIT";
    this.classVersion = 1;
    this.className = "EndUserDateCoder";
    this.dateDelimeter = ".";
    this.timeDelimeter = ":";
    this.dateTimeDelimeter = " ";
    this.format = "dd.MM.yyyy HH:mm:ss"
};
EndUserDateCoder.prototype.encode = function(n) {
    var t = n.getDate()
      , i = n.getMonth() + 1
      , r = n.getFullYear()
      , u = n.getHours()
      , f = n.getMinutes()
      , e = n.getSeconds();
    return t + this.dateDelimeter + i + this.dateDelimeter + r + this.dateTimeDelimeter + u + this.timeDelimeter + f + this.timeDelimeter + e
};
EndUserDateCoder.prototype.decode = function(n) {
    var t;
    try {
        var h = n.split(this.dateTimeDelimeter)
          , i = h[0].split(this.dateDelimeter)
          , r = h[1].split(this.timeDelimeter)
          , u = parseInt(i[0])
          , f = parseInt(i[1]) - 1
          , c = parseInt(i[2]);
        if (u < 0 || u > 31 || f < 0 || f > 12 || c < 0)
            return null;
        var e = parseInt(r[0])
          , o = parseInt(r[1])
          , s = parseInt(r[2]);
        return e < 0 || e > 23 || o < 0 || o > 59 || s < 0 || s > 59 ? null : (t = new Date,
        t.setDate(u),
        t.setMonth(f),
        t.setFullYear(c),
        t.setHours(e),
        t.setMinutes(o),
        t.setSeconds(s),
        t)
    } catch (l) {
        return null
    }
};
EndUserBase64Coder = function() {
    this.vendor = "JSC IIT";
    this.classVersion = 1;
    this.className = "EndUserBase64Coder";
    this.m_map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    this.m_codes = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47]
};
EndUserBase64Coder.prototype._getTextDecoder = function() {
    try {
        if (typeof TextDecoder == "undefined")
            return null;
        var n = new TextDecoder("utf-8");
        return n.encoding != "utf-8" ? null : n
    } catch (t) {
        return null
    }
};
EndUserBase64Coder.prototype._encodePart = function(n, t, i) {
    for (var f = [], u, e, r = t; r < i; r += 3)
        u = n[r] << 16 | n[r + 1] << 8 | n[r + 2],
        e = this.m_map[u >> 18 & 63] + this.m_map[u >> 12 & 63] + this.m_map[u >> 6 & 63] + this.m_map[u & 63],
        f.push(e);
    return f.join("")
};
EndUserBase64Coder.prototype.encode = function(n) {
    var f, r, u, i, e, c = "", t, l;
    if (f = typeof Uint8Array == "undefined" ? typeof EndUserUint8Array == "undefined" ? n.slice(0) : new EndUserUint8Array(n) : new Uint8Array(n),
    e = f.length,
    e == 0)
        return "";
    if (l = this._getTextDecoder(),
    l != null) {
        for (t = new Uint8Array(parseInt((e + 2) / 3) * 4),
        r = 0,
        u = 0; r < e - e % 3; r += 3,
        u += 4)
            i = f[r] << 16 | f[r + 1] << 8 | f[r + 2],
            t[u] = this.m_codes[i >> 18 & 63],
            t[u + 1] = this.m_codes[i >> 12 & 63],
            t[u + 2] = this.m_codes[i >> 6 & 63],
            t[u + 3] = this.m_codes[i & 63];
        switch (e % 3) {
        case 1:
            i = f[r] << 16;
            t[u] = this.m_codes[i >> 18 & 63];
            t[u + 1] = this.m_codes[i >> 12 & 63];
            t[u + 2] = 61;
            t[u + 3] = 61;
            break;
        case 2:
            i = f[r] << 16 | f[r + 1] << 8;
            t[u] = this.m_codes[i >> 18 & 63];
            t[u + 1] = this.m_codes[i >> 12 & 63];
            t[u + 2] = this.m_codes[i >> 6 & 63];
            t[u + 3] = 61
        }
        c = l.decode(t)
    } else {
        var h = null, s = 15360, a = e - e % 3, v = parseInt(a / s), o;
        for (t = [],
        r = 0; r < v; r++)
            h = this._encodePart(f, r * s, r * s + s),
            t.push(h);
        v * s < a && (h = this._encodePart(f, r * s, a),
        t.push(h));
        switch (e % 3) {
        case 1:
            i = f[e - 1] << 16;
            o = this.m_map[i >> 18 & 63];
            o += this.m_map[i >> 12 & 63];
            o += "=";
            o += "=";
            t.push(o);
            break;
        case 2:
            i = f[e - 2] << 16 | f[e - 1] << 8;
            o = this.m_map[i >> 18 & 63];
            o += this.m_map[i >> 12 & 63];
            o += this.m_map[i >> 6 & 63];
            o += "=";
            t.push(o)
        }
        c = t.join("")
    }
    return c
};
EndUserBase64Coder.prototype.decode = function(n) {
    var i, h, c, t, u, e, s, f, r, o, l;
    if (n == "" || (n.length & 3) > 0)
        return typeof Uint8Array == "undefined" ? typeof EndUserUint8Array == "undefined" ? [] : new EndUserUint8Array(0) : new Uint8Array(0);
    for (e = n.length,
    s = n[e - 1] == "=" ? n[e - 2] == "=" ? 2 : 1 : 0,
    h = e / 4 * 3 - s,
    i = typeof Uint8Array == "undefined" ? typeof EndUserUint8Array == "undefined" ? [] : new EndUserUint8Array(h) : new Uint8Array(h),
    c = 0,
    t = 0,
    u = 0; c < Math.floor((e - s) / 4); c++)
        f = this.m_map.indexOf(n[t++]),
        r = this.m_map.indexOf(n[t++]),
        o = this.m_map.indexOf(n[t++]),
        l = this.m_map.indexOf(n[t++]),
        i[u++] = f << 2 | r >> 4,
        i[u++] = (r & 15) << 4 | o >> 2,
        i[u++] = (o & 3) << 6 | l & 63;
    switch (s) {
    case 2:
        f = this.m_map.indexOf(n[t]);
        r = this.m_map.indexOf(n[t + 1]);
        i[u++] = f << 2 | r >> 4;
        break;
    case 1:
        f = this.m_map.indexOf(n[t]);
        r = this.m_map.indexOf(n[t + 1]);
        o = this.m_map.indexOf(n[t + 2]);
        i[u++] = f << 2 | r >> 4;
        i[u++] = (r & 15) << 4 | o >> 2
    }
    return i
};
eu_wait = function(n) {
    return new function() {
        var t = this
          , i = function() {
            var n;
            t.deferred.length && (n = [].slice.call(arguments),
            n.unshift(i),
            t.deferred[0].apply(t, n),
            t.deferred.shift())
        };
        this.deferred = [];
        this.eu_wait = function(n) {
            return this.deferred.push(n),
            t
        }
        ;
        n(i)
    }
};
EndUserBrowserInfo = function() {
    var n = this._getBrowserInfo();
    this.m_name = n.name;
    this.m_version = n.version;
    this.m_arch = this._getArch();
    this.m_os_name = this._getOSName()
};
EndUserBrowserInfo.BROWSER_NAME_IE = "IE";
EndUserBrowserInfo.BROWSER_NAME_OPERA = "Opera";
EndUserBrowserInfo.BROWSER_NAME_CHROME = "Chrome";
EndUserBrowserInfo.BROWSER_NAME_FIREFOX = "Firefox";
EndUserBrowserInfo.BROWSER_NAME_SAFARI = "Safari";
EndUserBrowserInfo.BROWSER_NAME_EDGE = "Edge";
EndUserBrowserInfo.BROWSER_NAME_UNKNOWN = "Unknown";
EndUserBrowserInfo.OS_NAME_WINDOWS = "Windows";
EndUserBrowserInfo.OS_NAME_LINUX = "Linux";
EndUserBrowserInfo.OS_NAME_UNIX = "Unix";
EndUserBrowserInfo.OS_NAME_MAC = "Mac OS X";
EndUserBrowserInfo.OS_NAME_ANDROID = "Android";
EndUserBrowserInfo.OS_NAME_UNKNOWN = "Unknown";
EndUserBrowserInfo.BROWSER_ARCH_NAME_X86 = "x86";
EndUserBrowserInfo.BROWSER_ARCH_NAME_X64 = "x64";
EndUserBrowserInfo.BROWSER_ARCH_NAME_ARM = "arm";
EndUserBrowserInfo.BROWSER_ARCH_NAME_UNKNOWN = "Unknown";
EndUserBrowserInfo.prototype._getBrowserInfo = function() {
    var t = {
        name: EndUserBrowserInfo.BROWSER_NAME_UNKNOWN,
        version: ""
    }, r = navigator.userAgent, i, n = r.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    return /msie/i.test(n[1]) || /trident/i.test(n[1]) ? (t.name = EndUserBrowserInfo.BROWSER_NAME_IE,
    /msie/i.test(n[1]) ? t.version = parseInt(n[2]) : (i = /\brv[ :]+(\d+)/g.exec(r) || [],
    t.version = parseInt(i[1])),
    t) : n[1] === "Chrome" && (i = r.match(/\b(OPR|Edge)\/(\d+)/),
    i != null) ? (t.name = i[1].replace("OPR", EndUserBrowserInfo.BROWSER_NAME_OPERA),
    t.version = parseInt(i[2]),
    t) : (n = n[2] ? [n[1], n[2]] : [navigator.appName, navigator.appVersion, "-?"],
    (i = r.match(/version\/(\d+)/i)) != null && n.splice(1, 1, i[1]),
    t.name = n[0],
    t.version = parseInt(n[1]),
    t)
};
EndUserBrowserInfo.prototype._getOSName = function() {
    var n = navigator.platform || ""
      , t = (navigator.userAgent || "").toLowerCase();
    return n.indexOf("Win") != -1 ? EndUserBrowserInfo.OS_NAME_WINDOWS : n.indexOf("Mac") != -1 ? EndUserBrowserInfo.OS_NAME_MAC : n.indexOf("Android") != -1 || t.indexOf("android") != -1 ? EndUserBrowserInfo.OS_NAME_ANDROID : n.indexOf("Linux") != -1 ? EndUserBrowserInfo.OS_NAME_LINUX : n.indexOf("FreeBSD") != -1 ? EndUserBrowserInfo.OS_NAME_UNIX : EndUserBrowserInfo.OS_NAME_UNKNOWN
};
EndUserBrowserInfo.prototype._getArch = function() {
    var i = this, t = navigator.platform || "", r = i._getOSName(), n;
    switch (r) {
    case EndUserBrowserInfo.OS_NAME_WINDOWS:
        n = t.indexOf("Win32") != -1 ? EndUserBrowserInfo.BROWSER_ARCH_NAME_X86 : EndUserBrowserInfo.BROWSER_ARCH_NAME_X64;
        break;
    case EndUserBrowserInfo.OS_NAME_MAC:
        n = t.indexOf("MacIntel") != -1 ? EndUserBrowserInfo.BROWSER_ARCH_NAME_X86 : EndUserBrowserInfo.BROWSER_ARCH_NAME_X64;
        break;
    case EndUserBrowserInfo.OS_NAME_UNIX:
    case EndUserBrowserInfo.OS_NAME_LINUX:
    case EndUserBrowserInfo.OS_NAME_ANDROID:
        n = t.indexOf("armv") != -1 ? EndUserBrowserInfo.BROWSER_ARCH_NAME_ARM : t.indexOf("x86_64") != -1 ? EndUserBrowserInfo.BROWSER_ARCH_NAME_X64 : EndUserBrowserInfo.BROWSER_ARCH_NAME_X32;
        break;
    default:
        n = EndUserBrowserInfo.BROWSER_ARCH_NAME_UNKNOWN
    }
    return n
};
EndUserBrowserInfo.prototype.GetName = function() {
    return this.m_name
};
EndUserBrowserInfo.prototype.GetVersion = function() {
    return this.m_version
};
EndUserBrowserInfo.prototype.GetArch = function() {
    return this.m_arch
};
EndUserBrowserInfo.prototype.GetOSName = function() {
    return this.m_os_name
};
var JSON_RPC_FIELD_NAME_VERSION = "jsonrpc"
  , JSON_RPC_FIELD_NAME_ID = "id"
  , JSON_RPC_FIELD_NAME_METHOD = "method"
  , JSON_RPC_FIELD_NAME_PARAMS = "params"
  , JSON_RPC_FIELD_NAME_RESULT = "result"
  , JSON_RPC_FIELD_NAME_ERROR = "error"
  , JSON_RPC_FIELD_NAME_ERROR_CODE = "code"
  , JSON_RPC_FIELD_NAME_ERROR_MSG = "message"
  , JSON_RPC_FIELD_NAME_SESSION_ID = "session_id"
  , JSON_RPC_FIELD_VALUE_VERSION = "2.0"
  , JSON_RPC_HTTP_HEADER_CONTENT_TYPE = "application/json-rpc"
  , JSON_RPC_ERROR_NONE = 0
  , JSON_RPC_ERROR_UNKNOWN = -1
  , JSON_RPC_ERROR_TRANSPORT_ERROR = -32300
  , JSON_RPC_ERROR_SYSTEM_ERROR = -32400
  , JSON_RPC_ERROR_APPLICATION_ERROR = -32500
  , JSON_RPC_ERROR_INVALID_SESSION = -32510
  , JSON_RPC_ERROR_INVALID_REQUEST = -32600
  , JSON_RPC_ERROR_REQUESTED_METHOD_NOT_FOUND = -32601
  , JSON_RPC_ERROR_INVALID_METHOD_PARAMS = -32602
  , JSON_RPC_ERROR_INTERNAL_RPC_ERROR = -32603
  , JSON_RPC_ERROR_PARSE = -32700
  , JSON_RPC_ERROR_UNSUPPORTED_ENCODING = -32701
  , JSON_RPC_ERROR_INVALID_ENCODING = -32702
  , JSON_RPC_ERRORS_STRINGS = [];
JSON_RPC_ERRORS_STRINGS[JSON_RPC_ERROR_NONE] = "Executed successfully";
JSON_RPC_ERRORS_STRINGS[JSON_RPC_ERROR_UNKNOWN] = "Unknown error";
JSON_RPC_ERRORS_STRINGS[JSON_RPC_ERROR_TRANSPORT_ERROR] = "Transport error";
JSON_RPC_ERRORS_STRINGS[JSON_RPC_ERROR_SYSTEM_ERROR] = "System error";
JSON_RPC_ERRORS_STRINGS[JSON_RPC_ERROR_APPLICATION_ERROR] = "Application error";
JSON_RPC_ERRORS_STRINGS[JSON_RPC_ERROR_INVALID_SESSION] = "Application error. Invalid session";
JSON_RPC_ERRORS_STRINGS[JSON_RPC_ERROR_INVALID_REQUEST] = "Server error. Invalid rpc. Not conforming to spec";
JSON_RPC_ERRORS_STRINGS[JSON_RPC_ERROR_REQUESTED_METHOD_NOT_FOUND] = "Server error. Requested method not found";
JSON_RPC_ERRORS_STRINGS[JSON_RPC_ERROR_INVALID_METHOD_PARAMS] = "Server error. Invalid method parameters";
JSON_RPC_ERRORS_STRINGS[JSON_RPC_ERROR_INTERNAL_RPC_ERROR] = "Server error. Internal rpc error";
JSON_RPC_ERRORS_STRINGS[JSON_RPC_ERROR_PARSE] = "Parse error. Not well formed";
JSON_RPC_ERRORS_STRINGS[JSON_RPC_ERROR_UNSUPPORTED_ENCODING] = "Parse error. Unsupported encoding";
JSON_RPC_ERRORS_STRINGS[JSON_RPC_ERROR_INVALID_ENCODING] = "Parse error. Invalid character for encoding";
var JSON_RPC_CLIENT_TYPE_SIGN_AGENT = 1
  , JSON_RPC_CLIENT_TYPE_WEB_EXTENSION = 2
  , JSON_RPC_CLIENT_TYPE_NPAPI = 3
  , JSON_RPC_CLIENT_TYPE_ACTIVE_X = 4
  , JSONRPCClient = function(n, t, i, r) {
    this.Vendor = "JSC IIT";
    this.ClassVersion = "1.0.2";
    this.ClassName = "JSONRPCClient";
    this.m_type = n;
    this.m_log = !1;
    this._logFunction("Initialize", arguments, ["type", "address", "port", "useHttps"]);
    switch (n) {
    case JSON_RPC_CLIENT_TYPE_WEB_EXTENSION:
        this.m_uri = t;
        this.m_callbacks = [];
        this._registerOnExtensionRecieveEventHandler();
        break;
    case JSON_RPC_CLIENT_TYPE_NPAPI:
    case JSON_RPC_CLIENT_TYPE_ACTIVE_X:
        this.m_uri = t;
        this.m_callbacks = [];
        break;
    case JSON_RPC_CLIENT_TYPE_SIGN_AGENT:
    default:
        this.m_uri = "";
        r && t.indexOf("https://") ? this.m_uri += "https://" : t.indexOf("http://") != 0 && (this.m_uri += "http://");
        this.m_uri += t + ":" + i
    }
    this.m_requests = 0;
    this.m_session_id = this._loadSessionId()
};
JSONRPCClient.prototype._logFunction = function(n, t, i) {
    var u, r;
    if (this.m_log) {
        for (u = "(",
        r = 0; r < t.length; r++)
            u += i[r] + ": " + t[r].toString(),
            r != t.length - 1 && (u += ", ");
        u += ")";
        this._log(n, u)
    }
};
JSONRPCClient.prototype._log = function(n, t) {
    this.m_log && console.log(n + ": " + t)
};
JSONRPCClient.prototype._loadSessionId = function() {
    try {
        var n = sessionStorage.getItem(this.ClassName + JSON_RPC_FIELD_NAME_SESSION_ID);
        return typeof n == "undefined" || n == null || n == "" ? null : n
    } catch (t) {
        return null
    }
};
JSONRPCClient.prototype._saveSessionId = function(n) {
    try {
        sessionStorage.setItem(this.ClassName + JSON_RPC_FIELD_NAME_SESSION_ID, n)
    } catch (t) {}
};
JSONRPCClient.prototype._removeSessionId = function() {
    try {
        sessionStorage.removeItem(this.ClassName + JSON_RPC_FIELD_NAME_SESSION_ID)
    } catch (n) {}
};
JSONRPCClient.prototype.createXMLHttpRequest = function() {
    return typeof XMLHttpRequest == "undefined" && (XMLHttpRequest = function() {
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0")
        } catch (n) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0")
        } catch (n) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP")
        } catch (n) {}
        try {
            return new ActiveXObject("Microsoft.XMLHTTP")
        } catch (n) {}
        throw JSON_RPC_ERRORS_STRINGS[JSON_RPC_ERROR_TRANSPORT_ERROR];
    }
    ),
    new XMLHttpRequest
};
JSONRPCClient.prototype.makeRequest = function(n, t, i) {
    var r = null;
    try {
        r = {};
        r[JSON_RPC_FIELD_NAME_VERSION] = JSON_RPC_FIELD_VALUE_VERSION;
        r[JSON_RPC_FIELD_NAME_ID] = i;
        r[JSON_RPC_FIELD_NAME_METHOD] = n;
        r[JSON_RPC_FIELD_NAME_PARAMS] = t;
        r[JSON_RPC_FIELD_NAME_SESSION_ID] = this.m_session_id;
        r = JSON.stringify(r)
    } catch (u) {}
    return r
};
JSONRPCClient.prototype.verifyResponse = function(n, t) {
    try {
        if (t[JSON_RPC_FIELD_NAME_VERSION] != JSON_RPC_FIELD_VALUE_VERSION)
            return !1;
        var i = t[JSON_RPC_FIELD_NAME_ERROR];
        if (typeof i == "undefined") {
            if (t[JSON_RPC_FIELD_NAME_ID] != n || typeof t[JSON_RPC_FIELD_NAME_RESULT] == "undefined")
                return !1
        } else if (typeof i[JSON_RPC_FIELD_NAME_ERROR_CODE] == "undefined" || typeof i[JSON_RPC_FIELD_NAME_ERROR_MSG] == "undefined" || i[JSON_RPC_FIELD_NAME_ERROR_CODE] != JSON_RPC_ERROR_NONE)
            return !1;
        if (typeof t[JSON_RPC_FIELD_NAME_SESSION_ID] != "undefined")
            if (this.m_session_id != null && t[JSON_RPC_FIELD_NAME_SESSION_ID] != null) {
                if (this.m_session_id != t[JSON_RPC_FIELD_NAME_SESSION_ID])
                    return !1
            } else
                this.m_session_id = t[JSON_RPC_FIELD_NAME_SESSION_ID],
                this._saveSessionId(this.m_session_id);
        return !0
    } catch (r) {
        return !1
    }
};
JSONRPCClient.prototype.handleResponse = function(n, t) {
    try {
        return (t = JSON.parse(t),
        !this.verifyResponse(n, t)) ? (this.m_session_id = null,
        this._removeSessionId(),
        null) : t
    } catch (i) {
        return null
    }
};
JSONRPCClient.prototype._sendHttp = function(n, t, i) {
    var r, u, f = this;
    try {
        return (r = this.createXMLHttpRequest(),
        r.open("POST", this.m_uri, i != null),
        r.setRequestHeader("Content-Type", JSON_RPC_HTTP_HEADER_CONTENT_TYPE),
        i != null && (r.onload = function() {
            if (r.status != 200) {
                i(null);
                return
            }
            if (u = f.handleResponse(t, r.response),
            u == null) {
                i(null);
                return
            }
            i(u[JSON_RPC_FIELD_NAME_RESULT]);
            return
        }
        ,
        r.onerror = function() {
            i(null)
        }
        ),
        r.send(n),
        i != null) ? void 0 : r.status != 200 ? null : (u = this.handleResponse(t, r.response),
        u == null) ? null : u[JSON_RPC_FIELD_NAME_RESULT]
    } catch (e) {
        if (i != null)
            i(null);
        else
            return null
    }
};
JSONRPCClient.prototype._registerOnExtensionRecieveEventHandler = function() {
    var n = this;
    window.addEventListener("message", function(t) {
        var r, i, u;
        if (t.data.sender == n.m_uri)
            try {
                if (r = t.data.callback_id,
                i = n.m_callbacks[r - 1],
                delete n.m_callbacks[r - 1],
                n._logFunction("_registerOnExtensionRecieveEventHandler", [i.request_id, t.data.data], ["request_id", "data"]),
                u = n.handleResponse(i.request_id, t.data.data),
                u == null) {
                    i.callback(null);
                    return
                }
                i.callback(u[JSON_RPC_FIELD_NAME_RESULT])
            } catch (f) {}
    }, !1)
};
JSONRPCClient.prototype._sendExtension = function(n, t, i) {
    var r = this;
    if (r._logFunction("_sendExtension", [arguments[0], arguments[1]], ["request", "request_id"]),
    !i)
        throw "Synchronous calls for web extensions not supported";
    if (document.getElementsByClassName(r.m_uri).length != 1) {
        i(null);
        return
    }
    try {
        var u = {
            request_id: t,
            callback: i
        }
          , f = r.m_callbacks.push(u)
          , e = {
            sender: r.ClassName,
            request: n,
            callback_id: f
        };
        window.postMessage(e, "*")
    } catch (o) {
        i(null)
    }
};
JSONRPCClient.prototype._getPluginObject = function() {
    var t, n, i;
    try {
        for (t = document.getElementsByTagName("object"),
        n = 0; n < t.length; n++)
            if (i = t[n].classid,
            !i && t[n].attributes && t[n].attributes.classid && (i = t[n].attributes.classid.value),
            i === this.m_uri)
                return t[n];
        return null
    } catch (r) {
        return null
    }
};
JSONRPCClient.prototype._sendPlugin = function(n, t, i) {
    var r, u = this, f, e;
    if (u._logFunction("_sendPlugin", [arguments[0], arguments[1]], ["request", "request_id"]),
    f = u._getPluginObject(),
    f == null)
        return i != null && i(null),
        null;
    e = function(n) {
        var e, i;
        try {
            for (var o = 5, s = new EndUserBase64Coder, t = new EndUserUint8Array(0); ; ) {
                var r = f.ProcessData(n)
                  , h = r.slice(0, o)
                  , u = r.slice(o, r.length - 1);
                (u != null || u != "") && (e = s.decode(u),
                i = new EndUserUint8Array(t.length + e.length),
                i.set(t),
                i.set(e, t.length),
                t = i);
                switch (h) {
                case '"part':
                    n = '"next"';
                    continue;
                case '"last':
                    return EndUserStringCoder.ArrayToString(EU_SIGN_CP_ENCODING_UTF_8, t);
                default:
                    return null
                }
            }
        } catch (c) {
            return null
        }
    }
    ;
    try {
        if (i != null) {
            setTimeout(function() {
                if (r = e(n),
                u._logFunction("_sendPlugin", [t, r], ["request_id", "response"]),
                r = u.handleResponse(t, r),
                r == null) {
                    i(null);
                    return
                }
                i(r[JSON_RPC_FIELD_NAME_RESULT])
            }, 1);
            return
        }
        return (r = e(n),
        r = u.handleResponse(t, r),
        r == null) ? null : r[JSON_RPC_FIELD_NAME_RESULT]
    } catch (o) {
        i(null)
    }
};
JSONRPCClient.prototype.send = function(n, t, i) {
    var r = this;
    switch (r.m_type) {
    case JSON_RPC_CLIENT_TYPE_SIGN_AGENT:
        return r._sendHttp(n, t, i);
    case JSON_RPC_CLIENT_TYPE_WEB_EXTENSION:
        return r._sendExtension(n, t, i);
    case JSON_RPC_CLIENT_TYPE_NPAPI:
    case JSON_RPC_CLIENT_TYPE_ACTIVE_X:
        return r._sendPlugin(n, t, i)
    }
};
JSONRPCClient.prototype.execute = function(n, t, i) {
    var r, u;
    if (r = this.m_requests,
    this.m_requests++,
    u = this.makeRequest(n, t, r),
    u == null) {
        if (i != null) {
            i(null);
            return
        }
        return null
    }
    if (i != null) {
        this.send(u, r, i);
        return
    }
    return this.send(u, r, i)
};
var EU_SIGN_CP_FIELD_NAME_CLASS_VERSION = "classVersion"
  , EU_SIGN_CP_FIELD_NAME_CLASS_NAME = "className"
  , EU_SIGN_CP_FIELD_NAME_CLASS_FIELDS = "classFields"
  , EndUserArrayList = function() {
    this.vendor = "JSC IIT";
    this.parentClassName = "Object";
    this.className = "EndUserArrayList";
    this.classVersion = 1;
    this.m_array = []
};
EndUserArrayList.prototype.add = function(n) {
    return this.m_array.push(n),
    !0
};
EndUserArrayList.prototype.clear = function() {
    this.m_array = []
};
EndUserArrayList.prototype.get = function(n) {
    return this.m_array[n]
};
EndUserArrayList.prototype.size = function() {
    return this.m_array.length
};
Object.create || (Object.create = function(n, t) {
    function i() {}
    if (typeof n != "object" && typeof n != "function" || n === null || typeof t != "undefined")
        throw new Error("Invalid arguments");
    return i.prototype = n,
    new i
}
);
Uint8Array.prototype.slice || (Uint8Array.prototype.slice = Uint8Array.prototype.subarray);
EndUserUint8Array = null;
EndUserUint8Array = typeof Uint8Array == "undefined" ? function(n) {
    var t, i;
    if (typeof n == "number")
        for (t = new Array(n),
        i = 0; i < n; ++i)
            t[i] = 0;
    else
        t = n.slice(0);
    return t.buffer = t,
    t.subarray = function(n, i) {
        return t.slice(n, i)
    }
    ,
    t.set = function(n, i) {
        arguments.length < 2 && (i = 0);
        for (var r = 0, u = n.length; r < u; ++r,
        ++i)
            t[i] = n[r] & 255
    }
    ,
    t.byteLength = t.length,
    typeof n == "object" && n.buffer && (t.buffer = n.buffer),
    t
}
: Uint8Array;
EndUserTransferableObject = function() {
    this.vendor = "JSC IIT";
    this.parentClassName = "Object";
    this.className = "EndUserTransferableObject";
    this.classVersion = 1;
    this.isFilled = !1;
    this.fields = {}
};
EndUserTransferableObject.makeTransferable = function(n) {
    InheritObject(n, EndUserTransferableObject);
    EndUserTransferableObject[(new n).className] = n
};
EndUserTransferableObject.prototype.base64Coder = new EndUserBase64Coder;
EndUserTransferableObject.prototype.dateCoder = new EndUserDateCoder;
EndUserTransferableObject.prototype.setClassInfo = function(n, t) {
    this.parentClassName = "EndUserTransferableObject";
    this.className = n;
    this.classVersion = t
};
EndUserTransferableObject.prototype.initializeFields = function() {
    for (var n in this.fields)
        switch (this.fields[n]) {
        case "boolean":
            this[n] = !1;
            break;
        case "int":
        case "long":
        case "number":
            this[n] = 0;
            break;
        case "string":
            this[n] = "";
            break;
        case "EndUserKeyMedia":
            this[n] = new EndUserKeyMedia;
            break;
        default:
            this[n] = null
        }
};
EndUserTransferableObject.prototype.set = function(n) {
    if (this.className != n.className)
        throw "invalid class";
    for (var t in this.fields)
        this[t] = n[t]
};
EndUserTransferableObject.prototype.encode = function() {
    var t, i, n;
    i = {};
    t = {};
    for (n in this.fields) {
        if (this[n] == null) {
            i[n] = null;
            continue
        }
        i[n] = IsEndUserTransferableObject(this[n]) ? this[n].encode() : this.fields[n] == "byteArray" ? this.base64Coder.encode(this[n]) : this.fields[n] == "time" ? this.dateCoder.encode(this[n]) : this[n]
    }
    return t[EU_SIGN_CP_FIELD_NAME_CLASS_NAME] = this.className,
    t[EU_SIGN_CP_FIELD_NAME_CLASS_VERSION] = this.classVersion,
    t[EU_SIGN_CP_FIELD_NAME_CLASS_FIELDS] = i,
    t
};
EndUserTransferableObject.prototype.decode = function(n) {
    var i, t, f, u, e, r;
    try {
        if (n[EU_SIGN_CP_FIELD_NAME_CLASS_VERSION] == null || n[EU_SIGN_CP_FIELD_NAME_CLASS_FIELDS] == null)
            return !1;
        i = n[EU_SIGN_CP_FIELD_NAME_CLASS_FIELDS];
        for (t in this.fields)
            if (this.fields[t] == "time")
                this[t] = this.dateCoder.decode(i[t]);
            else if (this.fields[t] == "EndUserOwnerInfo")
                this[t] = new EndUserOwnerInfo,
                this[t].decode(i[t]);
            else if (this.fields[t] == "EndUserTimeInfo")
                this[t] = new EndUserTimeInfo,
                this[t].decode(i[t]);
            else if (this.fields[t] == "EndUserKeyMedia")
                this[t] = new EndUserKeyMedia,
                this[t].decode(i[t]);
            else if (this.fields[t] == "EndUserCertificateInfoEx")
                this[t] = new EndUserCertificateInfoEx,
                this[t].decode(i[t]);
            else if (this.fields[t] == "byteArray")
                i[t] != null && (this[t] = this.base64Coder.decode(i[t]));
            else if (this.fields[t] == "array")
                for (this[t] = [],
                f = i[t],
                u = 0; u < f.length; u++)
                    if (e = f[u][EU_SIGN_CP_FIELD_NAME_CLASS_NAME],
                    r = new EndUserTransferableObject[e],
                    typeof r != "undefined") {
                        if (!r.decode(f[u]))
                            throw "invalid class";
                        r.className == "EndUserByteArray" && (r = r.GetData());
                        this[t].push(r)
                    } else
                        this[t].push(f[u]);
            else
                this[t] = i[t];
        return !0
    } catch (o) {
        return this.isFilled = !1,
        !1
    }
};
EndUserByteArray = function(n) {
    this.setClassInfo("EndUserByteArray", 1);
    this.fields = {
        data: "byteArray"
    };
    this.initializeFields();
    this.data = n
};
EndUserTransferableObject.makeTransferable(EndUserByteArray);
EndUserByteArray.prototype.GetData = function() {
    return this.data
};
EndUserByteArray.prototype.SetData = function(n) {
    this.data = n
};
EndUserKeyMedia = function() {
    this.setClassInfo("EndUserKeyMedia", 1);
    this.fields = {
        typeIndex: "long",
        devIndex: "long",
        password: "string"
    };
    this.initializeFields()
};
EndUserTransferableObject.makeTransferable(EndUserKeyMedia);
EndUserKeyMedia.prototype.GetTypeIndex = function() {
    return this.typeIndex
};
EndUserKeyMedia.prototype.SetTypeIndex = function(n) {
    this.typeIndex = n
};
EndUserKeyMedia.prototype.GetDevIndex = function() {
    return this.devIndex
};
EndUserKeyMedia.prototype.SetDevIndex = function(n) {
    this.devIndex = n
};
EndUserKeyMedia.prototype.GetPassword = function() {
    return this.password
};
EndUserKeyMedia.prototype.SetPassword = function(n) {
    this.password = n
};
EndUserFileStoreSettings = function() {
    this.setClassInfo("EndUserFileStoreSettings", 1);
    this.fields = {
        path: "string",
        checkCRLs: "boolean",
        autoRefresh: "boolean",
        ownCRLsOnly: "boolean",
        fullAndDeltaCRLs: "boolean",
        autoDownloadCRLs: "boolean",
        saveLoadedCerts: "boolean",
        expireTime: "long"
    };
    this.initializeFields();
    this.expireTime = 3600
};
EndUserTransferableObject.makeTransferable(EndUserFileStoreSettings);
EndUserFileStoreSettings.prototype.GetPath = function() {
    return this.path
};
EndUserFileStoreSettings.prototype.SetPath = function(n) {
    this.path = n
};
EndUserFileStoreSettings.prototype.GetCheckCRLs = function() {
    return this.checkCRLs
};
EndUserFileStoreSettings.prototype.SetCheckCRLs = function(n) {
    this.checkCRLs = n
};
EndUserFileStoreSettings.prototype.GetAutoRefresh = function() {
    return this.autoRefresh
};
EndUserFileStoreSettings.prototype.SetAutoRefresh = function(n) {
    this.autoRefresh = n
};
EndUserFileStoreSettings.prototype.GetOwnCRLsOnly = function() {
    return this.ownCRLsOnly
};
EndUserFileStoreSettings.prototype.SetOwnCRLsOnly = function(n) {
    this.ownCRLsOnly = n
};
EndUserFileStoreSettings.prototype.GetFullAndDeltaCRLs = function() {
    return this.fullAndDeltaCRLs
};
EndUserFileStoreSettings.prototype.SetFullAndDeltaCRLs = function(n) {
    this.fullAndDeltaCRLs = n
};
EndUserFileStoreSettings.prototype.GetAutoDownloadCRLs = function() {
    return this.autoDownloadCRLs
};
EndUserFileStoreSettings.prototype.SetAutoDownloadCRLs = function(n) {
    this.autoDownloadCRLs = n
};
EndUserFileStoreSettings.prototype.GetSaveLoadedCerts = function() {
    return this.saveLoadedCerts
};
EndUserFileStoreSettings.prototype.SetSaveLoadedCerts = function(n) {
    this.saveLoadedCerts = n
};
EndUserFileStoreSettings.prototype.GetExpireTime = function() {
    return this.expireTime
};
EndUserFileStoreSettings.prototype.SetExpireTime = function(n) {
    this.expireTime = n
};
EndUserProxySettings = function() {
    this.setClassInfo("EndUserProxySettings", 1);
    this.fields = {
        useProxy: "boolean",
        anonymous: "boolean",
        address: "string",
        port: "string",
        user: "string",
        password: "string",
        savePassword: "boolean"
    };
    this.initializeFields();
    this.port = "80"
};
EndUserTransferableObject.makeTransferable(EndUserProxySettings);
EndUserProxySettings.prototype.GetUseProxy = function() {
    return this.useProxy
};
EndUserProxySettings.prototype.SetUseProxy = function(n) {
    this.useProxy = n
};
EndUserProxySettings.prototype.GetAnonymous = function() {
    return this.anonymous
};
EndUserProxySettings.prototype.SetAnonymous = function(n) {
    this.anonymous = n
};
EndUserProxySettings.prototype.GetAddress = function() {
    return this.address
};
EndUserProxySettings.prototype.SetAddress = function(n) {
    this.address = n
};
EndUserProxySettings.prototype.GetPort = function() {
    return this.port
};
EndUserProxySettings.prototype.SetPort = function(n) {
    this.port = n
};
EndUserProxySettings.prototype.GetUser = function() {
    return this.user
};
EndUserProxySettings.prototype.SetUser = function(n) {
    this.user = n
};
EndUserProxySettings.prototype.GetPassword = function() {
    return this.password
};
EndUserProxySettings.prototype.SetPassword = function(n) {
    this.password = n
};
EndUserProxySettings.prototype.GetSavePassword = function() {
    return this.savePassword
};
EndUserProxySettings.prototype.SetSavePassword = function(n) {
    this.savePassword = n
};
EndUserTSPSettings = function() {
    this.setClassInfo("EndUserTSPSettings", 1);
    this.fields = {
        getStamps: "boolean",
        address: "string",
        port: "string"
    };
    this.initializeFields();
    this.port = "80"
};
EndUserTransferableObject.makeTransferable(EndUserTSPSettings);
EndUserTSPSettings.prototype.GetGetStamps = function() {
    return this.getStamps
};
EndUserTSPSettings.prototype.SetGetStamps = function(n) {
    this.getStamps = n
};
EndUserTSPSettings.prototype.GetAddress = function() {
    return this.address
};
EndUserTSPSettings.prototype.SetAddress = function(n) {
    this.address = n
};
EndUserTSPSettings.prototype.GetPort = function() {
    return this.port
};
EndUserTSPSettings.prototype.SetPort = function(n) {
    this.port = n
};
EndUserOCSPSettings = function() {
    this.setClassInfo("EndUserOCSPSettings", 1);
    this.fields = {
        useOCSP: "boolean",
        beforeStore: "boolean",
        address: "string",
        port: "string"
    };
    this.initializeFields();
    this.port = "80"
};
EndUserTransferableObject.makeTransferable(EndUserOCSPSettings);
EndUserOCSPSettings.prototype.GetUseOCSP = function() {
    return this.useOCSP
};
EndUserOCSPSettings.prototype.SetUseOCSP = function(n) {
    this.useOCSP = n
};
EndUserOCSPSettings.prototype.GetBeforeStore = function() {
    return this.beforeStore
};
EndUserOCSPSettings.prototype.SetBeforeStore = function(n) {
    this.beforeStore = n
};
EndUserOCSPSettings.prototype.GetAddress = function() {
    return this.address
};
EndUserOCSPSettings.prototype.SetAddress = function(n) {
    this.address = n
};
EndUserOCSPSettings.prototype.GetPort = function() {
    return this.port
};
EndUserOCSPSettings.prototype.SetPort = function(n) {
    this.port = n
};
EndUserLDAPSettings = function() {
    this.setClassInfo("EndUserLDAPSettings", 1);
    this.fields = {
        useLDAP: "boolean",
        address: "string",
        port: "string",
        anonymous: "boolean",
        user: "string",
        password: "string"
    };
    this.initializeFields();
    this.port = "389"
};
EndUserTransferableObject.makeTransferable(EndUserLDAPSettings);
EndUserLDAPSettings.prototype.GetUseLDAP = function() {
    return this.useLDAP
};
EndUserLDAPSettings.prototype.SetUseLDAP = function(n) {
    this.useLDAP = n
};
EndUserLDAPSettings.prototype.GetAddress = function() {
    return this.address
};
EndUserLDAPSettings.prototype.SetAddress = function(n) {
    this.address = n
};
EndUserLDAPSettings.prototype.GetPort = function() {
    return this.port
};
EndUserLDAPSettings.prototype.SetPort = function(n) {
    this.port = n
};
EndUserLDAPSettings.prototype.GetAnonymous = function() {
    return this.anonymous
};
EndUserLDAPSettings.prototype.SetAnonymous = function(n) {
    this.anonymous = n
};
EndUserLDAPSettings.prototype.GetUser = function() {
    return this.user
};
EndUserLDAPSettings.prototype.SetUser = function(n) {
    this.user = n
};
EndUserLDAPSettings.prototype.GetPassword = function() {
    return this.password
};
EndUserLDAPSettings.prototype.SetPassword = function(n) {
    this.password = n
};
EndUserCMPSettings = function() {
    this.setClassInfo("EndUserCMPSettings", 1);
    this.fields = {
        useCMP: "boolean",
        address: "string",
        port: "string",
        commonName: "string"
    };
    this.initializeFields();
    this.port = "80"
};
EndUserTransferableObject.makeTransferable(EndUserCMPSettings);
EndUserCMPSettings.prototype.GetUseCMP = function() {
    return this.useCMP
};
EndUserCMPSettings.prototype.SetUseCMP = function(n) {
    this.useCMP = n
};
EndUserCMPSettings.prototype.GetAddress = function() {
    return this.address
};
EndUserCMPSettings.prototype.SetAddress = function(n) {
    this.address = n
};
EndUserCMPSettings.prototype.GetPort = function() {
    return this.port
};
EndUserCMPSettings.prototype.SetPort = function(n) {
    this.port = n
};
EndUserCMPSettings.prototype.GetCommonName = function() {
    return this.commonName
};
EndUserCMPSettings.prototype.SetCommonName = function(n) {
    this.commonName = n
};
EndUserModeSettings = function() {
    this.setClassInfo("EndUserModeSettings", 1);
    this.fields = {
        offlineMode: "boolean"
    };
    this.initializeFields()
};
EndUserTransferableObject.makeTransferable(EndUserModeSettings);
EndUserModeSettings.prototype.GetOfflineMode = function() {
    return this.offlineMode
};
EndUserModeSettings.prototype.SetOfflineMode = function(n) {
    this.offlineMode = n
};
EndUserOCSPAccessInfoModeSettings = function() {
    this.setClassInfo("EndUserOCSPAccessInfoModeSettings", 1);
    this.fields = {
        enabled: "boolean"
    };
    this.initializeFields()
};
EndUserTransferableObject.makeTransferable(EndUserOCSPAccessInfoModeSettings);
EndUserOCSPAccessInfoModeSettings.prototype.GetEnabled = function() {
    return this.enabled
};
EndUserOCSPAccessInfoModeSettings.prototype.SetEnabled = function(n) {
    this.enabled = n
};
EndUserOCSPAccessInfoSettings = function() {
    this.setClassInfo("EndUserOCSPAccessInfoSettings", 1);
    this.fields = {
        issuerCN: "string",
        address: "string",
        port: "string"
    };
    this.initializeFields()
};
EndUserTransferableObject.makeTransferable(EndUserOCSPAccessInfoSettings);
EndUserOCSPAccessInfoSettings.prototype.GetIssuerCN = function() {
    return this.issuerCN
};
EndUserOCSPAccessInfoSettings.prototype.SetIssuerCN = function(n) {
    this.issuerCN = n
};
EndUserOCSPAccessInfoSettings.prototype.GetAddress = function() {
    return this.address
};
EndUserOCSPAccessInfoSettings.prototype.SetAddress = function(n) {
    this.address = n
};
EndUserOCSPAccessInfoSettings.prototype.GetPort = function() {
    return this.port
};
EndUserOCSPAccessInfoSettings.prototype.SetPort = function(n) {
    this.port = n
};
EndUserKeyMediaSettings = function() {
    this.setClassInfo("EndUserKeyMediaSettings", 1);
    this.fields = {
        sourceType: "long",
        showErrors: "boolean",
        keyMedia: "EndUserKeyMedia"
    };
    this.initializeFields();
    this.sourceType = 1;
    this.showErrors = !0
};
EndUserTransferableObject.makeTransferable(EndUserKeyMediaSettings);
EndUserKeyMediaSettings.prototype.GetSourceType = function() {
    return this.sourceType
};
EndUserKeyMediaSettings.prototype.SetSourceType = function(n) {
    this.sourceType = n
};
EndUserKeyMediaSettings.prototype.GetShowErrors = function() {
    return this.showErrors
};
EndUserKeyMediaSettings.prototype.SetShowErrors = function(n) {
    this.showErrors = n
};
EndUserKeyMediaSettings.prototype.GetKeyMedia = function() {
    return this.keyMedia
};
EndUserKeyMediaSettings.prototype.SetKeyMedia = function(n) {
    this.keyMedia = n
};
EndUserOwnerInfo = function() {
    this.setClassInfo("EndUserOwnerInfo", 1);
    this.fields = {
        isFilled: "boolean",
        issuer: "string",
        issuerCN: "string",
        serial: "string",
        subject: "string",
        subjCN: "string",
        subjOrg: "string",
        subjOrgUnit: "string",
        subjTitle: "string",
        subjState: "string",
        subjLocality: "string",
        subjFullName: "string",
        subjAddress: "string",
        subjPhone: "string",
        subjEMail: "string",
        subjDNS: "string",
        subjEDRPOUCode: "string",
        subjDRFOCode: "string"
    };
    this.initializeFields()
};
EndUserTransferableObject.makeTransferable(EndUserOwnerInfo);
EndUserOwnerInfo.prototype.IsFilled = function() {
    return this.isFilled
};
EndUserOwnerInfo.prototype.GetIssuer = function() {
    return this.issuer
};
EndUserOwnerInfo.prototype.GetIssuerCN = function() {
    return this.issuerCN
};
EndUserOwnerInfo.prototype.GetSerial = function() {
    return this.serial
};
EndUserOwnerInfo.prototype.GetSubject = function() {
    return this.subject
};
EndUserOwnerInfo.prototype.GetSubjCN = function() {
    return this.subjCN
};
EndUserOwnerInfo.prototype.GetSubjOrg = function() {
    return this.subjOrg
};
EndUserOwnerInfo.prototype.GetSubjOrgUnit = function() {
    return this.subjOrgUnit
};
EndUserOwnerInfo.prototype.GetSubjTitle = function() {
    return this.subjTitle
};
EndUserOwnerInfo.prototype.GetSubjState = function() {
    return this.subjState
};
EndUserOwnerInfo.prototype.GetSubjLocality = function() {
    return this.subjLocality
};
EndUserOwnerInfo.prototype.GetSubjFullName = function() {
    return this.subjFullName
};
EndUserOwnerInfo.prototype.GetSubjAddress = function() {
    return this.subjAddress
};
EndUserOwnerInfo.prototype.GetSubjPhone = function() {
    return this.subjPhone
};
EndUserOwnerInfo.prototype.GetSubjEMail = function() {
    return this.subjEMail
};
EndUserOwnerInfo.prototype.GetSubjDNS = function() {
    return this.subjDNS
};
EndUserOwnerInfo.prototype.GetSubjEDRPOUCode = function() {
    return this.subjEDRPOUCode
};
EndUserOwnerInfo.prototype.GetSubjDRFOCode = function() {
    return this.subjDRFOCode
};
EndUserTimeInfo = function() {
    this.setClassInfo("EndUserTimeInfo", 2);
    this.fields = {
        version: "number",
        isTimeAvail: "boolean",
        isTimeStamp: "boolean",
        time: "time",
        isSignTimeStampAvail: "boolean",
        signTimeStamp: "time"
    };
    this.initializeFields()
};
EndUserTransferableObject.makeTransferable(EndUserTimeInfo);
EndUserTimeInfo.prototype.GetVersion = function() {
    return this.version
};
EndUserTimeInfo.prototype.IsTimeAvail = function() {
    return this.isTimeAvail
};
EndUserTimeInfo.prototype.IsTimeStamp = function() {
    return this.isTimeStamp
};
EndUserTimeInfo.prototype.GetTime = function() {
    return this.time
};
EndUserTimeInfo.prototype.IsSignTimeStampAvail = function() {
    return this.isSignTimeStampAvail
};
EndUserTimeInfo.prototype.GetSignTimeStamp = function() {
    return this.signTimeStamp
};
EndUserSignInfo = function() {
    this.setClassInfo("EndUserSignInfo", 1);
    this.fields = {
        ownerInfo: "EndUserOwnerInfo",
        timeInfo: "EndUserTimeInfo",
        data: "byteArray"
    };
    this.initializeFields()
};
EndUserTransferableObject.makeTransferable(EndUserSignInfo);
EndUserSignInfo.prototype.GetOwnerInfo = function() {
    return this.ownerInfo
};
EndUserSignInfo.prototype.GetTimeInfo = function() {
    return this.timeInfo
};
EndUserSignInfo.prototype.GetData = function() {
    return this.data
};
EndUserSignInfo.prototype.GetDataString = function(n) {
    return EndUserStringCoder.ArrayToString(n, this.data)
};
EndUserSenderInfo = function() {
    this.setClassInfo("EndUserSenderInfo", 1);
    this.fields = {
        ownerInfo: "EndUserOwnerInfo",
        timeInfo: "EndUserTimeInfo",
        data: "byteArray"
    };
    this.initializeFields()
};
EndUserTransferableObject.makeTransferable(EndUserSenderInfo);
EndUserSenderInfo.prototype.GetOwnerInfo = function() {
    return this.ownerInfo
};
EndUserSenderInfo.prototype.GetTimeInfo = function() {
    return this.timeInfo
};
EndUserSenderInfo.prototype.GetData = function() {
    return this.data
};
EndUserSenderInfo.prototype.GetDataString = function(n) {
    return EndUserStringCoder.ArrayToString(n, this.data)
};
EndUserCertificateInfo = function() {
    this.setClassInfo("EndUserCertificateInfo", 1);
    this.fields = {
        isFilled: "boolean",
        version: "long",
        issuer: "string",
        issuerCN: "string",
        serial: "string",
        subject: "string",
        subjCN: "string",
        subjOrg: "string",
        subjOrgUnit: "string",
        subjTitle: "string",
        subjState: "string",
        subjLocality: "string",
        subjFullName: "string",
        subjAddress: "string",
        subjPhone: "string",
        subjEMail: "string",
        subjDNS: "string",
        subjEDRPOUCode: "string",
        subjDRFOCode: "string",
        subjNBUCode: "string",
        subjSPFMCode: "string",
        subjOCode: "string",
        subjOUCode: "string",
        subjUserCode: "string",
        certBeginTime: "time",
        certEndTime: "time",
        isPrivKeyTimesAvail: "boolean",
        privKeyBeginTime: "time",
        privKeyEndTime: "time",
        publicKeyBits: "long",
        publicKey: "string",
        publicKeyID: "string",
        isECDHPublicKeyAvail: "boolean",
        ECDHPublicKeyBits: "long",
        ECDHPublicKey: "string",
        ECDHPublicKeyID: "string",
        issuerPublicKeyID: "string",
        keyUsage: "string",
        extKeyUsages: "string",
        policies: "string",
        crlDistribPoint1: "string",
        crlDistribPoint2: "string",
        isPowerCert: "boolean",
        isSubjTypeAvail: "boolean",
        isSubjCA: "boolean"
    };
    this.initializeFields()
};
EndUserTransferableObject.makeTransferable(EndUserCertificateInfo);
EndUserCertificateInfo.prototype.IsFilled = function() {
    return this.isFilled
};
EndUserCertificateInfo.prototype.GetVersion = function() {
    return this.version
};
EndUserCertificateInfo.prototype.GetIssuer = function() {
    return this.issuer
};
EndUserCertificateInfo.prototype.GetIssuerCN = function() {
    return this.issuerCN
};
EndUserCertificateInfo.prototype.GetSerial = function() {
    return this.serial
};
EndUserCertificateInfo.prototype.GetSubject = function() {
    return this.subject
};
EndUserCertificateInfo.prototype.GetSubjCN = function() {
    return this.subjCN
};
EndUserCertificateInfo.prototype.GetSubjOrg = function() {
    return this.subjOrg
};
EndUserCertificateInfo.prototype.GetSubjOrgUnit = function() {
    return this.subjOrgUnit
};
EndUserCertificateInfo.prototype.GetSubjTitle = function() {
    return this.subjTitle
};
EndUserCertificateInfo.prototype.GetSubjState = function() {
    return this.subjState
};
EndUserCertificateInfo.prototype.GetSubjLocality = function() {
    return this.subjLocality
};
EndUserCertificateInfo.prototype.GetSubjFullName = function() {
    return this.subjFullName
};
EndUserCertificateInfo.prototype.GetSubjAddress = function() {
    return this.subjAddress
};
EndUserCertificateInfo.prototype.GetSubjPhone = function() {
    return this.subjPhone
};
EndUserCertificateInfo.prototype.GetSubjEMail = function() {
    return this.subjEMail
};
EndUserCertificateInfo.prototype.GetSubjDNS = function() {
    return this.subjDNS
};
EndUserCertificateInfo.prototype.GetSubjEDRPOUCode = function() {
    return this.subjEDRPOUCode
};
EndUserCertificateInfo.prototype.GetSubjDRFOCode = function() {
    return this.subjDRFOCode
};
EndUserCertificateInfo.prototype.GetSubjNBUCode = function() {
    return this.subjNBUCode
};
EndUserCertificateInfo.prototype.GetSubjSPFMCode = function() {
    return this.subjSPFMCode
};
EndUserCertificateInfo.prototype.GetSubjOCode = function() {
    return this.subjOCode
};
EndUserCertificateInfo.prototype.GetSubjOUCode = function() {
    return this.subjOUCode
};
EndUserCertificateInfo.prototype.GetSubjUserCode = function() {
    return this.subjUserCode
};
EndUserCertificateInfo.prototype.GetCertBeginTime = function() {
    return this.certBeginTime
};
EndUserCertificateInfo.prototype.GetCertEndTime = function() {
    return this.certEndTime
};
EndUserCertificateInfo.prototype.IsPrivKeyTimesAvail = function() {
    return this.isPrivKeyTimesAvail
};
EndUserCertificateInfo.prototype.GetPrivKeyBeginTime = function() {
    return this.privKeyBeginTime
};
EndUserCertificateInfo.prototype.GetPrivKeyEndTime = function() {
    return this.privKeyEndTime
};
EndUserCertificateInfo.prototype.GetPublicKeyBits = function() {
    return this.publicKeyBits
};
EndUserCertificateInfo.prototype.GetPublicKey = function() {
    return this.publicKey
};
EndUserCertificateInfo.prototype.GetPublicKeyID = function() {
    return this.publicKeyID
};
EndUserCertificateInfo.prototype.IsECDHPublicKeyAvail = function() {
    return this.isECDHPublicKeyAvail
};
EndUserCertificateInfo.prototype.GetECDHPublicKeyBits = function() {
    return this.ECDHPublicKeyBits
};
EndUserCertificateInfo.prototype.GetECDHPublicKey = function() {
    return this.ECDHPublicKey
};
EndUserCertificateInfo.prototype.GetECDHPublicKeyID = function() {
    return this.ECDHPublicKeyID
};
EndUserCertificateInfo.prototype.GetIssuerPublicKeyID = function() {
    return this.issuerPublicKeyID
};
EndUserCertificateInfo.prototype.GetKeyUsage = function() {
    return this.keyUsage
};
EndUserCertificateInfo.prototype.GetExtKeyUsages = function() {
    return this.extKeyUsages
};
EndUserCertificateInfo.prototype.GetPolicies = function() {
    return this.policies
};
EndUserCertificateInfo.prototype.GetCRLDistribPoint1 = function() {
    return this.crlDistribPoint1
};
EndUserCertificateInfo.prototype.GetCRLDistribPoint2 = function() {
    return this.crlDistribPoint2
};
EndUserCertificateInfo.prototype.IsPowerCert = function() {
    return this.isPowerCert
};
EndUserCertificateInfo.prototype.IsSubjTypeAvail = function() {
    return this.isSubjTypeAvail
};
EndUserCertificateInfo.prototype.IsSubjCA = function() {
    return this.isSubjCA
};
EndUserCertificateInfoEx = function() {
    this.setClassInfo("EndUserCertificateInfoEx", 8);
    this.fields = {
        isFilled: "boolean",
        version: "long",
        issuer: "string",
        issuerCN: "string",
        serial: "string",
        subject: "string",
        subjCN: "string",
        subjOrg: "string",
        subjOrgUnit: "string",
        subjTitle: "string",
        subjState: "string",
        subjLocality: "string",
        subjFullName: "string",
        subjAddress: "string",
        subjPhone: "string",
        subjEMail: "string",
        subjDNS: "string",
        subjEDRPOUCode: "string",
        subjDRFOCode: "string",
        subjNBUCode: "string",
        subjSPFMCode: "string",
        subjOCode: "string",
        subjOUCode: "string",
        subjUserCode: "string",
        certBeginTime: "time",
        certEndTime: "time",
        isPrivKeyTimesAvail: "boolean",
        privKeyBeginTime: "time",
        privKeyEndTime: "time",
        publicKeyBits: "long",
        publicKey: "string",
        publicKeyID: "string",
        issuerPublicKeyID: "string",
        keyUsage: "string",
        extKeyUsages: "string",
        policies: "string",
        crlDistribPoint1: "string",
        crlDistribPoint2: "string",
        isPowerCert: "boolean",
        isSubjTypeAvail: "boolean",
        isSubjCA: "boolean",
        chainLength: "int",
        UPN: "string",
        publicKeyType: "long",
        keyUsageType: "long",
        RSAModul: "string",
        RSAExponent: "string",
        OCSPAccessInfo: "string",
        issuerAccessInfo: "string",
        TSPAccessInfo: "string",
        isLimitValueAvailable: "boolean",
        limitValue: "long",
        limitValueCurrency: "string",
        subjType: "long",
        subjSubType: "long",
        subjUNZR: "string",
        subjCountry: "string",
        fingerprint: "string",
        isQSCD: "boolean",
        subjUserID: "string"
    };
    this.initializeFields();
    var n = this;
    this.IsLimitValueAvailable = function() {
        return n.isLimitValueAvailable
    }
};
EndUserTransferableObject.makeTransferable(EndUserCertificateInfoEx);
EndUserCertificateInfoEx.prototype.IsFilled = function() {
    return this.isFilled
};
EndUserCertificateInfoEx.prototype.GetVersion = function() {
    return this.version
};
EndUserCertificateInfoEx.prototype.GetIssuer = function() {
    return this.issuer
};
EndUserCertificateInfoEx.prototype.GetIssuerCN = function() {
    return this.issuerCN
};
EndUserCertificateInfoEx.prototype.GetSerial = function() {
    return this.serial
};
EndUserCertificateInfoEx.prototype.GetSubject = function() {
    return this.subject
};
EndUserCertificateInfoEx.prototype.GetSubjCN = function() {
    return this.subjCN
};
EndUserCertificateInfoEx.prototype.GetSubjOrg = function() {
    return this.subjOrg
};
EndUserCertificateInfoEx.prototype.GetSubjOrgUnit = function() {
    return this.subjOrgUnit
};
EndUserCertificateInfoEx.prototype.GetSubjTitle = function() {
    return this.subjTitle
};
EndUserCertificateInfoEx.prototype.GetSubjState = function() {
    return this.subjState
};
EndUserCertificateInfoEx.prototype.GetSubjLocality = function() {
    return this.subjLocality
};
EndUserCertificateInfoEx.prototype.GetSubjFullName = function() {
    return this.subjFullName
};
EndUserCertificateInfoEx.prototype.GetSubjAddress = function() {
    return this.subjAddress
};
EndUserCertificateInfoEx.prototype.GetSubjPhone = function() {
    return this.subjPhone
};
EndUserCertificateInfoEx.prototype.GetSubjEMail = function() {
    return this.subjEMail
};
EndUserCertificateInfoEx.prototype.GetSubjDNS = function() {
    return this.subjDNS
};
EndUserCertificateInfoEx.prototype.GetSubjEDRPOUCode = function() {
    return this.subjEDRPOUCode
};
EndUserCertificateInfoEx.prototype.GetSubjDRFOCode = function() {
    return this.subjDRFOCode
};
EndUserCertificateInfoEx.prototype.GetSubjNBUCode = function() {
    return this.subjNBUCode
};
EndUserCertificateInfoEx.prototype.GetSubjSPFMCode = function() {
    return this.subjSPFMCode
};
EndUserCertificateInfoEx.prototype.GetSubjOCode = function() {
    return this.subjOCode
};
EndUserCertificateInfoEx.prototype.GetSubjOUCode = function() {
    return this.subjOUCode
};
EndUserCertificateInfoEx.prototype.GetSubjUserCode = function() {
    return this.subjUserCode
};
EndUserCertificateInfoEx.prototype.GetCertBeginTime = function() {
    return this.certBeginTime
};
EndUserCertificateInfoEx.prototype.GetCertEndTime = function() {
    return this.certEndTime
};
EndUserCertificateInfoEx.prototype.IsPrivKeyTimesAvail = function() {
    return this.isPrivKeyTimesAvail
};
EndUserCertificateInfoEx.prototype.GetPrivKeyBeginTime = function() {
    return this.privKeyBeginTime
};
EndUserCertificateInfoEx.prototype.GetPrivKeyEndTime = function() {
    return this.privKeyEndTime
};
EndUserCertificateInfoEx.prototype.GetPublicKeyBits = function() {
    return this.publicKeyBits
};
EndUserCertificateInfoEx.prototype.GetPublicKey = function() {
    return this.publicKey
};
EndUserCertificateInfoEx.prototype.GetPublicKeyID = function() {
    return this.publicKeyID
};
EndUserCertificateInfoEx.prototype.GetIssuerPublicKeyID = function() {
    return this.issuerPublicKeyID
};
EndUserCertificateInfoEx.prototype.GetKeyUsage = function() {
    return this.keyUsage
};
EndUserCertificateInfoEx.prototype.GetExtKeyUsages = function() {
    return this.extKeyUsages
};
EndUserCertificateInfoEx.prototype.GetPolicies = function() {
    return this.policies
};
EndUserCertificateInfoEx.prototype.GetCRLDistribPoint1 = function() {
    return this.crlDistribPoint1
};
EndUserCertificateInfoEx.prototype.GetCRLDistribPoint2 = function() {
    return this.crlDistribPoint2
};
EndUserCertificateInfoEx.prototype.IsPowerCert = function() {
    return this.isPowerCert
};
EndUserCertificateInfoEx.prototype.IsSubjTypeAvail = function() {
    return this.isSubjTypeAvail
};
EndUserCertificateInfoEx.prototype.IsSubjCA = function() {
    return this.isSubjCA
};
EndUserCertificateInfoEx.prototype.GetChainLength = function() {
    return this.chainLength
};
EndUserCertificateInfoEx.prototype.GetUPN = function() {
    return this.UPN
};
EndUserCertificateInfoEx.prototype.GetPublicKeyType = function() {
    return this.publicKeyType
};
EndUserCertificateInfoEx.prototype.GetKeyUsageType = function() {
    return this.keyUsageType
};
EndUserCertificateInfoEx.prototype.GetRSAModul = function() {
    return this.RSAModul
};
EndUserCertificateInfoEx.prototype.GetRSAExponent = function() {
    return this.RSAExponent
};
EndUserCertificateInfoEx.prototype.GetOCSPAccessInfo = function() {
    return this.OCSPAccessInfo
};
EndUserCertificateInfoEx.prototype.GetIssuerAccessInfo = function() {
    return this.issuerAccessInfo
};
EndUserCertificateInfoEx.prototype.GetTSPAccessInfo = function() {
    return this.TSPAccessInfo
};
EndUserCertificateInfoEx.prototype.IsLimitValueAvail = function() {
    return this.isLimitValueAvailable
};
EndUserCertificateInfoEx.prototype.GetLimitValue = function() {
    return this.limitValue
};
EndUserCertificateInfoEx.prototype.GetLimitValueCurrency = function() {
    return this.limitValueCurrency
};
EndUserCertificateInfoEx.prototype.GetSubjType = function() {
    return this.subjType
};
EndUserCertificateInfoEx.prototype.GetSubjSubType = function() {
    return this.subjSubType
};
EndUserCertificateInfoEx.prototype.GetSubjUNZR = function() {
    return this.subjUNZR
};
EndUserCertificateInfoEx.prototype.GetSubjCountry = function() {
    return this.subjCountry
};
EndUserCertificateInfoEx.prototype.GetFingerprint = function() {
    return this.fingerprint
};
EndUserCertificateInfoEx.prototype.IsQSCD = function() {
    return this.isQSCD
};
EndUserCertificateInfoEx.prototype.GetSubjUserID = function() {
    return this.subjUserID
};
EndUserCertificate = function() {
    this.setClassInfo("EndUserCertificate", 1);
    this.fields = {
        infoEx: "EndUserCertificateInfoEx",
        data: "byteArray"
    };
    this.initializeFields()
};
EndUserTransferableObject.makeTransferable(EndUserCertificate);
EndUserCertificate.prototype.GetInfoEx = function() {
    return this.infoEx
};
EndUserCertificate.prototype.SetInfoEx = function(n) {
    this.infoEx = n
};
EndUserCertificate.prototype.GetData = function() {
    return this.data
};
EndUserCertificate.prototype.SetData = function(n) {
    this.data = n
};
EndUserCRLInfo = function() {
    this.setClassInfo("EndUserCRLInfo", 1, !0, !1);
    this.fields = {
        isFilled: "boolean",
        issuer: "string",
        issuerCN: "string",
        crlNumber: "long",
        thisUpdate: "time",
        nextUpdate: "time"
    };
    this.initializeFields()
};
EndUserTransferableObject.makeTransferable(EndUserCRLInfo);
EndUserCRLInfo.prototype.IsFilled = function() {
    return this.isFilled
};
EndUserCRLInfo.prototype.GetIssuer = function() {
    return this.issuer
};
EndUserCRLInfo.prototype.GetIssuerCN = function() {
    return this.issuerCN
};
EndUserCRLInfo.prototype.GetCRLNumber = function() {
    return this.crlNumber
};
EndUserCRLInfo.prototype.GetThisUpdate = function() {
    return this.thisUpdate
};
EndUserCRLInfo.prototype.GetNextUpdate = function() {
    return this.nextUpdate
};
EndUserCRLDetailedInfo = function() {
    this.setClassInfo("EndUserCRLDetailedInfo", 1);
    this.fields = {
        isFilled: "boolean",
        version: "long",
        issuer: "string",
        issuerCN: "string",
        issuerPublicKeyID: "string",
        crlNumber: "long",
        thisUpdate: "time",
        nextUpdate: "time",
        revokedItemsCount: "long"
    };
    this.initializeFields()
};
EndUserTransferableObject.makeTransferable(EndUserCRLDetailedInfo);
EndUserCRLDetailedInfo.prototype.IsFilled = function() {
    return this.isFilled
};
EndUserCRLDetailedInfo.prototype.GetVersion = function() {
    return this.version
};
EndUserCRLDetailedInfo.prototype.GetIssuer = function() {
    return this.issuer
};
EndUserCRLDetailedInfo.prototype.GetIssuerCN = function() {
    return this.issuerCN
};
EndUserCRLDetailedInfo.prototype.GetIssuerPublicKeyID = function() {
    return this.issuerPublicKeyID
};
EndUserCRLDetailedInfo.prototype.GetCRLNumber = function() {
    return this.crlNumber
};
EndUserCRLDetailedInfo.prototype.GetThisUpdate = function() {
    return this.thisUpdate
};
EndUserCRLDetailedInfo.prototype.GetNextUpdate = function() {
    return this.nextUpdate
};
EndUserCRLDetailedInfo.prototype.GetRevokedItemsCount = function() {
    return this.revokedItemsCount
};
EndUserPrivateKeyInfo = function() {
    this.setClassInfo("EndUserPrivateKeyInfo", 1);
    this.fields = {
        privateKey: "byteArray",
        privateKeyInfo: "byteArray"
    };
    this.initializeFields()
};
EndUserTransferableObject.makeTransferable(EndUserPrivateKeyInfo);
EndUserPrivateKeyInfo.prototype.GetPrivateKey = function() {
    return this.privateKey
};
EndUserPrivateKeyInfo.prototype.SetPrivateKey = function(n) {
    this.privateKey = n
};
EndUserPrivateKeyInfo.prototype.GetPrivateKeyInfo = function() {
    return this.privateKeyInfo
};
EndUserPrivateKeyInfo.prototype.SetPrivateKeyInfo = function(n) {
    this.privateKeyInfo = n
};
EndUserJKSPrivateKey = function() {
    this.setClassInfo("EndUserJKSPrivateKey", 1);
    this.fields = {
        privateKey: "byteArray",
        certificates: "array"
    };
    var n = this;
    this.initializeFields()
};
EndUserTransferableObject.makeTransferable(EndUserJKSPrivateKey);
EndUserJKSPrivateKey.prototype.GetPrivateKey = function() {
    return this.privateKey
};
EndUserJKSPrivateKey.prototype.GetCertificate = function(n) {
    return n < 0 || n >= this.certificates.length ? null : this.certificates[n]
};
EndUserJKSPrivateKey.prototype.GetCertificatesCount = function() {
    return this.certificates.length
};
EndUserJKSPrivateKey.prototype.GetCertificates = function() {
    return this.certificates
};
EndUserRequestInfo = function() {
    this.setClassInfo("EndUserRequestInfo", 4);
    this.fields = {
        request: "byteArray",
        requestType: "number",
        defaultRequestFileName: "string",
        isSimple: "boolean",
        subject: "string",
        subjCN: "string",
        subjOrg: "string",
        subjOrgUnit: "string",
        subjTitle: "string",
        subjState: "string",
        subjLocality: "string",
        subjFullName: "string",
        subjAddress: "string",
        subjPhone: "string",
        subjEMail: "string",
        subjDNS: "string",
        subjEDRPOUCode: "string",
        subjDRFOCode: "string",
        subjNBUCode: "string",
        subjSPFMCode: "string",
        subjOCode: "string",
        subjOUCode: " string",
        subjUserCode: "string",
        certBeginTime: "time",
        certEndTime: "time",
        isPrivKeyTimesAvail: "boolean",
        privKeyBeginTime: "time",
        privKeyEndTime: "time",
        publicKeyType: "number",
        publicKeyBits: "number",
        RSAModul: "string",
        RSAExponent: "string",
        publicKey: "string",
        publicKeyID: "string",
        extKeyUsages: "string",
        crlDistribPoint1: "string",
        crlDistribPoint2: "string",
        isSubjTypeAvail: "boolean",
        subjType: "number",
        subjSubType: "number",
        isSelfSigned: "boolean",
        signIssuer: "string",
        signSerial: "string",
        subjUNZR: "string",
        subjCountry: "string",
        isQSCD: "boolean"
    };
    this.initializeFields()
};
EndUserTransferableObject.makeTransferable(EndUserRequestInfo);
EndUserRequestInfo.prototype.GetRequest = function() {
    return this.request
};
EndUserRequestInfo.prototype.GetRequestType = function() {
    return this.requestType
};
EndUserRequestInfo.prototype.GetDefaultRequestFileName = function() {
    return this.defaultRequestFileName
};
EndUserRequestInfo.prototype.IsSimple = function() {
    return this.isSimple
};
EndUserRequestInfo.prototype.GetSubject = function() {
    return this.subject
};
EndUserRequestInfo.prototype.GetSubjCN = function() {
    return this.subjCN
};
EndUserRequestInfo.prototype.GetSubjOrg = function() {
    return this.subjOrg
};
EndUserRequestInfo.prototype.GetSubjOrgUnit = function() {
    return this.subjOrgUnit
};
EndUserRequestInfo.prototype.GetSubjTitle = function() {
    return this.subjTitle
};
EndUserRequestInfo.prototype.GetSubjState = function() {
    return this.subjState
};
EndUserRequestInfo.prototype.GetSubjLocality = function() {
    return this.subjLocality
};
EndUserRequestInfo.prototype.GetSubjFullName = function() {
    return this.subjFullName
};
EndUserRequestInfo.prototype.GetSubjAddress = function() {
    return this.subjAddress
};
EndUserRequestInfo.prototype.GetSubjPhone = function() {
    return this.subjPhone
};
EndUserRequestInfo.prototype.GetSubjEMail = function() {
    return this.subjEMail
};
EndUserRequestInfo.prototype.GetSubjDNS = function() {
    return this.subjDNS
};
EndUserRequestInfo.prototype.GetSubjEDRPOUCode = function() {
    return this.subjEDRPOUCode
};
EndUserRequestInfo.prototype.GetSubjDRFOCode = function() {
    return this.subjDRFOCode
};
EndUserRequestInfo.prototype.GetSubjNBUCode = function() {
    return this.subjNBUCode
};
EndUserRequestInfo.prototype.GetSubjSPFMCode = function() {
    return this.subjSPFMCode
};
EndUserRequestInfo.prototype.GetSubjOCode = function() {
    return this.subjOCode
};
EndUserRequestInfo.prototype.GetSubjOUCode = function() {
    return this.subjOUCode
};
EndUserRequestInfo.prototype.GetSubjUserCode = function() {
    return this.subjUserCode
};
EndUserRequestInfo.prototype.GetCertBeginTime = function() {
    return this.certBeginTime
};
EndUserRequestInfo.prototype.GetCertEndTime = function() {
    return this.certEndTime
};
EndUserRequestInfo.prototype.IsPrivKeyTimesAvail = function() {
    return this.isPrivKeyTimesAvail
};
EndUserRequestInfo.prototype.GetPrivKeyBeginTime = function() {
    return this.privKeyBeginTime
};
EndUserRequestInfo.prototype.GetPrivKeyEndTime = function() {
    return this.privKeyEndTime
};
EndUserRequestInfo.prototype.GetPublicKeyType = function() {
    return this.publicKeyType
};
EndUserRequestInfo.prototype.GetPublicKeyBits = function() {
    return this.publicKeyBits
};
EndUserRequestInfo.prototype.GetRSAModul = function() {
    return this.RSAModul
};
EndUserRequestInfo.prototype.GetRSAExponent = function() {
    return this.RSAExponent
};
EndUserRequestInfo.prototype.GetPublicKey = function() {
    return this.publicKey
};
EndUserRequestInfo.prototype.GetPublicKeyID = function() {
    return this.publicKeyID
};
EndUserRequestInfo.prototype.GetExtKeyUsages = function() {
    return this.extKeyUsages
};
EndUserRequestInfo.prototype.GetCRLDistribPoint1 = function() {
    return this.crlDistribPoint1
};
EndUserRequestInfo.prototype.GetCRLDistribPoint2 = function() {
    return this.crlDistribPoint2
};
EndUserRequestInfo.prototype.IsSubjTypeAvail = function() {
    return this.isSubjTypeAvail
};
EndUserRequestInfo.prototype.GetSubjType = function() {
    return this.subjType
};
EndUserRequestInfo.prototype.GetSubjSubType = function() {
    return this.subjSubType
};
EndUserRequestInfo.prototype.IsSelfSigned = function() {
    return this.isSelfSigned
};
EndUserRequestInfo.prototype.GetSignIssuer = function() {
    return this.signIssuer
};
EndUserRequestInfo.prototype.GetSignSerial = function() {
    return this.signSerial
};
EndUserRequestInfo.prototype.GetSubjUNZR = function() {
    return this.subjUNZR
};
EndUserRequestInfo.prototype.GetSubjCountry = function() {
    return this.subjCountry
};
EndUserRequestInfo.prototype.IsQSCD = function() {
    return this.isQSCD
};
EndUserInfo = function() {
    this.setClassInfo("EndUserInfo", 3);
    this.fields = {
        commonName: "string",
        locality: "string",
        state: "string",
        organization: "string",
        orgUnit: "string",
        title: "string",
        street: "string",
        phone: "string",
        surname: "string",
        givenname: "string",
        EMail: "string",
        DNS: "string",
        EDRPOUCode: "string",
        DRFOCode: "string",
        NBUCode: "string",
        SPFMCode: "string",
        OCode: "string",
        OUCode: "string",
        userCode: "string",
        UPN: "string",
        UNZR: "string",
        country: "string"
    };
    this.initializeFields()
};
EndUserTransferableObject.makeTransferable(EndUserInfo);
EndUserInfo.prototype.GetCommonName = function() {
    return this.commonName
};
EndUserInfo.prototype.SetCommonName = function(n) {
    this.commonName = n
};
EndUserInfo.prototype.GetLocality = function() {
    return this.locality
};
EndUserInfo.prototype.SetLocality = function(n) {
    this.locality = n
};
EndUserInfo.prototype.GetState = function() {
    return this.state
};
EndUserInfo.prototype.SetState = function(n) {
    this.state = n
};
EndUserInfo.prototype.GetOrganization = function() {
    return this.organization
};
EndUserInfo.prototype.SetOrganization = function(n) {
    this.organization = n
};
EndUserInfo.prototype.GetOrgUnit = function() {
    return this.orgUnit
};
EndUserInfo.prototype.SetOrgUnit = function(n) {
    this.orgUnit = n
};
EndUserInfo.prototype.GetTitle = function() {
    return this.title
};
EndUserInfo.prototype.SetTitle = function(n) {
    this.title = n
};
EndUserInfo.prototype.GetStreet = function() {
    return this.street
};
EndUserInfo.prototype.SetStreet = function(n) {
    this.street = n
};
EndUserInfo.prototype.GetPhone = function() {
    return this.phone
};
EndUserInfo.prototype.SetPhone = function(n) {
    this.phone = n
};
EndUserInfo.prototype.GetSurname = function() {
    return this.surname
};
EndUserInfo.prototype.SetSurname = function(n) {
    this.surname = n
};
EndUserInfo.prototype.GetGivenname = function() {
    return this.givenname
};
EndUserInfo.prototype.SetGivenname = function(n) {
    this.givenname = n
};
EndUserInfo.prototype.GetEMail = function() {
    return this.EMail
};
EndUserInfo.prototype.SetEMail = function(n) {
    this.EMail = n
};
EndUserInfo.prototype.GetDNS = function() {
    return this.DNS
};
EndUserInfo.prototype.SetDNS = function(n) {
    this.DNS = n
};
EndUserInfo.prototype.GetEDRPOUCode = function() {
    return this.EDRPOUCode
};
EndUserInfo.prototype.SetEDRPOUCode = function(n) {
    this.EDRPOUCode = n
};
EndUserInfo.prototype.GetDRFOCode = function() {
    return this.DRFOCode
};
EndUserInfo.prototype.SetDRFOCode = function(n) {
    this.DRFOCode = n
};
EndUserInfo.prototype.GetNBUCode = function() {
    return this.NBUCode
};
EndUserInfo.prototype.SetNBUCode = function(n) {
    this.NBUCode = n
};
EndUserInfo.prototype.GetSPFMCode = function() {
    return this.SPFMCode
};
EndUserInfo.prototype.SetSPFMCode = function(n) {
    this.SPFMCode = n
};
EndUserInfo.prototype.GetOCode = function() {
    return this.OCode
};
EndUserInfo.prototype.SetOCode = function(n) {
    this.OCode = n
};
EndUserInfo.prototype.GetOUCode = function() {
    return this.OUCode
};
EndUserInfo.prototype.SetOUCode = function(n) {
    this.OUCode = n
};
EndUserInfo.prototype.GetUserCode = function() {
    return this.userCode
};
EndUserInfo.prototype.SetUserCode = function(n) {
    this.userCode = n
};
EndUserInfo.prototype.GetUPN = function() {
    return this.UPN
};
EndUserInfo.prototype.SetUPN = function(n) {
    this.UPN = n
};
EndUserInfo.prototype.GetUNZR = function() {
    return this.UNZR
};
EndUserInfo.prototype.SetUNZR = function(n) {
    this.UNZR = n
};
EndUserInfo.prototype.GetCountry = function() {
    return this.country
};
EndUserInfo.prototype.SetCountry = function(n) {
    this.country = n
};
EndUserParams = function() {
    this.setClassInfo("EndUserParams", 1);
    this.fields = {
        SN: "number",
        commonName: "string",
        locality: "string",
        state: "string",
        organization: "string",
        orgUnit: "string",
        title: "string",
        street: "string",
        phone: "string",
        surname: "string",
        givenname: "string",
        EMail: "string",
        DNS: "string",
        EDRPOUCode: "string",
        DRFOCode: "string",
        NBUCode: "string",
        SPFMCode: "string",
        information: "string",
        passPhrase: "string",
        isPublishCertificate: "boolean",
        RAAdminSN: "number"
    };
    this.initializeFields()
};
EndUserTransferableObject.makeTransferable(EndUserParams);
EndUserParams.prototype.GetSN = function() {
    return this.SN
};
EndUserParams.prototype.SetSN = function(n) {
    this.SN = n
};
EndUserParams.prototype.GetCommonName = function() {
    return this.commonName
};
EndUserParams.prototype.SetCommonName = function(n) {
    this.commonName = n
};
EndUserParams.prototype.GetLocality = function() {
    return this.locality
};
EndUserParams.prototype.SetLocality = function(n) {
    this.locality = n
};
EndUserParams.prototype.GetState = function() {
    return this.state
};
EndUserParams.prototype.SetState = function(n) {
    this.state = n
};
EndUserParams.prototype.GetOrganization = function() {
    return this.organization
};
EndUserParams.prototype.SetOrganization = function(n) {
    this.organization = n
};
EndUserParams.prototype.GetOrgUnit = function() {
    return this.orgUnit
};
EndUserParams.prototype.SetOrgUnit = function(n) {
    this.orgUnit = n
};
EndUserParams.prototype.GetTitle = function() {
    return this.title
};
EndUserParams.prototype.SetTitle = function(n) {
    this.title = n
};
EndUserParams.prototype.GetStreet = function() {
    return this.street
};
EndUserParams.prototype.SetStreet = function(n) {
    this.street = n
};
EndUserParams.prototype.GetPhone = function() {
    return this.phone
};
EndUserParams.prototype.SetPhone = function(n) {
    this.phone = n
};
EndUserParams.prototype.GetSurname = function() {
    return this.surname
};
EndUserParams.prototype.SetSurname = function(n) {
    this.surname = n
};
EndUserParams.prototype.GetGivenname = function() {
    return this.givenname
};
EndUserParams.prototype.SetGivenname = function(n) {
    this.givenname = n
};
EndUserParams.prototype.GetEMail = function() {
    return this.EMail
};
EndUserParams.prototype.SetEMail = function(n) {
    this.EMail = n
};
EndUserParams.prototype.GetDNS = function() {
    return this.DNS
};
EndUserParams.prototype.SetDNS = function(n) {
    this.DNS = n
};
EndUserParams.prototype.GetEDRPOUCode = function() {
    return this.EDRPOUCode
};
EndUserParams.prototype.SetEDRPOUCode = function(n) {
    this.EDRPOUCode = n
};
EndUserParams.prototype.GetDRFOCode = function() {
    return this.DRFOCode
};
EndUserParams.prototype.SetDRFOCode = function(n) {
    this.DRFOCode = n
};
EndUserParams.prototype.GetNBUCode = function() {
    return this.NBUCode
};
EndUserParams.prototype.SetNBUCode = function(n) {
    this.NBUCode = n
};
EndUserParams.prototype.GetSPFMCode = function() {
    return this.SPFMCode
};
EndUserParams.prototype.SetSPFMCode = function(n) {
    this.SPFMCode = n
};
EndUserParams.prototype.GetInformation = function() {
    return this.information
};
EndUserParams.prototype.SetInformation = function(n) {
    this.information = n
};
EndUserParams.prototype.GetPassPhrase = function() {
    return this.passPhrase
};
EndUserParams.prototype.SetPassPhrase = function(n) {
    this.passPhrase = n
};
EndUserParams.prototype.GetIsPublishCertificate = function() {
    return this.isPublishCertificate
};
EndUserParams.prototype.SetIsPublishCertificate = function(n) {
    this.isPublishCertificate = n
};
EndUserParams.prototype.GetRAAdminSN = function() {
    return this.RAAdminSN
};
EndUserParams.prototype.SetRAAdminSN = function(n) {
    this.RAAdminSN = n
};
EndUserOperationContext = function() {
    this.setClassInfo("EndUserOperationContext", 1);
    this.fields = {
        handle: "string"
    };
    this.initializeFields();
    this.handle = null
};
EndUserTransferableObject.makeTransferable(EndUserOperationContext);
EndUserOperationContext.prototype.GetHandle = function() {
    return this.handle
};
EndUserSession = function() {
    this.setClassInfo("EndUserSession", 1);
    this.fields = {
        handle: "string",
        data: "byteArray"
    };
    this.initializeFields()
};
EndUserTransferableObject.makeTransferable(EndUserSession);
EndUserSession.prototype.GetHandle = function() {
    return this.handle
};
EndUserSession.prototype.GetData = function() {
    return this.data
};
EndUserSession.prototype.SetData = function(n) {
    this.data = n
};
EndUserSCClientStatistic = function() {
    this.setClassInfo("EndUserSCClientStatistic", 1);
    this.fields = {
        activeSessions: "number",
        gatedSessions: "number",
        unprotectedData: "number",
        protectedData: "number"
    };
    this.initializeFields()
};
EndUserTransferableObject.makeTransferable(EndUserSCClientStatistic);
EndUserSCClientStatistic.prototype.GetActiveSessions = function() {
    return this.activeSessions
};
EndUserSCClientStatistic.prototype.GetGatedSessions = function() {
    return this.gatedSessions
};
EndUserSCClientStatistic.prototype.GetUnprotectedData = function() {
    return this.unprotectedData
};
EndUserSCClientStatistic.prototype.GetProtectedData = function() {
    return this.protectedData
};
EndUserDeviceContext = function() {
    this.setClassInfo("EndUserDeviceContext", 1);
    this.fields = {
        handle: "string"
    };
    this.initializeFields();
    this.handle = null
};
EndUserTransferableObject.makeTransferable(EndUserDeviceContext);
EndUserDeviceContext.prototype.GetHandle = function() {
    return this.handle
};
EndUserTransportHeader = function() {
    this.setClassInfo("EndUserTransportHeader", 1);
    this.fields = {
        receiptNumber: "number",
        cryptoData: "byteArray"
    };
    this.initializeFields()
};
EndUserTransferableObject.makeTransferable(EndUserTransportHeader);
EndUserTransportHeader.prototype.GetReceiptNumber = function() {
    return this.receiptNumber
};
EndUserTransportHeader.prototype.GetCryptoData = function() {
    return this.cryptoData
};
EndUserCryptoHeader = function() {
    this.setClassInfo("EndUserCryptoHeader", 1);
    this.fields = {
        caType: "string",
        headerType: "number",
        headerSize: "number",
        cryptoData: "byteArray"
    };
    this.initializeFields()
};
EndUserTransferableObject.makeTransferable(EndUserCryptoHeader);
EndUserCryptoHeader.prototype.GetCAType = function() {
    return this.caType
};
EndUserCryptoHeader.prototype.GetHeaderType = function() {
    return this.headerType
};
EndUserCryptoHeader.prototype.GetHeaderSize = function() {
    return this.headerSize
};
EndUserCryptoHeader.prototype.GetCryptoData = function() {
    return this.cryptoData
};
EndUserContext = function() {
    this.setClassInfo("EndUserContext", 1);
    this.fields = {
        handle: "string"
    };
    this.initializeFields()
};
EndUserTransferableObject.makeTransferable(EndUserContext);
EndUserContext.prototype.GetHandle = function() {
    return this.handle
};
EndUserHashContext = function() {
    this.setClassInfo("EndUserHashContext", 1);
    this.fields = {
        handle: "string"
    };
    this.initializeFields()
};
EndUserTransferableObject.makeTransferable(EndUserHashContext);
EndUserHashContext.prototype.GetHandle = function() {
    return this.handle
};
EndUserPrivateKeyContext = function() {
    this.setClassInfo("EndUserPrivateKeyContext", 1);
    this.fields = {
        handle: "string",
        ownerInfo: "EndUserOwnerInfo"
    };
    this.initializeFields()
};
EndUserTransferableObject.makeTransferable(EndUserPrivateKeyContext);
EndUserPrivateKeyContext.prototype.GetHandle = function() {
    return this.handle
};
EndUserPrivateKeyContext.prototype.GetOwnerInfo = function() {
    return this.ownerInfo
};
EndUserError = function(n, t) {
    this.errorCode = n;
    this.message = t;
    this.toString = function() {
        return this.message + " (" + this.errorCode + ")"
    }
    ;
    this.GetErrorCode = function() {
        return this.errorCode
    }
    ;
    this.GetMessage = function() {
        return this.message
    }
};
EndUserError.ERROR_NONE = 0;
EndUserError.ERROR_UNKNOWN = 65535;
EndUserError.ERROR_NOT_SUPPORTED = 65534;
EndUserError.ERROR_NOT_INITIALIZED = 1;
EndUserError.ERROR_BAD_PARAMETER = 2;
EndUserError.ERROR_LIBRARY_LOAD = 3;
EndUserError.ERROR_READ_SETTINGS = 4;
EndUserError.ERROR_TRANSMIT_REQUEST = 5;
EndUserError.ERROR_MEMORY_ALLOCATION = 6;
EndUserError.WARNING_END_OF_ENUM = 7;
EndUserError.ERROR_PROXY_NOT_AUTHORIZED = 8;
EndUserError.ERROR_NO_GUI_DIALOGS = 9;
EndUserError.ERROR_DOWNLOAD_FILE = 10;
EndUserError.ERROR_WRITE_SETTINGS = 11;
EndUserError.ERROR_CANCELED_BY_GUI = 12;
EndUserError.ERROR_OFFLINE_MODE = 13;
EndUserError.ERROR_KEY_MEDIAS_FAILED = 17;
EndUserError.ERROR_KEY_MEDIAS_ACCESS_FAILED = 18;
EndUserError.ERROR_KEY_MEDIAS_READ_FAILED = 19;
EndUserError.ERROR_KEY_MEDIAS_WRITE_FAILED = 20;
EndUserError.WARNING_KEY_MEDIAS_READ_ONLY = 21;
EndUserError.ERROR_KEY_MEDIAS_DELETE = 22;
EndUserError.ERROR_KEY_MEDIAS_CLEAR = 23;
EndUserError.ERROR_BAD_PRIVATE_KEY = 24;
EndUserError.ERROR_PKI_FORMATS_FAILED = 33;
EndUserError.ERROR_CSP_FAILED = 34;
EndUserError.ERROR_BAD_SIGNATURE = 35;
EndUserError.ERROR_AUTH_FAILED = 36;
EndUserError.ERROR_NOT_RECEIVER = 37;
EndUserError.ERROR_STORAGE_FAILED = 49;
EndUserError.ERROR_BAD_CERT = 50;
EndUserError.ERROR_CERT_NOT_FOUND = 51;
EndUserError.ERROR_INVALID_CERT_TIME = 52;
EndUserError.ERROR_CERT_IN_CRL = 53;
EndUserError.ERROR_BAD_CRL = 54;
EndUserError.ERROR_NO_VALID_CRLS = 55;
EndUserError.ERROR_GET_TIME_STAMP = 65;
EndUserError.ERROR_BAD_TSP_RESPONSE = 66;
EndUserError.ERROR_TSP_SERVER_CERT_NOT_FOUND = 67;
EndUserError.ERROR_TSP_SERVER_CERT_INVALID = 68;
EndUserError.ERROR_GET_OCSP_STATUS = 81;
EndUserError.ERROR_BAD_OCSP_RESPONSE = 82;
EndUserError.ERROR_CERT_BAD_BY_OCSP = 83;
EndUserError.ERROR_OCSP_SERVER_CERT_NOT_FOUND = 84;
EndUserError.ERROR_OCSP_SERVER_CERT_INVALID = 85;
EndUserError.ERROR_LDAP_ERROR = 97;
EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED = 4097;
EndUserError.ERROR_LIBRARY_VERSION_NOT_SUPPORTED = 4098;
EndUserError.ERROR_BROWSER_NOT_SUPPORTED = 65537;
EndUserError.ERROR_OPEN_FILE = 65552;
EndUserError.ERROR_READ_FILE = 65553;
EndUserError.ERROR_WRITE_FILE = 65554;
EndUserError.ERROR_DESCRIPTIONS_EX = [];
EndUserError.ERROR_DESCRIPTIONS_EX[EndUserError.ERROR_NONE] = ["Виконано успішно", "Выполнено успешно", "Executed successfully"];
EndUserError.ERROR_DESCRIPTIONS_EX[EndUserError.ERROR_NOT_SUPPORTED] = ["Операція не підтримується", "Операция не поддерживается", "Operation is not supported"];
EndUserError.ERROR_DESCRIPTIONS_EX[EndUserError.ERROR_UNKNOWN] = ["Невідома помилка", "Неизвестная ошибка", "Unknown error"];
EndUserError.ERROR_DESCRIPTIONS_EX[EndUserError.ERROR_LIBRARY_LOAD] = ["Виникла помилка при завантаженні криптографічної бібліотеки", "Возникла ошибка при загрузке криптографической библиотеки", "Error at load crypto library"];
EndUserError.ERROR_DESCRIPTIONS_EX[EndUserError.ERROR_NOT_INITIALIZED] = ["Бібліотека не ініціалізована", "Библиотека не инициализирована", "Library is not initialized"];
EndUserError.ERROR_DESCRIPTIONS_EX[EndUserError.ERROR_BAD_PARAMETER] = ["Невірний параметр", "Неверный параметр", "Incorrect parameter"];
EndUserError.ERROR_DESCRIPTIONS_EX[EndUserError.ERROR_BAD_CERT] = ["Сертифікат пошкоджений або не може бути використаний", "Сертификат поврежден или не может быть использован", "Certificate corrupted or cannot be used"];
EndUserError.ERROR_DESCRIPTIONS_EX[EndUserError.ERROR_CERT_NOT_FOUND] = ["Сертифікат не знайдено", "Сертификат не найден", "Certificate not found"];
EndUserError.ERROR_DESCRIPTIONS_EX[EndUserError.ERROR_TRANSMIT_REQUEST] = ["Виникла помилка при передачі запиту на сервер ЦСК за протоколом HTTP", "Возникла ошибка при передаче запроса на сервер ЦСК по протоколу HTTP", "Error at request transfer to CA's server by HTTP protocol"];
EndUserError.ERROR_DESCRIPTIONS_EX[EndUserError.ERROR_DOWNLOAD_FILE] = ["Виникла помилка при завантаженні файлу з HTTP-сервера", "Возникла ошибка при загрузке файла с HTTP-сервера", "Error at the load of file from a HTTP-server"];
EndUserError.ERROR_DESCRIPTIONS_EX[EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED] = ["Виникла помилка при взаємодії з криптографічною бібліотекою", "Возникла ошибка при взаимодействии с криптографической библиотекой", "Error at comunication with crypto library"];
EndUserError.ERROR_DESCRIPTIONS_EX[EndUserError.ERROR_LIBRARY_VERSION_NOT_SUPPORTED] = ["Встановлена версія бібліотеки не підтримується", "Установленная версия библиотеки не поддерживается", "The installed version of the library is not supported"];
EndUserError.ERROR_DESCRIPTIONS_EX[EndUserError.ERROR_BROWSER_NOT_SUPPORTED] = ["Ваш браузер не підтримується", "Ваш браузер не поддерживается", "Your browser is not supported"];
EndUserError.ERROR_DESCRIPTIONS_EX[EndUserError.ERROR_OPEN_FILE] = ["Виникла помилка при відкритті файлу", "Возникла ошибка при открытии файла", "Error at open file"];
EndUserError.ERROR_DESCRIPTIONS_EX[EndUserError.ERROR_READ_FILE] = ["Виникла помилка при зчитуванні файлу", "Возникла ошибка при чтении файла", "Error at read file"];
EndUserError.ERROR_DESCRIPTIONS_EX[EndUserError.ERROR_WRITE_FILE] = ["Виникла помилка при записі файлу", "Возникла ошибка при записи файла", "Error at write file"];
EndUserError.isError = function(n) {
    return n != EndUserError.ERROR_NONE
};
EndUserError.isSuccess = function(n) {
    return n == EndUserError.ERROR_NONE
};
EndUserError.getErrorDescriptionEx = function(n, t) {
    var i, r;
    return (i = EndUserError.ERROR_DESCRIPTIONS_EX[n],
    typeof i == "undefined" && (i = EndUserError.ERROR_DESCRIPTIONS_EX[EndUserError.ERROR_UNKNOWN]),
    r = i[t - 1],
    typeof r == "undefined") ? i[0] : r
};
var EU_SIGN_CP_FIELD_NAME_RESULT = "result"
  , EU_SIGN_CP_FIELD_NAME_ERROR = "error"
  , EU_SIGN_CP_FIELD_NAME_ERROR_CODE = "code"
  , EU_SIGN_CP_FIELD_NAME_ERROR_MSG = "message"
  , EUSignCP = function(n, t) {
    this.vendor = "JSC IIT";
    this.classVersion = EU_SIGN_CP_IFACE_VERSION;
    this.className = "EUSignCP";
    this.SUBJECT_TYPE_UNDIFFERENCED = 0;
    this.SUBJECT_TYPE_CA = 1;
    this.SUBJECT_TYPE_CA_SERVER = 2;
    this.SUBJECT_TYPE_RA_ADMINISTRATOR = 3;
    this.SUBJECT_TYPE_END_USER = 4;
    this.EU_SUBJECT_TYPE_UNDIFFERENCED = this.SUBJECT_TYPE_UNDIFFERENCED;
    this.EU_SUBJECT_TYPE_CA = this.SUBJECT_TYPE_CA;
    this.EU_SUBJECT_TYPE_CA_SERVER = this.SUBJECT_TYPE_CA_SERVER;
    this.EU_SUBJECT_TYPE_RA_ADMINISTRATOR = this.SUBJECT_TYPE_RA_ADMINISTRATOR;
    this.EU_SUBJECT_TYPE_END_USER = this.SUBJECT_TYPE_END_USER;
    this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED = 0;
    this.SUBJECT_CA_SERVER_SUB_TYPE_CMP = 1;
    this.SUBJECT_CA_SERVER_SUB_TYPE_TSP = 2;
    this.SUBJECT_CA_SERVER_SUB_TYPE_OCSP = 3;
    this.EU_SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED = this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED;
    this.EU_SUBJECT_CA_SERVER_SUB_TYPE_CMP = this.SUBJECT_CA_SERVER_SUB_TYPE_CMP;
    this.EU_SUBJECT_CA_SERVER_SUB_TYPE_TSP = this.SUBJECT_CA_SERVER_SUB_TYPE_TSP;
    this.EU_SUBJECT_CA_SERVER_SUB_TYPE_OCSP = this.SUBJECT_CA_SERVER_SUB_TYPE_OCSP;
    this.CERT_KEY_TYPE_UNKNOWN = 0;
    this.CERT_KEY_TYPE_DSTU4145 = 1;
    this.CERT_KEY_TYPE_RSA = 2;
    this.CERT_KEY_TYPE_ECDSA = 4;
    this.EU_CERT_KEY_TYPE_UNKNOWN = this.CERT_KEY_TYPE_UNKNOWN;
    this.EU_CERT_KEY_TYPE_DSTU4145 = this.CERT_KEY_TYPE_DSTU4145;
    this.EU_CERT_KEY_TYPE_RSA = this.CERT_KEY_TYPE_RSA;
    this.EU_CERT_KEY_TYPE_ECDSA = this.CERT_KEY_TYPE_ECDSA;
    this.KEY_USAGE_UNKNOWN = 0;
    this.KEY_USAGE_DIGITAL_SIGNATUR = 1;
    this.KEY_KEY_USAGE_KEY_AGREEMENT = 16;
    this.EU_KEY_USAGE_UNKNOWN = this.KEY_USAGE_UNKNOWN;
    this.EU_KEY_USAGE_DIGITAL_SIGNATURE = this.KEY_USAGE_DIGITAL_SIGNATUR;
    this.EU_KEY_USAGE_KEY_AGREEMENT = this.KEY_KEY_USAGE_KEY_AGREEMENT;
    this.EU_KEYS_REQUEST_TYPE_UA_DS = 1;
    this.EU_KEYS_REQUEST_TYPE_UA_KEP = 2;
    this.EU_KEYS_REQUEST_TYPE_INTERNATIONAL = 3;
    this.EU_KEYS_TYPE_NONE = 0;
    this.EU_KEYS_TYPE_DSTU_AND_ECDH_WITH_GOSTS = 1;
    this.EU_KEYS_TYPE_RSA_WITH_SHA = 2;
    this.EU_KEYS_LENGTH_DS_UA_191 = 1;
    this.EU_KEYS_LENGTH_DS_UA_257 = 2;
    this.EU_KEYS_LENGTH_DS_UA_307 = 3;
    this.EU_KEYS_LENGTH_DS_UA_FILE = 4;
    this.EU_KEYS_LENGTH_DS_UA_CERT = 5;
    this.EU_KEYS_LENGTH_KEP_UA_257 = 1;
    this.EU_KEYS_LENGTH_KEP_UA_431 = 2;
    this.EU_KEYS_LENGTH_KEP_UA_571 = 3;
    this.EU_KEYS_LENGTH_KEP_UA_FILE = 4;
    this.EU_KEYS_LENGTH_KEP_UA_CERT = 5;
    this.EU_KEYS_LENGTH_DS_RSA_1024 = 1;
    this.EU_KEYS_LENGTH_DS_RSA_2048 = 2;
    this.EU_KEYS_LENGTH_DS_RSA_3072 = 3;
    this.EU_KEYS_LENGTH_DS_RSA_4096 = 4;
    this.EU_KEYS_LENGTH_DS_RSA_FILE = 5;
    this.EU_KEYS_LENGTH_DS_RSA_CERT = 6;
    this.EU_RECIPIENT_APPEND_ISSUER_AND_SERIAL = 1;
    this.EU_RECIPIENT_APPEND_KEY_ID = 2;
    this.EU_RECIPIENT_APPEND_KEY_ID_USC_COMPAT = 3;
    this.EU_SAVE_SETTINGS_PARAMETER = "SaveSettings";
    this.EU_RESOLVE_OIDS_PARAMETER = "ResolveOIDs";
    this.EU_MAKE_PKEY_PFX_CONTAINER_PARAMETER = "MakePKeyPFXContainer";
    this.EU_SIGN_INCLUDE_CONTENT_TIME_STAMP_PARAMETER = "SignIncludeContentTimeStamp";
    this.EU_SIGN_TYPE_PARAMETER = "SignType";
    this.EU_SIGN_INCLUDE_CA_CERTIFICATES_PARAMETER = "SignIncludeCACertificates";
    this.EU_FS_CALCULATE_FINGERPRINT = "FSCalculateFingerprint";
    this.EU_SETTINGS_ID_NONE = 0;
    this.EU_SETTINGS_ID_MANDATORY = 31;
    this.EU_SETTINGS_ID_ALL = 1023;
    this.EU_SETTINGS_ID_FSTORE = 1;
    this.EU_SETTINGS_ID_PROXY = 2;
    this.EU_SETTINGS_ID_TSP = 4;
    this.EU_SETTINGS_ID_OCSP = 8;
    this.EU_SETTINGS_ID_LDAP = 16;
    this.EU_SETTINGS_ID_MODE = 32;
    this.EU_SETTINGS_ID_CMP = 64;
    this.EU_SETTINGS_ID_KM = 128;
    this.EU_SETTINGS_ID_OCSP_ACCESS_INFO_MODE = 256;
    this.EU_SETTINGS_ID_OCSP_ACCESS_INFO = 512;
    this.EU_HEADER_CA_TYPE = "UA1";
    this.EU_HEADER_PART_TYPE_SIGNED = 1;
    this.EU_HEADER_PART_TYPE_ENCRYPTED = 2;
    this.EU_HEADER_PART_TYPE_STAMPED = 3;
    this.EU_HEADER_PART_TYPE_CERTCRYPT = 4;
    this.EU_HEADER_MAX_CA_TYPE_SIZE = 3;
    this.EU_SIGNED_CRYPTO_HEADER = this.EU_HEADER_PART_TYPE_SIGNED;
    this.EU_ENCRYPTED_CRYPTO_HEADER = this.EU_HEADER_PART_TYPE_ENCRYPTED;
    this.EU_TIMESTAMPED_CRYPTO_HEADER = this.EU_HEADER_PART_TYPE_STAMPED;
    this.EU_CERTCRYPT_CRYPTO_HEADER = this.EU_HEADER_PART_TYPE_CERTCRYPT;
    this.EU_DEFAULT_LANG = 0;
    this.EU_UA_LANG = 1;
    this.EU_RU_LANG = 2;
    this.EU_EN_LANG = 3;
    this.EU_CONTENT_ENC_ALGO_TDES_CBC = 4;
    this.EU_CONTENT_ENC_ALGO_AES_128_CBC = 5;
    this.EU_CONTENT_ENC_ALGO_AES_192_CBC = 6;
    this.EU_CONTENT_ENC_ALGO_AES_256_CBC = 7;
    this.EU_DEV_CTX_MIN_PUBLIC_DATA_ID = 16;
    this.EU_DEV_CTX_MAX_PRIVATE_DATA_ID = 175;
    this.EU_UA_OID_EXT_KEY_USAGE_STAMP = "1.2.804.2.1.1.1.3.9";
    this.EU_CCS_TYPE_REVOKE = 1;
    this.EU_CCS_TYPE_HOLD = 2;
    this.EU_REVOCATION_REASON_UNKNOWN = 0;
    this.EU_REVOCATION_REASON_KEY_COMPROMISE = 1;
    this.EU_REVOCATION_REASON_NEW_ISSURED = 2;
    this.EU_SIGN_TYPE_UNKNOWN = 0;
    this.EU_SIGN_TYPE_CADES_BES = 1;
    this.EU_SIGN_TYPE_CADES_T = 4;
    this.EU_SIGN_TYPE_CADES_C = 8;
    this.EU_SIGN_TYPE_CADES_X_LONG = 16;
    this.EU_SIGN_TYPE_CADES_X_LONG_TRUSTED = 128;
    this.EU_CHECK_PRIVATE_KEY_CONTEXT_PARAMETER = "CheckPrivateKey";
    this.EU_RESOLVE_OIDS_CONTEXT_PARAMETER = "ResolveOIDs";
    this.EU_EXPORATABLE_CONTEXT_CONTEXT_PARAMETER = "ExportableContext";
    this.EU_RECIPIENT_APPEND_TYPE_BY_ISSUER_SERIAL = 1;
    this.EU_RECIPIENT_APPEND_TYPE_BY_KEY_ID = 2;
    this.EU_CTX_HASH_ALGO_UNKNOWN = 0;
    this.EU_CTX_HASH_ALGO_GOST34311 = 1;
    this.EU_CTX_HASH_ALGO_SHA160 = 2;
    this.EU_CTX_HASH_ALGO_SHA224 = 3;
    this.EU_CTX_HASH_ALGO_SHA256 = 4;
    this.EU_CTX_SIGN_UNKNOWN = 0;
    this.EU_CTX_SIGN_DSTU4145_WITH_GOST34311 = 1;
    this.EU_CTX_SIGN_RSA_WITH_SHA = 2;
    this.EU_FILE_PROCESS_CHUNK_SIZE = 1048576;
    this.m_language = this.EU_DEFAULT_LANG;
    this.m_lastErrorCode = EndUserError.ERROR_NONE;
    this.m_lastError = "";
    this.m_charset = EU_SIGN_CP_ENCODING_UTF_8;
    this.m_stringCoder = new EndUserUTF8Coder;
    this.m_base64Coder = new EndUserBase64Coder;
    this.m_dateCoder = new EndUserDateCoder;
    this.m_browserInfo = new EndUserBrowserInfo;
    var i = JSON_RPC_CLIENT_TYPE_SIGN_AGENT;
    switch (n) {
    case EU_SIGN_WEB_EXTENSION_ADDRESS:
        i = JSON_RPC_CLIENT_TYPE_WEB_EXTENSION;
        this.m_browserInfo.GetName() == EndUserBrowserInfo.BROWSER_NAME_FIREFOX && (n = EU_SIGN_WEB_EXTENSION_ADDRESS_FIREFOX);
        break;
    case EU_SIGN_WEB_ACTIVE_X_ADDRESS:
        i = JSON_RPC_CLIENT_TYPE_ACTIVE_X;
        break;
    case EU_SIGN_WEB_NPAPI_ADDRESS:
        i = JSON_RPC_CLIENT_TYPE_NPAPI
    }
    this.m_jsonRpcClient = new JSONRPCClient(i,n,t,window.location.protocol == "https:");
    this.m_monitorLibraryTimer = null
};
EUSignCP.prototype._funcMakeParams = function(n) {
    var r = [], i, u, t;
    for (n == null && (n = []),
    i = function(n) {
        var u, r, t;
        if (IsEndUserTransferableObject(n))
            return n.encode();
        if (Array.isArray(n)) {
            for (u = n.length,
            r = [],
            t = 0; t < u; t++)
                r[t] = i(n[t]);
            return r
        }
        return n
    }
    ,
    u = n.length,
    t = 0; t < u; t++)
        r[t] = i(n[t]);
    return r
};
EUSignCP.prototype._funcCall = function(n, t, i, r, u) {
    var e, o, f;
    if (this.IsAsync(i, r)) {
        e = u == null ? i : function(n) {
            u(n, i, r)
        }
        ;
        o = this;
        this.m_jsonRpcClient.execute(n, t, function(n) {
            o._funcHandleResult(n, e, r)
        });
        return
    }
    return f = this.m_jsonRpcClient.execute(n, t, null),
    f = this._funcHandleResult(f),
    u ? u(f) : f
};
EUSignCP.prototype._funcHandleResult = function(n, t, i) {
    var r, f, u = this.IsAsync(t, i);
    if (n == null) {
        if (r = this.MakeError(EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, ""),
        u) {
            i(r);
            return
        }
        throw new EndUserException(r.errorCode,r.message);
    }
    if (r = n[EU_SIGN_CP_FIELD_NAME_ERROR],
    f = r[EU_SIGN_CP_FIELD_NAME_ERROR_CODE],
    EndUserError.isError(f)) {
        if (f == EndUserError.WARNING_END_OF_ENUM) {
            if (u) {
                t(null);
                return
            }
            return null
        }
        if (r = this.MakeError(f, r[EU_SIGN_CP_FIELD_NAME_ERROR_MSG]),
        u) {
            i(r);
            return
        }
        throw new EndUserException(r.errorCode,r.message);
    }
    try {
        n = this._funcDecodeResult(n[EU_SIGN_CP_FIELD_NAME_RESULT])
    } catch (e) {
        if (r = this.MakeError(EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, ""),
        u) {
            i(r);
            return
        }
        throw new EndUserException(r.errorCode,r.message);
    }
    if (u) {
        t(n);
        return
    }
    return n
};
EUSignCP.prototype._funcDecodeResult = function(n) {
    if (n == null)
        return null;
    var t = function(n) {
        var u, f, i, e, r;
        if (Array.isArray(n)) {
            for (u = [],
            f = n.length,
            i = 0; i < f; i++)
                u[i] = t(n[i]);
            return u
        }
        return typeof n == "object" ? (e = n[EU_SIGN_CP_FIELD_NAME_CLASS_NAME],
        r = new EndUserTransferableObject[e],
        !r.decode(n)) ? null : r.className == "EndUserByteArray" ? r.GetData() : r : n
    };
    return t(n)
};
EUSignCP.prototype._checkVersion = function(n) {
    // пускай всегда возвращает 0, будто версия подходит

   /* var t, i;
    try {
        if (t = this.classVersion,
        t == n)
            return !0;
        if (t = t.split("."),
        n = n.split("."),
        t.length != n.length)
            return !1;
        for (i = 0; i < n.length; i++)
            if (parseInt(t[i]) > parseInt(n[i]))
                return !1
    } catch (r) {
        return !1
    } */
    return !0
};
EUSignCP.prototype._stringToBytes = function(n, t) {
    try {
        return this.m_stringCoder.encode(n)
    } catch (r) {
        var i = this.MakeError(EndUserError.ERROR_BAD_PARAMETER, "");
        if (typeof t != "undefined")
            return setTimeout(function() {
                t(i)
            }, 1),
            null;
        throw new EndUserException(i.errorCode,i.message);
    }
};
EUSignCP.prototype._bytesToString = function(n, t) {
    try {
        return this.m_stringCoder.decode(n)
    } catch (r) {
        var i = this.MakeError(EndUserError.ERROR_BAD_PARAMETER, "");
        if (typeof t != "undefined")
            return setTimeout(function() {
                t(i)
            }, 1),
            null;
        throw new EndUserException(i.errorCode,i.message);
    }
};
EUSignCP.prototype._base64Encode = function(n, t) {
    try {
        return this.m_base64Coder.encode(n)
    } catch (r) {
        var i = this.MakeError(EndUserError.ERROR_BAD_PARAMETER, "");
        if (typeof t != "undefined")
            return setTimeout(function() {
                t(i)
            }, 1),
            null;
        throw new EndUserException(i.errorCode,i.message);
    }
};
EUSignCP.prototype._base64Decode = function(n, t) {
    try {
        return this.m_base64Coder.decode(n)
    } catch (r) {
        var i = this.MakeError(EndUserError.ERROR_BAD_PARAMETER, "");
        if (typeof t != "undefined")
            return setTimeout(function() {
                t(i)
            }, 1),
            null;
        throw new EndUserException(i.errorCode,i.message);
    }
};
EUSignCP.prototype._copyArrayData = function(n, t) {
    try {
        if (n.length != t.length)
            return !1;
        if (Array.isArray(t) || Array.isArray(n))
            for (var i = 0; i < t.length; i++)
                n[i] = t[i];
        else
            n.set(t);
        return !0
    } catch (r) {
        return !1
    }
};
EUSignCP.prototype._startMonitorLibraryStatus = function() {
    var n = this;
    try {
        n.m_monitorLibraryTimer = setInterval(function() {
            n.IsInitialized(function(t) {
                t || n._stopMonitorLibraryStatus()
            }, function() {
                n._stopMonitorLibraryStatus()
            })
        }, EU_SIGN_WEB_MONITOR_STATUS_INTERVAL)
    } catch (t) {}
};
EUSignCP.prototype._stopMonitorLibraryStatus = function() {
    try {
        if (this.m_monitorLibraryTimer == null)
            return;
        clearInterval(this.m_monitorLibraryTimer);
        this.m_monitorLibraryTimer = null
    } catch (n) {}
};
EUSignCP.prototype.IsAsync = function(n, t) {
    return typeof n != "undefined" && typeof t != "undefined"
};
EUSignCP.prototype.MakeError = function(n, t) {
    return t == "" && (t = EndUserError.getErrorDescriptionEx(n, this.m_language)),
    this.m_lastErrorCode = n,
    this.m_lastError = t,
    new EndUserError(n,t)
};
EUSignCP.prototype.RaiseError = function(n, t) {
    var i = this.MakeError(n, t);
    throw new EndUserException(i.errorCode,i.message);
};
EUSignCP.prototype.GetInstallURL = function(n, t) {
    var u = this.m_browserInfo.GetOSName(), f = this.m_browserInfo.GetArch(), r = [], i;
    t = t || EU_SIGN_WEB_INSTALL_DOWNLOAD_URL;
    i = function(n) {
        r.push(t + "/" + n)
    }
    ;
    switch (u) {
    case EndUserBrowserInfo.OS_NAME_WINDOWS:
        i(EU_SIGN_WEB_INSTALL_WIN);
        break;
    case EndUserBrowserInfo.OS_NAME_MAC:
        i(EU_SIGN_WEB_INSTALL_MAC);
        break;
    case EndUserBrowserInfo.OS_NAME_LINUX:
        f == EndUserBrowserInfo.BROWSER_ARCH_NAME_X86 ? (i(EU_SIGN_WEB_INSTALL_LINUX_X32),
        i(EU_SIGN_WEB_INSTALL_LINUX_RPM_X32),
        i(EU_SIGN_WEB_INSTALL_LINUX_TAR_X32)) : (i(EU_SIGN_WEB_INSTALL_LINUX_X64),
        i(EU_SIGN_WEB_INSTALL_LINUX_RPM_X64),
        i(EU_SIGN_WEB_INSTALL_LINUX_TAR_X64));
        break;
    case EndUserBrowserInfo.OS_NAME_ANDROID:
        i(EU_SIGN_WEB_INSTALL_ANDROID);
        break;
    default:
        return null
    }
    return n ? r : r[0]
};
EUSignCP.prototype.GetUpdateURL = function(n, t) {
    var u = this.m_browserInfo.GetOSName(), f = this.m_browserInfo.GetArch(), r = [], i;
    t = t || EU_SIGN_WEB_INSTALL_DOWNLOAD_URL;
    i = function(n) {
        r.push(t + "/" + n)
    }
    ;
    switch (u) {
    case EndUserBrowserInfo.OS_NAME_WINDOWS:
        i(EU_SIGN_WEB_UPDATE_WIN);
        break;
    case EndUserBrowserInfo.OS_NAME_MAC:
        i(EU_SIGN_WEB_UPDATE_MAC);
        break;
    case EndUserBrowserInfo.OS_NAME_LINUX:
        f == EndUserBrowserInfo.BROWSER_ARCH_NAME_X86 ? (i(EU_SIGN_WEB_UPDATE_LINUX_X32),
        i(EU_SIGN_WEB_UPDATE_LINUX_RPM_X32),
        i(EU_SIGN_WEB_UPDATE_LINUX_TAR_X32)) : (i(EU_SIGN_WEB_UPDATE_LINUX_X64),
        i(EU_SIGN_WEB_UPDATE_LINUX_RPM_X64),
        i(EU_SIGN_WEB_UPDATE_LINUX_TAR_X64));
        break;
    case EndUserBrowserInfo.OS_NAME_ANDROID:
        i(EU_SIGN_WEB_UPDATE_ANDROID);
        break;
    default:
        return null
    }
    return n ? r : r[0]
};
EUSignCP.prototype.GetHelpURL = function(n) {
    var t = this.m_browserInfo.GetOSName();
    n = n || EU_SIGN_WEB_INSTALL_DOWNLOAD_URL;
    switch (t) {
    case EndUserBrowserInfo.OS_NAME_WINDOWS:
        return n + "/" + EU_SIGN_WEB_MANUAL_WIN;
    case EndUserBrowserInfo.OS_NAME_MAC:
        return n + "/" + EU_SIGN_WEB_MANUAL_MAC;
    case EndUserBrowserInfo.OS_NAME_LINUX:
        return n + "/" + EU_SIGN_WEB_MANUAL_LINUX;
    default:
        return null
    }
};
EUSignCP.prototype.GetWebExtensionInstallURL = function() {
    var n = this.m_browserInfo.GetName();
    switch (n) {
    case EndUserBrowserInfo.BROWSER_NAME_CHROME:
        return EU_SIGN_CHROME_WEB_EXTENSION_INSTALL;
    case EndUserBrowserInfo.BROWSER_NAME_FIREFOX:
        return EU_SIGN_FIREFOX_WEB_EXTENSION_INSTALL;
    case EndUserBrowserInfo.BROWSER_NAME_OPERA:
        return EU_SIGN_OPERA_WEB_EXTENSION_INSTALL;
    default:
        return null
    }
};
EUSignCP.prototype.GetInstallPath = function(n, t) {
    var i;
    return i = this._funcMakeParams(null),
    this._funcCall("GetInstallPath", i, n, t, null)
};
EUSignCP.prototype.SelectFile = function(n, t, i, r) {
    return this.SelectFileEx(n, t, null, null, null, null, i, r)
};
EUSignCP.prototype.SelectFileEx = function(n, t, i, r, u, f, e, o) {
    var s;
    return s = this._funcMakeParams([n, t, i, r, u, f]),
    this._funcCall("SelectFile", s, e, o, null)
};
EUSignCP.prototype.SelectFolder = function(n, t) {
    return this.SelectFolderEx(null, null, null, n, t)
};
EUSignCP.prototype.SelectFolderEx = function(n, t, i, r, u) {
    var f;
    return f = this._funcMakeParams([n, t, i]),
    this._funcCall("SelectFolder", f, r, u, null)
};
EUSignCP.prototype.CreateFolder = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("CreateFolder", r, t, i, null)
};
EUSignCP.prototype.ReadFile = function(n, t, i) {
    var v = this.IsAsync(t, i), u = this, r = u.EU_FILE_PROCESS_CHUNK_SIZE, o, s, e;
    if (v)
        o = {
            buf: null,
            length: 0,
            curLength: 0
        },
        s = function(f) {
            if (f.curLength == f.length) {
                t(f.buf);
                return
            }
            var e = f.length - f.curLength;
            e > r && (e = r);
            u.ReadFileWithOffset(n, f.curLength, e, function(n) {
                f.buf.set(n, f.curLength, n.length);
                f.curLength += n.length;
                s(f)
            }, i)
        }
        ,
        u.GetFileSize(n, function(n) {
            o.buf = new Uint8Array(n);
            o.length = n;
            s(o)
        }, i);
    else {
        var h = u.GetFileSize(n), c = Math.floor(h / r), a = h % r, f, l = new Uint8Array(h);
        for (e = 0; e < c; e++)
            f = u.ReadFileWithOffset(n, e * r, r),
            l.set(f, e * r, f.length);
        return a != 0 && (f = u.ReadFileWithOffset(n, c * r, a),
        l.set(f, c * r, f.length)),
        l
    }
};
EUSignCP.prototype.WriteFile = function(n, t, i, r) {
    var a = this.IsAsync(i, r), f = this, u = f.EU_FILE_PROCESS_CHUNK_SIZE, o, s, e;
    if (a)
        o = {
            buf: null,
            length: 0,
            curLength: 0
        },
        s = function(t, e) {
            if (!e && t.curLength == t.length) {
                i();
                return
            }
            var o = t.length - t.curLength;
            o > u && (o = u);
            f.WriteFileWithOffset(n, t.curLength, f.Copy(t.buf, t.curLength, u), function() {
                t.curLength += o;
                s(t, !1)
            }, r)
        }
        ,
        o.buf = t,
        o.length = t.length,
        s(o, !0);
    else {
        var c = t.length
          , h = Math.floor(c / u)
          , l = c % u;
        for (e = 0; e < h; e++)
            f.WriteFileWithOffset(n, e * u, f.Copy(t, e * u, u));
        (l != 0 || t.length == 0) && f.WriteFileWithOffset(n, h * u, f.Copy(t, h * u, l))
    }
};
EUSignCP.prototype.GetFileSize = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("GetFileSize", r, t, i, null)
};
EUSignCP.prototype.ReadFileWithOffset = function(n, t, i, r, u) {
    var f;
    return f = this._funcMakeParams([n, t, i]),
    this._funcCall("ReadFileWithOffset", f, r, u, null)
};
EUSignCP.prototype.WriteFileWithOffset = function(n, t, i, r, u) {
    var f;
    return f = this._funcMakeParams([n, t, new EndUserByteArray(i)]),
    this._funcCall("WriteFileWithOffset", f, r, u, null)
};
EUSignCP.prototype.DeleteFile = function(n, t, i) {
    var r;
    r = this._funcMakeParams([n]);
    this._funcCall("DeleteFile", r, t, i, null)
};
EUSignCP.prototype.AppendFile = function(n, t, i, r) {
    var u;
    u = this._funcMakeParams([n, t]);
    this._funcCall("AppendFile", u, i, r, null)
};
EUSignCP.prototype.CopyFileWithOffset = function(n, t, i, r, u, f) {
    var e;
    e = this._funcMakeParams([n, t, i, r]);
    this._funcCall("CopyFileWithOffset", e, u, f, null)
};
EUSignCP.prototype.Load = function(n, t) {
    var e = this.IsAsync(n, t), i = this, r, u, f;
    if (e) {
        r = function(r) {
            /*
            if (!i._checkVersion(r)) {
                var u = i.MakeError(EndUserError.ERROR_LIBRARY_VERSION_NOT_SUPPORTED, "");
                t(u);
                return
            }*/
            n()
        }
        ;
        u = function(n) {
            n = i.MakeError(EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, "");
            t(n)
        }
        ;
        this.GetVersion(r, u);
        return
    }
    try {
        f = this._checkVersion(this.GetVersion())
    } catch (o) {
        this.RaiseError(EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, "")
    }
    f || this.RaiseError(EndUserError.ERROR_LIBRARY_VERSION_NOT_SUPPORTED, "")
};
EUSignCP.prototype.GetVersion = function(n, t) {
    var i;
    return i = this._funcMakeParams(null),
    this._funcCall("GetVersion", i, n, t, null)
};
EUSignCP.prototype.IsInitialized = function(n, t) {
    var i;
    return i = this._funcMakeParams(null),
    this._funcCall("IsInitialized", i, n, t, null)
};
EUSignCP.prototype.Initialize = function(n, t) {
    var i = this, r = this.IsAsync(n, t), f = function() {
        i._startMonitorLibraryStatus();
        n()
    }, u;
    u = this._funcMakeParams(null);
    this._funcCall("Initialize", u, r ? f : n, t, null);
    r || i._startMonitorLibraryStatus()
};
EUSignCP.prototype.Finalize = function(n, t) {
    var i;
    this._stopMonitorLibraryStatus();
    i = this._funcMakeParams(null);
    this._funcCall("Finalize", i, n, t, null)
};
EUSignCP.prototype.ResetOperation = function(n, t) {
    var i;
    i = this._funcMakeParams(null);
    this._funcCall("ResetOperation", i, n, t, null)
};
EUSignCP.prototype.SetUIMode = function(n, t, i) {
    var r;
    r = this._funcMakeParams([n]);
    this._funcCall("SetUIMode", r, t, i, null)
};
EUSignCP.prototype.SetLanguage = function(n, t, i) {
    var r, f = this, u = this.IsAsync(t, i), e = function() {
        f.m_language = n;
        t()
    };
    r = this._funcMakeParams([n]);
    this._funcCall("SetLanguage", r, u ? e : t, i, null);
    u || (this.m_language = n)
};
EUSignCP.prototype.SetCharset = function(n, t, i) {
    var u, f = this.IsAsync(t, i), r;
    if (u = EndUserStringCoder.GetCoder(n),
    u == null) {
        if (r = this.MakeError(EndUserError.ERROR_BAD_PARAMETER, ""),
        f) {
            setTimeout(function() {
                i(r)
            }, 1);
            return
        }
        throw new EndUserException(r.errorCode,r.message);
    }
    this.m_stringCoder = u;
    this.m_charset = n;
    f && setTimeout(function() {
        t()
    }, 1)
};
EUSignCP.prototype.SetRuntimeParameter = function(n, t, i, r) {
    var u;
    typeof t == "boolean" && (t = t ? 1 : 0);
    u = this._funcMakeParams([n, t]);
    this._funcCall("SetRuntimeParameter", u, i, r, null)
};
EUSignCP.prototype.GetStorageParameter = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, t]),
    this._funcCall("GetStorageParameter", u, i, r, null)
};
EUSignCP.prototype.SetStorageParameter = function(n, t, i, r, u) {
    var f;
    f = this._funcMakeParams([n, t, i]);
    this._funcCall("SetStorageParameter", f, r, u, null)
};
EUSignCP.prototype.CreateArrayList = function() {
    return new EndUserArrayList
};
EUSignCP.prototype.GetLastError = function() {
    return this.m_lastError
};
EUSignCP.prototype.GetLastErrorCode = function() {
    return this.m_lastErrorCode
};
EUSignCP.prototype.BASE64Encode = function(n, t, i) {
    var r = this._base64Encode(n, i);
    if (this.IsAsync(t, i))
        setTimeout(function() {
            t(r)
        }, 1);
    else
        return r
};
EUSignCP.prototype.BASE64Decode = function(n, t, i) {
    var r = this._base64Decode(n, i);
    if (this.IsAsync(t, i))
        setTimeout(function() {
            t(r)
        }, 1);
    else
        return r
};
EUSignCP.prototype.StringToBytes = function(n, t, i) {
    var r = this._stringToBytes(n, i);
    if (this.IsAsync(t, i))
        setTimeout(function() {
            t(r)
        }, 1);
    else
        return r
};
EUSignCP.prototype.BytesToString = function(n, t, i) {
    var r = this._bytesToString(n, i);
    if (this.IsAsync(t, i))
        setTimeout(function() {
            t(r)
        }, 1);
    else
        return r
};
EUSignCP.prototype.Concatenate = function(n, t) {
    var i, f, r, u;
    if (Array.isArray(n) && Array.isArray(t))
        return n.concat(t);
    if (f = n.length + t.length,
    Array.isArray(n) || Array.isArray(t)) {
        for (i = new Array(f),
        r = 0; r < n.length; r++)
            i[r] = n[r];
        for (u = 0; u < t.length; r++,
        u++)
            i[r] = t[u]
    } else
        i = new EndUserUint8Array(f),
        i.set(n),
        i.set(t, n.length);
    return i
};
EUSignCP.prototype.Copy = function(n, t, i) {
    return n.slice(t, t + i)
};
EUSignCP.prototype.SetSettings = function(n, t) {
    var i;
    i = this._funcMakeParams(null);
    this._funcCall("SetSettings", i, n, t, null)
};
EUSignCP.prototype.DoesNeedSetSettings = function(n, t) {
    var i;
    return i = this._funcMakeParams(null),
    this._funcCall("DoesNeedSetSettings", i, n, t, null)
};
EUSignCP.prototype.InitializeMandatorySettings = function(n, t) {
    var i = this, s = this.IsAsync(n, t), u, r, f, e, o;
    if (s)
        eu_wait(function(n) {
            var r = i.CreateFileStoreSettings();
            i.SetFileStoreSettings(r, n, t)
        }).eu_wait(function(n) {
            i.GetProxySettings(function() {
                n()
            }, function() {
                i.GetSystemProxySettings(function(r) {
                    i.SetProxySettings(r, n, t)
                }, function() {
                    var r = i.CreateProxySettings();
                    i.SetProxySettings(r, n, t)
                })
            })
        }).eu_wait(function(n) {
            var r = i.CreateTSPSettings();
            i.SetTSPSettings(r, n, t)
        }).eu_wait(function(n) {
            var r = i.CreateLDAPSettings();
            i.SetLDAPSettings(r, n, t)
        }).eu_wait(function() {
            var r = i.CreateOCSPSettings();
            i.SetOCSPSettings(r, n, t)
        });
    else {
        u = i.CreateFileStoreSettings();
        i.SetFileStoreSettings(u);
        try {
            r = i.GetProxySettings()
        } catch (h) {
            r = i.CreateProxySettings();
            try {
                r = i.GetSystemProxySettings()
            } catch (h) {}
            i.SetProxySettings(r)
        }
        f = i.CreateTSPSettings();
        i.SetTSPSettings(f);
        e = i.CreateLDAPSettings();
        i.SetLDAPSettings(e);
        o = i.CreateOCSPSettings();
        i.SetOCSPSettings(o)
    }
};
EUSignCP.prototype.CreateModeSettings = function() {
    return new EndUserModeSettings
};
EUSignCP.prototype.GetModeSettings = function(n, t) {
    var i;
    return i = this._funcMakeParams(null),
    this._funcCall("GetModeSettings", i, n, t, null)
};
EUSignCP.prototype.SetModeSettings = function(n, t, i) {
    var r;
    r = this._funcMakeParams([n]);
    this._funcCall("SetModeSettings", r, t, i, null)
};
EUSignCP.prototype.CreateKeyMediaSettings = function() {
    return new EndUserKeyMediaSettings
};
EUSignCP.prototype.GetKeyMediaSettings = function(n, t) {
    var i;
    return i = this._funcMakeParams(null),
    this._funcCall("GetKeyMediaSettings", i, n, t, null)
};
EUSignCP.prototype.SetKeyMediaSettings = function(n, t, i) {
    var r;
    r = this._funcMakeParams([n]);
    this._funcCall("SetKeyMediaSettings", r, t, i, null)
};
EUSignCP.prototype.CreateFileStoreSettings = function() {
    return new EndUserFileStoreSettings
};
EUSignCP.prototype.GetFileStoreSettings = function(n, t) {
    var i;
    return i = this._funcMakeParams(null),
    this._funcCall("GetFileStoreSettings", i, n, t, null)
};
EUSignCP.prototype.SetFileStoreSettings = function(n, t, i) {
    var r;
    r = this._funcMakeParams([n]);
    this._funcCall("SetFileStoreSettings", r, t, i, null)
};
EUSignCP.prototype.CreateProxySettings = function() {
    return new EndUserProxySettings
};
EUSignCP.prototype.GetProxySettings = function(n, t) {
    var i;
    return i = this._funcMakeParams(null),
    this._funcCall("GetProxySettings", i, n, t, null)
};
EUSignCP.prototype.SetProxySettings = function(n, t, i) {
    var r;
    r = this._funcMakeParams([n]);
    this._funcCall("SetProxySettings", r, t, i, null)
};
EUSignCP.prototype.CreateOCSPSettings = function() {
    return new EndUserOCSPSettings
};
EUSignCP.prototype.GetOCSPSettings = function(n, t) {
    var i;
    return i = this._funcMakeParams(null),
    this._funcCall("GetOCSPSettings", i, n, t, null)
};
EUSignCP.prototype.SetOCSPSettings = function(n, t, i) {
    var r;
    r = this._funcMakeParams([n]);
    this._funcCall("SetOCSPSettings", r, t, i, null)
};
EUSignCP.prototype.CreateOCSPAccessInfoModeSettings = function() {
    return new EndUserOCSPAccessInfoModeSettings
};
EUSignCP.prototype.GetOCSPAccessInfoModeSettings = function(n, t) {
    var i;
    return i = this._funcMakeParams(null),
    this._funcCall("GetOCSPAccessInfoModeSettings", i, n, t, null)
};
EUSignCP.prototype.SetOCSPAccessInfoModeSettings = function(n, t, i) {
    var r;
    r = this._funcMakeParams([n]);
    this._funcCall("SetOCSPAccessInfoModeSettings", r, t, i, null)
};
EUSignCP.prototype.CreateOCSPAccessInfoSettings = function() {
    return new EndUserOCSPAccessInfoSettings
};
EUSignCP.prototype.EnumOCSPAccessInfoSettings = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("EnumOCSPAccessInfoSettings", r, t, i, null)
};
EUSignCP.prototype.GetOCSPAccessInfoSettings = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("GetOCSPAccessInfoSettings", r, t, i, null)
};
EUSignCP.prototype.SetOCSPAccessInfoSettings = function(n, t, i) {
    var r = this, u, o = r.IsAsync(t, i), e, f;
    if (n = Array.isArray(n) ? n : [n],
    o)
        e = function(f) {
            if (f >= n.length) {
                t();
                return
            }
            u = r._funcMakeParams([n[f]]);
            r._funcCall("SetOCSPAccessInfoSettings", u, function() {
                e(f + 1)
            }, i, null)
        }
        ,
        e(0);
    else
        for (f = 0; f < n.length; f++)
            u = r._funcMakeParams([n[f]]),
            r._funcCall("SetOCSPAccessInfoSettings", u, t, i, null)
};
EUSignCP.prototype.DeleteOCSPAccessInfoSettings = function(n, t, i) {
    var r;
    r = this._funcMakeParams([n]);
    this._funcCall("DeleteOCSPAccessInfoSettings", r, t, i, null)
};
EUSignCP.prototype.CreateTSPSettings = function() {
    return new EndUserTSPSettings
};
EUSignCP.prototype.GetTSPSettings = function(n, t) {
    var i;
    return i = this._funcMakeParams(null),
    this._funcCall("GetTSPSettings", i, n, t, null)
};
EUSignCP.prototype.SetTSPSettings = function(n, t, i) {
    var r;
    r = this._funcMakeParams([n]);
    this._funcCall("SetTSPSettings", r, t, i, null)
};
EUSignCP.prototype.CreateLDAPSettings = function() {
    return new EndUserLDAPSettings
};
EUSignCP.prototype.GetLDAPSettings = function(n, t) {
    var i;
    return i = this._funcMakeParams(null),
    this._funcCall("GetLDAPSettings", i, n, t, null)
};
EUSignCP.prototype.SetLDAPSettings = function(n, t, i) {
    var r;
    r = this._funcMakeParams([n]);
    this._funcCall("SetLDAPSettings", r, t, i, null)
};
EUSignCP.prototype.CreateCMPSettings = function() {
    return new EndUserCMPSettings
};
EUSignCP.prototype.GetCMPSettings = function(n, t) {
    var i;
    return i = this._funcMakeParams(null),
    this._funcCall("GetCMPSettings", i, n, t, null)
};
EUSignCP.prototype.SetCMPSettings = function(n, t, i) {
    var r;
    r = this._funcMakeParams([n]);
    this._funcCall("SetCMPSettings", r, t, i, null)
};
EUSignCP.prototype.GetSystemProxySettings = function(n, t) {
    var i;
    return i = this._funcMakeParams(null),
    this._funcCall("GetSystemProxySettings", i, n, t, null)
};
EUSignCP.prototype.SetOCSPResponseExpireTime = function(n, t, i) {
    var r;
    r = this._funcMakeParams([n]);
    this._funcCall("SetOCSPResponseExpireTime", r, t, i, null)
};
EUSignCP.prototype.RefreshFileStore = function(n, t, i) {
    var r;
    r = this._funcMakeParams([n]);
    this._funcCall("RefreshFileStore", r, t, i, null)
};
EUSignCP.prototype.ShowCertificates = function(n, t) {
    var i;
    i = this._funcMakeParams(null);
    this._funcCall("ShowCertificates", i, n, t, null)
};
EUSignCP.prototype.SelectCertificateInfo = function(n, t) {
    var i;
    return i = this._funcMakeParams(null),
    this._funcCall("SelectCertificateInfo", i, n, t, null)
};
EUSignCP.prototype.GetCertificatesCount = function(n, t, i, r) {
    (typeof n != "number" || typeof t != "number") && (i = n,
    r = t,
    n = this.SUBJECT_TYPE_UNDIFFERENCED,
    t = this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED);
    var u;
    return u = this._funcMakeParams([n, t]),
    this._funcCall("GetCertificatesCount", u, i, r, null)
};
EUSignCP.prototype.GetCACertificatesCount = function(n, t) {
    return this.GetCertificatesCount(this.SUBJECT_TYPE_CA, this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED, n, t)
};
EUSignCP.prototype.GetCAServerCertificatesCount = function(n, t) {
    return this.GetCertificatesCount(this.SUBJECT_TYPE_CA_SERVER, this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED, n, t)
};
EUSignCP.prototype.GetCMPServerCertificatesCount = function(n, t) {
    return this.GetCertificatesCount(this.SUBJECT_TYPE_CA_SERVER, this.SUBJECT_CA_SERVER_SUB_TYPE_CMP, n, t)
};
EUSignCP.prototype.GetOCSPServerCertificatesCount = function(n, t) {
    return this.GetCertificatesCount(this.SUBJECT_TYPE_CA_SERVER, this.SUBJECT_CA_SERVER_SUB_TYPE_OCSP, n, t)
};
EUSignCP.prototype.GetTSPServerCertificatesCount = function(n, t) {
    return this.GetCertificatesCount(this.SUBJECT_TYPE_CA_SERVER, this.SUBJECT_CA_SERVER_SUB_TYPE_TSP, n, t)
};
EUSignCP.prototype.GetRAAdministratorCertificatesCount = function(n, t) {
    return this.GetCertificatesCount(this.SUBJECT_TYPE_RA_ADMINISTRATOR, this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED, n, t)
};
EUSignCP.prototype.GetEndUserCertificatesCount = function(n, t) {
    return this.GetCertificatesCount(this.SUBJECT_TYPE_END_USER, this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED, n, t)
};
EUSignCP.prototype.EnumCertificates = function(n, t, i, r, u) {
    (typeof t != "number" || typeof i != "number") && (r = t,
    u = i,
    i = n,
    n = this.SUBJECT_TYPE_UNDIFFERENCED,
    t = this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED);
    var f;
    return f = this._funcMakeParams([n, t, i]),
    this._funcCall("EnumCertificates", f, r, u, null)
};
EUSignCP.prototype.EnumCACertificates = function(n, t, i) {
    return this.EnumCertificates(n, this.SUBJECT_TYPE_CA, this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED, t, i)
};
EUSignCP.prototype.EnumCAServerCertificates = function(n, t, i) {
    return this.EnumCertificates(n, this.SUBJECT_TYPE_CA_SERVER, this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED, t, i)
};
EUSignCP.prototype.EnumCMPServerCertificatesCount = function(n, t, i) {
    return this.EnumCertificates(n, this.SUBJECT_TYPE_CA_SERVER, this.SUBJECT_CA_SERVER_SUB_TYPE_CMP, t, i)
};
EUSignCP.prototype.EnumOCSPServerCertificatesCount = function(n, t, i) {
    return this.EnumCertificates(n, this.SUBJECT_TYPE_CA_SERVER, this.SUBJECT_CA_SERVER_SUB_TYPE_OCSP, t, i)
};
EUSignCP.prototype.EnumTSPServerCertificatesCount = function(n, t, i) {
    return this.EnumCertificates(n, this.SUBJECT_TYPE_CA_SERVER, this.SUBJECT_CA_SERVER_SUB_TYPE_TSP, t, i)
};
EUSignCP.prototype.EnumRAAdministratorCertificatesCount = function(n, t, i) {
    return this.EnumCertificates(n, this.SUBJECT_TYPE_RA_ADMINISTRATOR, this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED, t, i)
};
EUSignCP.prototype.EnumEndUserCertificatesCount = function(n, t, i) {
    return this.EnumCertificates(n, this.SUBJECT_TYPE_END_USER, this.SUBJECT_CA_SERVER_SUB_TYPE_UNDIFFERENCED, t, i)
};
EUSignCP.prototype.GetCertificateInfo = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, t]),
    this._funcCall("GetCertificateInfo", u, i, r, null)
};
EUSignCP.prototype.GetCertificateInfoEx = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, t]),
    this._funcCall("GetCertificateInfoEx", u, i, r, null)
};
EUSignCP.prototype.GetCertificate = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, t]),
    this._funcCall("GetCertificate", u, i, r, null)
};
EUSignCP.prototype.CheckCertificateByIssuerAndSerial = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, t]),
    this._funcCall("CheckCertificateByIssuerAndSerial", u, i, r, null)
};
EUSignCP.prototype.CheckCertificate = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([new EndUserByteArray(n)]),
    this._funcCall("CheckCertificate", r, t, i, null)
};
EUSignCP.prototype.ParseCertificate = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([new EndUserByteArray(n)]),
    this._funcCall("ParseCertificate", r, t, i, null)
};
EUSignCP.prototype.ParseCertificateEx = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([new EndUserByteArray(n)]),
    this._funcCall("ParseCertificateEx", r, t, i, null)
};
EUSignCP.prototype.SaveCertificate = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([new EndUserByteArray(n)]),
    this._funcCall("SaveCertificate", r, t, i, null)
};
EUSignCP.prototype.SaveCertificates = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([new EndUserByteArray(n)]),
    this._funcCall("SaveCertificates", r, t, i, null)
};
EUSignCP.prototype.SaveCertificatesEx = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([new EndUserByteArray(n), t ? new EndUserByteArray(t) : null]),
    this._funcCall("SaveCertificatesEx", u, i, r, null)
};
EUSignCP.prototype.GetCertificatesFromLDAPByEDRPOUCode = function(n, t, i, r, u, f, e) {
    var o;
    return r != null && u != null ? (r.className == "EndUserArrayList" && (r = r.m_array),
    u.className == "EndUserArrayList" && (u = u.m_array)) : (r = null,
    u = null),
    o = this._funcMakeParams([n, t, i, r, u]),
    this._funcCall("GetCertificatesFromLDAPByEDRPOUCode", o, f, e, null)
};
EUSignCP.prototype.GetCertificateByEmail = function(n, t, i, r, u, f) {
    var e;
    return typeof r != "string" && (r = this.m_dateCoder.encode(r)),
    e = this._funcMakeParams([n, t, i, r]),
    this._funcCall("GetCertificateByEmail", e, u, f, null)
};
EUSignCP.prototype.GetCertificateByNBUCode = function(n, t, i, r, u, f) {
    var e;
    return typeof r != "string" && (r = this.m_dateCoder.encode(r)),
    e = this._funcMakeParams([n, t, i, r]),
    this._funcCall("GetCertificateByNBUCode", e, u, f, null)
};
EUSignCP.prototype.GetReceiversCertificates = function(n, t) {
    var i;
    return i = this._funcMakeParams(null),
    this._funcCall("GetReceiversCertificates", i, n, t, null)
};
EUSignCP.prototype.GetReceiversCertificatesInArrayList = function(n, t) {
    var i, r = this, u;
    return i = this._funcMakeParams(null),
    u = function(n, t, i) {
        var o = r.IsAsync(t, i), u, f, e;
        try {
            for (u = new EndUserArrayList,
            f = 0; f < n.length; f++)
                u.add(n[f]);
            if (o)
                t(u);
            else
                return u
        } catch (s) {
            if (e = r.MakeError(EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, ""),
            o) {
                i(e);
                return
            }
            throw new EndUserException(e.errorCode,e.message);
        }
    }
    ,
    this._funcCall("GetReceiversCertificates", i, n, t, u)
};
EUSignCP.prototype.GetCertificates = function(n, t, i, r) {
    var u, f = this, e;
    return u = this._funcMakeParams([n, t]),
    e = function(n, t, i) {
        var o = f.IsAsync(t, i), r, u, e;
        try {
            for (r = new EndUserArrayList,
            u = 0; u < n.length; u++)
                r.add(n[u]);
            if (o)
                t(r);
            else
                return r
        } catch (s) {
            if (e = f.MakeError(EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, ""),
            o) {
                i(e);
                return
            }
            throw new EndUserException(e.errorCode,e.message);
        }
    }
    ,
    this._funcCall("GetCertificates", u, i, r, e)
};
EUSignCP.prototype.GetCertificateByFingerprint = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("GetCertificateByFingerprint", r, t, i, null)
};
EUSignCP.prototype.GetCertificatesByEDRPOUAndDRFOCode = function(n, t, i, r) {
    var u, f = this, e;
    return u = this._funcMakeParams([n, t]),
    e = function(n, t, i) {
        var o = f.IsAsync(t, i), r, u, e;
        try {
            for (r = new EndUserArrayList,
            u = 0; u < n.length; u++)
                r.add(n[u]);
            if (o)
                t(r);
            else
                return r
        } catch (s) {
            if (e = f.MakeError(EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, ""),
            o) {
                i(e);
                return
            }
            throw new EndUserException(e.errorCode,e.message);
        }
    }
    ,
    this._funcCall("GetCertificatesByEDRPOUAndDRFOCode", u, i, r, e)
};
EUSignCP.prototype.ShowCRLs = function(n, t) {
    var i;
    i = this._funcMakeParams(null);
    this._funcCall("ShowCRLs", i, n, t, null)
};
EUSignCP.prototype.GetCRLsCount = function(n, t) {
    var i;
    return i = this._funcMakeParams(null),
    this._funcCall("GetCRLsCount", i, n, t, null)
};
EUSignCP.prototype.EnumCRLs = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("EnumCRLs", r, t, i, null)
};
EUSignCP.prototype.GetCRLDetailedInfo = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, parseInt(t)]),
    this._funcCall("GetCRLDetailedInfo", u, i, r, null)
};
EUSignCP.prototype.SaveCRL = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, new EndUserByteArray(t)]),
    this._funcCall("SaveCRL", u, i, r, null)
};
EUSignCP.prototype.CreateKeyMedia = function() {
    return new EndUserKeyMedia
};
EUSignCP.prototype.GetPrivateKeyMedia = function(n, t, i) {
    var r;
    return typeof n != "string" && (n = null),
    r = this._funcMakeParams([n]),
    this._funcCall("GetPrivateKeyMedia", r, t, i, null)
};
EUSignCP.prototype.EnumKeyMediaTypes = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("EnumKeyMediaTypes", r, t, i, null)
};
EUSignCP.prototype.EnumKeyMediaDevices = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, t]),
    this._funcCall("EnumKeyMediaDevices", u, i, r, null)
};
EUSignCP.prototype.GetKeyMediaTypes = function(n, t) {
    var i;
    return i = this._funcMakeParams(null),
    this._funcCall("GetKeyMediaTypes", i, n, t, null)
};
EUSignCP.prototype.GetKeyMediaDevices = function(n, t, i) {
    var r;
    return typeof n == "number" && (n = [n]),
    n && (n = new EndUserByteArray(n)),
    r = this._funcMakeParams([n]),
    this._funcCall("GetKeyMediaDevices", r, t, i, null)
};
EUSignCP.prototype.IsPrivateKeyReaded = function(n, t) {
    var i;
    return i = this._funcMakeParams(null),
    this._funcCall("IsPrivateKeyReaded", i, n, t, null)
};
EUSignCP.prototype.ReadPrivateKey = function(n, t) {
    var i;
    i = this._funcMakeParams(null);
    this._funcCall("ReadPrivateKey", i, n, t, null)
};
EUSignCP.prototype.ReadPrivateKeySilently = function(n, t, i, r, u) {
    var e, f;
    typeof n == "number" ? (f = new EndUserKeyMedia,
    f.typeIndex = n,
    f.devIndex = t,
    f.password = i) : (f = n,
    r = t,
    u = i);
    e = this._funcMakeParams([f]);
    this._funcCall("ReadPrivateKeySilently", e, r, u, null)
};
EUSignCP.prototype.ReadPrivateKeyBinary = function(n, t, i, r) {
    var u;
    u = this._funcMakeParams([new EndUserByteArray(n), t]);
    this._funcCall("ReadPrivateKeyBinary", u, i, r, null)
};
EUSignCP.prototype.ReadPrivateKeyFile = function(n, t, i, r) {
    var u;
    u = this._funcMakeParams([n, t]);
    this._funcCall("ReadPrivateKeyFile", u, i, r, null)
};
EUSignCP.prototype.CtxReadPrivateKey = function(n, t, i, r, u, f) {
    var o, e;
    return typeof t == "number" ? (e = new EndUserKeyMedia,
    e.typeIndex = t,
    e.devIndex = i,
    e.password = r) : (e = t,
    u = i,
    f = r),
    o = this._funcMakeParams([n, e]),
    this._funcCall("CtxReadPrivateKey", o, u, f, null)
};
EUSignCP.prototype.CtxReadPrivateKeyBinary = function(n, t, i, r, u) {
    var f;
    return f = this._funcMakeParams([n, new EndUserByteArray(t), i]),
    this._funcCall("CtxReadPrivateKeyBinary", f, r, u, null)
};
EUSignCP.prototype.ResetPrivateKey = function(n, t) {
    var i;
    i = this._funcMakeParams(null);
    this._funcCall("ResetPrivateKey", i, n, t, null)
};
EUSignCP.prototype.CtxFreePrivateKey = function(n, t, i) {
    var r;
    r = this._funcMakeParams([n]);
    this._funcCall("CtxFreePrivateKey", r, t, i, null)
};
EUSignCP.prototype.ShowOwnCertificate = function(n, t) {
    var i;
    i = this._funcMakeParams(null);
    this._funcCall("ShowOwnCertificate", i, n, t, null)
};
EUSignCP.prototype.GetOwnCertificate = function(n, t, i, r) {
    var u;
    return (typeof n != "number" || typeof t != "number") && (i = n,
    r = t,
    n = null,
    t = null),
    u = this._funcMakeParams([n, t]),
    this._funcCall("GetOwnCertificate", u, i, r, null)
};
EUSignCP.prototype.EnumOwnCertificates = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("EnumOwnCertificates", r, t, i, null)
};
EUSignCP.prototype.GetPrivateKeyOwnerInfo = function(n, t) {
    var i;
    return i = this._funcMakeParams(null),
    this._funcCall("GetPrivateKeyOwnerInfo", i, n, t, null)
};
EUSignCP.prototype.CtxEnumOwnCertificates = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, t]),
    this._funcCall("CtxEnumOwnCertificates", u, i, r, null)
};
EUSignCP.prototype.CtxGetOwnCertificate = function(n, t, i, r, u) {
    var f;
    return f = this._funcMakeParams([n, t, i]),
    this._funcCall("CtxGetOwnCertificate", f, r, u, null)
};
EUSignCP.prototype.GetKeyInfo = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("GetKeyInfo", r, t, i, null)
};
EUSignCP.prototype.GetKeyInfoSilently = function(n, t, i, r, u) {
    var f;
    return f = new EndUserKeyMedia,
    f.typeIndex = n,
    f.devIndex = t,
    f.password = i,
    this.GetKeyInfo(f, r, u)
};
EUSignCP.prototype.GetKeyInfoBinary = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([new EndUserByteArray(n), t]),
    this._funcCall("GetKeyInfoBinary", u, i, r, null)
};
EUSignCP.prototype.GetKeyInfoFile = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, t]),
    this._funcCall("GetKeyInfoFile", u, i, r, null)
};
EUSignCP.prototype.GetCertificateByKeyInfo = function(n, t, i, r) {
    var f, u = [];
    return (typeof n != "number" || typeof t != "number") && (r = i,
    i = t),
    typeof n == "number" && typeof t == "number" ? (u.push(n),
    u.push(t),
    u.push(null)) : (u.push(null),
    u.push(null),
    u.push(new EndUserByteArray(n))),
    f = this._funcMakeParams(u),
    this._funcCall("GetCertificateByKeyInfo", f, i, r, null)
};
EUSignCP.prototype.GetCertificatesByKeyInfo = function(n, t, i, r, u) {
    var f;
    return n.className == "EndUserPrivateKeyInfo" && (n = n.GetPrivateKeyInfo()),
    t != null && i != null ? (t.className == "EndUserArrayList" && (t = t.m_array),
    i.className == "EndUserArrayList" && (i = i.m_array)) : (t = null,
    i = null),
    f = this._funcMakeParams([new EndUserByteArray(n), t, i]),
    this._funcCall("GetCertificatesByKeyInfo", f, r, u, null)
};
EUSignCP.prototype.ChangeSoftwarePrivateKeyPassword = function(n, t, i, r, u) {
    var f;
    return f = this._funcMakeParams([new EndUserByteArray(n), t, i]),
    this._funcCall("ChangeSoftwarePrivateKeyPassword", f, r, u, null)
};
EUSignCP.prototype.EnumJKSPrivateKeys = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([new EndUserByteArray(n), t]),
    this._funcCall("EnumJKSPrivateKeys", u, i, r, null)
};
EUSignCP.prototype.EnumJKSPrivateKeysFile = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, t]),
    this._funcCall("EnumJKSPrivateKeysFile", u, i, r, null)
};
EUSignCP.prototype.GetJKSPrivateKey = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([new EndUserByteArray(n), t]),
    this._funcCall("GetJKSPrivateKey", u, i, r, null)
};
EUSignCP.prototype.GetJKSPrivateKeyFile = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, t]),
    this._funcCall("GetJKSPrivateKeyFile", u, i, r, null)
};
EUSignCP.prototype.CreatePrivateKeyInfo = function() {
    return new EndUserPrivateKeyInfo
};
EUSignCP.prototype.CreateEndUserInfo = function() {
    return new EndUserInfo
};
EUSignCP.prototype._generatePrivateKey = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p) {
    var w, b;
    if (this.IsAsync(y, p)) {
        w = function(n) {
            y(n.m_array)
        }
        ;
        this.GeneratePrivateKeyEx(n, t, i, r, !1, u, f, e, o, s, h, c, l, null, null, a, v, w, p);
        return
    }
    return b = this.GeneratePrivateKeyEx(n, t, i, r, !1, u, f, e, o, s, h, c, l, null, null, a, v, y, p),
    b.m_array
};
EUSignCP.prototype.GeneratePrivateKey = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p) {
    if (typeof n == "boolean")
        return this._generatePrivateKeyEx(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p);
    if (typeof i == "boolean")
        return this._generatePrivateKey(!0, 0, 0, "", n, t, i, r, u, f, e, o, null, !1, s, h);
    if (typeof i == "string")
        return this._generatePrivateKey(!1, n, t, i, r, u, f, e, o, s, h, c, null, !1, l, a);
    if (typeof i == "number")
        return this._generatePrivateKey(!1, 0, 0, n, t, i, r, u, f, e, o, s, h, !0, c, l);
    var w = this.MakeError(EndUserError.ERROR_BAD_PARAMETER, "");
    throw new EndUserException(w.errorCode,w.message);
};
EUSignCP.prototype._generatePrivateKeyEx = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k) {
    var g, nt = this, d, tt;
    return n ? d = null : (d = new EndUserKeyMedia,
    d.typeIndex = t,
    d.devIndex = i,
    d.password = typeof r != "string" ? "" : r),
    p == null && (w = !1),
    g = this._funcMakeParams([n, d, u, f, e, o, s, h, c, l, a, v, y, p != null, w]),
    tt = function(n, t, i) {
        var o = nt.IsAsync(t, i), e, r, u, f;
        try {
            for (e = n[0],
            r = new EndUserArrayList,
            u = 0; u < e.length; u++)
                r.add(e[u]);
            if (p != null && p.set(n[1]),
            o)
                t(r);
            else
                return r
        } catch (s) {
            if (f = nt.MakeError(EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, ""),
            o) {
                i(f);
                return
            }
            throw new EndUserException(f.errorCode,f.message);
        }
    }
    ,
    this._funcCall("GeneratePrivateKeyEx", g, b, k, tt)
};
EUSignCP.prototype.GeneratePrivateKeyEx = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k) {
    if (typeof n == "boolean")
        return typeof u == "boolean" ? this._generatePrivateKeyEx(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k) : this._generatePrivateKeyEx(n, t, i, r, !1, u, f, e, o, s, h, c, l, null, null, a, v, y, p);
    if (typeof i == "boolean")
        return typeof h != "undefined" && h == null || typeof h == "string" ? this._generatePrivateKeyEx(!0, 0, 0, "", !1, n, t, i, r, u, f, e, o, s, h, null, !1, c, l) : this._generatePrivateKeyEx(!0, 0, 0, "", !1, n, t, i, r, u, f, e, o, null, null, null, !1, s, h);
    if (typeof n == "number")
        return typeof r == "boolean" ? this._generatePrivateKeyEx(!1, n, t, i, r, u, f, e, o, s, h, c, l, a, v, null, !1, y, p) : this._generatePrivateKeyEx(!1, n, t, i, !1, r, u, f, e, o, s, h, c, null, null, null, !1, l, a);
    if (typeof n == "string")
        return typeof c != "undefined" && c == null || typeof c == "string" ? this._generatePrivateKeyEx(!1, 0, 0, n, !1, t, i, r, u, f, e, o, s, h, c, l, !0, a, v) : this._generatePrivateKeyEx(!1, 0, 0, n, !1, t, i, r, u, f, e, o, s, null, null, h, !0, c, l);
    var d = this.MakeError(EndUserError.ERROR_BAD_PARAMETER, "");
    throw new EndUserException(d.errorCode,d.message);
};
EUSignCP.prototype.GetCRInfo = function(n, t, i, r, u) {
    var f;
    return f = this._funcMakeParams([new EndUserByteArray(n), t, i]),
    this._funcCall("GetCRInfo", f, r, u, null)
};
EUSignCP.prototype.IsHardwareKeyMedia = function(n, t, i, r, u) {
    var e, f;
    return typeof n == "number" ? (f = new EndUserKeyMedia,
    f.typeIndex = n,
    f.devIndex = t,
    f.password = i) : (f = null,
    r = n,
    u = t),
    e = this._funcMakeParams([f]),
    this._funcCall("IsHardwareKeyMedia", e, r, u, null)
};
EUSignCP.prototype.IsPrivateKeyExists = function(n, t, i, r, u) {
    var e, f;
    return typeof n == "number" ? (f = new EndUserKeyMedia,
    f.typeIndex = n,
    f.devIndex = t,
    f.password = i) : (f = null,
    r = n,
    u = t),
    e = this._funcMakeParams([f]),
    this._funcCall("IsPrivateKeyExists", e, r, u, null)
};
EUSignCP.prototype.ChangePrivateKeyPassword = function(n, t, i, r, u, f) {
    var o, e;
    typeof n == "number" ? (e = new EndUserKeyMedia,
    e.typeIndex = n,
    e.devIndex = t,
    e.password = i) : (e = null,
    r = null,
    u = n,
    f = t);
    o = this._funcMakeParams([e, r]);
    this._funcCall("ChangePrivateKeyPassword", o, u, f, null)
};
EUSignCP.prototype.BackupPrivateKey = function(n, t, i, r, u, f, e, o) {
    var c, s, h;
    typeof n == "number" ? (s = new EndUserKeyMedia,
    s.typeIndex = n,
    s.devIndex = t,
    s.password = i,
    h = new EndUserKeyMedia,
    h.typeIndex = r,
    h.devIndex = u,
    h.password = f) : (s = null,
    h = null,
    e = n,
    o = t);
    c = this._funcMakeParams([s, h]);
    this._funcCall("BackupPrivateKey", c, e, o, null)
};
EUSignCP.prototype.DestroyPrivateKey = function(n, t, i, r, u) {
    var e, f;
    typeof n == "number" ? (f = new EndUserKeyMedia,
    f.typeIndex = n,
    f.devIndex = t,
    f.password = i) : (f = null,
    r = n,
    u = t);
    e = this._funcMakeParams([f]);
    this._funcCall("DestroyPrivateKey", e, r, u, null)
};
EUSignCP.prototype.SetKeyMediaPassword = function(n, t, i, r, u) {
    var e, f;
    typeof n == "number" ? (f = new EndUserKeyMedia,
    f.typeIndex = n,
    f.devIndex = t,
    f.password = i) : (f = null,
    r = n,
    u = t);
    e = this._funcMakeParams([f]);
    this._funcCall("SetKeyMediaPassword", e, r, u, null)
};
EUSignCP.prototype.SetKeyMediaUserPassword = function(n, t, i, r, u, f) {
    var o, e;
    typeof t == "number" ? (e = new EndUserKeyMedia,
    e.typeIndex = t,
    e.devIndex = i,
    e.password = r) : (e = null,
    u = t,
    f = i);
    o = this._funcMakeParams([n, e]);
    this._funcCall("SetKeyMediaUserPassword", o, u, f, null)
};
EUSignCP.prototype.ChangeOwnCertificatesStatus = function(n, t, i, r) {
    var u;
    u = this._funcMakeParams([n, t]);
    this._funcCall("ChangeOwnCertificatesStatus", u, i, r, null)
};
EUSignCP.prototype.CtxChangeOwnCertificatesStatus = function(n, t, i, r, u) {
    var f;
    f = this._funcMakeParams([n, t, i]);
    this._funcCall("CtxChangeOwnCertificatesStatus", f, r, u, null)
};
EUSignCP.prototype.MakeNewCertificate = function(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y) {
    var p;
    return t != null && (t = new EndUserByteArray(t)),
    p = this._funcMakeParams([n, t, i, r, u, f, e, o, s, h, c, l, a]),
    this._funcCall("MakeNewCertificate", p, v, y, null)
};
EUSignCP.prototype.MakeNewOwnCertificate = function(n, t, i, r, u, f, e, o, s, h) {
    var c;
    return c = this._funcMakeParams([n, t, i, r, u, f, e, o]),
    this._funcCall("MakeNewOwnCertificate", c, s, h, null)
};
EUSignCP.prototype.CtxMakeNewOwnCertificate = function(n, t, i, r, u, f, e, o, s, h, c) {
    var l;
    return l = this._funcMakeParams([n, t, i, r, u, f, e, o, s]),
    this._funcCall("CtxMakeNewOwnCertificate", l, h, c, null)
};
EUSignCP.prototype.CtxMakeDeviceCertificate = function(n, t, i, r, u, f, e, o, s, h) {
    var c;
    return i != null && (i = new EndUserByteArray(i)),
    r != null && (r = new EndUserByteArray(r)),
    u != null && (u = new EndUserByteArray(u)),
    f != null && (f = new EndUserByteArray(f)),
    c = this._funcMakeParams([n, t, i, r, u, f, e, o]),
    this._funcCall("CtxMakeDeviceCertificate", c, s, h, null)
};
EUSignCP.prototype.GetOwnEUserParams = function(n, t) {
    var i;
    return i = this._funcMakeParams(null),
    this._funcCall("GetOwnEUserParams", i, n, t, null)
};
EUSignCP.prototype.ModifyOwnEUserParams = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, t]),
    this._funcCall("ModifyOwnEUserParams", u, i, r, null)
};
EUSignCP.prototype.CtxGetOwnEUserParams = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("CtxGetOwnEUserParams", r, t, i, null)
};
EUSignCP.prototype.CtxModifyOwnEUserParams = function(n, t, i, r, u) {
    var f;
    return f = this._funcMakeParams([n, t, i]),
    this._funcCall("CtxModifyOwnEUserParams", f, r, u, null)
};
EUSignCP.prototype.Hash = function(n, t, i) {
    var r;
    if (typeof n != "string" || (n = this._stringToBytes(n, i),
    n != null))
        return r = this._funcMakeParams([new EndUserByteArray(n)]),
        this._funcCall("Hash", r, t, i, null)
};
EUSignCP.prototype.ContinueHash = function(n, t, i, r, u) {
    var f;
    ((typeof t != "number" || typeof i != "number") && (r = t,
    u = i),
    typeof n != "string" || (n = this._stringToBytes(n, u),
    n != null)) && (typeof t == "number" && typeof i == "number" && (n = n.slice(t, t + i)),
    f = this._funcMakeParams([new EndUserByteArray(n)]),
    this._funcCall("ContinueHash", f, r, u, null))
};
EUSignCP.prototype.EndHash = function(n, t) {
    var i;
    return i = this._funcMakeParams(null),
    this._funcCall("EndHash", i, n, t, null)
};
EUSignCP.prototype.HashWithParams = function(n, t, i, r) {
    var u;
    if (typeof t != "string" || (t = this._stringToBytes(t, r),
    t != null))
        return u = this._funcMakeParams([new EndUserByteArray(n), new EndUserByteArray(t)]),
        this._funcCall("HashWithParams", u, i, r, null)
};
EUSignCP.prototype.HashBeginWithParams = function(n, t, i) {
    var r;
    r = this._funcMakeParams([new EndUserByteArray(n)]);
    this._funcCall("HashBeginWithParams", r, t, i, null)
};
EUSignCP.prototype.HashFile = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("HashFile", r, t, i, null)
};
EUSignCP.prototype.HashFileWithParams = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([new EndUserByteArray(n), t]),
    this._funcCall("HashFileWithParams", u, i, r, null)
};
EUSignCP.prototype.CtxHash = function(n, t, i, r, u, f) {
    var e = this, p = this.IsAsync(u, f), l = e.EU_FILE_PROCESS_CHUNK_SIZE, s, a, o, v, h, c, y;
    if (typeof r != "string" || (r = this._stringToBytes(r, f),
    r != null))
        if (p)
            s = {
                hashContext: null,
                hash: null
            },
            a = function(n) {
                if (s.hashContext != null) {
                    e.CtxHashFree(s.hashContext, function() {
                        f(n)
                    }, function() {
                        f(n)
                    });
                    return
                }
                f(n)
            }
            ,
            eu_wait(function(r) {
                e.CtxHashBegin(n, t, i, r, a)
            }).eu_wait(function(n, t) {
                s.hashContext = t;
                var i = function(u) {
                    var f, o;
                    if (u >= r.length) {
                        e.CtxHashEnd(t, n, a);
                        return
                    }
                    f = r.length - u;
                    f > l && (f = l);
                    o = r.slice(u, u + f);
                    e.CtxHashContinue(t, o, function() {
                        i(u + f)
                    }, a)
                };
                i(0)
            }).eu_wait(function(n, t) {
                s.hash = t;
                e.CtxHashFree(s.hashContext, n, f)
            }).eu_wait(function() {
                u(s.hash)
            });
        else {
            o = null;
            try {
                for (v = null,
                h = 0,
                o = e.CtxHashBegin(n, t, i); ; )
                    if (c = r.length - h,
                    c > l && (c = l),
                    y = r.slice(h, h + c),
                    e.CtxHashContinue(o, y),
                    h += c,
                    !(h < r.length))
                        break;
                return v = e.CtxHashEnd(o),
                e.CtxHashFree(o),
                o = null,
                v
            } catch (w) {
                o != null && e.CtxHashFree(o);
                throw w;
            }
        }
};
EUSignCP.prototype.CtxHashBegin = function(n, t, i, r, u) {
    var f;
    return f = this._funcMakeParams([n, t, i ? new EndUserByteArray(i) : null]),
    this._funcCall("CtxHashBegin", f, r, u, null)
};
EUSignCP.prototype.CtxHashContinue = function(n, t, i, r) {
    var u;
    u = this._funcMakeParams([n, new EndUserByteArray(t)]);
    this._funcCall("CtxHashContinue", u, i, r, null)
};
EUSignCP.prototype.CtxHashEnd = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("CtxHashEnd", r, t, i, null)
};
EUSignCP.prototype.CtxHashFree = function(n, t, i) {
    var r;
    r = this._funcMakeParams([n]);
    this._funcCall("CtxHashFree", r, t, i, null)
};
EUSignCP.prototype.ShowSignInfo = function(n, t, i) {
    var r;
    r = this._funcMakeParams([n]);
    this._funcCall("ShowSignInfo", r, t, i, null)
};
EUSignCP.prototype.IsSigned = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([new EndUserByteArray(n)]),
    this._funcCall("IsSigned", r, t, i, null)
};
EUSignCP.prototype.IsSignedFile = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("IsSignedFile", r, t, i, null)
};
EUSignCP.prototype.GetSignType = function(n, t, i, r) {
    var u;
    if (typeof t == "string" || (t = this._base64Encode(t, r),
    t != null))
        return u = this._funcMakeParams([n, t]),
        this._funcCall("GetSignType", u, i, r, null)
};
EUSignCP.prototype.GetFileSignType = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, t]),
    this._funcCall("GetFileSignType", u, i, r, null)
};
EUSignCP.prototype.GetSignsCount = function(n, t, i) {
    var r;
    if (typeof n == "string" || (n = this._base64Encode(n, i),
    n != null))
        return r = this._funcMakeParams([n]),
        this._funcCall("GetSignsCount", r, t, i, null)
};
EUSignCP.prototype.GetSignerInfo = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, t]),
    this._funcCall("GetSignerInfo", u, i, r, null)
};
EUSignCP.prototype.GetSignerCertificate = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, t]),
    this._funcCall("GetSignerCertificate", u, i, r, null)
};
EUSignCP.prototype.GetFileSignsCount = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("GetFileSignsCount", r, t, i, null)
};
EUSignCP.prototype.GetFileSignerInfo = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, t]),
    this._funcCall("GetFileSignerInfo", u, i, r, null)
};
EUSignCP.prototype.GetFileSignerCertificate = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, t]),
    this._funcCall("GetFileSignerCertificate", u, i, r, null)
};
EUSignCP.prototype.CtxGetSignerInfo = function(n, t, i, r, u) {
    var f;
    if (typeof i == "string" || (i = this._base64Encode(i, u),
    i != null))
        return f = this._funcMakeParams([n, t, i]),
        this._funcCall("CtxGetSignerInfo", f, r, u, null)
};
EUSignCP.prototype.Sign = function(n, t, i) {
    var r;
    if (typeof n != "string" || (n = this._stringToBytes(n, i),
    n != null))
        return r = this._funcMakeParams([new EndUserByteArray(n)]),
        this._funcCall("Sign", r, t, i, null)
};
EUSignCP.prototype.Verify = function(n, t, i, r, u) {
    var e, f = [];
    if (typeof i != "boolean" && (u = r,
    r = i),
    typeof t != "string" || (t = this._stringToBytes(t, u),
    t != null))
        return f.push(n),
        f.push(new EndUserByteArray(t)),
        typeof i == "boolean" ? f.push(i) : f.push(null),
        e = this._funcMakeParams(f),
        this._funcCall("Verify", e, r, u, null)
};
EUSignCP.prototype.ContinueSign = function(n, t, i, r, u) {
    var f;
    ((typeof t != "number" || typeof i != "number") && (r = t,
    u = i),
    typeof n != "string" || (n = this._stringToBytes(n, u),
    n != null)) && (typeof t == "number" && typeof i == "number" && (n = n.slice(t, t + i)),
    f = this._funcMakeParams([new EndUserByteArray(n)]),
    this._funcCall("ContinueSign", f, r, u, null))
};
EUSignCP.prototype.EndSign = function(n, t) {
    var i;
    return i = this._funcMakeParams(null),
    this._funcCall("EndSign", i, n, t, null)
};
EUSignCP.prototype.BeginVerify = function(n, t, i) {
    var r;
    r = this._funcMakeParams([n]);
    this._funcCall("BeginVerify", r, t, i, null)
};
EUSignCP.prototype.ContinueVerify = function(n, t, i, r, u) {
    var f;
    ((typeof t != "number" || typeof i != "number") && (r = t,
    u = i),
    typeof n != "string" || (n = this._stringToBytes(n, u),
    n != null)) && (typeof t == "number" && typeof i == "number" && (n = n.slice(t, t + i)),
    f = this._funcMakeParams([new EndUserByteArray(n)]),
    this._funcCall("ContinueVerify", f, r, u, null))
};
EUSignCP.prototype.EndVerify = function(n, t, i) {
    var u, r = [];
    return typeof n != "boolean" && (i = t,
    t = n),
    typeof n != "boolean" ? r.push(n) : r.push(null),
    u = this._funcMakeParams(r),
    this._funcCall("EndVerify", u, t, i, null)
};
EUSignCP.prototype.SignHash = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("SignHash", r, t, i, null)
};
EUSignCP.prototype.VerifyHash = function(n, t, i, r, u) {
    var e, f = [];
    return typeof i != "boolean" && (u = r,
    r = i),
    f.push(n),
    f.push(t),
    typeof i == "boolean" ? f.push(i) : f.push(null),
    e = this._funcMakeParams(f),
    this._funcCall("VerifyHash", e, r, u, null)
};
EUSignCP.prototype.SignInternal = function(n, t, i, r) {
    var u;
    if (typeof t != "string" || (t = this._stringToBytes(t, r),
    t != null))
        return u = this._funcMakeParams([n, new EndUserByteArray(t)]),
        this._funcCall("SignInternal", u, i, r, null)
};
EUSignCP.prototype.VerifyInternal = function(n, t, i, r) {
    var f, u = [];
    return typeof t != "boolean" && (r = i,
    i = t),
    u.push(n),
    typeof t == "boolean" ? u.push(t) : u.push(null),
    f = this._funcMakeParams(u),
    this._funcCall("VerifyInternal", f, i, r, null)
};
EUSignCP.prototype.VerifyInternalString = function(n, t, i, r) {
    var e = this, u, f;
    if (typeof t != "boolean" && (r = i,
    i = t),
    this.IsAsync(i, r))
        u = function(n) {
            e.BytesToString(n, i, r)
        }
        ,
        this.VerifyInternal(n, t, u, r);
    else
        return f = this.VerifyInternal(n, t),
        this.BytesToString(f)
};
EUSignCP.prototype.SignFile = function(n, t, i, r, u) {
    var f;
    f = this._funcMakeParams([n, t, i]);
    this._funcCall("SignFile", f, r, u, null)
};
EUSignCP.prototype.VerifyFile = function(n, t, i, r, u) {
    var e, f = [];
    return typeof i != "boolean" && (u = r,
    r = i),
    f.push(n),
    f.push(t),
    typeof i == "boolean" ? f.push(i) : f.push(null),
    e = this._funcMakeParams(f),
    this._funcCall("VerifyFile", e, r, u, null)
};
EUSignCP.prototype.VerifyFileWithExternalSign = function(n, t, i, r, u) {
    return this.VerifyFile(t, n, i, r, u)
};
EUSignCP.prototype.VerifyFileWithInternalSign = function(n, t, i, r, u) {
    return this.VerifyFile(n, t, i, r, u)
};
EUSignCP.prototype.IsAlreadySigned = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("IsAlreadySigned", r, t, i, null)
};
EUSignCP.prototype.IsFileAlreadySigned = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("IsFileAlreadySigned", r, t, i, null)
};
EUSignCP.prototype.AppendSign = function(n, t, i, r) {
    var u;
    if (typeof n != "string" || (n = this._stringToBytes(n, r),
    n != null))
        return typeof t != "string" && (t = this._base64Encode(t, r),
        t == null) ? void 0 : (u = this._funcMakeParams([new EndUserByteArray(n), t]),
        this._funcCall("AppendSign", u, i, r, null))
};
EUSignCP.prototype.VerifySpecific = function(n, t, i, r, u, f) {
    var o, e = [];
    if (typeof r != "boolean" && (f = u,
    u = r),
    typeof t != "string" || (t = this._stringToBytes(t, f),
    t != null))
        return e.push(n),
        e.push(new EndUserByteArray(t)),
        e.push(i),
        typeof r == "boolean" ? e.push(r) : e.push(null),
        o = this._funcMakeParams(e),
        this._funcCall("VerifySpecific", o, u, f, null)
};
EUSignCP.prototype.AppendSignBegin = function(n, t, i) {
    var r;
    (typeof n == "string" || (n = this._base64Encode(n, i),
    n != null)) && (r = this._funcMakeParams([n]),
    this._funcCall("AppendSignBegin", r, t, i, null))
};
EUSignCP.prototype.VerifyDataSpecificBegin = function(n, t, i, r) {
    var u;
    u = this._funcMakeParams([n, t]);
    this._funcCall("VerifyDataSpecificBegin", u, i, r, null)
};
EUSignCP.prototype.AppendSignHash = function(n, t, i, r) {
    var u;
    if (typeof n == "string" || (n = this._base64Encode(n, r),
    n != null))
        return typeof t != "string" && (t = this._base64Encode(t, r),
        t == null) ? void 0 : (u = this._funcMakeParams([n, t]),
        this._funcCall("AppendSignHash", u, i, r, null))
};
EUSignCP.prototype.VerifyHashSpecific = function(n, t, i, r, u, f) {
    var o, e = [];
    return typeof r != "boolean" && (f = u,
    u = r),
    e.push(n),
    e.push(t),
    e.push(i),
    typeof r == "boolean" ? e.push(r) : e.push(null),
    o = this._funcMakeParams(e),
    this._funcCall("VerifyHashSpecific", o, u, f, null)
};
EUSignCP.prototype.AppendSignInternal = function(n, t, i, r) {
    var u;
    if (typeof t == "string" || (t = this._base64Encode(t, r),
    t != null))
        return u = this._funcMakeParams([n, t]),
        this._funcCall("AppendSignInternal", u, i, r, null)
};
EUSignCP.prototype.VerifySpecificInternal = function(n, t, i, r, u) {
    var e, f = [];
    return typeof i != "boolean" && (u = r,
    r = i),
    f.push(n),
    f.push(t),
    typeof i == "boolean" ? f.push(i) : f.push(null),
    e = this._funcMakeParams(f),
    this._funcCall("VerifySpecificInternal", e, r, u, null)
};
EUSignCP.prototype.VerifySpecificInternalString = function(n, t, i, r, u) {
    var o = this, f, e;
    if (typeof i != "boolean" && (u = r,
    r = i),
    this.IsAsync(r, u))
        f = function(n) {
            o.BytesToString(n, r, u)
        }
        ,
        this.VerifySpecificInternal(n, t, i, f, u);
    else
        return e = this.VerifySpecificInternal(n, t, i),
        this.BytesToString(e)
};
EUSignCP.prototype.AppendSignFile = function(n, t, i, r, u, f) {
    var e;
    return e = this._funcMakeParams([n, t, i, r]),
    this._funcCall("AppendSignFile", e, u, f, null)
};
EUSignCP.prototype.VerifyFileSpecific = function(n, t, i, r, u, f) {
    var o, e = [];
    return typeof r != "boolean" && (f = u,
    u = r),
    e.push(n),
    e.push(t),
    e.push(i),
    typeof r == "boolean" ? e.push(r) : e.push(null),
    o = this._funcMakeParams(e),
    this._funcCall("VerifyFileSpecific", o, u, f, null)
};
EUSignCP.prototype.VerifyFileWithExternalSignSpecific = function(n, t, i, r, u, f) {
    return this.VerifyFileSpecific(n, t, i, r, u, f)
};
EUSignCP.prototype.VerifyFileWithInternalSignSpecific = function(n, t, i, r, u, f) {
    return this.VerifyFileSpecific(n, t, i, r, u, f)
};
EUSignCP.prototype.CreateEmptySign = function(n, t, i) {
    var u, r = [];
    if (arguments.length == 2 && (i = t,
    t = n),
    typeof n != "string" || (n = this._stringToBytes(n, i),
    n != null))
        return arguments.length == 1 || arguments.length == 3 ? r.push(new EndUserByteArray(n)) : r.push(null),
        u = this._funcMakeParams(r),
        this._funcCall("CreateEmptySign", u, t, i, null)
};
EUSignCP.prototype.CreateSigner = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("CreateSigner", r, t, i, null)
};
EUSignCP.prototype.AppendSigner = function(n, t, i, r, u) {
    var e, f = [];
    return f.push(n),
    t != null ? f.push(new EndUserByteArray(t)) : f.push(null),
    f.push(i),
    e = this._funcMakeParams(f),
    this._funcCall("AppendSigner", e, r, u, null)
};
EUSignCP.prototype.AppendValidationDataToSignerEx = function(n, t, i, r, u) {
    var e, f = [];
    if (typeof n == "string" || (n = this._base64Encode(n, u),
    n != null))
        return f.push(n),
        t != null ? f.push(new EndUserByteArray(t)) : f.push(null),
        f.push(i),
        e = this._funcMakeParams(f),
        this._funcCall("AppendValidationDataToSignerEx", e, r, u, null)
};
EUSignCP.prototype.IsDataInSignedDataAvailable = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("IsDataInSignedDataAvailable", r, t, i, null)
};
EUSignCP.prototype.IsDataInSignedFileAvailable = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("IsDataInSignedFileAvailable", r, t, i, null)
};
EUSignCP.prototype.GetDataFromSignedData = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("GetDataFromSignedData", r, t, i, null)
};
EUSignCP.prototype.GetDataFromSignedFile = function(n, t, i, r) {
    var u;
    u = this._funcMakeParams([n, t]);
    this._funcCall("GetDataFromSignedFile", u, i, r, null)
};
EUSignCP.prototype.GetCertificateFromSignedData = function(n, t, i, r) {
    var u;
    if (typeof t == "string" || (t = this._base64Encode(t, r),
    t != null))
        return u = this._funcMakeParams([n, t]),
        this._funcCall("GetCertificateFromSignedData", u, i, r, null)
};
EUSignCP.prototype.GetCertificateFromSignedFile = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, t]),
    this._funcCall("GetCertificateFromSignedFile", u, i, r, null)
};
EUSignCP.prototype.GetSignTimeInfo = function(n, t, i, r) {
    var u;
    if (typeof t == "string" || (t = this._base64Encode(t, r),
    t != null))
        return u = this._funcMakeParams([n, t]),
        this._funcCall("GetSignTimeInfo", u, i, r, null)
};
EUSignCP.prototype.GetFileSignTimeInfo = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, t]),
    this._funcCall("GetFileSignTimeInfo", u, i, r, null)
};
EUSignCP.prototype.VerifyHashOnTime = function(n, t, i, r, u, f, e) {
    return this.VerifyHashOnTimeEx(n, t, i, r, r != null, !1, u, f, e)
};
EUSignCP.prototype.VerifyHashOnTimeEx = function(n, t, i, r, u, f, e, o, s) {
    var c, h = [];
    if (typeof e != "boolean" && (s = o,
    o = e),
    typeof n == "string" || (n = this._base64Encode(n, s),
    n != null))
        return typeof i != "string" && (i = this._base64Encode(i, s),
        i == null) ? void 0 : (h = [n, t, i, r, u, f],
        typeof e == "boolean" ? h.push(e) : h.push(null),
        c = this._funcMakeParams(h),
        this._funcCall("VerifyHashOnTimeEx", c, o, s, null))
};
EUSignCP.prototype.VerifyDataOnTime = function(n, t, i, r, u, f, e) {
    return this.VerifyDataOnTimeEx(n, t, i, r, r != null, !1, u, f, e)
};
EUSignCP.prototype.VerifyDataOnTimeEx = function(n, t, i, r, u, f, e, o, s) {
    var c, h = [];
    if (typeof e != "boolean" && (s = o,
    o = e),
    typeof n != "string" || (n = this._stringToBytes(n, s),
    n != null))
        return typeof i != "string" && (i = this._base64Encode(i, s),
        i == null) ? void 0 : (h = [new EndUserByteArray(n), t, i, r, u, f],
        typeof e == "boolean" ? h.push(e) : h.push(null),
        c = this._funcMakeParams(h),
        this._funcCall("VerifyDataOnTimeEx", c, o, s, null))
};
EUSignCP.prototype.VerifyDataInternalOnTime = function(n, t, i, r, u, f) {
    return this.VerifyDataInternalOnTimeEx(n, t, i, i != null, !1, r, u, f)
};
EUSignCP.prototype.VerifyDataInternalOnTimeEx = function(n, t, i, r, u, f, e, o) {
    var h, s = [];
    if (typeof f != "boolean" && (o = e,
    e = f),
    typeof n == "string" || (n = this._base64Encode(n, o),
    n != null))
        return s = [n, t, i, r, u],
        typeof f == "boolean" ? s.push(f) : s.push(null),
        h = this._funcMakeParams(s),
        this._funcCall("VerifyDataInternalOnTimeEx", h, e, o, null)
};
EUSignCP.prototype.VerifyDataInternalOnTimeString = function(n, t, i, r, u, f) {
    return this.VerifyDataInternalOnTimeStringEx(n, t, i, i != null, !1, r, u, f)
};
EUSignCP.prototype.VerifyDataInternalOnTimeStringEx = function(n, t, i, r, u, f, e, o) {
    var c = this, s, h;
    if (typeof f != "boolean" && (o = e,
    e = f),
    this.IsAsync(e, o))
        s = function(n) {
            c.BytesToString(n, e, o)
        }
        ,
        this.VerifyDataInternalOnTimeEx(n, t, i, r, u, f, s, o);
    else
        return h = this.VerifyDataInternalOnTimeEx(n, t, i, r, u, f),
        this.BytesToString(h)
};
EUSignCP.prototype.VerifyDataOnTimeBegin = function(n, t, i, r, u) {
    this.VerifyDataOnTimeBeginEx(n, t, i, i != null, !1, r, u)
};
EUSignCP.prototype.VerifyDataOnTimeBeginEx = function(n, t, i, r, u, f, e) {
    var o;
    o = this._funcMakeParams([n, t, i, r, u]);
    this._funcCall("VerifyDataOnTimeBeginEx", o, f, e, null)
};
EUSignCP.prototype.VerifyFileOnTime = function(n, t, i, r, u, f, e, o, s) {
    var c, h = [];
    return typeof e != "boolean" && (s = o,
    o = e),
    h = [n, t, i, r, u, f],
    typeof e == "boolean" ? h.push(e) : h.push(null),
    c = this._funcMakeParams(h),
    this._funcCall("VerifyFileOnTimeEx", c, o, s, null)
};
EUSignCP.prototype.VerifyFileWithExternalSignOnTime = function(n, t, i, r, u, f, e) {
    return this.VerifyFileOnTime(n, i, t, r, r != null, !1, u, f, e)
};
EUSignCP.prototype.VerifyFileWithExternalSignOnTimeEx = function(n, t, i, r, u, f, e, o, s) {
    return this.VerifyFileOnTime(n, i, t, r, u, f, e, o, s)
};
EUSignCP.prototype.VerifyFileWithInternalSignOnTime = function(n, t, i, r, u, f, e) {
    return this.VerifyFileOnTime(n, t, i, r, r != null, !1, u, f, e)
};
EUSignCP.prototype.VerifyFileWithInternalSignOnTimeEx = function(n, t, i, r, u, f, e, o, s) {
    return this.VerifyFileOnTime(n, i, t, r, u, f, e, o, s)
};
EUSignCP.prototype.ContinueSignCtx = function(n, t, i, r) {
    var u;
    if (n == null && (n = new EndUserOperationContext),
    typeof t != "string" || (t = this._stringToBytes(t, r),
    t != null))
        return u = this._funcMakeParams([n, new EndUserByteArray(t)]),
        this._funcCall("ContinueSignCtx", u, i, r, null)
};
EUSignCP.prototype.ContinueSignCtxWithOffset = function(n, t, i, r, u, f) {
    return t = t.slice(i, i + r),
    this.ContinueSignCtx(n, t, u, f)
};
EUSignCP.prototype.EndSignCtx = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, t]),
    this._funcCall("EndSignCtx", u, i, r, null)
};
EUSignCP.prototype.BeginVerifyCtx = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("BeginVerifyCtx", r, t, i, null)
};
EUSignCP.prototype.ContinueVerifyCtx = function(n, t, i, r, u, f) {
    var e;
    ((typeof i != "number" || typeof r != "number") && (u = i,
    f = r),
    typeof t != "string" || (t = this._stringToBytes(t, f),
    t != null)) && (typeof i == "number" && typeof r == "number" && (t = t.slice(i, i + r)),
    e = this._funcMakeParams([n, new EndUserByteArray(t)]),
    this._funcCall("ContinueVerifyCtx", e, u, f, null))
};
EUSignCP.prototype.EndVerifyCtx = function(n, t, i, r) {
    var f, u = [];
    return typeof t != "boolean" && (i = t,
    r = i),
    u.push(n),
    typeof t == "boolean" ? u.push(t) : u.push(null),
    f = this._funcMakeParams(u),
    this._funcCall("EndVerifyCtx", f, i, r, null)
};
EUSignCP.prototype.ResetOperationCtx = function(n, t, i) {
    var r;
    r = this._funcMakeParams([n]);
    this._funcCall("ResetOperationCtx", r, t, i, null)
};
EUSignCP.prototype.SignHashRSA = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("SignHashRSA", r, t, i, null)
};
EUSignCP.prototype.SignRSA = function(n, t, i, r, u) {
    var f;
    if (typeof n != "string" || (n = this._stringToBytes(n, u),
    n != null))
        return f = this._funcMakeParams([new EndUserByteArray(n), t, i]),
        this._funcCall("SignRSA", f, r, u, null)
};
EUSignCP.prototype.ContinueRSASign = function(n, t, i) {
    var r;
    (typeof n != "string" || (n = this._stringToBytes(n, i),
    n != null)) && (r = this._funcMakeParams([new EndUserByteArray(n)]),
    this._funcCall("ContinueRSASign", r, t, i, null))
};
EUSignCP.prototype.ContinueRSASignWithOffset = function(n, t, i, r, u) {
    return n = n.slice(t, t + i),
    this.ContinueRSASign(n, r, u)
};
EUSignCP.prototype.EndRSASign = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("EndRSASign", r, t, i, null)
};
EUSignCP.prototype.SignRSAFile = function(n, t, i, r, u) {
    var f;
    return f = this._funcMakeParams([n, t, i]),
    this._funcCall("SignRSAFile", f, r, u, null)
};
EUSignCP.prototype.ContinueRSASignCtx = function(n, t, i, r) {
    var u;
    if (n == null && (n = new EndUserOperationContext),
    typeof t != "string" || (t = this._stringToBytes(t, r),
    t != null))
        return u = this._funcMakeParams([n, new EndUserByteArray(t)]),
        this._funcCall("ContinueRSASignCtx", u, i, r, null)
};
EUSignCP.prototype.ContinueRSASignCtxWithOffset = function(n, t, i, r, u, f) {
    return t = t.slice(i, i + r),
    this.ContinueRSASignCtx(t, u, f)
};
EUSignCP.prototype.EndRSASignCtx = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, t]),
    this._funcCall("EndRSASignCtx", u, i, r, null)
};
EUSignCP.prototype.SignECDSA = function(n, t, i, r, u) {
    var f;
    if (typeof n != "string" || (n = this._stringToBytes(n, u),
    n != null))
        return f = this._funcMakeParams([new EndUserByteArray(n), t, i]),
        this._funcCall("SignECDSA", f, r, u, null)
};
EUSignCP.prototype.RawSign = function(n, t, i) {
    var r;
    if (typeof n != "string" || (n = this._stringToBytes(n, i),
    n != null))
        return r = this._funcMakeParams([new EndUserByteArray(n)]),
        this._funcCall("RawSign", r, t, i, null)
};
EUSignCP.prototype.RawVerify = function(n, t, i, r, u) {
    var e, f = [];
    if (typeof i != "boolean" && (u = r,
    r = i),
    typeof t != "string" || (t = this._stringToBytes(t, u),
    t != null))
        return f.push(n),
        f.push(new EndUserByteArray(t)),
        typeof i == "boolean" ? f.push(i) : f.push(null),
        e = this._funcMakeParams(f),
        this._funcCall("RawVerify", e, r, u, null)
};
EUSignCP.prototype.RawSignHash = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("RawSignHash", r, t, i, null)
};
EUSignCP.prototype.RawVerifyHash = function(n, t, i, r, u) {
    var e, f = [];
    return typeof i != "boolean" && (u = r,
    r = i),
    f.push(n),
    f.push(t),
    typeof i == "boolean" ? f.push(i) : f.push(null),
    e = this._funcMakeParams(f),
    this._funcCall("RawVerifyHash", e, r, u, null)
};
EUSignCP.prototype.RawSignFile = function(n, t, i, r) {
    var u;
    u = this._funcMakeParams([n, t]);
    this._funcCall("RawSignFile", u, i, r, null)
};
EUSignCP.prototype.RawVerifyFile = function(n, t, i, r, u) {
    var e, f = [];
    return typeof i != "boolean" && (u = r,
    r = i),
    f.push(n),
    f.push(t),
    typeof i == "boolean" ? f.push(i) : f.push(null),
    e = this._funcMakeParams(f),
    this._funcCall("RawVerifyFile", e, r, u, null)
};
EUSignCP.prototype.CtxSignHash = function(n, t, i, r, u, f) {
    var e;
    if (typeof i == "string" || (i = this._base64Encode(i, f),
    i != null))
        return e = this._funcMakeParams([n, t, i, r]),
        this._funcCall("CtxSignHash", e, u, f, null)
};
EUSignCP.prototype.CtxSign = function(n, t, i, r, u, f, e) {
    var o;
    if (typeof i != "string" || (i = this._stringToBytes(i, e),
    i != null))
        return o = this._funcMakeParams([n, t, new EndUserByteArray(i), r, u]),
        this._funcCall("CtxSign", o, f, e, null)
};
EUSignCP.prototype.CtxSignFile = function(n, t, i, r, u, f, e, o) {
    var s;
    s = this._funcMakeParams([n, t, i, r, u, f]);
    this._funcCall("CtxSignFile", s, e, o, null)
};
EUSignCP.prototype.CtxAppendSignHash = function(n, t, i, r, u, f, e) {
    var o;
    if (typeof i == "string" || (i = this._base64Encode(i, e),
    i != null))
        return typeof r != "string" && (r = this._base64Encode(r, e),
        r == null) ? void 0 : (o = this._funcMakeParams([n, t, i, r, u]),
        this._funcCall("CtxAppendSignHash", o, f, e, null))
};
EUSignCP.prototype.CtxAppendSign = function(n, t, i, r, u, f, e) {
    var o;
    if (i == null || typeof i != "string" || (i = this._stringToBytes(i, e),
    i != null))
        return typeof r != "string" && (r = this._base64Encode(r, e),
        r == null) ? void 0 : (o = this._funcMakeParams([n, t, i ? new EndUserByteArray(i) : null, r, u]),
        this._funcCall("CtxAppendSign", o, f, e, null))
};
EUSignCP.prototype.CtxAppendSignFile = function(n, t, i, r, u, f, e, o) {
    var s;
    s = this._funcMakeParams([n, t, i, r, u, f]);
    this._funcCall("CtxAppendSignFile", s, e, o, null)
};
EUSignCP.prototype.ShowSenderInfo = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("ShowSenderInfo", r, t, i, null)
};
EUSignCP.prototype.IsEnveloped = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([new EndUserByteArray(n)]),
    this._funcCall("IsEnveloped", r, t, i, null)
};
EUSignCP.prototype.IsEnvelopedFile = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("IsEnvelopedFile", r, t, i, null)
};
EUSignCP.prototype.Envelop = function(n, t, i, r, u, f) {
    var e;
    if (typeof r != "string" || (r = this._stringToBytes(r, f),
    r != null))
        return e = this._funcMakeParams([n, t, i, new EndUserByteArray(r)]),
        this._funcCall("Envelop", e, u, f, null)
};
EUSignCP.prototype.Develop = function(n, t, i, r) {
    var f, u = [];
    if (typeof t != "boolean" && (r = i,
    i = t),
    typeof n == "string" || (n = this._base64Encode(n, r),
    n != null))
        return u.push(n),
        typeof t == "boolean" ? u.push(t) : u.push(null),
        f = this._funcMakeParams(u),
        this._funcCall("Develop", f, i, r, null)
};
EUSignCP.prototype.EnvelopFile = function(n, t, i, r, u, f, e) {
    var o;
    o = this._funcMakeParams([n, t, i, r, u]);
    this._funcCall("EnvelopFile", o, f, e, null)
};
EUSignCP.prototype.DevelopFile = function(n, t, i, r, u) {
    var e, f = [];
    return typeof i != "boolean" && (u = r,
    r = i),
    f.push(n),
    f.push(t),
    typeof i == "boolean" ? f.push(i) : f.push(null),
    e = this._funcMakeParams(f),
    this._funcCall("DevelopFile", e, r, u, null)
};
EUSignCP.prototype.EnvelopEx = function(n, t, i, r, u, f) {
    var e;
    if (n.className == "EndUserArrayList" && (n = n.m_array),
    t.className == "EndUserArrayList" && (t = t.m_array),
    typeof r != "string" || (r = this._stringToBytes(r, f),
    r != null))
        return e = this._funcMakeParams([n, t, i, new EndUserByteArray(r)]),
        this._funcCall("EnvelopEx", e, u, f, null)
};
EUSignCP.prototype.DevelopEx = function(n, t, i, r, u) {
    var e, f = [];
    if (typeof i != "boolean" && (u = r,
    r = i),
    typeof n == "string" || (n = this._base64Encode(n, u),
    n != null))
        return f.push(n),
        f.push(t ? new EndUserByteArray(t) : null),
        typeof i == "boolean" ? f.push(i) : f.push(null),
        e = this._funcMakeParams(f),
        this._funcCall("DevelopEx", e, r, u, null)
};
EUSignCP.prototype.EnvelopFileEx = function(n, t, i, r, u, f, e) {
    var o;
    n.className == "EndUserArrayList" && (n = n.m_array);
    t.className == "EndUserArrayList" && (t = t.m_array);
    o = this._funcMakeParams([n, t, i, r, u]);
    this._funcCall("EnvelopFileEx", o, f, e, null)
};
EUSignCP.prototype.EnvelopToRecipients = function(n, t, i, r, u) {
    var o, e, f;
    for (n.className == "EndUserArrayList" && (n = n.m_array),
    e = [],
    f = 0; f < n.length; f++)
        e.push(new EndUserByteArray(n[f]));
    if (typeof i != "string" || (i = this._stringToBytes(i, u),
    i != null))
        return o = this._funcMakeParams([e, t, new EndUserByteArray(i)]),
        this._funcCall("EnvelopToRecipients", o, r, u, null)
};
EUSignCP.prototype.EnvelopFileToRecipients = function(n, t, i, r, u, f) {
    var s, o, e;
    for (n.className == "EndUserArrayList" && (n = n.m_array),
    o = [],
    e = 0; e < n.length; e++)
        o.push(new EndUserByteArray(n[e]));
    s = this._funcMakeParams([o, t, i, r]);
    this._funcCall("EnvelopFileToRecipients", s, u, f, null)
};
EUSignCP.prototype.EnvelopToRecipientsEx = function(n, t, i, r, u, f) {
    var s, o, e;
    for (n.className == "EndUserArrayList" && (n = n.m_array),
    o = [],
    e = 0; e < n.length; e++)
        o.push(new EndUserByteArray(n[e]));
    if (typeof r != "string" || (r = this._stringToBytes(r, f),
    r != null))
        return s = this._funcMakeParams([o, t, i, new EndUserByteArray(r)]),
        this._funcCall("EnvelopToRecipientsEx", s, u, f, null)
};
EUSignCP.prototype.EnvelopFileToRecipientsEx = function(n, t, i, r, u, f, e) {
    var h, s, o;
    for (n.className == "EndUserArrayList" && (n = n.m_array),
    s = [],
    o = 0; o < n.length; o++)
        s.push(new EndUserByteArray(n[o]));
    h = this._funcMakeParams([s, t, i, r, u]);
    this._funcCall("EnvelopFileToRecipientsEx", h, f, e, null)
};
EUSignCP.prototype.EnvelopToRecipientsWithOCode = function(n, t, i, r, u, f) {
    var e;
    if (typeof r != "string" || (r = this._stringToBytes(r, f),
    r != null))
        return e = this._funcMakeParams([n, t, i, new EndUserByteArray(r)]),
        this._funcCall("EnvelopToRecipientsWithOCode", e, u, f, null)
};
EUSignCP.prototype.EnvelopExWithDynamicKey = function(n, t, i, r, u, f, e) {
    var o;
    if (n.className == "EndUserArrayList" && (n = n.m_array),
    t.className == "EndUserArrayList" && (t = t.m_array),
    typeof u != "string" || (u = this._stringToBytes(u, e),
    u != null))
        return o = this._funcMakeParams([n, t, i, r, new EndUserByteArray(u)]),
        this._funcCall("EnvelopExWithDynamicKey", o, f, e, null)
};
EUSignCP.prototype.EnvelopFileExWithDynamicKey = function(n, t, i, r, u, f, e, o) {
    var s;
    n.className == "EndUserArrayList" && (n = n.m_array);
    t.className == "EndUserArrayList" && (t = t.m_array);
    s = this._funcMakeParams([n, t, i, r, u, f]);
    this._funcCall("EnvelopFileExWithDynamicKey", s, e, o, null)
};
EUSignCP.prototype.EnvelopToRecipientsWithDynamicKey = function(n, t, i, r, u, f) {
    var s, o, e;
    for (n.className == "EndUserArrayList" && (n = n.m_array),
    o = [],
    e = 0; e < n.length; e++)
        o.push(new EndUserByteArray(n[e]));
    if (typeof r != "string" || (r = this._stringToBytes(r, f),
    r != null))
        return s = this._funcMakeParams([o, t, i, new EndUserByteArray(r)]),
        this._funcCall("EnvelopToRecipientsWithDynamicKey", s, u, f, null)
};
EUSignCP.prototype.EnvelopFileToRecipientsWithDynamicKey = function(n, t, i, r, u, f, e) {
    var h, s, o;
    for (n.className == "EndUserArrayList" && (n = n.m_array),
    s = [],
    o = 0; o < n.length; o++)
        s.push(new EndUserByteArray(n[o]));
    h = this._funcMakeParams([s, t, i, r, u]);
    this._funcCall("EnvelopFileToRecipientsWithDynamicKey", h, f, e, null)
};
EUSignCP.prototype.EnvelopToRecipientsWithSettings = function(n, t, i, r, u, f, e, o, s) {
    var l, c, h;
    if (typeof i != "string" || (i = this._stringToBytes(i, s),
    i != null)) {
        for (n.className == "EndUserArrayList" && (n = n.m_array),
        c = [],
        h = 0; h < n.length; h++)
            c.push(new EndUserByteArray(n[h]));
        return l = this._funcMakeParams([c, t, new EndUserByteArray(i), r, u, f, e]),
        this._funcCall("EnvelopToRecipientsWithSettings", l, o, s, null)
    }
};
EUSignCP.prototype.RawEnvelop = function(n, t, i, r) {
    var u;
    if (typeof t != "string" || (t = this._stringToBytes(t, r),
    t != null))
        return u = this._funcMakeParams([new EndUserByteArray(n), new EndUserByteArray(t)]),
        this._funcCall("RawEnvelop", u, i, r, null)
};
EUSignCP.prototype.RawDevelop = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, t]),
    this._funcCall("RawDevelop", u, i, r, null)
};
EUSignCP.prototype.EnvelopRSA = function(n, t, i, r, u, f, e) {
    return this.EnvelopRSAEx(n, [t], [i], r, u, f, e)
};
EUSignCP.prototype.EnvelopFileRSA = function(n, t, i, r, u, f, e, o) {
    this.EnvelopFileRSAEx(n, [t], [i], r, u, f, e, o)
};
EUSignCP.prototype.EnvelopRSAEx = function(n, t, i, r, u, f, e) {
    var o;
    if (t.className == "EndUserArrayList" && (t = t.m_array),
    i.className == "EndUserArrayList" && (i = i.m_array),
    typeof u != "string" || (u = this._stringToBytes(u, e),
    u != null))
        return o = this._funcMakeParams([n, t, i, r, new EndUserByteArray(u)]),
        this._funcCall("EnvelopRSAEx", o, f, e, null)
};
EUSignCP.prototype.EnvelopFileRSAEx = function(n, t, i, r, u, f, e, o) {
    var s;
    t.className == "EndUserArrayList" && (t = t.m_array);
    i.className == "EndUserArrayList" && (i = i.m_array);
    s = this._funcMakeParams([n, t, i, r, u, f]);
    this._funcCall("EnvelopFileRSAEx", s, e, o, null)
};
EUSignCP.prototype.EnvelopToRecipientsRSA = function(n, t, i, r, u, f) {
    var s, o, e;
    for (t.className == "EndUserArrayList" && (t = t.m_array),
    o = [],
    e = 0; e < t.length; e++)
        o.push(new EndUserByteArray(t[e]));
    if (typeof r != "string" || (r = this._stringToBytes(r, f),
    r != null))
        return s = this._funcMakeParams([n, o, i, new EndUserByteArray(r)]),
        this._funcCall("EnvelopToRecipientsRSA", s, u, f, null)
};
EUSignCP.prototype.EnvelopFileToRecipientsRSA = function(n, t, i, r, u, f, e) {
    var h, s, o;
    for (t.className == "EndUserArrayList" && (t = t.m_array),
    s = [],
    o = 0; o < t.length; o++)
        s.push(new EndUserByteArray(t[o]));
    h = this._funcMakeParams([n, s, i, r, u]);
    this._funcCall("EnvelopFileToRecipientsRSA", h, f, e, null)
};
EUSignCP.prototype.CtxEnvelop = function(n, t, i, r, u, f, e, o) {
    var c, h, s;
    if (typeof f != "string" || (f = this._stringToBytes(f, o),
    f != null)) {
        for (t.className == "EndUserArrayList" && (t = t.m_array),
        h = [],
        s = 0; s < t.length; s++)
            h.push(new EndUserByteArray(t[s]));
        return c = this._funcMakeParams([n, h, i, r, u, new EndUserByteArray(f)]),
        this._funcCall("CtxEnvelop", c, e, o, null)
    }
};
EUSignCP.prototype.CtxEnvelopFile = function(n, t, i, r, u, f, e, o, s) {
    var l, c, h;
    for (t.className == "EndUserArrayList" && (t = t.m_array),
    c = [],
    h = 0; h < t.length; h++)
        c.push(new EndUserByteArray(t[h]));
    l = this._funcMakeParams([n, c, i, r, u, f, e]);
    this._funcCall("CtxEnvelopFile", l, o, s, null)
};
EUSignCP.prototype.CtxEnvelopWithDynamicKey = function(n, t, i, r, u, f, e, o) {
    var c, h, s;
    if (typeof f != "string" || (f = this._stringToBytes(f, o),
    f != null)) {
        for (t.className == "EndUserArrayList" && (t = t.m_array),
        h = [],
        s = 0; s < t.length; s++)
            h.push(new EndUserByteArray(t[s]));
        return c = this._funcMakeParams([n, h, i, r, u, new EndUserByteArray(f)]),
        this._funcCall("CtxEnvelopWithDynamicKey", c, e, o, null)
    }
};
EUSignCP.prototype.CtxEnvelopFileWithDynamicKey = function(n, t, i, r, u, f, e, o, s) {
    var l, c, h;
    for (t.className == "EndUserArrayList" && (t = t.m_array),
    c = [],
    h = 0; h < t.length; h++)
        c.push(new EndUserByteArray(t[h]));
    l = this._funcMakeParams([n, c, i, r, u, f, e]);
    this._funcCall("CtxEnvelopFileWithDynamicKey", l, o, s, null)
};
EUSignCP.prototype.CtxDevelop = function(n, t, i, r, u, f) {
    var o, e = [];
    if (typeof r != "boolean" && (f = u,
    u = r),
    typeof t == "string" || (t = this._base64Encode(t, f),
    t != null))
        return e.push(n),
        e.push(t),
        e.push(i ? new EndUserByteArray(i) : null),
        typeof r == "boolean" ? e.push(r) : e.push(null),
        o = this._funcMakeParams(e),
        this._funcCall("CtxDevelop", o, u, f, null)
};
EUSignCP.prototype.CtxDevelopFile = function(n, t, i, r, u, f, e) {
    var s, o = [];
    return typeof u != "boolean" && (e = f,
    f = u),
    o.push(n),
    o.push(t),
    o.push(i ? new EndUserByteArray(i) : null),
    o.push(r),
    typeof u == "boolean" ? o.push(u) : o.push(null),
    s = this._funcMakeParams(o),
    this._funcCall("CtxDevelopFile", s, f, e, null)
};
EUSignCP.prototype.CtxCreateAuthData = function(n, t, i, r, u) {
    var f;
    if (typeof i != "string" || (i = this._stringToBytes(i, u),
    i != null))
        return f = this._funcMakeParams([n, new EndUserByteArray(t), new EndUserByteArray(i)]),
        this._funcCall("CtxCreateAuthData", f, r, u, null)
};
EUSignCP.prototype.ProtectDataByPassword = function(n, t, i, r) {
    var u;
    if (typeof n != "string" || (n = this._stringToBytes(n, r),
    n != null))
        return u = this._funcMakeParams([new EndUserByteArray(n), t]),
        this._funcCall("ProtectDataByPassword", u, i, r, null)
};
EUSignCP.prototype.UnprotectDataByPassword = function(n, t, i, r) {
    var u;
    if (typeof n == "string" || (n = this._base64Encode(n, r),
    n != null))
        return u = this._funcMakeParams([n, t]),
        this._funcCall("UnprotectDataByPassword", u, i, r, null)
};
EUSignCP.prototype.SessionIsInitialized = function(n, t, i) {
    var r;
    return n.SetData(null),
    r = this._funcMakeParams([n]),
    this._funcCall("SessionIsInitialized", r, t, i, null)
};
EUSignCP.prototype.SessionClose = function(n, t, i) {
    var r;
    n.SetData(null);
    r = this._funcMakeParams([n]);
    this._funcCall("SessionClose", r, t, i, null)
};
EUSignCP.prototype.ClientSessionCreateStep1 = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("ClientSessionCreateStep1", r, t, i, null)
};
EUSignCP.prototype.ServerSessionCreateStep1 = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, new EndUserByteArray(t)]),
    this._funcCall("ServerSessionCreateStep1", u, i, r, null)
};
EUSignCP.prototype.ClientSessionCreateStep2 = function(n, t, i, r) {
    var u, e = this, f;
    n.SetData(null);
    u = this._funcMakeParams([n, new EndUserByteArray(t)]);
    f = function(t, i, r) {
        n.SetData(t.GetData());
        e.IsAsync(i, r) && i()
    }
    ;
    this._funcCall("ClientSessionCreateStep2", u, i, r, f)
};
EUSignCP.prototype.ServerSessionCreateStep2 = function(n, t, i, r) {
    var u;
    n.SetData(null);
    u = this._funcMakeParams([n, new EndUserByteArray(t)]);
    this._funcCall("ServerSessionCreateStep2", u, i, r, null)
};
EUSignCP.prototype.SessionSave = function(n, t, i) {
    var r;
    return n.SetData(null),
    r = this._funcMakeParams([n]),
    this._funcCall("SessionSave", r, t, i, null)
};
EUSignCP.prototype.SessionLoad = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([new EndUserByteArray(n)]),
    this._funcCall("SessionLoad", r, t, i, null)
};
EUSignCP.prototype.SessionCheckCertificates = function(n, t, i) {
    var r;
    return n.SetData(null),
    r = this._funcMakeParams([n]),
    this._funcCall("SessionCheckCertificates", r, t, i, null)
};
EUSignCP.prototype.SessionEncrypt = function(n, t, i, r) {
    var u, f = !1, o = this, e;
    if (typeof t != "string" || (f = !0,
    t = this._stringToBytes(t, r),
    t != null))
        return n.SetData(null),
        u = this._funcMakeParams([n, new EndUserByteArray(t)]),
        e = function(n, t, i) {
            return o.BASE64Encode(n, t, i)
        }
        ,
        this._funcCall("SessionEncrypt", u, i, r, f ? e : null)
};
EUSignCP.prototype.SessionDecrypt = function(n, t, i, r) {
    var u;
    if (typeof t != "string" || (t = this._base64Decode(t, r),
    t != null))
        return n.SetData(null),
        u = this._funcMakeParams([n, new EndUserByteArray(t)]),
        this._funcCall("SessionDecrypt", u, i, r, null)
};
EUSignCP.prototype.SessionEncryptContinue = function(n, t, i, r) {
    var f, u = this, e = !1, o;
    if (typeof t != "string" || (e = !0,
    t = this._stringToBytes(t, r),
    t != null))
        return n.SetData(null),
        f = this._funcMakeParams([n, new EndUserByteArray(t)]),
        o = function(n, i, r) {
            var o, f;
            if (e)
                return u.BASE64Encode(n, i, r);
            if (o = u.IsAsync(i, r),
            !u._copyArrayData(t, n)) {
                if (f = u.MakeError(EndUserError.ERROR_BAD_PARAMETER, ""),
                o) {
                    r(f);
                    return
                }
                throw new EndUserException(f.errorCode,f.message);
            }
            if (o)
                i(t);
            else
                return t
        }
        ,
        this._funcCall("SessionEncryptContinue", f, i, r, o)
};
EUSignCP.prototype.SessionDecryptContinue = function(n, t, i, r) {
    var f, u = this, e;
    if (typeof t != "string" || (t = this._base64Decode(t, r),
    t != null))
        return n.SetData(null),
        f = this._funcMakeParams([n, new EndUserByteArray(t)]),
        e = function(n, i, r) {
            var e = u.IsAsync(i, r), f;
            if (!u._copyArrayData(t, n)) {
                if (f = u.MakeError(EndUserError.ERROR_BAD_PARAMETER, ""),
                e) {
                    r(f);
                    return
                }
                throw new EndUserException(f.errorCode,f.message);
            }
            if (e)
                i(t);
            else
                return t
        }
        ,
        this._funcCall("SessionDecryptContinue", f, i, r, e)
};
EUSignCP.prototype.SessionGetPeerCertificateInfo = function(n, t, i) {
    var r;
    return n.SetData(null),
    r = this._funcMakeParams([n]),
    this._funcCall("SessionGetPeerCertificateInfo", r, t, i, null)
};
EUSignCP.prototype.ClientDynamicKeySessionCreate = function(n, t, i, r, u) {
    var e, f = [];
    return (typeof t != "string" || typeof i != "string") && (u = r,
    r = i),
    f.push(n),
    typeof t == "string" && typeof i == "string" ? (f.push(t),
    f.push(i),
    f.push(null)) : (f.push(null),
    f.push(null),
    f.push(new EndUserByteArray(t))),
    e = this._funcMakeParams(f),
    this._funcCall("ClientDynamicKeySessionCreate", e, r, u, null)
};
EUSignCP.prototype.ServerDynamicKeySessionCreate = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, new EndUserByteArray(t)]),
    this._funcCall("ServerDynamicKeySessionCreate", u, i, r, null)
};
EUSignCP.prototype.ClientDynamicKeySessionLoad = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([new EndUserByteArray(n)]),
    this._funcCall("ClientDynamicKeySessionLoad", r, t, i, null)
};
EUSignCP.prototype.SCClientIsRunning = function(n, t) {
    var i;
    return i = this._funcMakeParams(null),
    this._funcCall("SCClientIsRunning", i, n, t, null)
};
EUSignCP.prototype.SCClientStart = function(n, t) {
    var i;
    i = this._funcMakeParams(null);
    this._funcCall("SCClientStart", i, n, t, null)
};
EUSignCP.prototype.SCClientStop = function(n, t) {
    var i;
    i = this._funcMakeParams(null);
    this._funcCall("SCClientStop", i, n, t, null)
};
EUSignCP.prototype.SCClientAddGate = function(n, t, i, r, u, f, e, o) {
    var s;
    typeof u != "string" && (e = u,
    o = f,
    u = null,
    f = null);
    s = this._funcMakeParams([n, t, i, r, u, f]);
    this._funcCall("SCClientAddGate", s, e, o, null)
};
EUSignCP.prototype.SCClientRemoveGate = function(n, t, i) {
    var r;
    r = this._funcMakeParams([n]);
    this._funcCall("SCClientRemoveGate", r, t, i, null)
};
EUSignCP.prototype.SCClientGetStatistic = function(n, t) {
    var i;
    return i = this._funcMakeParams(null),
    this._funcCall("SCClientGetStatistic", i, n, t, null)
};
EUSignCP.prototype.AppendTransportHeader = function(n, t, i, r, u, f, e) {
    var o;
    return o = this._funcMakeParams([n, t, i, new EndUserByteArray(r), new EndUserByteArray(u)]),
    this._funcCall("AppendTransportHeader", o, f, e, null)
};
EUSignCP.prototype.ParseTransportHeader = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([new EndUserByteArray(n)]),
    this._funcCall("ParseTransportHeader", r, t, i, null)
};
EUSignCP.prototype.AppendCryptoHeader = function(n, t, i, r, u) {
    var f;
    return f = this._funcMakeParams([n, t, new EndUserByteArray(i)]),
    this._funcCall("AppendCryptoHeader", f, r, u, null)
};
EUSignCP.prototype.ParseCryptoHeader = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([new EndUserByteArray(n)]),
    this._funcCall("ParseCryptoHeader", r, t, i, null)
};
EUSignCP.prototype.AppendFileTransportHeader = function(n, t, i, r, u, f, e, o) {
    var s;
    s = this._funcMakeParams([n, t, i, new EndUserByteArray(r), u, f]);
    this._funcCall("AppendFileTransportHeader", s, e, o, null)
};
EUSignCP.prototype.ParseFileTransportHeader = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, t]),
    this._funcCall("ParseFileTransportHeader", u, i, r, null)
};
EUSignCP.prototype.AppendFileCryptoHeader = function(n, t, i, r, u, f) {
    var e;
    e = this._funcMakeParams([n, t, i, r]);
    this._funcCall("AppendFileCryptoHeader", e, u, f, null)
};
EUSignCP.prototype.ParseFileCryptoHeader = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, t]),
    this._funcCall("ParseFileCryptoHeader", u, i, r, null)
};
EUSignCP.prototype.DevCtxEnum = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("DevCtxEnum", r, t, i, null)
};
EUSignCP.prototype.DevCtxOpen = function(n, t, i, r, u) {
    var f;
    return f = this._funcMakeParams([n, t, i]),
    this._funcCall("DevCtxOpen", f, r, u, null)
};
EUSignCP.prototype.CreateDeviceContext = function() {
    return new EndUserDeviceContext
};
EUSignCP.prototype.DevCtxEnumVirtual = function(n, t, i) {
    var r, u = this, f;
    return r = this._funcMakeParams([n]),
    f = function(t, i, r) {
        var e = u.IsAsync(i, r), f;
        try {
            if (t == null)
                if (e)
                    i(null);
                else
                    return null;
            if (n.set(t[1]),
            e)
                i(t[0]);
            else
                return t[0]
        } catch (o) {
            if (f = u.MakeError(EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, ""),
            e) {
                r(f);
                return
            }
            throw new EndUserException(f.errorCode,f.message);
        }
    }
    ,
    this._funcCall("DevCtxEnumVirtual", r, t, i, f)
};
EUSignCP.prototype.DevCtxClose = function(n, t, i) {
    var r;
    return r = this._funcMakeParams([n]),
    this._funcCall("DevCtxClose", r, t, i, null)
};
EUSignCP.prototype.DevCtxGetData = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, t]),
    this._funcCall("DevCtxGetData", u, i, r, null)
};
EUSignCP.prototype.DevCtxChangePassword = function(n, t, i, r) {
    var u;
    return u = this._funcMakeParams([n, t]),
    this._funcCall("DevCtxChangePassword", u, i, r, null)
};
EUSignCP.prototype.GetHostInfo = function(n, t) {
    var i;
    return i = this._funcMakeParams(null),
    this._funcCall("GetHostInfo", i, n, t, null)
};
EUSignCP.prototype.IsRemotelyControlled = function(n, t) {
    var i;
    return i = this._funcMakeParams(null),
    this._funcCall("IsRemotelyControlled", i, n, t, null)
};
EUSignCP.prototype.CtxCreate = function(n, t) {
    var i;
    return i = this._funcMakeParams(null),
    this._funcCall("CtxCreate", i, n, t, null)
};
EUSignCP.prototype.CtxFree = function(n, t, i) {
    var r;
    r = this._funcMakeParams([n]);
    this._funcCall("CtxFree", r, t, i, null)
};
EUSignCP.prototype.CtxSetParameter = function(n, t, i, r, u) {
    var f;
    typeof i == "boolean" && (i = i ? 1 : 0);
    f = this._funcMakeParams([n, t, i]);
    this._funcCall("CtxSetParameter", f, r, u, null)
};
EndUserStrings = function() {};
EndUserStrings.WEB_LIBRARY_OS_NOT_SUPPORTED = 131072;
EndUserStrings.WEB_LIBRARY_NOT_INSTALLED_OR_RUN = 131073;
EndUserStrings.WEB_LIBRARY_JAVA_APPLET_NOT_LOADED = 131074;
EndUserStrings.WEB_LIBRARY_INSTALLED_VERSION_NOT_SUPPORTED = 131075;
EndUserStrings.WEB_LIBRARY_INSTALL_PACKAGE = 131076;
EndUserStrings.WEB_LIBRARY_UPDATE_PACKAGE = 131077;
EndUserStrings.WEB_LIBRARY_USER_MANUAL = 131078;
EndUserStrings.WEB_LIBRARY_WEB_EXTENSION_INSTALL_PACKAGE = 131079;
EndUserStrings.WEB_LIBRARY_CHECK_JRE_VERSION = 131080;
EndUserStrings.WEB_LIBRARY_WEB_EXTENSION_NOT_INSTALLED_OR_RUN = 131081;
EndUserStrings.DESCRIPTIONS = [];
EndUserStrings.DESCRIPTIONS[EndUserStrings.WEB_LIBRARY_OS_NOT_SUPPORTED] = ["Інсталяційний пакет web-бібліотеки підпису для вашої системи відсутній", "Инсталяционный  пакет web-библиотеки подписи для вашей системы отсутствует", "The installation package of the library for the web signature for your system is absent"];
EndUserStrings.DESCRIPTIONS[EndUserStrings.WEB_LIBRARY_NOT_INSTALLED_OR_RUN] = ["Бібліотеку web-підпису не запущено або не інстальовано у системі. Для продовження необхідно запустити або інсталювати бібліотеку web-підпису.", "Библиотеку web-подписи не запущено или не установлено в системе. Для продолжения необходимо запустить или установить библиотеку web-подписи.", "The library for the web signature isn't started or not installed in system. To continue, it is necessary to start or install library for the web signature."];
EndUserStrings.DESCRIPTIONS[EndUserStrings.WEB_LIBRARY_INSTALLED_VERSION_NOT_SUPPORTED] = ["Інстальована версія web-бібліотеки підпису більше не підтримується. !!! Для продовження необхідно інсталювати оновлену версію web-бібліотеки підпису.", "Инсталированная версия web-библиотеки подписи больше не поддерживается. Для продолжения необходимо установить обновленную версию web-библиотеки подписи.", "The installed version of library for the web signature isn't supported any more. To continue, it is necessary to install the updated version of the library for the web signature."];
EndUserStrings.DESCRIPTIONS[EndUserStrings.WEB_LIBRARY_JAVA_APPLET_NOT_LOADED] = ["Java-апплет не завантажено. Необхідно перевірити версію JRE", "Java-апплет не загружен. Необходимо проверить версию JRE", "Java applet isn't loaded. It is necessary to check the version of JRE"];
EndUserStrings.DESCRIPTIONS[EndUserStrings.WEB_LIBRARY_INSTALL_PACKAGE] = ["Інсталяційний пакет web-бібліотеки підпису", "Инсталяционный пакет web-библиотеки подписи", "Install package of library for the web signature"];
EndUserStrings.DESCRIPTIONS[EndUserStrings.WEB_LIBRARY_UPDATE_PACKAGE] = ["Оновлення web-бібліотеки підпису", "Обновление web-библиотеки подписи", "Update of library for the web signature"];
EndUserStrings.DESCRIPTIONS[EndUserStrings.WEB_LIBRARY_USER_MANUAL] = ["Настанова користувача", "Руководство пользователя", "User manual"];
EndUserStrings.DESCRIPTIONS[EndUserStrings.WEB_LIBRARY_WEB_EXTENSION_INSTALL_PACKAGE] = ["Інсталяційний пакет бібліотеки підпису (web-розширення)", "Инсталяционный пакет библиотеки подписи (web-расширение)", "Install package of library for the web signature (web-extension)"];
EndUserStrings.DESCRIPTIONS[EndUserStrings.WEB_LIBRARY_CHECK_JRE_VERSION] = ["Перевірити версію JRE", "Проверить версию JRE", "Check JRE version"];
EndUserStrings.DESCRIPTIONS[EndUserStrings.WEB_LIBRARY_WEB_EXTENSION_NOT_INSTALLED_OR_RUN] = ["Веб-розширення для роботи бібліотеки web-підпису не запущено або не інстальовано в браузері. Для продовження необхідно запустити або інсталювати веб-розширення.", "Веб-расширение для работы библиотеки web-подписи не запущено или не установлено в браузере. Для продолжения необходимо запустить или установить веб-расширение.", "The web extension for the web signature library is not running or installed in the browser. To continue, you need to run or install the web extension."];
EndUserStrings.getString = function(n, t) {
    var i, r;
    return (i = EndUserStrings.DESCRIPTIONS[n],
    typeof i == "undefined" && (i = ""),
    r = i[t - 1],
    typeof r == "undefined") ? i[0] : r
};
EndUserLibraryLoader = function(n, t, i, r, u) {
    this.m_id = t;
    this.m_library = null;
    this.m_language = i;
    this.m_supportedLibraryTypes = [];
    this.m_supportedLibraryTypesIndex = 0;
    this.m_noJavaApplet = r | !1;
    this.m_webExtensionFirst = u | !1;
    this.m_errorResult = null;
    switch (n) {
    case EndUserLibraryLoader.LIBRARY_TYPE_JAVA_APPLET:
    case EndUserLibraryLoader.LIBRARY_TYPE_SIGN_AGENT:
    case EndUserLibraryLoader.LIBRARY_TYPE_WEB_EXTENSION:
    case EndUserLibraryLoader.LIBRARY_TYPE_NPAPI:
    case EndUserLibraryLoader.LIBRARY_TYPE_ACTIVE_X:
        this.m_libraryType = n;
        break;
    default:
        this.m_libraryType = EndUserLibraryLoader.LIBRARY_TYPE_DEFAULT
    }
    this.m_libraryType == EndUserLibraryLoader.LIBRARY_TYPE_DEFAULT ? (this.m_webExtensionFirst && EndUserLibraryLoader.isWebExtensionSupported() && this.m_supportedLibraryTypes.push(EndUserLibraryLoader.LIBRARY_TYPE_WEB_EXTENSION),
    EndUserLibraryLoader.isSignAgentSupported() && this.m_supportedLibraryTypes.push(EndUserLibraryLoader.LIBRARY_TYPE_SIGN_AGENT),
    !this.m_webExtensionFirst && EndUserLibraryLoader.isWebExtensionSupported() && this.m_supportedLibraryTypes.push(EndUserLibraryLoader.LIBRARY_TYPE_WEB_EXTENSION),
    EndUserLibraryLoader.isNPAPISupported() && this.m_supportedLibraryTypes.push(EndUserLibraryLoader.LIBRARY_TYPE_NPAPI),
    EndUserLibraryLoader.isActiveXSupported() && this.m_supportedLibraryTypes.push(EndUserLibraryLoader.LIBRARY_TYPE_ACTIVE_X),
    !this.m_noJavaApplet && EndUserLibraryLoader.isJavaAppletSupported() && this.m_supportedLibraryTypes.push(EndUserLibraryLoader.LIBRARY_TYPE_JAVA_APPLET)) : this.m_supportedLibraryTypes.push(this.m_libraryType);
    this.onload = function() {}
    ;
    this.onerror = function() {}
    ;
    this.getLibraryType = function() {
        return this.m_libraryType
    }
};
EndUserLibraryLoader.LIBRARY_TYPE_DEFAULT = 0;
EndUserLibraryLoader.LIBRARY_TYPE_JAVA_APPLET = 1;
EndUserLibraryLoader.LIBRARY_TYPE_SIGN_AGENT = 2;
EndUserLibraryLoader.LIBRARY_TYPE_WEB_EXTENSION = 3;
EndUserLibraryLoader.LIBRARY_TYPE_NPAPI = 4;
EndUserLibraryLoader.LIBRARY_TYPE_ACTIVE_X = 5;
EndUserLibraryLoader.EU_DEFAULT_LANG = 0;
EndUserLibraryLoader.EU_UA_LANG = 1;
EndUserLibraryLoader.EU_RU_LANG = 2;
EndUserLibraryLoader.EU_EN_LANG = 3;
EndUserLibraryLoader.isJavaAppletSupported = function() {
    var n = new EndUserBrowserInfo;
    if (this.m_noJavaApplet)
        return !1;
    switch (n.GetName()) {
    case EndUserBrowserInfo.BROWSER_NAME_FIREFOX:
        return n.GetVersion() > 44 ? !1 : !0;
    case EndUserBrowserInfo.BROWSER_NAME_CHROME:
        return n.GetVersion() > 44 ? !1 : !0;
    case EndUserBrowserInfo.BROWSER_NAME_OPERA:
        return n.GetVersion() > 30 ? !1 : !0;
    case EndUserBrowserInfo.BROWSER_NAME_EDGE:
    case EndUserBrowserInfo.BROWSER_NAME_UNKNOWN:
        return !1;
    default:
        return !0
    }
};
EndUserLibraryLoader.isSignAgentSupported = function() {
    var n = new EndUserBrowserInfo;
    switch (n.GetName()) {
    case EndUserBrowserInfo.BROWSER_NAME_IE:
        if (n.GetVersion() < 10)
            return !1;
        break;
    case EndUserBrowserInfo.BROWSER_NAME_SAFARI:
        if (n.GetVersion() < 7)
            return !1;
        break;
    case EndUserBrowserInfo.BROWSER_NAME_UNKNOWN:
        return !1
    }
    switch (n.GetOSName()) {
    case EndUserBrowserInfo.OS_NAME_WINDOWS:
        break;
    case EndUserBrowserInfo.OS_NAME_MAC:
        break;
    case EndUserBrowserInfo.OS_NAME_ANDROID:
        break;
    case EndUserBrowserInfo.OS_NAME_UNKNOWN:
        return !1;
    default:
        return !1
    }
    return !0
};
EndUserLibraryLoader.isWebExtensionSupported = function() {
    var n = new EndUserBrowserInfo;
    switch (n.GetName()) {
    case EndUserBrowserInfo.BROWSER_NAME_CHROME:
        break;
    case EndUserBrowserInfo.BROWSER_NAME_OPERA:
        if (n.GetVersion() < 35)
            return !1;
        break;
    case EndUserBrowserInfo.BROWSER_NAME_FIREFOX:
        if (n.GetVersion() < 50)
            return !1;
        break;
    case EndUserBrowserInfo.BROWSER_NAME_UNKNOWN:
        return !1;
    default:
        return !1
    }
    switch (n.GetOSName()) {
    case EndUserBrowserInfo.OS_NAME_ANDROID:
    case EndUserBrowserInfo.OS_NAME_UNKNOWN:
        return !1
    }
    return !0
};
EndUserLibraryLoader.isNPAPISupported = function() {
    var n = new EndUserBrowserInfo;
    switch (n.GetName()) {
    case EndUserBrowserInfo.BROWSER_NAME_FIREFOX:
        if (n.GetVersion() > 51)
            return !1;
        break;
    default:
        return !1
    }
    return !0
};
EndUserLibraryLoader.isActiveXSupported = function() {
    var n = new EndUserBrowserInfo;
    switch (n.GetName()) {
    case EndUserBrowserInfo.BROWSER_NAME_IE:
        if (n.GetVersion() < 9 || n.GetArch() == EndUserBrowserInfo.BROWSER_ARCH_NAME_X64)
            return !1;
        break;
    default:
        return !1
    }
    return !0
};
EndUserLibraryLoader.isWebExtensionInstalled = function() {
    var n = new EndUserBrowserInfo
      , t = n.GetName() == EndUserBrowserInfo.BROWSER_NAME_FIREFOX ? EU_SIGN_WEB_EXTENSION_ADDRESS_FIREFOX : EU_SIGN_WEB_EXTENSION_ADDRESS;
    return document.getElementsByClassName(t).length != 1 ? !1 : !0
};
EndUserLibraryLoader.prototype.getLibraryType = function() {
    return this.m_libraryType
};
EndUserLibraryLoader.prototype.load = function() {
    var n = this;
    setTimeout(function() {
        n._load(n.m_supportedLibraryTypes[n.m_supportedLibraryTypesIndex])
    }, 1)
};
EndUserLibraryLoader.prototype.unload = function() {
    var n = document.getElementById(this.m_id);
    n && n.parentNode && n.parentNode.removeChild(n)
};
EndUserLibraryLoader.prototype._load = function(n) {
    switch (n) {
    case EndUserLibraryLoader.LIBRARY_TYPE_JAVA_APPLET:
        this._loadSignApplet();
        return;
    case EndUserLibraryLoader.LIBRARY_TYPE_SIGN_AGENT:
        this._loadSignAgent();
        return;
    case EndUserLibraryLoader.LIBRARY_TYPE_WEB_EXTENSION:
        this._loadWebExtension();
        return;
    case EndUserLibraryLoader.LIBRARY_TYPE_NPAPI:
        this._loadNPAPI();
        return;
    case EndUserLibraryLoader.LIBRARY_TYPE_ACTIVE_X:
        this._loadActiveX();
        return
    }
};
EndUserLibraryLoader.prototype._onLoad = function() {
    this.m_libraryType = this.m_supportedLibraryTypes[this.m_supportedLibraryTypesIndex];
    try {
        this.onload(this.m_library)
    } catch (n) {
        console.log(n)
    }
};
EndUserLibraryLoader.prototype._onLoadError = function(n, t, i, r) {
    this.m_errorResult == null && (this.m_errorResult = {
        msg: t,
        code: i,
        library: r
    });
    var u = document.getElementById(this.m_id);
    if (u && u.parentNode && u.parentNode.removeChild(u),
    !n) {
        try {
            this.onerror(this.m_errorResult.msg, this.m_errorResult.code, this.m_errorResult.library)
        } catch (f) {
            console.log(f)
        }
        return
    }
    if (this.m_supportedLibraryTypesIndex++,
    this.m_supportedLibraryTypesIndex >= this.m_supportedLibraryTypes.length) {
        try {
            this.onerror(this.m_errorResult.msg, this.m_errorResult.code, this.m_errorResult.library)
        } catch (f) {
            console.log(f)
        }
        return
    }
    this.load()
};
EndUserLibraryLoader.prototype._loadSignApplet = function() {
    var n = document.createElement("applet");
    n.setAttribute("codebase", EU_SIGN_APPLET_CODEBASE);
    n.setAttribute("code", EU_SIGN_APPLET_CODE);
    n.setAttribute("archive", EU_SIGN_APPLET_NAME);
    n.setAttribute("cache_archive", EU_SIGN_APPLET_NAME);
    n.setAttribute("cache_version", EU_SIGN_APPLET_VERSION);
    n.setAttribute("separate_jvm", !0);
    n.setAttribute("id", this.m_id);
    n.setAttribute("width", "100%");
    n.setAttribute("height", "1");
    document.body.appendChild(n);
    this.m_library = document.getElementById(this.m_id);
    this._waitForSignAppletLoad(this, EU_SIGN_APPLET_LOAD_DELAY, EU_SIGN_APPLET_LOAD_WAITS)
};
EndUserLibraryLoader.prototype._waitForSignAppletLoad = function(n, t, i) {
    try {
        n.m_library.SetUIMode(!1)
    } catch (u) {
        if (i != 0) {
            setTimeout(function() {
                n._waitForSignAppletLoad(n, t, i - 1)
            }, t, i);
            return
        }
        var r = "";
        r = EndUserError.getErrorDescriptionEx(EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, n.m_language) + ". ";
        r += EndUserStrings.getString(EndUserStrings.WEB_LIBRARY_JAVA_APPLET_NOT_LOADED, n.m_language);
        r += "<br><br>";
        r += '<a style="text-indent:18px" href="' + EU_SIGN_APPLET_CHECK_JRE_URL + '">' + EndUserStrings.getString(EndUserStrings.WEB_LIBRARY_CHECK_JRE_VERSION, n.m_language) + "<\/a>";
        n._onLoadError(!0, r, EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, null);
        return
    }
    n._onLoad(n.m_library)
};
EndUserLibraryLoader.prototype._appendWebWrapperObject = function(n, t, i, r) {
    var f, u, e;
    try {
        f = new EUSignCP(n,t);
        u = document.createElement("object");
        u.setAttribute("id", this.m_id);
        i ? r ? (u.setAttribute("classid", n),
        u.setAttribute("height", "1px")) : (u.type = n,
        u.classid = n,
        u.height = "1px") : (u.classid = "EUSignCP.class",
        u.style = "display:none",
        u.style.visibility = "hidden");
        document.body.appendChild(u);
        for (e in f)
            u[e] = f[e];
        return this.m_library = document.getElementById(this.m_id),
        !0
    } catch (o) {
        return !1
    }
};
EndUserLibraryLoader.prototype._onLoadWebLibraryError = function(n) {
    var t = this
      , r = t.m_library
      , f = !0
      , u = !1
      , i = "";
    u = EndUserLibraryLoader.isWebExtensionSupported() && !EndUserLibraryLoader.isWebExtensionInstalled() && t.m_webExtensionFirst;
    i += EndUserError.getErrorDescriptionEx(EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, t.m_language);
    i += ". ";
    switch (n.GetErrorCode()) {
    case EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED:
        i += EndUserStrings.getString(u ? EndUserStrings.WEB_LIBRARY_WEB_EXTENSION_NOT_INSTALLED_OR_RUN : EndUserStrings.WEB_LIBRARY_NOT_INSTALLED_OR_RUN, t.m_language);
        break;
    case EndUserError.ERROR_LIBRARY_VERSION_NOT_SUPPORTED:
        i += EndUserStrings.getString(EndUserStrings.WEB_LIBRARY_INSTALLED_VERSION_NOT_SUPPORTED, t.m_language);
        f = !1;
        t.m_errorResult = null;
        break;
    default:
        i += EndUserError.getErrorDescriptionEx(n.GetErrorCode(), t.m_language) + "."
    }
    i += "<br><br>";
    r.GetInstallURL() != null ? (i += n.GetErrorCode() == EndUserError.ERROR_LIBRARY_VERSION_NOT_SUPPORTED ? '<div><a style="text-indent:18px" href="' + r.GetUpdateURL() + '">' + EndUserStrings.getString(EndUserStrings.WEB_LIBRARY_UPDATE_PACKAGE, t.m_language) + "<\/a><\/div>" : u ? '<div><a style="text-indent:18px" href="' + r.GetWebExtensionInstallURL() + '">' + EndUserStrings.getString(EndUserStrings.WEB_LIBRARY_WEB_EXTENSION_INSTALL_PACKAGE, t.m_language) + "<\/a><\/div>" : '<div><a style="text-indent:18px" href="' + r.GetInstallURL() + '">' + EndUserStrings.getString(EndUserStrings.WEB_LIBRARY_INSTALL_PACKAGE, t.m_language) + "<\/a><\/div>",
    i += '<div><a style="text-indent:18px" href="' + r.GetHelpURL() + '">' + EndUserStrings.getString(EndUserStrings.WEB_LIBRARY_USER_MANUAL, t.m_language) + "<\/a><\/div>") : i += "<div>" + EndUserStrings.getString(EndUserStrings.WEB_LIBRARY_OS_NOT_SUPPORTED, t.m_language) + "<\/div>";
    t._onLoadError(f, i, n.GetErrorCode(), r)
};
EndUserLibraryLoader.prototype._loadWebLibrary = function() {
    var n = this;
    n.m_library.Load(function() {
        n._onLoad()
    }, function(t) {
        n._onLoadWebLibraryError(t)
    })
};
EndUserLibraryLoader.prototype._loadSignAgent = function() {
    if (!this._appendWebWrapperObject(EU_SIGN_AGENT_DEFAULT_ADDRESS, window.location.protocol == "http:" ? EU_SIGN_AGENT_DEFAULT_HTTP_POPT : EU_SIGN_AGENT_DEFAULT_HTTPS_POPT, !1, !1)) {
        var n = EndUserError.getErrorDescriptionEx(EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, this.m_language);
        this._onLoadError(!0, n, EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, null);
        return
    }
    this._loadWebLibrary()
};
EndUserLibraryLoader.prototype._loadWebExtension = function() {
    if (!this._appendWebWrapperObject(EU_SIGN_WEB_EXTENSION_ADDRESS, "", !1, !1)) {
        var n = EndUserError.getErrorDescriptionEx(EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, this.m_language);
        this._onLoadError(!0, n, EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, null);
        return
    }
    this._loadWebLibrary()
};
EndUserLibraryLoader.prototype._loadPlugin = function(n, t, i, r) {
    if (!this._appendWebWrapperObject(n, "", !0, r)) {
        var u = EndUserError.getErrorDescriptionEx(EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, this.m_language);
        this._onLoadError(!0, u, EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED, null);
        return
    }
    this._waitForPluginLoad(this, t, i)
};
EndUserLibraryLoader.prototype._waitForPluginLoad = function(n, t, i) {
    n.m_library.Load(function() {
        n._onLoad()
    }, function(r) {
        if (r.GetErrorCode() == EndUserError.ERROR_LIBRARY_COMUNICATION_FAILED && i != 0) {
            setTimeout(function() {
                n._waitForPluginLoad(n, t, i - 1)
            }, t, i);
            return
        }
        n._onLoadWebLibraryError(r)
    })
};
EndUserLibraryLoader.prototype._loadNPAPI = function() {
    this._loadPlugin(EU_SIGN_WEB_NPAPI_ADDRESS, EU_SIGN_WEB_NPAPI_LOAD_DELAY, EU_SIGN_WEB_NPAPI_LOAD_WAITS, !1)
};
EndUserLibraryLoader.prototype._loadActiveX = function() {
    this._loadPlugin(EU_SIGN_WEB_ACTIVE_X_ADDRESS, EU_SIGN_WEB_ACTIVE_X_LOAD_DELAY, EU_SIGN_WEB_ACTIVE_X_LOAD_WAITS, !0)
};
var CloseAlertButtonID = "CloseAlertButton"
  , MakeClass = function() {
    return function(n) {
        if (this instanceof arguments.callee)
            typeof this.__construct == "function" && this.__construct.apply(this, n);
        else
            return new arguments.callee(arguments)
    }
}
  , NewClass = function(n, t, i) {
    var u = MakeClass(), r;
    for (r in n)
        u.prototype[r] = n[r];
    for (r in i)
        u.prototype[r] = i[r];
    return u.prototype.__construct = t,
    u
}
  , EUAlertForm = NewClass({
    frameHeight: "0",
    frameWidth: "0",
    formHeight: "0",
    formWidth: "0",
    title: null,
    message: null,
    onSelectOK: null,
    DOMElement: "",
    dimmer: ""
}, function(n, t, i, r) {
    this.frameHeight = n;
    this.frameWidth = t;
    this.formHeight = i;
    this.formWidth = r
}, {
    ShowForm: function(n, t, i) {
        return this.title = n,
        this.message = t,
        this.onSelectOK = i,
        this.DOMElement = this._constructForm(),
        this.DOMElement.style.width = this.formWidth + "px",
        this.DOMElement.style.minHeight = this.formHeight + "px",
        this.DOMElement.style.left = Math.floor(document.body.clientWidth / 2) - this.formWidth / 2 + "px",
        this.DOMElement.style.zIndex = 9900,
        document.body.appendChild(this.DOMElement),
        this._attachEvents(),
        !1
    },
    CloseForm: function() {
        return this.DOMElement.parentNode.removeChild(this.DOMElement),
        this.onSelectOK != null && this.onSelectOK(),
        !1
    },
    _attachEvents: function() {
        var n = this
          , t = document.getElementById(CloseAlertButtonID);
        t.onclick = function() {
            return n.CloseForm(),
            !1
        }
    },
    _constructForm: function() {
        var t = document.createElement("div")
          , n = "";
        return n += '<div class="Form" style="z-index: 9900 !important;">',
        n += '<form name="CustomAlert" action="#" class="formCustomAlert">',
        n += "<style> .label {color: #000000;white-space: normal} td {color: #000000;} <\/style>",
        n += '<div align="center"><h3 class="FormHeader" style="text-align:center; padding:0px;">' + this.title + "<\/h3><\/div>",
        n += '<table height=90% width=100% border="0" class="label" bordercolor="#0C234B">',
        n += '<tr><td valign="top" align="center" class="form">',
        n += '   <table border="0" cellspacing="0" cellpadding="0" width="100%">',
        n += '   <tr><td valign="top" align="left" style="padding: 10px 30px; text-align: justify;">' + this._addReferenceImg(this.message) + "<\/td><\/tr>",
        n += "   <\/table>",
        n += "<\/td><\/tr>",
        n += "<\/table>",
        n += '<div align="right" style="padding: 0px 10px 10px 0px">',
        n += '<input type="button" id = ' + CloseAlertButtonID + ' value="ОК" class="button" style="text-indent:0px"/><\/div>',
        n += "<\/form>",
        n += "<\/div>",
        t.innerHTML = n,
        t.firstChild
    },
    _addReferenceImg: function(n) {
        return n.replace(new RegExp("<a ","g"), '<img src="./Scripts/eujsag/Arrow.png"><\/img><a class="imgRef"')
    }
})