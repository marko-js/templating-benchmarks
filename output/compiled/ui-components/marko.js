function create(__markoHelpers) {
  var marko_loadTag = __markoHelpers.t,
      marko_colors = marko_loadTag(require("./components/marko-colors"));

  return function render(data, out) {
    out.w("<div class=\"my-app\">");

    marko_colors(data, out);

    out.w("</div>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
