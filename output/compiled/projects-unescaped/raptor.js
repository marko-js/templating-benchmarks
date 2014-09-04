module.exports = function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      forEach = __helpers.f,
      attr = __helpers.a;

  return function render(data, context) {
    context.w('<html><head><title>' +
      str(data.title) +
      '</title></head><body><p>' +
      str(data.text) +
      '</p>');

    forEach(data.projects, function(project) {
      context.w('<a' +
        attr("href", str(project.url), false) +
        '>' +
        str(project.name) +
        '</a><p>' +
        str(project.description) +
        '</p>');
    });

    if (empty(data.projects)) {
      context.w('No projects');
    }

    context.w('</body></html>');
  };
}