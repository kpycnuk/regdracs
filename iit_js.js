/* Minification failed. Returning unminified contents.
(200,85-86): run-time error JS1100: Expected ',': =
(200,91-92): run-time error JS1002: Syntax error: ,
(200,105-106): run-time error JS1100: Expected ',': =
(208,22-23): run-time error JS1195: Expected expression: )
(208,25-26): run-time error JS1195: Expected expression: >
(209,45-46): run-time error JS1195: Expected expression: .
(209,46-47): run-time error JS1010: Expected identifier: .
(209,47-48): run-time error JS1010: Expected identifier: .
(209,57-58): run-time error JS1004: Expected ';': )
(210,21-22): run-time error JS1002: Syntax error: }
(213,17-18): run-time error JS1002: Syntax error: }
(217,71-72): run-time error JS1195: Expected expression: >
(218,36-37): run-time error JS1195: Expected expression: >
(221,17-18): run-time error JS1002: Syntax error: }
(226,17-18): run-time error JS1002: Syntax error: }
(230,53-54): run-time error JS1004: Expected ';': {
(346,5-6): run-time error JS1002: Syntax error: }
(348,36-37): run-time error JS1195: Expected expression: )
(348,38-39): run-time error JS1004: Expected ';': {
(355,6-7): run-time error JS1195: Expected expression: ,
(359,40-41): run-time error JS1004: Expected ';': {
(566,6-7): run-time error JS1195: Expected expression: ,
(570,64-65): run-time error JS1004: Expected ';': {
(580,6-7): run-time error JS1195: Expected expression: ,
(584,34-35): run-time error JS1195: Expected expression: )
(584,36-37): run-time error JS1004: Expected ';': {
(606,6-7): run-time error JS1195: Expected expression: ,
(610,5-23): run-time error JS1197: Too many errors. The file might not be a JavaScript file: refreshDevNameList
(565,9-24): run-time error JS1018: 'return' statement outside of function: return wasSaved
(502,17-32): run-time error JS1018: 'return' statement outside of function: return wasSaved
(520,17-32): run-time error JS1018: 'return' statement outside of function: return wasSaved
(491,13-28): run-time error JS1018: 'return' statement outside of function: return wasSaved
(474,13-28): run-time error JS1018: 'return' statement outside of function: return wasSaved
(457,13-28): run-time error JS1018: 'return' statement outside of function: return wasSaved
(415,13-28): run-time error JS1018: 'return' statement outside of function: return wasSaved
(382,13-28): run-time error JS1018: 'return' statement outside of function: return wasSaved
(350,13-64): run-time error JS1018: 'return' statement outside of function: return (euSignAgent && euSignAgent.IsInitialized())
(353,13-25): run-time error JS1018: 'return' statement outside of function: return false
(234,13-19): run-time error JS1018: 'return' statement outside of function: return
 */
