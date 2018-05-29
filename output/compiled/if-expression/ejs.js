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
    ;  accounts.forEach(function (account) { 
    ; __append("\n    <div>\n        ")
    ;  if (account.accountStatus === 'closed') { 
    ; __append("\n            <div> Your account has been closed!</div>\n        ")
    ;  } else if (account.accountStatus === 'suspended') { 
    ; __append("\n            <div> Your account has been temporarily suspended</div>\n        ")
    ;  } else { 
    ; __append("\n            <div>\n                Bank balance:\n                <span class=\"")
    ; __append(escapeFn( account.balance < 0 ? 'negative' : 'positive' ))
    ; __append("\"></span>\n                    ")
    ; __append(escapeFn( account.formattedBalance ))
    ; __append("\n            </div>\n        ")
    ;  } 
    ; __append("\n    </div>\n")
    ;  }) 
  }
  return __output.join("");

}