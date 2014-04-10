module.exports = function create(__helpers) {
  var empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      forLoop = __helpers.fl,
      attr = __helpers.a;

  return function render(data, context) {
    context.w('<html><head><title>' +
      escapeXml(data.title) +
      '</title></head><body><p>' +
      escapeXml(data.text) +
      '</p>');

    forLoop(data.projects, function(__array,__index,__length,project) {
      for (;__index<__length;__index++) {
        project=__array[__index];

        context.w('<a' +
          attr("href", project.url) +
          '>' +
          escapeXml(project.name) +
          '</a><p>' +
          escapeXml(project.description) +
          '</p>');
      }
    });

    if (empty(data.projects)) {
      context.w('No projects');
    }

    context.w('</body></html>');
  };
}