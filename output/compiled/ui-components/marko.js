function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      marko_colors = __loadTag(require("./components/marko-colors"));

  return function render(data, out) {
    out.w("<div class=\"my-app\">");

    marko_colors(data, out);

    out.w("</div>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
