function create(__markoHelpers) {
  var marko_forEach = __markoHelpers.f,
      marko_escapeXml = __markoHelpers.x,
      marko_classAttr = __markoHelpers.ca;

  return function render(data, out) {
    marko_forEach(data.accounts, function(account) {
      out.w("<div>");

      if (account.accountStatus === "closed") {
        out.w("<div>Your account has been closed!</div>");
      } else if (account.accountStatus === "suspended") {
        out.w("<div>Your account has been temporarily suspended</div>");
      } else {
        out.w("<div>Bank balance: <span" +
          marko_classAttr(account.balance < 0 ? "negative" : "positive") +
          ">" +
          marko_escapeXml(account.formattedBalance) +
          "</span></div>");
      }

      out.w("</div>");
    });
  };
}

(module.exports = require("marko").c(__filename)).c(create);
