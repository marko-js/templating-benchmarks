module.exports = function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      forEach = __helpers.f,
      attr = __helpers.a;

  return function render(data, out) {
    out.s('<html><head><title>' +
      str(data.title) +
      '</title></head><body><p>' +
      str(data.text) +
      '</p>');

    forEach(data.projects, function(project) {
      out.s('<a' +
        attr("href", str(project.url), false) +
        '>' +
        str(project.name) +
        '</a><p>' +
        str(project.description) +
        '</p>');
    });

    if (empty(data.projects)) {
      out.s('No projects');
    }

    out.s('</body></html>');
  };
}