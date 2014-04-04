function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (name, colors) {
buf.push(jade.escape(null == (jade_interp = 'Hello ' + name + '!') ? "" : jade_interp));
if ( colors && colors.length)
{
buf.push("<ul>");
// iterate colors
;(function(){
  var $$obj = colors;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var color = $$obj[$index];

buf.push("<li>" + (jade.escape(null == (jade_interp = color) ? "" : jade_interp)) + "</li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var color = $$obj[$index];

buf.push("<li>" + (jade.escape(null == (jade_interp = color) ? "" : jade_interp)) + "</li>");
    }

  }
}).call(this);

buf.push("</ul>");
}
if ( !colors || !colors.length)
{
buf.push("<No>colors!</No>");
}}("name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined,"colors" in locals_for_with?locals_for_with.colors:typeof colors!=="undefined"?colors:undefined));;return buf.join("");
}