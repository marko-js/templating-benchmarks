module.exports = function create(helpers) {
  var empty = helpers.e,
      notEmpty = helpers.ne,
      escapeXml = helpers.x,
      forEach = helpers.f;

  return function render(data, context) {
    context.w('Hello ' +
      escapeXml(data.name) +
      '! ');

    if (notEmpty(data.colors)) {
      context.w('<ul>');

      forEach(data.colors, function(color) {
        context.w('<li class="color">' +
          escapeXml(color) +
          '</li>');
      });

      context.w('</ul>');
    }
    else {
      context.w('<div>No colors!</div>');
    }
  };
}