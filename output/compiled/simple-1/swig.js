module.exports=function (_swig,_ctx,_filters,_utils,_fn
/*``*/) {
  var _ext = _swig.extensions,
    _output = "";
_output += "<div class=\"simple-1\" style=\"background-color: blue; border: 1px solid black\">\n    <div class=\"colors\">\n        <span class=\"hello\">Hello ";
_output += _filters["e"]((((typeof _ctx.name !== "undefined" && _ctx.name !== null) ? ((typeof _ctx.name !== "undefined" && _ctx.name !== null) ? _ctx.name : "") : ((typeof name !== "undefined" && name !== null) ? name : "")) !== null ? ((typeof _ctx.name !== "undefined" && _ctx.name !== null) ? ((typeof _ctx.name !== "undefined" && _ctx.name !== null) ? _ctx.name : "") : ((typeof name !== "undefined" && name !== null) ? name : "")) : "" ));
_output += "!  <strong>You have ";
_output += _filters["e"]((((typeof _ctx.messageCount !== "undefined" && _ctx.messageCount !== null) ? ((typeof _ctx.messageCount !== "undefined" && _ctx.messageCount !== null) ? _ctx.messageCount : "") : ((typeof messageCount !== "undefined" && messageCount !== null) ? messageCount : "")) !== null ? ((typeof _ctx.messageCount !== "undefined" && _ctx.messageCount !== null) ? ((typeof _ctx.messageCount !== "undefined" && _ctx.messageCount !== null) ? _ctx.messageCount : "") : ((typeof messageCount !== "undefined" && messageCount !== null) ? messageCount : "")) : "" ));
_output += " messages!</strong></span>\n\n        ";
if ((((typeof _ctx.colors !== "undefined" && _ctx.colors !== null) ? ((typeof _ctx.colors !== "undefined" && _ctx.colors !== null) ? _ctx.colors : "") : ((typeof colors !== "undefined" && colors !== null) ? colors : "")) !== null ? ((typeof _ctx.colors !== "undefined" && _ctx.colors !== null) ? ((typeof _ctx.colors !== "undefined" && _ctx.colors !== null) ? _ctx.colors : "") : ((typeof colors !== "undefined" && colors !== null) ? colors : "")) : "" ) && (((typeof _ctx.colors !== "undefined" && _ctx.colors !== null && _ctx.colors.length !== undefined && _ctx.colors.length !== null) ? ((typeof _ctx.colors !== "undefined" && _ctx.colors !== null && _ctx.colors.length !== undefined && _ctx.colors.length !== null) ? _ctx.colors.length : "") : ((typeof colors !== "undefined" && colors !== null && colors.length !== undefined && colors.length !== null) ? colors.length : "")) !== null ? ((typeof _ctx.colors !== "undefined" && _ctx.colors !== null && _ctx.colors.length !== undefined && _ctx.colors.length !== null) ? ((typeof _ctx.colors !== "undefined" && _ctx.colors !== null && _ctx.colors.length !== undefined && _ctx.colors.length !== null) ? _ctx.colors.length : "") : ((typeof colors !== "undefined" && colors !== null && colors.length !== undefined && colors.length !== null) ? colors.length : "")) : "" )) { 
_output += "\n        <ul>\n            ";
(function () {
  var __l = (((typeof _ctx.colors !== "undefined" && _ctx.colors !== null) ? ((typeof _ctx.colors !== "undefined" && _ctx.colors !== null) ? _ctx.colors : "") : ((typeof colors !== "undefined" && colors !== null) ? colors : "")) !== null ? ((typeof _ctx.colors !== "undefined" && _ctx.colors !== null) ? ((typeof _ctx.colors !== "undefined" && _ctx.colors !== null) ? _ctx.colors : "") : ((typeof colors !== "undefined" && colors !== null) ? colors : "")) : "" ), __len = (_utils.isArray(__l) || typeof __l === "string") ? __l.length : _utils.keys(__l).length;
  if (!__l) { return; }
    var _ctx__loopcache08374790330960049 = { loop: _ctx.loop, color: _ctx.color, __k: _ctx.__k };
    _ctx.loop = { first: false, index: 1, index0: 0, revindex: __len, revindex0: __len - 1, length: __len, last: false };
  _utils.each(__l, function (color, __k) {
    _ctx.color = color;
    _ctx.__k = __k;
    _ctx.loop.key = __k;
    _ctx.loop.first = (_ctx.loop.index0 === 0);
    _ctx.loop.last = (_ctx.loop.revindex0 === 0);
    _output += "\n            <li class=\"color\">";
_output += _filters["e"]((((typeof _ctx.color !== "undefined" && _ctx.color !== null) ? ((typeof _ctx.color !== "undefined" && _ctx.color !== null) ? _ctx.color : "") : ((typeof color !== "undefined" && color !== null) ? color : "")) !== null ? ((typeof _ctx.color !== "undefined" && _ctx.color !== null) ? ((typeof _ctx.color !== "undefined" && _ctx.color !== null) ? _ctx.color : "") : ((typeof color !== "undefined" && color !== null) ? color : "")) : "" ));
_output += "</li>\n            ";
    _ctx.loop.index += 1; _ctx.loop.index0 += 1; _ctx.loop.revindex -= 1; _ctx.loop.revindex0 -= 1;
  });
  _ctx.loop = _ctx__loopcache08374790330960049.loop;
  _ctx.color = _ctx__loopcache08374790330960049.color;
  _ctx.__k = _ctx__loopcache08374790330960049.__k;
  _ctx__loopcache08374790330960049 = undefined;
})();
_output += "\n        </ul>\n        ";
} else {
_output += "\n        <div>\n            No colors!\n        </div>\n        ";

}_output += "\n    </div>\n    <button type=\"button\" class=\"";
if ((((typeof _ctx.primary !== "undefined" && _ctx.primary !== null) ? ((typeof _ctx.primary !== "undefined" && _ctx.primary !== null) ? _ctx.primary : "") : ((typeof primary !== "undefined" && primary !== null) ? primary : "")) !== null ? ((typeof _ctx.primary !== "undefined" && _ctx.primary !== null) ? ((typeof _ctx.primary !== "undefined" && _ctx.primary !== null) ? _ctx.primary : "") : ((typeof primary !== "undefined" && primary !== null) ? primary : "")) : "" )) { 
_output += "primary";
} else {
_output += "secondary";

}_output += "\">Click me!</button>\n</div>";

  return _output;

}