var marko_template = module.exports = require("marko/html").t(__filename),
    marko_loadTemplate = require("marko/runtime/helper-loadTemplate"),
    marko_colors_template = marko_loadTemplate(require.resolve("./components/marko-colors")),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    marko_colors_tag = marko_loadTag(marko_colors_template);

function render(data, out) {
  out.w("<div class=\"my-app\">");

  marko_colors_tag(data, out);

  out.w("</div>");
}

marko_template._ = render;
