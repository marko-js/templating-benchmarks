function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      forLoop = __helpers.fl;

  return function render(data, out) {
    out.w('Hello ' +
      escapeXml(data.name) +
      '! ');

    if (notEmpty(data.colors)) {
      out.w('<ul>');

      forLoop(data.colors, function(__array,__index,__length,color) {
        for (;__index<__length;__index++) {
          color=__array[__index];

          out.w('<li class="color">' +
            escapeXml(color) +
            '</li>');
        }
      });

      out.w('</ul>');
    }
    else {
      out.w('<div>No colors!</div>');
    }
  };
}
(module.exports = require("marko").c(__filename)).c(create);