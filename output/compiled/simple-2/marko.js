var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f;

function render(data, out) {
  out.w("<div><h1 class=\"header\">" +
    marko_escapeXml(data.header) +
    "</h1><h2 class=\"header2\">" +
    marko_escapeXml(data.header2) +
    "</h2><h3 class=\"header3\">" +
    marko_escapeXml(data.header3) +
    "</h3><h4 class=\"header4\">" +
    marko_escapeXml(data.header4) +
    "</h4><h5 class=\"header5\">" +
    marko_escapeXml(data.header5) +
    "</h5><h6 class=\"header6\">" +
    marko_escapeXml(data.header6) +
    "</h6><ul class=\"list\">");

  marko_forEach(data.list, function(item) {
    out.w("<li class=\"item\">" +
      marko_escapeXml(item) +
      "</li>");
  });

  out.w("</ul></div>");
}

marko_template._ = render;
