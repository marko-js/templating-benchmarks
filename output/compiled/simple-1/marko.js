function create(__markoHelpers) {
  var marko_escapeXml = __markoHelpers.x,
      marko_forEach = __markoHelpers.f,
      marko_escapeXmlAttr = __markoHelpers.xa,
      marko_classAttr = __markoHelpers.ca;

  return function render(data, out) {
    out.w("<div class=\"simple-1\" style=\"background-color: blue; border: 1px solid black\"><div class=\"colors\"><span class=\"hello\">Hello " +
      marko_escapeXml(data.name) +
      "! <strong>You have " +
      marko_escapeXml(data.messageCount) +
      " messages!</strong></span>");

    if (data.colors.length) {
      out.w("<ul>");

      marko_forEach(data.colors, function(color) {
        out.w("<li style=\"background-color: " +
          marko_escapeXmlAttr(color) +
          "\" class=\"color\">" +
          marko_escapeXml(color) +
          "</li>");
      });

      out.w("</ul>");
    } else {
      out.w("<div>No colors!</div>");
    }

    out.w("</div><button type=\"button\"" +
      marko_classAttr(data.primary ? "primary" : "secondary") +
      ">" +
      marko_escapeXml(data.buttonLabel) +
      "</button></div>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
