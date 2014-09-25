module.exports = function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      forLoop = __helpers.fl,
      attr = __helpers.a;

  return function render(data, out) {
    out.s('<html><head><title>' +
      str(data.title) +
      '</title></head><body><p>' +
      str(data.text) +
      '</p>');

    forLoop(data.projects, function(__array,__index,__length,project) {
      for (;__index<__length;__index++) {
        project=__array[__index];

        out.s('<a' +
          attr("href", str(project.url), false) +
          '>' +
          str(project.name) +
          '</a><p>' +
          str(project.description) +
          '</p>');
      }
    });

    if (empty(data.projects)) {
      out.s('No projects');
    }

    out.s('</body></html>');
  };
}