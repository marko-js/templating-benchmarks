function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      forEach = __helpers.f,
      attr = __helpers.a;

  return function render(data, out) {
    out.w("<html> <head> <title>" +
      str(data.title) +
      "</title> </head> <body> <p>" +
      str(data.text) +
      "</p> ");

    forEach(data.projects, function(project) {
      out.w(" <a" +
        attr("href", project.url, false) +
        ">" +
        str(project.name) +
        "</a> <p>" +
        str(project.description) +
        "</p> ");
    });

    out.w(" ");

    if (empty(data.projects)) {
      out.w(" No projects ");
    }

    out.w(" </body> </html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
