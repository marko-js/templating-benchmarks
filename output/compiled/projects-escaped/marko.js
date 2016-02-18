function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      forEach = __helpers.f,
      attr = __helpers.a;

  return function render(data, out) {
    out.w("<html><head><title>" +
      escapeXml(data.title) +
      "</title></head><body><p>" +
      escapeXml(data.text) +
      "</p>");

    forEach(data.projects, function(project) {
      out.w("<a" +
        attr("href", project.url) +
        ">" +
        escapeXml(project.name) +
        "</a><p>" +
        escapeXml(project.description) +
        "</p>");
    });

    if (empty(data.projects)) {
      out.w("No projects");
    }

    out.w("</body></html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
