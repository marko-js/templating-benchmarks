function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      forEach = __helpers.f,
      attr = __helpers.a,
      escapeXml = __helpers.x;

  return function render(data, out) {
    forEach(data.accounts, function(account) {
      out.w('<div>');

      if (account.accountStatus === 'closed') {
        out.w('<div>Your account has been closed!</div>');
      }
      else if (account.accountStatus === 'suspended') {
        out.w('<div>Your account has been temporarily suspended</div>');
      }
      else {
        out.w('<div>Bank balance: <span' +
          attr("class", (account.balance<0 ? "negative" : "positive")) +
          '>' +
          escapeXml(account.formattedBalance) +
          '</span></div>');
      }

      out.w('</div>');
    });
  };
}
(module.exports = require("marko").c(__filename)).c(create);