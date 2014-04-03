module.exports = function create(helpers) {
  var empty = helpers.e,
      notEmpty = helpers.ne,
      escapeXml = helpers.x,
      forEach = helpers.f;

  return function render(data, context) {
    context.w('<div><h1 class="header">')
      .w(escapeXml(data.header))
      .w('</h1><h2 class="header2">')
      .w(escapeXml(data.header2))
      .w('</h2><h3 class="header3">')
      .w(escapeXml(data.header3))
      .w('</h3><h4 class="header4">')
      .w(escapeXml(data.header4))
      .w('</h4><h5 class="header5">')
      .w(escapeXml(data.header5))
      .w('</h5><h6 class="header6">')
      .w(escapeXml(data.header6))
      .w('</h6><ul class="list">');

    forEach(data.list, function(item) {
      context.w('<li class="item">')
        .w(escapeXml(item))
        .w('</li>');
    });

    context.w('</ul></div>');
  };
}