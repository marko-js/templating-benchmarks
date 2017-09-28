// Compiled using marko@4.4.28 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_classAttr = marko_helpers.ca;

function render(input, out) {
  var data = input;

  marko_forEach(input.accounts, function(account) {
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
}

marko_template._ = render;

marko_template.meta = {};
