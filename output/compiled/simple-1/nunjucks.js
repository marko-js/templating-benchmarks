(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["simple-1"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"colors\">\n    Hello ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "!\n\n    ";
if(runtime.contextOrFrameLookup(context, frame, "colors") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "colors")),"length", env.opts.autoescape)) {
output += "\n    <ul>\n        ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "colors");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("color", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n        <li class=\"color\">";
output += runtime.suppressValue(t_4, env.opts.autoescape);
output += "</li>\n        ";
;
}
}
frame = frame.pop();
output += "\n    </ul>\n    ";
;
}
else {
output += "\n    <div>\n        No colors!\n    </div>\n    ";
;
}
output += "\n</div>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