/**
*
*  Base64 encode / decode
*  http://www.webtoolkit.info/
*
**/
var Base64 = {

    // private property
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

    // public method for encoding
    encode: function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        input = Base64._utf8_encode(input);

        while (i < input.length) {

            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output +
            this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
            this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

        }

        return output;
    },

    // public method for decoding
    decode: function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        while (i < input.length) {

            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }

        }

        output = Base64._utf8_decode(output);

        return output;

    },

    // private method for UTF-8 encoding
    _utf8_encode: function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    },

    // private method for UTF-8 decoding
    _utf8_decode: function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;

        while (i < utftext.length) {

            c = utftext.charCodeAt(i);

            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        }

        return string;
    }

};
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(h,r){var k={},l=k.lib={},n=function(){},f=l.Base={extend:function(a){n.prototype=this;var b=new n;a&&b.mixIn(a);b.hasOwnProperty("init")||(b.init=function(){b.$super.init.apply(this,arguments)});b.init.prototype=b;b.$super=this;return b},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
j=l.WordArray=f.extend({init:function(a,b){a=this.words=a||[];this.sigBytes=b!=r?b:4*a.length},toString:function(a){return(a||s).stringify(this)},concat:function(a){var b=this.words,d=a.words,c=this.sigBytes;a=a.sigBytes;this.clamp();if(c%4)for(var e=0;e<a;e++)b[c+e>>>2]|=(d[e>>>2]>>>24-8*(e%4)&255)<<24-8*((c+e)%4);else if(65535<d.length)for(e=0;e<a;e+=4)b[c+e>>>2]=d[e>>>2];else b.push.apply(b,d);this.sigBytes+=a;return this},clamp:function(){var a=this.words,b=this.sigBytes;a[b>>>2]&=4294967295<<
32-8*(b%4);a.length=h.ceil(b/4)},clone:function(){var a=f.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var b=[],d=0;d<a;d+=4)b.push(4294967296*h.random()|0);return new j.init(b,a)}}),m=k.enc={},s=m.Hex={stringify:function(a){var b=a.words;a=a.sigBytes;for(var d=[],c=0;c<a;c++){var e=b[c>>>2]>>>24-8*(c%4)&255;d.push((e>>>4).toString(16));d.push((e&15).toString(16))}return d.join("")},parse:function(a){for(var b=a.length,d=[],c=0;c<b;c+=2)d[c>>>3]|=parseInt(a.substr(c,
2),16)<<24-4*(c%8);return new j.init(d,b/2)}},p=m.Latin1={stringify:function(a){var b=a.words;a=a.sigBytes;for(var d=[],c=0;c<a;c++)d.push(String.fromCharCode(b[c>>>2]>>>24-8*(c%4)&255));return d.join("")},parse:function(a){for(var b=a.length,d=[],c=0;c<b;c++)d[c>>>2]|=(a.charCodeAt(c)&255)<<24-8*(c%4);return new j.init(d,b)}},t=m.Utf8={stringify:function(a){try{return decodeURIComponent(escape(p.stringify(a)))}catch(b){throw Error("Malformed UTF-8 data");}},parse:function(a){return p.parse(unescape(encodeURIComponent(a)))}},
q=l.BufferedBlockAlgorithm=f.extend({reset:function(){this._data=new j.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=t.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var b=this._data,d=b.words,c=b.sigBytes,e=this.blockSize,f=c/(4*e),f=a?h.ceil(f):h.max((f|0)-this._minBufferSize,0);a=f*e;c=h.min(4*a,c);if(a){for(var g=0;g<a;g+=e)this._doProcessBlock(d,g);g=d.splice(0,a);b.sigBytes-=c}return new j.init(g,c)},clone:function(){var a=f.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});l.Hasher=q.extend({cfg:f.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){q.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,d){return(new a.init(d)).finalize(b)}},_createHmacHelper:function(a){return function(b,d){return(new u.HMAC.init(a,
d)).finalize(b)}}});var u=k.algo={};return k}(Math);
;
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function(E){function h(a,f,g,j,p,h,k){a=a+(f&g|~f&j)+p+k;return(a<<h|a>>>32-h)+f}function k(a,f,g,j,p,h,k){a=a+(f&j|g&~j)+p+k;return(a<<h|a>>>32-h)+f}function l(a,f,g,j,h,k,l){a=a+(f^g^j)+h+l;return(a<<k|a>>>32-k)+f}function n(a,f,g,j,h,k,l){a=a+(g^(f|~j))+h+l;return(a<<k|a>>>32-k)+f}for(var r=CryptoJS,q=r.lib,F=q.WordArray,s=q.Hasher,q=r.algo,a=[],t=0;64>t;t++)a[t]=4294967296*E.abs(E.sin(t+1))|0;q=q.MD5=s.extend({_doReset:function(){this._hash=new F.init([1732584193,4023233417,2562383102,271733878])},
_doProcessBlock:function(m,f){for(var g=0;16>g;g++){var j=f+g,p=m[j];m[j]=(p<<8|p>>>24)&16711935|(p<<24|p>>>8)&4278255360}var g=this._hash.words,j=m[f+0],p=m[f+1],q=m[f+2],r=m[f+3],s=m[f+4],t=m[f+5],u=m[f+6],v=m[f+7],w=m[f+8],x=m[f+9],y=m[f+10],z=m[f+11],A=m[f+12],B=m[f+13],C=m[f+14],D=m[f+15],b=g[0],c=g[1],d=g[2],e=g[3],b=h(b,c,d,e,j,7,a[0]),e=h(e,b,c,d,p,12,a[1]),d=h(d,e,b,c,q,17,a[2]),c=h(c,d,e,b,r,22,a[3]),b=h(b,c,d,e,s,7,a[4]),e=h(e,b,c,d,t,12,a[5]),d=h(d,e,b,c,u,17,a[6]),c=h(c,d,e,b,v,22,a[7]),
b=h(b,c,d,e,w,7,a[8]),e=h(e,b,c,d,x,12,a[9]),d=h(d,e,b,c,y,17,a[10]),c=h(c,d,e,b,z,22,a[11]),b=h(b,c,d,e,A,7,a[12]),e=h(e,b,c,d,B,12,a[13]),d=h(d,e,b,c,C,17,a[14]),c=h(c,d,e,b,D,22,a[15]),b=k(b,c,d,e,p,5,a[16]),e=k(e,b,c,d,u,9,a[17]),d=k(d,e,b,c,z,14,a[18]),c=k(c,d,e,b,j,20,a[19]),b=k(b,c,d,e,t,5,a[20]),e=k(e,b,c,d,y,9,a[21]),d=k(d,e,b,c,D,14,a[22]),c=k(c,d,e,b,s,20,a[23]),b=k(b,c,d,e,x,5,a[24]),e=k(e,b,c,d,C,9,a[25]),d=k(d,e,b,c,r,14,a[26]),c=k(c,d,e,b,w,20,a[27]),b=k(b,c,d,e,B,5,a[28]),e=k(e,b,
c,d,q,9,a[29]),d=k(d,e,b,c,v,14,a[30]),c=k(c,d,e,b,A,20,a[31]),b=l(b,c,d,e,t,4,a[32]),e=l(e,b,c,d,w,11,a[33]),d=l(d,e,b,c,z,16,a[34]),c=l(c,d,e,b,C,23,a[35]),b=l(b,c,d,e,p,4,a[36]),e=l(e,b,c,d,s,11,a[37]),d=l(d,e,b,c,v,16,a[38]),c=l(c,d,e,b,y,23,a[39]),b=l(b,c,d,e,B,4,a[40]),e=l(e,b,c,d,j,11,a[41]),d=l(d,e,b,c,r,16,a[42]),c=l(c,d,e,b,u,23,a[43]),b=l(b,c,d,e,x,4,a[44]),e=l(e,b,c,d,A,11,a[45]),d=l(d,e,b,c,D,16,a[46]),c=l(c,d,e,b,q,23,a[47]),b=n(b,c,d,e,j,6,a[48]),e=n(e,b,c,d,v,10,a[49]),d=n(d,e,b,c,
C,15,a[50]),c=n(c,d,e,b,t,21,a[51]),b=n(b,c,d,e,A,6,a[52]),e=n(e,b,c,d,r,10,a[53]),d=n(d,e,b,c,y,15,a[54]),c=n(c,d,e,b,p,21,a[55]),b=n(b,c,d,e,w,6,a[56]),e=n(e,b,c,d,D,10,a[57]),d=n(d,e,b,c,u,15,a[58]),c=n(c,d,e,b,B,21,a[59]),b=n(b,c,d,e,s,6,a[60]),e=n(e,b,c,d,z,10,a[61]),d=n(d,e,b,c,q,15,a[62]),c=n(c,d,e,b,x,21,a[63]);g[0]=g[0]+b|0;g[1]=g[1]+c|0;g[2]=g[2]+d|0;g[3]=g[3]+e|0},_doFinalize:function(){var a=this._data,f=a.words,g=8*this._nDataBytes,j=8*a.sigBytes;f[j>>>5]|=128<<24-j%32;var h=E.floor(g/
4294967296);f[(j+64>>>9<<4)+15]=(h<<8|h>>>24)&16711935|(h<<24|h>>>8)&4278255360;f[(j+64>>>9<<4)+14]=(g<<8|g>>>24)&16711935|(g<<24|g>>>8)&4278255360;a.sigBytes=4*(f.length+1);this._process();a=this._hash;f=a.words;for(g=0;4>g;g++)j=f[g],f[g]=(j<<8|j>>>24)&16711935|(j<<24|j>>>8)&4278255360;return a},clone:function(){var a=s.clone.call(this);a._hash=this._hash.clone();return a}});r.MD5=s._createHelper(q);r.HmacMD5=s._createHmacHelper(q)})(Math);
;
"use strict";var bigInt=function(){function r(e,t){this.value=e,this.sign=t}function i(e){var t=e.length-1;while(e[t]===0&&t>0)t--;return e.slice(0,t+1)}function s(t,n){var i=n<0;if(t.sign!==i)return i?o(t.abs(),-n):o(t.abs(),n).negate();i&&(n=-n);var s=t.value,u=[],a=0;for(var f=0;f<s.length||a>0;f++){var l=(s[f]||0)+(f>0?0:n)+a;a=l>=e?1:0,u.push(l%e)}return new r(u,t.sign)}function o(t,n){if(t.sign!==n<0)return s(t,-n);var i=!1;t.sign&&(i=!0);var o=t.value;if(o.length===1&&o[0]<n)return new r([n-o[0]],!i);i&&(n=-n);var u=[],a=0;for(var f=0;f<o.length;f++){var l=o[f]-a-(f>0?0:n);a=l<0?1:0,u.push(a*e+l)}return new r(u,i)}function u(t,n){var i=t.value,s=n<0,o=[],u=0;s&&(n=-n);for(var a=0;a<i.length||u>0;a++){var f=(i[a]||0)*n+u;u=f/e|0,o.push(f%e)}return new r(o,s?!t.sign:t.sign)}function a(t,n){if(n===0)throw new Error("Cannot divide by zero.");var s=t.value,o=n<0,u=[],a=0;o&&(n=-n);for(var f=s.length-1;f>=0;f--){var l=a*e+s[f];a=l%n,u.push(l/n|0)}return{quotient:new r(i(u.reverse()),o?!t.sign:t.sign),remainder:new r([a],t.sign)}}function f(t){return(typeof t=="number"||typeof t=="string")&&+t<=e||t instanceof r&&t.value.length<=1}function l(e,t){return e=x(e).abs(),t=x(t).abs(),e.equals(t)?e:e.equals(w)?t:t.equals(w)?e:e.isEven()?t.isOdd()?l(e.divide(2),t):l(e.divide(2),t.divide(2)).multiply(2):t.isEven()?l(e,t.divide(2)):e.greater(t)?l(e.subtract(t).divide(2),t):l(t.subtract(e).divide(2),e)}function c(e,t){return e=x(e).abs(),t=x(t).abs(),e.multiply(t).divide(l(e,t))}function h(e,t){return e=x(e),t=x(t),e.greater(t)?e:t}function p(e,t){return e=x(e),t=x(t),e.lesser(t)?e:t}function d(t,n){t=x(t),n=x(n);var i=p(t,n),s=h(t,n),o=s.subtract(i),u=o.value.length-1,a=[],f=!0;for(var l=u;l>=0;l--){var c=f?o.value[l]:e,d=Math.floor(Math.random()*c);a.unshift(d),d<c&&(f=!1)}return i.add(new r(a,!1))}function y(e,t,n){var r=w,i=h(e.abs(),t.abs()),s=0,o=E;while(o.lesserOrEquals(i)){var a,f;a=e.over(o).isEven()?0:1,f=t.over(o).isEven()?0:1,r=r.add(o.times(n(a,f))),o=u(o,2)}return r}function x(i){if(i instanceof r)return i;if(Math.abs(+i)<e&&+i===(+i|0)){var s=+i;return new r([Math.abs(s)],s<0||1/s===-Infinity)}i+="";var o=n.positive,s=[];i[0]==="-"&&(o=n.negative,i=i.slice(1));var i=i.split(/e/i);if(i.length>2)throw new Error("Invalid integer: "+i.join("e"));if(i[1]){var u=i[1];u[0]==="+"&&(u=u.slice(1)),u=x(u);if(u.lesser(0))throw new Error("Cannot include negative exponent part for integers");while(u.notEquals(0))i[0]+="0",u=u.prev()}i=i[0],i==="-0"&&(i="0");var a=/^([0-9][0-9]*)$/.test(i);if(!a)throw new Error("Invalid integer: "+i);while(i.length){var f=i.length>t?i.length-t:0;s.push(+i.slice(f)),i=i.slice(0,f)}return new r(s,o)}function N(e){var t=e.value;return t.length===1&&t[0]<=36?"0123456789abcdefghijklmnopqrstuvwxyz".charAt(t[0]):"<"+t+">"}function C(e,t){t=bigInt(t);if(t.equals(0)){if(e.equals(0))return"0";throw new Error("Cannot convert nonzero numbers to base 0.")}if(t.equals(-1))return e.equals(0)?"0":e.lesser(0)?Array(1-e).join("10"):"1"+Array(+e).join("01");var n="";e.isNegative()&&t.isPositive()&&(n="-",e=e.abs());if(t.equals(1))return e.equals(0)?"0":n+Array(+e+1).join(1);var r=[],i=e,s;while(i.lesser(0)||i.compareAbs(t)>=0){s=i.divmod(t),i=s.quotient;var o=s.remainder;o.lesser(0)&&(o=t.minus(o).abs(),i=i.next()),r.push(N(o))}return r.push(N(i)),n+r.reverse().join("")}var e=1e7,t=7,n={positive:!1,negative:!0};r.prototype.negate=function(){return new r(this.value,!this.sign)},r.prototype.abs=function(){return new r(this.value,n.positive)},r.prototype.add=function(t){if(f(t))return s(this,+t);t=x(t);if(this.sign!==t.sign)return this.sign===n.positive?this.abs().subtract(t.abs()):t.abs().subtract(this.abs());var o=this.value,u=t.value,a=[],l=0,c=Math.max(o.length,u.length);for(var h=0;h<c||l>0;h++){var p=(o[h]||0)+(u[h]||0)+l;l=p>=e?1:0,a.push(p%e)}return new r(i(a),this.sign)},r.prototype.plus=function(e){return this.add(e)},r.prototype.subtract=function(t){if(f(t))return o(this,+t);t=x(t);if(this.sign!==t.sign)return this.add(t.negate());if(this.sign===n.negative)return t.negate().subtract(this.negate());if(this.compare(t)<0)return t.subtract(this).negate();var s=this.value,u=t.value,a=[],l=0,c=Math.max(s.length,u.length);for(var h=0;h<c;h++){var p=s[h]||0,d=u[h]||0,v=p-l;l=v<d?1:0,a.push(l*e+v-d)}return new r(i(a),n.positive)},r.prototype.minus=function(e){return this.subtract(e)},r.prototype.multiply=function(t){if(f(t))return u(this,+t);t=x(t);var n=this.sign!==t.sign,s=this.value,o=t.value,a=Math.max(s.length,o.length),l=[];for(var c=0;c<a;c++){l[c]=[];var h=c;while(h--)l[c].push(0)}var p=0;for(var c=0;c<s.length;c++){var d=s[c];for(var h=0;h<o.length||p>0;h++){var v=o[h],m=v?d*v+p:p;p=Math.floor(m/e),l[c].push(m%e)}}var g=-1;for(var c=0;c<l.length;c++){var y=l[c].length;y>g&&(g=y)}var b=[],p=0;for(var c=0;c<g||p>0;c++){var w=p;for(var h=0;h<l.length;h++)w+=l[h][c]||0;p=w>e?Math.floor(w/e):0,w-=p*e,b.push(w)}return new r(i(b),n)},r.prototype.times=function(e){return this.multiply(e)},r.prototype.divmod=function(e){if(f(e))return a(this,+e);e=x(e);var t=this.sign!==e.sign;if(this.equals(0))return{quotient:new r([0],n.positive),remainder:new r([0],n.positive)};if(e.equals(0))throw new Error("Cannot divide by zero");var s=this.value,o=e.value,u=[],l=[];for(var c=s.length-1;c>=0;c--){var h=[s[c]].concat(l),p=b(o,h);u.push(p.result),l=p.remainder}return u.reverse(),{quotient:new r(i(u),t),remainder:new r(i(l),this.sign)}},r.prototype.divide=function(e){return this.divmod(e).quotient},r.prototype.over=function(e){return this.divide(e)},r.prototype.mod=function(e){return this.divmod(e).remainder},r.prototype.remainder=function(e){return this.mod(e)},r.prototype.pow=function(e){e=x(e);var t=this,n=e,r=E;if(n.equals(w))return r;if(t.equals(w)||n.lesser(w))return w;for(;;){n.isOdd()&&(r=r.times(t)),n=n.divide(2);if(n.equals(w))break;t=t.times(t)}return r},r.prototype.modPow=function(e,t){e=x(e),t=x(t);if(t.equals(w))throw new Error("Cannot take modPow with modulus 0");var n=E,r=this.mod(t);if(r.equals(w))return w;while(e.greater(0))e.isOdd()&&(n=n.multiply(r).mod(t)),e=e.divide(2),r=r.square().mod(t);return n},r.prototype.square=function(){return this.multiply(this)},r.prototype.next=function(){return s(this,1)},r.prototype.prev=function(){return o(this,1)},r.prototype.compare=function(e){var t=this,r=x(e);if(t.value.length===1&&r.value.length===1&&t.value[0]===0&&r.value[0]===0)return 0;if(r.sign!==t.sign)return t.sign===n.positive?1:-1;var i=t.sign===n.positive?1:-1,s=t.value,o=r.value,u=Math.max(s.length,o.length)-1;for(var a=u;a>=0;a--){var f=s[a]||0,l=o[a]||0;if(f>l)return 1*i;if(l>f)return-1*i}return 0},r.prototype.compareTo=function(e){return this.compare(e)},r.prototype.compareAbs=function(e){return this.abs().compare(e.abs())},r.prototype.equals=function(e){return this.compare(e)===0},r.prototype.notEquals=function(e){return!this.equals(e)},r.prototype.lesser=function(e){return this.compare(e)<0},r.prototype.greater=function(e){return this.compare(e)>0},r.prototype.greaterOrEquals=function(e){return this.compare(e)>=0},r.prototype.lesserOrEquals=function(e){return this.compare(e)<=0},r.prototype.lt=r.prototype.lesser,r.prototype.leq=r.prototype.lesserOrEquals,r.prototype.gt=r.prototype.greater,r.prototype.geq=r.prototype.greaterOrEquals,r.prototype.eq=r.prototype.equals,r.prototype.neq=r.prototype.notEquals,r.prototype.isPositive=function(){return this.sign===n.positive},r.prototype.isNegative=function(){return this.sign===n.negative},r.prototype.isEven=function(){return this.value[0]%2===0},r.prototype.isOdd=function(){return this.value[0]%2===1},r.prototype.isUnit=function(){return this.value.length===1&&this.value[0]===1},r.prototype.isDivisibleBy=function(e){return this.mod(e).equals(w)},r.prototype.isPrime=function(){var e=this.abs(),t=e.prev();if(e.isUnit())return!1;if(e.equals(2)||e.equals(3)||e.equals(5))return!0;if(e.isEven()||e.isDivisibleBy(3)||e.isDivisibleBy(5))return!1;if(e.lesser(25))return!0;var n=[2,3,5,7,11,13,17,19],r=t,i,s,o,u;while(r.isEven())r=r.divide(2);for(o=0;o<n.length;o++){u=bigInt(n[o]).modPow(r,e);if(u.equals(E)||u.equals(t))continue;for(s=!0,i=r;s&&i.lesser(t);i=i.multiply(2))u=u.square().mod(e),u.equals(t)&&(s=!1);if(s)return!1}return!0};var v=[1];while(v[v.length-1]<=e)v.push(2*v[v.length-1]);var m=v.length,g=v[m-1];r.prototype.shiftLeft=function(e){if(!f(e))return e.isNegative()?this.shiftRight(e.abs()):this.times(bigInt(2).pow(e));e=+e;if(e<0)return this.shiftRight(-e);var t=this;while(e>=m)t=u(t,g),e-=m-1;return u(t,v[e])},r.prototype.shiftRight=function(e){if(!f(e))return e.isNegative()?this.shiftLeft(e.abs()):this.over(bigInt(2).pow(e));e=+e;if(e<0)return this.shiftLeft(-e);var t=this;while(e>=m){if(t.equals(w))return t;t=a(t,g).quotient,e-=m-1}return a(t,v[e]).quotient},r.prototype.not=function(){var e=y(this,this,function(e){return(e+1)%2});return this.sign?e:e.negate()},r.prototype.and=function(e){e=x(e);var t=y(this,e,function(e,t){return e*t});return this.sign&&e.sign?t.negate():t},r.prototype.or=function(e){e=x(e);var t=y(this,e,function(e,t){return(e+t+e*t)%2});return this.sign||e.sign?t.negate():t},r.prototype.xor=function(e){e=x(e);var t=y(this,e,function(e,t){return(e+t)%2});return this.sign^e.sign?t.negate():t},r.prototype.toString=function(r){r===undefined&&(r=10);if(r!==10)return C(this,r);var i=this,s="",o=i.value.length;if(o===0)return"0";while(o--)i.value[o].toString().length===8?s+=i.value[o]:s+=(e.toString()+i.value[o]).slice(-t);while(s[0]==="0")s=s.slice(1);s.length||(s="0");if(s==="0")return s;var u=i.sign===n.positive?"":"-";return u+s},r.prototype.toJSNumber=function(){return this.valueOf()},r.prototype.valueOf=function(){return this.value.length===1?this.sign?-this.value[0]:this.value[0]:+this.toString()};var b=function(e,t){var e=new r(e,n.positive),t=new r(t,n.positive);if(e.equals(0))throw new Error("Cannot divide by 0");var i=0;do{var s=1,o=e,u=o.times(10);while(u.lesser(t))o=u,s*=10,u=u.times(10);while(o.lesserOrEquals(t))t=t.minus(o),i+=s}while(e.lesserOrEquals(t));return{remainder:t.value,result:i}},w=new r([0],n.positive),E=new r([1],n.positive),S=new r([1],n.negative),T=function(e,t){function o(e){var t=e[i].toLowerCase();if(i===0&&e[i]==="-"){s=!0;return}if(/[0-9]/.test(t))r.push(x(t));else if(/[a-z]/.test(t))r.push(x(t.charCodeAt(0)-87));else{if(t!=="<")throw new Error(t+" is not a valid character");var n=i;do i++;while(e[i]!==">");r.push(x(e.slice(n+1,i)))}}t=x(t);var n=w,r=[],i,s=!1;for(i=0;i<e.length;i++)o(e);r.reverse();for(i=0;i<r.length;i++)n=n.add(r[i].times(t.pow(i)));return s?n.negate():n},k=function(e,t){return typeof e=="undefined"?w:typeof t!="undefined"?T(e,t):x(e)};return k.zero=w,k.one=E,k.minusOne=S,k.randBetween=d,k.min=p,k.max=h,k.gcd=l,k.lcm=c,k}();typeof module!="undefined"&&(module.exports=bigInt);;
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//   E U   A G E N T
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------

