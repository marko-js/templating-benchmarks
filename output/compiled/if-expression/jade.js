function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (accounts, undefined) {
// iterate accounts
;(function(){
  var $$obj = accounts;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var account = $$obj[$index];

buf.push("<div>");
if ( account.accountStatus === 'closed')
{
buf.push("<div>Your account has been closed!</div>");
}
else if ( account.accountStatus === 'suspended')
{
buf.push("<div>Your account has been temporarily suspended</div>");
}
else
{
buf.push("<div>Bank balance:<span" + (jade.cls([account.balance<0 ? 'negative' : 'positive'], [true])) + ">" + (jade.escape(null == (jade_interp = account.formattedBalance) ? "" : jade_interp)) + "</span></div>");
}
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var account = $$obj[$index];

buf.push("<div>");
if ( account.accountStatus === 'closed')
{
buf.push("<div>Your account has been closed!</div>");
}
else if ( account.accountStatus === 'suspended')
{
buf.push("<div>Your account has been temporarily suspended</div>");
}
else
{
buf.push("<div>Bank balance:<span" + (jade.cls([account.balance<0 ? 'negative' : 'positive'], [true])) + ">" + (jade.escape(null == (jade_interp = account.formattedBalance) ? "" : jade_interp)) + "</span></div>");
}
buf.push("</div>");
    }

  }
}).call(this);
}.call(this,"accounts" in locals_for_with?locals_for_with.accounts:typeof accounts!=="undefined"?accounts:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}