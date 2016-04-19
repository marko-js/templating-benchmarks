module.exports=function (_swig,_ctx,_filters,_utils,_fn
/**/) {
  var _ext = _swig.extensions,
    _output = "";
_output += "<div class=\"colors\">\n    Hello ";
_output += _filters["e"]((((typeof _ctx.name !== "undefined" && _ctx.name !== null) ? ((typeof _ctx.name !== "undefined" && _ctx.name !== null) ? _ctx.name : "") : ((typeof name !== "undefined" && name !== null) ? name : "")) !== null ? ((typeof _ctx.name !== "undefined" && _ctx.name !== null) ? ((typeof _ctx.name !== "undefined" && _ctx.name !== null) ? _ctx.name : "") : ((typeof name !== "undefined" && name !== null) ? name : "")) : "" ));
_output += "!\n\n    ";
if ((((typeof _ctx.colors !== "undefined" && _ctx.colors !== null) ? ((typeof _ctx.colors !== "undefined" && _ctx.colors !== null) ? _ctx.colors : "") : ((typeof colors !== "undefined" && colors !== null) ? colors : "")) !== null ? ((typeof _ctx.colors !== "undefined" && _ctx.colors !== null) ? ((typeof _ctx.colors !== "undefined" && _ctx.colors !== null) ? _ctx.colors : "") : ((typeof colors !== "undefined" && colors !== null) ? colors : "")) : "" ) && (((typeof _ctx.colors !== "undefined" && _ctx.colors !== null && _ctx.colors.length !== undefined && _ctx.colors.length !== null) ? ((typeof _ctx.colors !== "undefined" && _ctx.colors !== null && _ctx.colors.length !== undefined && _ctx.colors.length !== null) ? _ctx.colors.length : "") : ((typeof colors !== "undefined" && colors !== null && colors.length !== undefined && colors.length !== null) ? colors.length : "")) !== null ? ((typeof _ctx.colors !== "undefined" && _ctx.colors !== null && _ctx.colors.length !== undefined && _ctx.colors.length !== null) ? ((typeof _ctx.colors !== "undefined" && _ctx.colors !== null && _ctx.colors.length !== undefined && _ctx.colors.length !== null) ? _ctx.colors.length : "") : ((typeof colors !== "undefined" && colors !== null && colors.length !== undefined && colors.length !== null) ? colors.length : "")) : "" )) { 
_output += "\n    <ul>\n        ";
(function () {
  var __l = (((typeof _ctx.colors !== "undefined" && _ctx.colors !== null) ? ((typeof _ctx.colors !== "undefined" && _ctx.colors !== null) ? _ctx.colors : "") : ((typeof colors !== "undefined" && colors !== null) ? colors : "")) !== null ? ((typeof _ctx.colors !== "undefined" && _ctx.colors !== null) ? ((typeof _ctx.colors !== "undefined" && _ctx.colors !== null) ? _ctx.colors : "") : ((typeof colors !== "undefined" && colors !== null) ? colors : "")) : "" ), __len = (_utils.isArray(__l) || typeof __l === "string") ? __l.length : _utils.keys(__l).length;
  if (!__l) { return; }
    var _ctx__loopcache045044726645573974 = { loop: _ctx.loop, color: _ctx.color, __k: _ctx.__k };
    _ctx.loop = { first: false, index: 1, index0: 0, revindex: __len, revindex0: __len - 1, length: __len, last: false };
  _utils.each(__l, function (color, __k) {
    _ctx.color = color;
    _ctx.__k = __k;
    _ctx.loop.key = __k;
    _ctx.loop.first = (_ctx.loop.index0 === 0);
    _ctx.loop.last = (_ctx.loop.revindex0 === 0);
    _output += "\n        <li class=\"color\">";
_output += _filters["e"]((((typeof _ctx.color !== "undefined" && _ctx.color !== null) ? ((typeof _ctx.color !== "undefined" && _ctx.color !== null) ? _ctx.color : "") : ((typeof color !== "undefined" && color !== null) ? color : "")) !== null ? ((typeof _ctx.color !== "undefined" && _ctx.color !== null) ? ((typeof _ctx.color !== "undefined" && _ctx.color !== null) ? _ctx.color : "") : ((typeof color !== "undefined" && color !== null) ? color : "")) : "" ));
_output += "</li>\n        ";
    _ctx.loop.index += 1; _ctx.loop.index0 += 1; _ctx.loop.revindex -= 1; _ctx.loop.revindex0 -= 1;
  });
  _ctx.loop = _ctx__loopcache045044726645573974.loop;
  _ctx.color = _ctx__loopcache045044726645573974.color;
  _ctx.__k = _ctx__loopcache045044726645573974.__k;
  _ctx__loopcache045044726645573974 = undefined;
})();
_output += "\n    </ul>\n    ";
} else {
_output += "\n    <div>\n        No colors!\n    </div>\n    ";

}_output += "\n</div>";

  return _output;

}