function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      forEach = __helpers.f,
      classAttr = __helpers.ca;

  return function render(data, out) {
    forEach(data.accounts, function(account) {
      out.w("<div>");

      if (account.accountStatus === "closed") {
        out.w("<div>Your account has been closed!</div>");
      } else if (account.accountStatus === "suspended") {
        out.w("<div>Your account has been temporarily suspended</div>");
      } else {
        out.w("<div>Bank balance: <span" +
          classAttr(account.balance < 0 ? "negative" : "positive") +
          ">" +
          escapeXml(account.formattedBalance) +
          "</span></div>");
      }

      out.w("</div>");
    });
  };
}

(module.exports = require("marko").c(__filename)).c(create);