euSignLastError = null; // ?????????????????????????????

var drCryptoPortal = NewClass({
    "Vendor": "MT",
    "ClassVersion": "2.1.0",
    "ClassName": "drCryptoPortal"
},
function () {
},
{
    ClassVer: "2.1.0",
    debug: false,
    frameHeight: 640,
    frameWidth: 800,
    caFolder: 'C:\\My Certificates and CRLs 13',
    currCMPaddr: '',
    currCMPport: '',
    CArootchain: '',
    euSignInitialize_busy: null,
    //----------------------------------------------------------------------------------------------
    // Ініціалізує модуль
    //----------------------------------------------------------------------------------------------
    euSignInitialize: function (acskName, _caFolder, onSuccess, onError, skipIfDone = true, retryIfBusy = true) {
        var me = this;

        let p_resolve, p_reject;
        if (retryIfBusy && me.euSignInitialize_busy) {
            console.log('euSignInitialize recall');
            me.euSignInitialize_busy
                .then(
                    () => {
                        me.euSignInitialize(...arguments);
                    })
                .catch((err) => {
                    console.error("euSignInitialize_busy.catch", err);
                });
            return;
        } else {
            console.log('euSignInitialize_busy init')
            me.euSignInitialize_busy = new Promise((resolve, reject) => {
                p_resolve = (res) => {
                    me.euSignInitialize_busy = null;
                    resolve(res);
                }
                p_reject = (rej) => {
                    me.euSignInitialize_busy = null;
                    onError(rej);
                    reject(rej);
                }
            });
        }

        if (skipIfDone && me.isEuSignAgentInited()) {
            console.warn('euSignInitialize already inited');
            p_resolve(true);
            onSuccess();
            return;
        }

        try {
        //var libraryType = .getNumberCookie("EUSignLibraryType");
        //if (isNaN(libraryType))
            libraryType = EndUserLibraryLoader.LIBRARY_TYPE_SIGN_AGENT;

        ////console.log(libraryType);

        var libraryLoader = new EndUserLibraryLoader(libraryType, "euSignAgent");

        libraryLoader.onerror = function (msg) {
            var alertForm = EUAlertForm(me.frameHeight, me.frameWidth, 10, 450);
            alertForm.ShowForm("Повідомлення оператору", msg, function () {
                location.reload();
            });
            p_reject({ message: msg });
        };

        libraryLoader.onload = function (library) {
            euSignAgent = library;
            try {
                if (typeof (_caFolder) !== 'undefined' || _caFolder !== null || _caFolder !== '') {
                    me.caFolder = _caFolder;
                }
                euSignAgent.Initialize();

                caData = [];
                jQuery.ajax({
                    url: "/Scripts/IIT/caUtf.js",
                    dataType: "script",
                    success: function (data) {
                        try {
                            caData = JSON.parse(data);
                            ////console.log('caData'); //console.info(caData);
                            //if (euSignAgent.DoesNeedSetSettings())
                            if (!me.initAgentSettings(acskName)) {                               
                                me.ShowLoginErr('Не завантажено налаштування крипто бібліотеки.');
                                p_reject({ message: 'Не завантажено налаштування крипто бібліотеки.' });
                                return;
                            }
                            euSignAgent.SetCharset("UTF-16LE");
                            euSignAgent.SetUIMode(false);

                            euSignAgent.SetLanguage(parseInt(0, 10));

                            euSignAgent.SetRuntimeParameter("MakePKeyPFXContainer", 0);
                            euSignAgent.SetRuntimeParameter(euSignAgent.EU_SIGN_TYPE_PARAMETER, euSignAgent.EU_SIGN_TYPE_CADES_X_LONG);
                            euSignAgent.width = "1px";
                        } catch(err) {
                            p_reject(err);
                            throw err;
                        }

                        $.ajax({
                            type: "POST",
                            url: '/Account/GetAcskChain'
                        })
                        .done(function (response) {
                            ////console.log('GetAcskChain');
                            ////console.info(response);
                            try {
                                //euSignAgent.SaveCertificates(euSignAgent.BASE64Decode(response));
                                me.CArootchain = response;
                                p_resolve(true);
                                //console.log('libraryLoader: all count = ' + euSignAgent.GetCertificatesCount())
                                onSuccess();
                            } catch (e) {
                                me.ShowLoginErr('Помилка завантаження ланцюжка сертифікатів АЦСК: ' + e.message);
                            }
                        })
                        .fail(function () {
                            me.ShowLoginErr('Не завантажено ланцюжок сертифікатів АЦСК');
                            p_reject({ message: 'Не завантажено ланцюжок сертифікатів АЦСК' });
                        });
                    },
                    error: function (err) {
                        p_reject(err);
                    }
                });


                //$http.post("api/Account/GetAcskChain/").then(function (response) {
                //    try {
                //        //var certificates = euSignAgent.CreateArrayList();
                //        //certificates.add(euSignAgent.BASE64Decode(response.data));
                //        euSignAgent.SaveCertificates(euSignAgent.BASE64Decode(response.data));
                //    } catch (e) {
                //        notificationService.show('dialog-error.html', "Увага!", '<ul>' + e.message + '</ul>');
                //    }
                //}, function errorCallback(response) {
                //    //_onError({ message: response });
                //    notificationService.show('dialog-error.html', "Увага!", '<ul>Не завантажено ланцюжок сертифікатів АЦСК</ul>');
                //    .deferred.resolve();
                //});

            } catch (e) {
                //console.log('euSignInitialize - ERROR');
                //console.log(e);
                //notificationService.show('dialog-error.html', "Увага!", '<ul>' + e.message + '</ul>');
                me.ShowLoginErr('Помилка завантаження крипто бібліотеки: ' + e.message);
                p_reject({ message: 'Помилка завантаження крипто бібліотеки: ' + e.message });
            }
        };

        
            libraryLoader.load();
        } catch (err) {
            p_reject(err);
            throw err;
        }
    },

    isEuSignAgentInited: function () {
        try {
            return (euSignAgent && euSignAgent.IsInitialized());
        } catch (ex) {
            console.error(ex);
            return false;
        }
    },
    //----------------------------------------------------------------------------------------------
    // налаштування "агентського" модуля криптографічних перетворень
    //----------------------------------------------------------------------------------------------
    initAgentSettings: function (acsk) {
        console.log("acsk => test2");
        //if (!euSignAgent.DoesNeedSetSettings()) return;
        var me = this;
        //console.log('initAgentSettings >>> ' + me.ClassVer);
        var sAcsk = acsk || "ca.informjust.ua";
        var online = (!(/(_|uipv|altersign)/.test(sAcsk))) ? true : false;
        //if ((acsk !== 'undefined') && (acsk != ""))
        //sAcsk = acsk;
        var camain = {};
        for (var m = 0; m < caData.length; m++) {
            if (caData[m].address === sAcsk) {
                camain = $.extend({}, caData[m]);
                break;
            }
        }
        var wasSaved = true;
        try {
            euSignAgent.SetRuntimeParameter(euSignAgent.EU_SAVE_SETTINGS_PARAMETER, euSignAgent.EU_SETTINGS_ID_NONE);
        } catch (e) {
            wasSaved = false;
            //console.log('initAgentSettings >>> ERROR');
            //console.info(e);
            return wasSaved;
        }
        //console.log('initAgentSettings >>> sAcsk ' + sAcsk);
        //Ініціалізуємо налаштування зберігання сертифікатів
        //var fileStoreSettings = euSignAgent.GetFileStoreSettings();
        //if (!fileStoreSettings) {
            fileStoreSettings = euSignAgent.CreateFileStoreSettings();
            //console.log('initAgentSettings >>> create filestore');
            var certPath = ''; // me.caFolder;//"c:\\My Certificates and CRLs1";
            //euSignAgent.CreateFolder(certPath);
            fileStoreSettings.SetPath(certPath);
        //} else {
            //console.log('initAgentSettings >>> read filestore');
            //console.info(fileStoreSettings);
        //}
        fileStoreSettings.SetCheckCRLs((!(/(_|uipv|altersign)/.test(sAcsk))) ? true : false);
        fileStoreSettings.SetAutoRefresh((!(/(_|uipv|altersign)/.test(sAcsk))) ? true : false);
        fileStoreSettings.SetOwnCRLsOnly((!(/(_|uipv|altersign)/.test(sAcsk))) ? true : false);
        fileStoreSettings.SetFullAndDeltaCRLs((!(/(_|uipv|altersign)/.test(sAcsk))) ? true : false);
        fileStoreSettings.SetAutoDownloadCRLs((!(/(_|uipv|altersign)/.test(sAcsk))) ? true : false);
        //fileStoreSettings.SetSaveLoadedCerts((!(/(_|uipv|altersign)/.test(sAcsk))) ? false : true);
        fileStoreSettings.SetSaveLoadedCerts(true);
        fileStoreSettings.SetExpireTime(parseInt(600, 10));
        var wasSaved;
        try {
            euSignAgent.SetFileStoreSettings(fileStoreSettings);
            if (me.CArootchain.length > 0) euSignAgent.SaveCertificates(euSignAgent.BASE64Decode(me.CArootchain));
            wasSaved = true;
        } catch (e) {
            //console.info(e);
            wasSaved = false;
            //console.log('initAgentSettings >>> ERROR');
            //console.info(e);
            return wasSaved;
        }
        /*
        var gfs = euSignAgent.GetFileStoreSettings();
        console.log('initAgentSettings >>> GetFileStoreSettings');
        console.log('autoDownloadCRLs' + gfs.autoDownloadCRLs);
        console.log('autoRefresh' + gfs.autoRefresh);
        console.log('checkCRLs' + gfs.checkCRLs);
        console.log('fullAndDeltaCRLs' + gfs.fullAndDeltaCRLs);
        console.log('ownCRLsOnly' + gfs.ownCRLsOnly);
        console.log('saveLoadedCerts' + gfs.saveLoadedCerts);
        console.log('path' + gfs.path);
        */
        //Змінюємо налаштування сервісу OCSP
        var ocspServerSettings = euSignAgent.CreateOCSPSettings();
        ocspServerSettings.SetUseOCSP((camain.ocspAccessPointAddress.length > 4 && online) ? true : false);
        ocspServerSettings.SetBeforeStore(true);
        ocspServerSettings.SetAddress((camain.ocspAccessPointAddress.length > 4) ? camain.ocspAccessPointAddress : '');
        ocspServerSettings.SetPort((camain.ocspAccessPointPort.length > 1) ? camain.ocspAccessPointPort : '');
        try {
            euSignAgent.SetOCSPSettings(ocspServerSettings);
        } catch (e) {
            //console.info(e);
        }
        //console.log('initAgentSettings >>> ocspServerSettings');
        //console.info(ocspServerSettings);
        //console.log(ocspServerSettings.address);
        //console.log(ocspServerSettings.useOCSP);

        //Змінюємо налаштування сервісу CMP
        var cmpServerSettings = euSignAgent.CreateCMPSettings();
        cmpServerSettings.SetUseCMP((camain.cmpAddress.length > 4 && online) ? true : false);
        cmpServerSettings.SetAddress((camain.cmpAddress.length > 4) ? camain.cmpAddress : '');
        cmpServerSettings.SetPort((camain.cmpAddress.length > 4) ? '80' : '');
        cmpServerSettings.SetCommonName('');
        try {
            euSignAgent.SetCMPSettings(cmpServerSettings);
        } catch (e) {
            //console.info(e);
            wasSaved = false;
            //console.log('initAgentSettings >>> ERROR');
            //console.info(e);
            return wasSaved;
        }
        //console.log('initAgentSettings >>> cmpServerSettings');
        //console.log(cmpServerSettings.address);
        //console.log(cmpServerSettings.useCMP);

        var tspServerSettings = euSignAgent.CreateTSPSettings();
        tspServerSettings.SetGetStamps((camain.tspAddress.length > 4 && online) ? true : false);
        tspServerSettings.SetAddress((camain.tspAddress.length > 4) ? camain.tspAddress : '');
        tspServerSettings.SetPort((camain.tspAddressPort.length > 1) ? camain.tspAddressPort : '');
        try {
            euSignAgent.SetTSPSettings(tspServerSettings);
        } catch (e) {
            //console.info(e);
            wasSaved = false;
            //console.log('initAgentSettings >>> ERROR');
            //console.info(e);
            return wasSaved;
        }
        //console.log('initAgentSettings >>> tspServerSettings');
        //console.info(tspServerSettings);

        var ldapServerSettings = euSignAgent.CreateLDAPSettings();
        ldapServerSettings.SetUseLDAP(false);
        ldapServerSettings.SetAnonymous(true);
        ldapServerSettings.SetAddress(sAcsk);
        ldapServerSettings.SetPort("389");
        try {
            euSignAgent.SetLDAPSettings(ldapServerSettings);
        } catch (e) {
            //console.info(e);
            wasSaved = false;
            //console.log('initAgentSettings >>> ERROR');
            //console.info(e);
            return wasSaved;
        }
        try {
            var prxSettingsOld = euSignAgent.GetProxySettings();
            try {
                euSignAgent.SetProxySettings(prxSettingsOld);
            } catch (e) {
                //console.info(e);
                wasSaved = false;
                //console.log('initAgentSettings >>> ERROR');
                //console.info(e);
                return wasSaved;
            }
        } catch (e) {
            var prxSettings = euSignAgent.CreateProxySettings();
            prxSettings.SetUseProxy(false);
            prxSettings.SetAnonymous(false);
            prxSettings.SetAddress('');
            prxSettings.SetPort('');
            prxSettings.SetUser('');
            prxSettings.SetPassword('');
            prxSettings.SetSavePassword(false);
            try {
                euSignAgent.SetProxySettings(prxSettings);
            } catch (e) {
                //console.info(e);
                wasSaved = false;
                //console.log('initAgentSettings >>> ERROR');
                //console.info(e);
                return wasSaved;
            }
        }

        /*  VERY SLOW
        var ocspAIMsettings = euSignAgent.CreateOCSPAccessInfoModeSettings();
        ocspAIMsettings.SetEnabled((camain.ocspAccessPointAddress.length > 4 && online) ? true : false);

        try {
            euSignAgent.SetOCSPAccessInfoModeSettings(ocspAIMsettings);
        } catch (e) {
            //console.info(e);
            wasSaved = false;
        }
        
        if (camain.ocspAccessPointAddress.length > 4 && online) {
            var ocspAIsettings = euSignAgent.CreateOCSPAccessInfoSettings();
            //if (me.debug) console.log('setOCSPAccessInfoFromJS: 1');
            for (var i = 0, l0 = caData.length; i < l0; i++) {
                if (caData[i].ocspAccessPointAddress.length < 4) continue;
                ocspAIsettings.SetAddress(caData[i].ocspAccessPointAddress);
                ocspAIsettings.SetPort(caData[i].ocspAccessPointPort);
                for (var j = 0, l1 = caData[i].issuerCNs.length; j < l1; j++) {
                    ocspAIsettings.SetIssuerCN(caData[i].issuerCNs[j]);
                    try {
                        euSignAgent.SetOCSPAccessInfoSettings(ocspAIsettings);
                        //console.log('initAgentSettings >>> ocspAIsettings ' + caData[i].issuerCNs[j]);
                        //console.info(euSignAgent.GetOCSPAccessInfoSettings(caData[i].issuerCNs[j]));
                    } catch (e) {
                        //console.info(e);
                        wasSaved = false;
                        return wasSaved;
                    }
                    //if (me.debug) console.log('setOCSPAccessInfo: ' + caData[i].issuerCNs[j] + '=' + caData[i].ocspAccessPointAddress);
                }
            }
        }
        */
        //console.log('initAgentSettings >>> ocspAIMsettings');
        //console.info(ocspAIMsettings);

        me.currCMPaddr = camain.cmpAddress;
        me.currCMPport = '80';
        //console.log('sett='+euSignAgent.DoesNeedSetSettings());
        //console.log('initAgentSettings: all count = ' + euSignAgent.GetCertificatesCount())
        return wasSaved;
    },
    //----------------------------------------------------------------------------------------------
    // Завантажує приватний ключ
    //----------------------------------------------------------------------------------------------
    LoadPrivateKey: function(deviceType, deviceName, password) {
        var me = this;
        try {
            euSignAgent.ResetOperation();
            euSignAgent.ResetPrivateKey();
            euSignAgent.ReadPrivateKeySilently(parseInt(deviceType, 10), parseInt(deviceName, 10), password);
            var certInfo = euSignAgent.GetPrivateKeyOwnerInfo();
        } catch (e) {
            throw e;
        }
    },
    //----------------------------------------------------------------------------------------------
    // Отримує перелік типів носіїв
    //----------------------------------------------------------------------------------------------
    refreshDevTypeList: function() {
        var me = this;
        var deviceTypeList = [];
        var typeIndex = 0;
        var result = euSignAgent.EnumKeyMediaTypes(parseInt(typeIndex, 10));
        while (result !== '') {
            //if (null !== result.match(/TEllipse2\/3/gi))
            deviceTypeList.push({ Id: typeIndex, Name: result });
            typeIndex++;
            result = euSignAgent.EnumKeyMediaTypes(parseInt(typeIndex, 10));
        }
        if (deviceTypeList.length > 0) {
            $.each(deviceTypeList, function (i, item) {
                $('#selDevType').append($('<option>', {
                    value: item.Id,
                    text: item.Name
                }));
            });
            //$('#selDevName').toggleClass('select_wrap_disable').toggleClass('select_wrap').prop('disabled', false);
        }
        ////console.log('deviceTypeList');
        ////console.info(deviceTypeList);
    },
    //----------------------------------------------------------------------------------------------
    // Отримує перелік носіїв вказаного типу
    //----------------------------------------------------------------------------------------------
    refreshDevNameList: function() {
        var me = this;
        var deviceNameList = [];
        var deviceIndex = 0;
        var typeIndex = parseInt($("#selDevType").val(),10);
        if (typeIndex < 0)
            return;
        var result = euSignAgent.EnumKeyMediaDevices(parseInt(typeIndex, 10), parseInt(deviceIndex, 10));
        while (result !== '') {
            deviceNameList.push({ Id: deviceIndex, Name: result });
            deviceIndex++;
            result = euSignAgent.EnumKeyMediaDevices(parseInt(typeIndex, 10), parseInt(deviceIndex, 10));
        }
        if (deviceNameList.length > 0) {
            $('#selDevName').empty();
            $.each(deviceNameList, function (i, item) {
                $('#selDevName').append($('<option>', {
                    value: item.Id,
                    text: item.Name
                }));
            });
            $('#selDevName').removeClass('select_wrap_disable').addClass('select_wrap').prop('disabled', false);
        } else {
            $('#selDevName').addClass('select_wrap_disable').removeClass('select_wrap').prop('disabled', true).empty().append('<option value="" disabled selected style="display:none;">Виберіть назву носія ключа</option>');
        }
        ////console.log('deviceNameList');
        ////console.info(deviceNameList);
    },
    //----------------------------------------------------------------------------------------------
    // видобування гешу пароля для ЮБ
    //----------------------------------------------------------------------------------------------
    XXX_encodePassword: function(pwd){
        var me = this;
        var maxLen = 30, buff, i, c;
        var res = bigInt.one; //require('bigint').one;
        buff = pwd;
        while (buff.length < maxLen) {
            buff = buff + pwd.length + pwd;
        }
        buff = buff.substr(0, maxLen);
        for (i = 1; i <= 30; i++) {
            c = buff.charCodeAt(i - 1) - 15;
            res = res.multiply(Math.ceil(c / 3)).add(c * i + i);
        }
        return res.toString().substr(0, maxLen);
    },
    //----------------------------------------------------------------------------------------------
    // аутентифікація через ЮБ
    //----------------------------------------------------------------------------------------------
    UBCryptAndLogin: function (flagreg,isAsync) {
        var me = this;
        me.WaitShow();
        setTimeout(function(){ 
            me._UBCryptAndLogin(flagreg,isAsync);
        }, 300);
    },
    _UBCryptAndLogin: function (flagreg, isAsync) {
        //log2Server && log2Server.bufferClear();
        //log2Server && log2Server.timerStart({ key: 'readKeyIIT' });
        //log2Server && log2Server.timerStart({ key: 'UBAuthPhase1' });
        var me = this;
        

        var usrLogin = $("#edtLogin").val();
        if (usrLogin == "") {
            me.ShowLoginErr("Не вказано логін користувача!");
            return;
        }
        var usrLPass = $("#edtLPass").val();
        if (usrLPass == "") {
            me.ShowLoginErr("Не вказано пароль користувача!");
            return;
        }
        var selectACSK = $("#selACSK").val();
        if (selectACSK === null || selectACSK === "") {
            me.ShowLoginErr("Не обрано АЦСК!");
            return;
        }

        if ($("#edtKeyFile")[0].files.length < 1 && /(privatbank|_|uipv|altersign)/.test(selectACSK)) {
            me.ShowLoginErr("Не обрано приватний ключ!");
            return;
        }
        var keyf = $("#edtKeyFile")[0].files[0];
        if ($("#edtCertKeyFile")[0].files.length < 1 && /(uipv|altersign)/.test(selectACSK)) {
            me.ShowLoginErr("Не обрано сертифікат приватного ключа для КЕП!");
            return;
        }
        if ($("#edtKeyFile")[0].files.length < 1 && !(/(privatbank|_|uipv|altersign)/.test(selectACSK))) {
            var selectDevType = parseInt($("#selDevType").val(), 10);
            if (isNaN(selectDevType) || selectDevType < 0) {
                me.ShowLoginErr("Не обрано тип носія ключа");
                return;
            }
            var selectDevName = parseInt($("#selDevName").val(), 10);
            if (isNaN(selectDevName) || selectDevName < 0) {
                me.ShowLoginErr("Не обрано назву носія ключа");
                return;
            }

            let deviceInfo = {
                type: parseInt(selectDevType, 10),
                index: parseInt(selectDevName, 10),
                name: euSignAgent.EnumKeyMediaDevices(parseInt(selectDevType, 10), parseInt(selectDevName, 10))
            }

            userStorage.setItem("deviceInfo", JSON.stringify(deviceInfo));     
        }
        var usrKeyPass = $("#edtPass").val();
        if (usrKeyPass == "") {
            me.ShowLoginErr("Не вказано пароль до ключа!");
            return;
        }
        //me.HideLoginErr();
        
        

        var keycert = $("#edtCertKeyFile")[0].files[0];

        var onError = function (err) {
            me.WaitHide();
            me.ShowLoginErrExt(err);
        }

        var onSuccess = function (kdata, kpass) {
            // +max clear old user cookies
            //console.log('>delete cookies');
            $.cookie('CE_FILTER', '', { path: '/Certificate' });
            $.cookie('CE_SELECTED_ROW', '', { path: '/Certificate' });
            // -max
            //console.log('<deleted cookies');
            
            try {
                //log2Server && log2Server.timerEnd({ key: 'readKeyIIT' });
                var knfo;
                if ($("#edtKeyFile")[0].files.length < 1 && !(/(privatbank|_|uipv|altersign)/.test(selectACSK))) {
                    try {
                        //console.log('before key read');
                        //console.log('readKeyFromFile: before dev key all count = ' + euSignAgent.GetCertificatesCount());
                        me.LoadPrivateKey(selectDevType, selectDevName, usrKeyPass);
                        knfo = euSignAgent.GetKeyInfoSilently(selectDevType, selectDevName, usrKeyPass);
                        //console.log('after key read');
                    } catch (e) {
                        me.ShowLoginErr("Помилка зчитування ключа: " + e.message);
                        me.WaitHide();
                        return;
                    }
                } else {
                    knfo = euSignAgent.GetKeyInfoBinary(kdata, kpass);
                }
                
                var certkeydata = me.readCertsForKey({
                    'selectACSK': selectACSK,
                    'knfo': knfo
                });
                if (certkeydata === null) {
                    me.WaitHide();
                    return;
                }
                
                
                $.ajax({
                    type: "POST",
                    url: '/Account/UB2AuthPhase1',
                    data: { authCertSerial: certkeydata.authCertSer, caServ: selectACSK},
                }).done(function (res) {
                    //log2Server && log2Server.timerEnd({ key: 'UBAuthPhase1', minTime: 40000 });

                    if (res.message) {
                        me.ShowLoginErr(res.message);
                        me.WaitHide();
                    } else {
                        if (!res.serverNonce || !res.serverEncriptionCert) {
                            me.ShowLoginErr('Критична помилка автентифікації');
                            me.WaitHide();
                            return;
                        } else {
                            try {
                                let clientSecret = `${res.clientNonce}:${res.serverNonce}:${usrLPass}`;
                                let clientSecretBytes = new TextEncoder().encode(clientSecret);
                                let serverCertData = euSignAgent.BASE64Decode(res.serverEncriptionCert);
                                let certificates = euSignAgent.CreateArrayList();
                                certificates.add(serverCertData);
                                let data = euSignAgent.EnvelopToRecipientsWithDynamicKey(certificates, false, false, clientSecretBytes);
                                let signature = euSignAgent.Sign(euSignAgent.BASE64Decode(data));

                                if (flagreg) {
                                    me.WaitShow();
                                    $.ajax({
                                        type: "POST",
                                        url: '/Account/UB2Register',
                                        data: { data: data, signature: signature, login: usrLogin },
                                    })
                                        .done(function (res) {
                                            me.WaitHide();
                                            if (res.message) {
                                                me.ShowLoginErr(res.message);                                               
                                            } else {
                                                me.ShowLoginErr('Помилка реєстрації');
                                                console.error('registration weird err', res);
                                            }
                                        })
                                        .fail(function (err) {
                                            me.WaitHide();
                                            me.ShowLoginErr('Помилка реєстрації, спробуйте повторити пізніше');
                                            console.error('registration', err);
                                        });
                                } else {
                                    $("#UBAuthData").val(data);
                                    $("#UBAuthSignature").val(signature);
                                    $("#UBAuthLogin").val(usrLogin);

                                    $("#loginForm").submit();
                                }

                            } catch (z) {
                                console.error('crypto err', z);
                                me.ShowLoginErrExt(z);
                                me.WaitHide();
                            }
                        }
                    }
                }).fail(function (err) {
                    me.WaitHide();
                    me.ShowLoginErr('Помилка входу, спробуйте повторити пізніше');
                    console.error('phase1', err);
                });
            }
            catch (e) {
                me.ShowLoginErrExt(e);
                me.WaitHide();
            }
        }
        //console.log('!isAsync');
        me.initAgentSettings(selectACSK);
        if (!isAsync) {
            //console.log('!isAsync - 1');
            onSuccess();
            return;
        }
        //console.log('before readCertsFromFile');
        me.readCertsFromFile(keycert, function () {
            me.readKeyFromFile(keyf, usrKeyPass, {}, onSuccess, onError);
        }, onError);
    },
    //----------------------------------------------------------------------------------------------
    // читання сертифікатів завантаженого ключа
    //----------------------------------------------------------------------------------------------
    readCertsForKey: function (prm) {
        var me = this;
        //console.log('readCertsForKey >>>');
        //console.info(prm);
        // читаємо сертифікати завантаженого ключа
        var certInfoEx1 = euSignAgent.EnumOwnCertificates(0);
        //console.log('cert1 read');
        //console.info(certInfoEx1);
        var certInfoEx2 = euSignAgent.EnumOwnCertificates(1);

        //console.log('cert2 read');
        //console.info(certInfoEx2);
        if (certInfoEx1 == null || certInfoEx1 == "") {
            me.ShowLoginErr("Не знайдено сертифікатів за ключем!");
            me.WaitHide();
            return null;
        };
        var isOneCert = (certInfoEx2 == null || certInfoEx2 == "");
        var certData1 = "";
        var certData2 = "";
        var b64Cert1 = "";
        var b64Cert2 = "";
        var b64Sign = "";
        var authCertSer = "";

        if (!(/(_|uipv|altersign)/.test(prm.selectACSK))) {
            var kcmpaddr = euSignAgent.CreateArrayList();
            kcmpaddr.add(me.currCMPaddr);
            var kcmpport = euSignAgent.CreateArrayList();
            kcmpport.add(me.currCMPport);
            var certcount = euSignAgent.GetCertificatesCount();
            /*
            console.log(me.currCMPaddr);
            console.log(me.currCMPport);
            console.log('arrays');
            console.info(kcmpaddr);
            console.info(kcmpport);
            console.log('readKeyFromFile: before key info all count = ' + certcount);
            for (var i = 0; i < certcount; i++) {
                var certnfo = euSignAgent.EnumCertificates(i);
                console.log(i + ' - ' + certnfo.issuer + '] [' + certnfo.subject)
                //console.info(euSignAgent.EnumCertificates(i));
            }
            */
            var kcerts = euSignAgent.GetCertificatesByKeyInfo(prm.knfo, kcmpaddr, kcmpport);
            //euSignAgent.SaveCertificates(kcerts);
            //console.log('key len certs - ' + kcerts.length);
            var flend = true;
            var cidx = 0;
            while (flend) {
                try {
                    var kcert = euSignAgent.GetCertificateFromSignedData(cidx,kcerts);
                    var kcertnfoex = euSignAgent.ParseCertificateEx(kcert);
                    if ((certInfoEx1.GetIssuer() === kcertnfoex.GetIssuer()) && (certInfoEx1.GetSerial() === kcertnfoex.GetSerial())) {
                        certData1 = kcert;
                    }
                    if ((certInfoEx2.GetIssuer() === kcertnfoex.GetIssuer()) && (certInfoEx2.GetSerial() === kcertnfoex.GetSerial()) && !isOneCert) {
                        certData2 = kcert;
                    }
                    cidx++;
                } catch (e) {
                    flend = false;
                }
            }
        } else {
            if (isOneCert) {
                certData1 = euSignAgent.GetCertificate(certInfoEx1.GetIssuer(), certInfoEx1.GetSerial());
            }
            else {
                if ((certInfoEx1.GetKeyUsageType() & euSignAgent.KEY_USAGE_DIGITAL_SIGNATUR) == euSignAgent.KEY_USAGE_DIGITAL_SIGNATUR) {
                    certData1 = euSignAgent.GetCertificate(certInfoEx1.GetIssuer(), certInfoEx1.GetSerial());
                    certData2 = euSignAgent.GetCertificate(certInfoEx2.GetIssuer(), certInfoEx2.GetSerial());
                }
                else {
                    certData1 = euSignAgent.GetCertificate(certInfoEx2.GetIssuer(), certInfoEx2.GetSerial());
                    certData2 = euSignAgent.GetCertificate(certInfoEx1.GetIssuer(), certInfoEx1.GetSerial());
                };
            };
        }
        //console.log('key certs read');
        //console.info(kcerts);
        var OCSPAccessInfo = certInfoEx1.GetOCSPAccessInfo();
        if (!(OCSPAccessInfo.includes(prm.selectACSK)) && prm.selectACSK.length > 4 ) {
            me.ShowLoginErr("Не вірно вибрано АЦСК");
            me.WaitHide();
            return null;
        }
        
        if (isOneCert) {
            //console.log('before one cert read');
            b64Cert1 += euSignAgent.BASE64Encode(certData1);
            authCertSer = certInfoEx1.GetSerial();
        }
        else {
            //console.log('before cert read');
            //Вычисляем какой из сертификатов для ЕЦП, а какой для шифрования
            if ((certInfoEx1.GetKeyUsageType() & euSignAgent.KEY_USAGE_DIGITAL_SIGNATUR) == euSignAgent.KEY_USAGE_DIGITAL_SIGNATUR) {
                authCertSer = certInfoEx1.GetSerial();
            }
            else {
                authCertSer = certInfoEx2.GetSerial();
            };
            //console.log('after cert read');
            b64Cert1 += euSignAgent.BASE64Encode(certData1);
            b64Cert2 += euSignAgent.BASE64Encode(certData2);
            //console.log('before rawsign');
            b64Sign += euSignAgent.RawSign(certData2);
        };
        return {
            //'certData1': certData1,
            //'certData2': certData2,
            'b64Cert1': b64Cert1,
            'b64Cert2': b64Cert2,
            'b64Sign': b64Sign,
            'authCertSer': authCertSer
        };
    },
    //----------------------------------------------------------------------------------------------
    // читання сертифікатів завантажених вручну
    //----------------------------------------------------------------------------------------------
    readCertsFromFile: function (cfile, onSuccess, onError) {
        //console.log('readCertsFromFile >>>');
        if (cfile === null || (typeof (cfile) === 'undefined')) {
            //console.log('readCertsFromFile >>> onSuccess raw');
            onSuccess();
            return;
        }
 
        try {
            var fileReader = new FileReader();
            fileReader.onloadend = function (evt) {
                try {
                    if (evt.target.readyState === FileReader.DONE) {
                        //if ($scope.debugauth) //console.log('readCertsFromFile: file readed ok');
                        //console.log('readCertsFromFile:2');
                        var fileDataArray = new Uint8Array(evt.target.result);
                        ////console.info(fileDataArray);
                        //var b64file = Base64.encode(fileDataArray); //base64_encode(fileDataArray);
                        ////console.log(b64file);
                        //keycert.push(b64file);
                        euSignAgent.SaveCertificate(fileDataArray);
                        //console.log('readCertsFromFile: all count = '+euSignAgent.GetCertificatesCount())
                        if (typeof onSuccess === "function") {
                            onSuccess();
                            return;
                        }
                        return;
                    }
                } catch (e) {
                    onError(e);
                    return;
                }
            };
            //console.log('readCertsFromFile:1');
            //var file = certfilesToUpload[idx];
            fileReader.readAsArrayBuffer(cfile);
        } catch (e) {
            //if ($scope.debugauth) //console.log('readCertsFromFile ERROR ');
            //if ($scope.debugauth) //console.info(e);
            onError(e);
            return;
        }
    },
    //----------------------------------------------------------------------------------------------
    // Завантажує приватний ключ з файлу
    //----------------------------------------------------------------------------------------------
    readKeyFromFile: function (file, pass, callparams, onSuccess, onError) {
        //console.log('readKeyFromFile >>>');
        var me = this;
        var _onError = function (e) {
            //console.log('readKeyFromFile >>> _onError');
            //if (me.debug) //console.log('euJS: readKeyFromFile onError. 0');
            if (typeof onError === "function") {
                //if (me.debug) //console.log('euJS: readKeyFromFile onError. 1-' + e.message);
                onError(e);
            } else {
                alert('Runtime ERROR: ' + e.message)
            }
        }
        //if (me.debug) //console.log('euJS: readKeyFromFile begin.');
        try {
            var fileReader = new FileReader();
            fileReader.onloadend = function (evt) {
                try {
                    if (evt.target.readyState === FileReader.DONE) {
                        //console.log('readKeyFromFile >>> FileReader.DONE');
                        var keyDataArray = new Uint8Array(evt.target.result);
                        //if (me.debug) //console.log('euJS: readKeyFromFile begin. 1');
                        //console.log('readKeyFromFile: before binary key all count = ' + euSignAgent.GetCertificatesCount())
                        euSignAgent.ReadPrivateKeyBinary(keyDataArray, pass);

                        if (typeof onSuccess === "function") {
                            onSuccess(keyDataArray, pass);
                            return;
                        }
                    }
                } catch (e) {
                    _onError(e);
                    return;
                }
            };
            fileReader.readAsArrayBuffer(file);
        } catch (e) {
            _onError(e);
            return;
        }
    },
    //----------------------------------------------------------------------------------------------
    // 
    //----------------------------------------------------------------------------------------------
    SignData: function (data, authCertSerial, caServ, isAsync, on_success, on_error) {
        var me = this;
        me.WaitShow();
        setTimeout(function () {
            me._SignData(data, authCertSerial, caServ, isAsync, on_success, on_error);
        }, 300);
    },
    _SignData: function (data, authCertSerial, caServ, isAsync, on_success, on_error) {
        //console.log('SignData >>>');
        var me = this;

        if ($("#edtKeyFile")[0].files.length < 1 && /(privatbank|_|uipv|altersign)/.test(caServ)) {
            me.ShowLoginErr("Не обрано приватний ключ!");
            return;
        }
        var keyf = $("#edtKeyFile")[0].files[0];
        if ($("#edtCertKeyFile")[0].files.length < 1 && /(uipv|altersign)/.test(caServ)) {
            me.ShowLoginErr("Не обрано сертифікат приватного ключа для КЕП!");
            return;
        }
        if ($("#edtKeyFile")[0].files.length < 1 && !(/(privatbank|_|uipv|altersign)/.test(caServ))) {
            var selectDevType = parseInt($("#selDevType").val(), 10);
            if (isNaN(selectDevType) || selectDevType < 0) {
                me.ShowLoginErr("Не обрано тип носія ключа");
                return;
            }
            var selectDevName = parseInt($("#selDevName").val(), 10);
            if (isNaN(selectDevName) || selectDevName < 0) {
                me.ShowLoginErr("Не обрано назву носія ключа");
                return;
            }
        }
        var usrKeyPass = $("#edtPass").val();
        if (usrKeyPass == "") {
            me.ShowLoginErr("Не вказано пароль до ключа!");
            return;
        }
        var keycert = $("#edtCertKeyFile")[0].files[0];

        var onError = function (err) {
            //console.log('SignData >>> onError');
            if (typeof on_error === "function") {
                on_error(err);
                return;
            } else {
                alert(err);
            }
            //me.ShowLoginErrExt(err);
            //me.WaitHide();
        }

        var onSuccess = function (kdata, kpass) {
            //console.log('SignData >>> onSuccess');
            try {
                var knfo;
                if ($("#edtKeyFile")[0].files.length < 1 && !(/(privatbank|_|uipv|altersign)/.test(caServ))) {
                    try {
                        //console.log('before key read');
                        me.LoadPrivateKey(selectDevType, selectDevName, usrKeyPass);
                        knfo = euSignAgent.GetKeyInfoSilently(selectDevType, selectDevName, usrKeyPass);
                        //console.log('after key read');
                    } catch (e) {
                        me.ShowLoginErr("Помилка зчитування ключа: " + e.message);
                        me.WaitHide();
                        return;
                    }
                } else {
                    knfo = euSignAgent.GetKeyInfoBinary(kdata, kpass);
                }
                var certkeydata = me.readCertsForKey({
                    'selectACSK': caServ,
                    'knfo': knfo
                });

                var re64 = new RegExp(certkeydata.authCertSer);
                if (!re64.test(authCertSerial)) {
                    me.ShowLoginErr("Ви спробували підписати документ ключем користувача, який не авторизований у системі!");
                    me.WaitHide();
                    return;
                }
                ////console.log('SignData: 1');
                //console.log('SignData: onSuccess - before base64');
                var data64 = Base64.encode(data);
                ////console.log('SignData: 2='+data64+']');
                //console.log('SignData: onSuccess - before SignInternal');
                var xSignedData = euSignAgent.SignInternal(true, data64);
                ////console.log('SignData: 3');
                me.WaitHide();
                /// ????????????????????????????????????????????
                //$("#pGetKeyParams").dialog("close");
                /// ????????????????????????????????????????????

                if (typeof on_success === "function") {
                    on_success(xSignedData);
                    return;
                } else {
                    onError('Критична помилка при підпису даних.');
                }
            }
            catch (e) {
                me.ShowLoginErrExt(e);
                me.WaitHide();
            }
        }
        //console.log('SignData - !isAsync');
        me.initAgentSettings(caServ);

        if (!isAsync) {
            //console.log('SignData - !isAsync - 1');
            onSuccess();
            return;
        }
        //console.log('before readCertsFromFile');
        me.readCertsFromFile(keycert, function () {
            me.readKeyFromFile(keyf, usrKeyPass, {}, onSuccess, onError);
        }, onError);
    },
    //----------------------------------------------------------------------------------------------
    // 
    //----------------------------------------------------------------------------------------------
    ShowLoginErrExt: function(exception) {
        var me = this;
        var euErrCode = euSignAgent.GetLastErrorCode();
        var msg = exception + "";
        if ((msg + "").indexOf('java.') >= 0 || euErrCode != 0) {
            if (euErrCode == 5 || euErrCode == 50) {
                msg = "Неможливо отримати дані сертифікату. Сервер АЦСК недоступний. <br />Якщо у вашій мережі використовується Proxy-сервер, перевірте налаштування Proxy-серверу криптобібліотек.";
            } else
                if (euErrCode == 24) {
                    msg = "Виникла помилка при відкритті особистого ключа (невірний пароль чи ключ пошкоджений)";
                } else
                    if (euErrCode == 2) {
                        msg = "Виникла помилка при відкритті особистого ключа (ключ не знайдено)";
                    } else
                        msg = euSignAgent.GetLastError();
        }
        me.ShowLoginErr(msg)
    },
    //----------------------------------------------------------------------------------------------
    // 
    //----------------------------------------------------------------------------------------------
    ShowLoginErr: function (msg) {
        var me = this;
        me.WaitHide();
        euSignLastError = msg;
        msg = msg + "";
        //console.log('ShowLoginErr: ' + msg);
        $("#logonErrorMsg").html(msg);
        //$("#logonError").show();
        $("#logonErrorMsg").dialog({
            draggable: false,
            modal: true,
            minHeight: 160,
            maxHeight: 600,
            minWidth: 500,
            maxWidth: 500,
            buttons: {
                Ok: function () {
                    me.WaitHide();
                    $(this).dialog("close");
                }
            }
        });
        
    },
    //----------------------------------------------------------------------------------------------
    // 
    //----------------------------------------------------------------------------------------------
    WaitShow: function () {
        //console.log('WaitShow >>>');
        var me = this;
        $("#loading_img_all").height($(".b-wrapper").height());
        $("#loading_animation_all").css("margin-top", window.scrollY + window.screen.height * 0.3);
        $("#loading_img_all").show();

        //$("#authmessage").html(msg);
        ///$("#pWaitApplet").show();
        //$("#pnl-load-applet").show();
    },
    //----------------------------------------------------------------------------------------------
    // 
    //----------------------------------------------------------------------------------------------
    WaitHide: function() {
        var me = this;
        $("#loading_img_all").hide();

        ///$("#pWaitApplet").hide();
        //$("#pnl-load-applet").hide();
    },
    //----------------------------------------------------------------------------------------------
    // 
    //----------------------------------------------------------------------------------------------
    //HideLoginErr: function () {
    //    var me = this;
    //    $("#logonError").hide();
    //}

});
var euSignAgent = null;
var drCrPortal = drCryptoPortal();

