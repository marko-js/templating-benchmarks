function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (colors, name, undefined) {
buf.push("<div class=\"colors\">" + (jade.escape(null == (jade_interp = 'Hello ' + name + '!') ? "" : jade_interp)));
if ( colors && colors.length)
{
buf.push("<ul>");
// iterate colors
;(function(){
  var $$obj = colors;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var color = $$obj[$index];

buf.push("<li class=\"color\">" + (jade.escape(null == (jade_interp = color) ? "" : jade_interp)) + "</li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var color = $$obj[$index];

buf.push("<li class=\"color\">" + (jade.escape(null == (jade_interp = color) ? "" : jade_interp)) + "</li>");
    }

  }
}).call(this);

buf.push("</ul>");
}
if ( !colors || !colors.length)
{
buf.push("<div>No colors!</div>");
}
buf.push("</div>");}.call(this,"colors" in locals_for_with?locals_for_with.colors:typeof colors!=="undefined"?colors:undefined,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}