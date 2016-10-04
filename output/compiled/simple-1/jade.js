function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (colors, messageCount, name, primary, undefined) {
buf.push("<div style=\"background-color: blue; border: 1px solid black\" class=\"simple-1\"><div class=\"colors\"><span class=\"hello\">Hello " + (jade.escape((jade_interp = name) == null ? '' : jade_interp)) + "! <strong>You have " + (jade.escape((jade_interp = messageCount) == null ? '' : jade_interp)) + " messages!</strong></span>");
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
buf.push("</div><button type=\"button\"" + (jade.cls([primary ? 'primary' : 'secondary'], [true])) + ">Click me!</button></div>");}.call(this,"colors" in locals_for_with?locals_for_with.colors:typeof colors!=="undefined"?colors:undefined,"messageCount" in locals_for_with?locals_for_with.messageCount:typeof messageCount!=="undefined"?messageCount:undefined,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined,"primary" in locals_for_with?locals_for_with.primary:typeof primary!=="undefined"?primary:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}