module.exports = function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      forLoop = __helpers.fl,
      attr = __helpers.a;

  return function render(data, out) {
    out.s('<html><head><title>' +
      escapeXml(data.title) +
      '</title></head><body><p>' +
      escapeXml(data.text) +
      '</p>');

    forLoop(data.projects, function(__array,__index,__length,project) {
      for (;__index<__length;__index++) {
        project=__array[__index];

        out.s('<a' +
          attr("href", project.url) +
          '>' +
          escapeXml(project.name) +
          '</a><p>' +
          escapeXml(project.description) +
          '</p>');
      }
    });

    if (empty(data.projects)) {
      out.s('No projects');
    }

    out.s('</body></html>');
  };
}