function pug_attr(t,e,n,r){if(e===!1||null==e||!e&&("class"===t||"style"===t))return"";if(e===!0)return" "+(r?t:t+'="'+t+'"');if("function"==typeof e.toISOString)e=e.toISOString();else if("string"!=typeof e&&(e=JSON.stringify(e),!n&&-1!==e.indexOf('"')))return" "+t+"='"+e.replace(/'/g,"&#39;")+"'";return n&&(e=pug_escape(e))," "+t+'="'+e+'"'}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)s=pug_classes(r[g]),s&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(i){pug_rethrow(n,null,r)}var a=3,o=t.split("\n"),h=Math.max(r-a,0),s=Math.min(o.length,r+a),a=o.slice(h,s).map(function(n,e){var t=e+h+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+a+"\n\n"+n.message,n}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (accounts) {;pug_debug_line = 1;
// iterate accounts
var pug_obj0 = accounts;
if ('number' == typeof pug_obj0.length) {

  for (var pug_index0 = 0, pug_length0 = pug_obj0.length; pug_index0 < pug_length0; pug_index0++) {
    var account = pug_obj0[pug_index0];

;pug_debug_line = 2;
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 3;
if (account.accountStatus === 'closed') {
;pug_debug_line = 4;
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 4;
pug_html = pug_html + "Your account has been closed!\u003C\u002Fdiv\u003E";
}
else
if (account.accountStatus === 'suspended') {
;pug_debug_line = 6;
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 6;
pug_html = pug_html + "Your account has been temporarily suspended\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 8;
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 9;
pug_html = pug_html + "Bank balance:";
;pug_debug_line = 10;
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes([account.balance<0 ? 'negative' : 'positive'], [true]), false, false)) + "\u003E";
;pug_debug_line = 11;
pug_html = pug_html + (pug_escape(null == (pug_interp = account.formattedBalance) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
  }

} else {
  var pug_length0 = 0;
  for (var pug_index0 in pug_obj0) {
    pug_length0++;
    var account = pug_obj0[pug_index0];

;pug_debug_line = 2;
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 3;
if (account.accountStatus === 'closed') {
;pug_debug_line = 4;
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 4;
pug_html = pug_html + "Your account has been closed!\u003C\u002Fdiv\u003E";
}
else
if (account.accountStatus === 'suspended') {
;pug_debug_line = 6;
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 6;
pug_html = pug_html + "Your account has been temporarily suspended\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 8;
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 9;
pug_html = pug_html + "Bank balance:";
;pug_debug_line = 10;
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes([account.balance<0 ? 'negative' : 'positive'], [true]), false, false)) + "\u003E";
;pug_debug_line = 11;
pug_html = pug_html + (pug_escape(null == (pug_interp = account.formattedBalance) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
  }

}
}.call(this,"accounts" in locals_for_with?locals_for_with.accounts:typeof accounts!=="undefined"?accounts:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}