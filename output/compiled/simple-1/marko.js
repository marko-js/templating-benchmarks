module.exports = function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      forEach = __helpers.f;

  return function render(data, out) {
    out.s('Hello ' +
      escapeXml(data.name) +
      '! ');

    if (notEmpty(data.colors)) {
      out.s('<ul>');

      forEach(data.colors, function(color) {
        out.s('<li class="color">' +
          escapeXml(color) +
          '</li>');
      });

      out.s('</ul>');
    }
    else {
      out.s('<div>No colors!</div>');
    }
  };
}