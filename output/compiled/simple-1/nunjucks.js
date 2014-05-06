(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["simple-1"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "Hello ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.autoesc);
output += "!\n   \n";
if(runtime.contextOrFrameLookup(context, frame, "colors") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "colors")),"length", env.autoesc)) {
output += "\n<ul>\n    ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "colors");
if(t_3) {for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("color", t_4);
output += "\n    <li class=\"color\">";
output += runtime.suppressValue(t_4, env.autoesc);
output += "</li>\n    ";
;
}
}
frame = frame.pop();
output += "\n</ul>\n";
;
}
else {
output += "\n<div>\n    No colors!\n</div>\n";
;
}
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
