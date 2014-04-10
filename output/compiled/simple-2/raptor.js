module.exports = function create(__helpers) {
  var empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      forEach = __helpers.f;

  return function render(data, context) {
    context.w('<div><h1 class="header">' +
      escapeXml(data.header) +
      '</h1><h2 class="header2">' +
      escapeXml(data.header2) +
      '</h2><h3 class="header3">' +
      escapeXml(data.header3) +
      '</h3><h4 class="header4">' +
      escapeXml(data.header4) +
      '</h4><h5 class="header5">' +
      escapeXml(data.header5) +
      '</h5><h6 class="header6">' +
      escapeXml(data.header6) +
      '</h6><ul class="list">');

    forEach(data.list, function(item) {
      context.w('<li class="item">' +
        escapeXml(item) +
        '</li>');
    });

    context.w('</ul></div>');
  };
}