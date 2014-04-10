module.exports = function create(__helpers) {
  var empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      forEach = __helpers.f,
      attr = __helpers.a;

  return function render(data, context) {
    context.w('<html><head><title>' +
      escapeXml(data.title) +
      '</title></head><body><p>' +
      escapeXml(data.text) +
      '</p>');

    forEach(data.projects, function(project) {
      context.w('<a' +
        attr("href", project.url) +
        '>' +
        escapeXml(project.name) +
        '</a><p>' +
        escapeXml(project.description) +
        '</p>');
    });

    if (empty(data.projects)) {
      context.w('No projects');
    }

    context.w('</body></html>');
  };
}