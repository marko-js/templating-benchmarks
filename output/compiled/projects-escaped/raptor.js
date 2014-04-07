module.exports = function create(helpers) {
  var empty = helpers.e,
      notEmpty = helpers.ne,
      escapeXml = helpers.x,
      forEach = helpers.f,
      attr = helpers.a;

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