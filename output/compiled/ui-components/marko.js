// Compiled using marko@4.2.8 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/html").t(__filename),
    marko_loadTemplate = require("marko/runtime/helper-loadTemplate"),
    marko_colors_template = marko_loadTemplate(require.resolve("./components/marko-colors")),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    marko_colors_tag = marko_loadTag(marko_colors_template);

function render(input, out) {
  var data = input;

  out.w("<div class=\"my-app\">");

  marko_colors_tag(data, out);

  out.w("</div>");
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "./components/marko-colors"
    ]
  };