;
function CheckAuthDevice(setts) {
    console.log('CheckAuthDevice => init');

    let acskSDP = setts.acskSDP || 'ca.informjust.ua';
    let caCliFolder = setts.caCliFolder || '';
    let delay = parseInt(setts.delay || 300000, 10);

    function deviceProblemProc(message = "") {
        setTimeout(() => {
            logOut();
        }, 5000);
        ErrorMessages("Помилка перевірки девайсу авторизації. " + message, "messageError", false);
    }

    let deviceInfo_str = userStorage.getItem("deviceInfo");
    if (!deviceInfo_str) {
        console.warn("deviceInfo is Empty");
        if (!(/(privatbank|_|uipv|altersign)/.test(acskSDP))) {
            deviceProblemProc("Не знайдена інформація про авторизований девайс");
        }
        return;
    }
    let deviceInfo = JSON.parse(deviceInfo_str);  

    function checkDeviceByName() {
        let deviceType = parseInt(deviceInfo.type, 10);
        let deviceIndex = parseInt(deviceInfo.index, 10);
        let deviceName = euSignAgent.EnumKeyMediaDevices(deviceType, deviceIndex);
        if (deviceName && deviceName === deviceInfo.name) {
            return true;
        } else {
            return false;
        }
    }

    function checker() {
        setInterval(() => {
            let msg = "Пристрій не знайдено!";
            let isCheckOk = false;

            try {
                isCheckOk = checkDeviceByName();
            } catch (err) {
                isCheckOk = false;
                console.error('checkDeviceByName err!', err);
                msg = "IIT. " + (err && err.message);
            }

            if (!isCheckOk) {
                console.error('checkDeviceByName err!!!');
                deviceProblemProc(msg);
            }
        }, delay);
    }

    drCrPortal.euSignInitialize(acskSDP, caCliFolder, function () {
        console.log('CheckAuthDevice => start');
        checker();
    }, function (err) {
        console.error("CheckAuthDevice err", err);
        deviceProblemProc("Проблема з крипто бібліотекою. </br>" + (err && err.message));
    }, true);
};
