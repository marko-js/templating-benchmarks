module.exports = function create(helpers) {
  var empty = helpers.e,
      notEmpty = helpers.ne,
      escapeXml = helpers.x,
      forLoop = helpers.fl;

  return function render(data, context) {
    context.w('Hello ' +
      escapeXml(data.name) +
      '! ');

    if (notEmpty(data.colors)) {
      context.w('<ul>');

      forLoop(data.colors, function(__array,__index,__length,color) {
        for (;__index<__length;__index++) {
          color=__array[__index];

          context.w('<li class="color">' +
            escapeXml(color) +
            '</li>');
        }
      });

      context.w('</ul>');
    }
    else {
      context.w('<div>No colors!</div>');
    }
  };
}