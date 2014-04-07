module.exports = function create(helpers) {
  var empty = helpers.e,
      notEmpty = helpers.ne,
      forEach = helpers.f,
      attr = helpers.a;

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