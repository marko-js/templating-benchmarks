module.exports = function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      forLoop = __helpers.fl;

  return function render(data, out) {
    out.s('Hello ' +
      escapeXml(data.name) +
      '! ');

    if (notEmpty(data.colors)) {
      out.s('<ul>');

      forLoop(data.colors, function(__array,__index,__length,color) {
        for (;__index<__length;__index++) {
          color=__array[__index];

          out.s('<li class="color">' +
            escapeXml(color) +
            '</li>');
        }
      });

      out.s('</ul>');
    }
    else {
      out.s('<div>No colors!</div>');
    }
  };
}