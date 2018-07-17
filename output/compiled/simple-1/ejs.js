module.exports=function anonymous(locals, escapeFn, include, rethrow
/*``*/) {
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
  var __output = [], __append = __output.push.bind(__output);
  with (locals || {}) {
    ; __append("<div class=\"simple-1\" style=\"background-color: blue; border: 1px solid black\">\n    <div class=\"colors\">\n        <span class=\"hello\">Hello ")
    ; __append(escapeFn( name ))
    ; __append("! <strong>You have ")
    ; __append(escapeFn( messageCount ))
    ; __append(" messages!</strong></span>\n\n        ")
    ;  if (colors) { 
    ; __append("\n        <ul>\n            ")
    ;  colors.forEach(function (color) { 
    ; __append("\n            <li class=\"color\">")
    ; __append(escapeFn( color ))
    ; __append("</li>\n            ")
    ;  }) 
    ; __append("\n        </ul>\n        ")
    ;  } else { 
    ; __append("\n        <div>\n            No colors!\n        </div>\n        ")
    ;  } 
    ; __append("\n    </div>\n    <button type=\"button\" class=\"")
    ; __append(escapeFn( primary ? 'primary' : 'secondary' ))
    ; __append(" {{#if primary}}primary{{else}}secondary{{/if}}\">Click me!</button>\n</div>")
  }
  return __output.join("");

}