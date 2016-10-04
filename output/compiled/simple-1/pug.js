function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)s=pug_classes(r[g]),s&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (buttonLabel, colors, messageCount, name, primary) {pug_html = pug_html + "\u003Cdiv class=\"simple-1\" style=\"background-color: blue; border: 1px solid black\"\u003E\u003Cdiv class=\"colors\"\u003E\u003Cspan class=\"hello\"\u003EHello " + (pug_escape(null == (pug_interp = name) ? "" : pug_interp)) + "! \u003Cstrong\u003EYou have " + (pug_escape(null == (pug_interp = messageCount) ? "" : pug_interp)) + " messages!\u003C\u002Fstrong\u003E\u003C\u002Fspan\u003E";
if (colors && colors.length) {
pug_html = pug_html + "\u003Cul\u003E";
// iterate colors
;(function(){
  var $$obj = colors;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var color = $$obj[pug_index0];
pug_html = pug_html + "\u003Cli class=\"color\"\u003E" + (pug_escape(null == (pug_interp = color) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var color = $$obj[pug_index0];
pug_html = pug_html + "\u003Cli class=\"color\"\u003E" + (pug_escape(null == (pug_interp = color) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E";
}
if (!colors || !colors.length) {
pug_html = pug_html + "\u003Cdiv\u003ENo colors!\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cbutton" + (pug_attr("class", pug_classes([primary ? 'primary' : 'secondary'], [true]), false, false)+" type=\"button\"") + "\u003E" + (pug_escape(null == (pug_interp = buttonLabel) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";}.call(this,"buttonLabel" in locals_for_with?locals_for_with.buttonLabel:typeof buttonLabel!=="undefined"?buttonLabel:undefined,"colors" in locals_for_with?locals_for_with.colors:typeof colors!=="undefined"?colors:undefined,"messageCount" in locals_for_with?locals_for_with.messageCount:typeof messageCount!=="undefined"?messageCount:undefined,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined,"primary" in locals_for_with?locals_for_with.primary:typeof primary!=="undefined"?primary:undefined));;return pug_html;}