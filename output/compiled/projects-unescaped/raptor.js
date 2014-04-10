module.exports = function create(__helpers) {
  var empty = __helpers.e,
      notEmpty = __helpers.ne,
      forEach = __helpers.f,
      attr = __helpers.a;

  return function render(data, context) {
    context.w('<html><head><title>' +
      data.title +
      '</title></head><body><p>' +
      data.text +
      '</p>');

    forEach(data.projects, function(project) {
      context.w('<a' +
        attr("href", project.url, false) +
        '>' +
        project.name +
        '</a><p>' +
        project.description +
        '</p>');
    });

    if (empty(data.projects)) {
      context.w('No projects');
    }

    context.w('</body></html>');
  };
}