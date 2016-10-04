function create(__markoHelpers) {
  var marko_escapeXml = __markoHelpers.x,
      marko_attr = __markoHelpers.a;

  return function render(data, out) {
    out.w("<html><head><title>" +
      marko_escapeXml(data.title) +
      "</title></head><body><p>" +
      marko_escapeXml(data.text) +
      "</p>");

    for (var i=0, len=data.projects.length; i < len; i++) {
      var project = data.projects[i];

      out.w("<a" +
        marko_attr("href", project.url) +
        ">" +
        marko_escapeXml(project.name) +
        "</a><p>" +
        marko_escapeXml(project.description) +
        "</p>");
    }

    if (!data.projects.length) {
      out.w("No projects");
    }

    out.w("</body></html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
