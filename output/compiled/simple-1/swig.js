module.exports=function (_swig,_ctx,_filters,_utils,_fn) {
  var _ext = _swig.extensions,
    _output = "";
_output += "Hello ";
_output += _filters["e"](((typeof _ctx.name !== "undefined") ? ((typeof _ctx.name !== "undefined") ? _ctx.name : "") : ((typeof name !== "undefined") ? name : "")));
_output += "!\n   \n";
if (((typeof _ctx.colors !== "undefined") ? ((typeof _ctx.colors !== "undefined") ? _ctx.colors : "") : ((typeof colors !== "undefined") ? colors : "")) && ((typeof _ctx.colors !== "undefined" && _ctx.colors.length !== undefined) ? ((typeof _ctx.colors !== "undefined" && _ctx.colors.length !== undefined) ? _ctx.colors.length : "") : ((typeof colors !== "undefined" && colors.length !== undefined) ? colors.length : ""))) { 
_output += "\n<ul>\n    ";
(function () {
  var __l = ((typeof _ctx.colors !== "undefined") ? ((typeof _ctx.colors !== "undefined") ? _ctx.colors : "") : ((typeof colors !== "undefined") ? colors : "")), __len = (_utils.isArray(__l)) ? __l.length : _utils.keys(__l).length;
  if (!__l) { return; }
  _ctx.___loopcache = { loop: _ctx.loop, color: _ctx.color, __k: _ctx.__k };
  _ctx.loop = { first: false, index: 1, index0: 0, revindex: __len, revindex0: __len - 1, length: __len, last: false };
  _utils.each(__l, function (color, __k) {
    _ctx.color = color;
    _ctx.__k = __k;
    _ctx.loop.key = __k;
    _ctx.loop.first = (_ctx.loop.index0 === 0);
    _ctx.loop.last = (_ctx.loop.revindex0 === 0);
    _output += "\n    <li class=\"color\">";
_output += _filters["e"](((typeof _ctx.color !== "undefined") ? ((typeof _ctx.color !== "undefined") ? _ctx.color : "") : ((typeof color !== "undefined") ? color : "")));
_output += "</li>\n    ";
    _ctx.loop.index += 1; _ctx.loop.index0 += 1; _ctx.loop.revindex -= 1; _ctx.loop.revindex0 -= 1;
  });
  _ctx.loop = _ctx.___loopcache.loop;
  _ctx.color = _ctx.___loopcache.color;
  _ctx.__k = _ctx.___loopcache.__k;
})();
_output += "\n</ul>\n";
} else {
_output += "\n<div>\n    No colors!\n</div>\n";

}
  return _output;

}