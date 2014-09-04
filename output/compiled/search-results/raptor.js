module.exports = function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      escapeXmlAttr = __helpers.xa,
      forEach = __helpers.f,
      attr = __helpers.a;

  return function render(data, context) {
    context.w('<div class="search-results-container"><div class="searching" id="searching"><div class="wait-indicator-icon"></div> Searching...</div><div id="resultsContainer"><div class="hd"><span class="count"><span id="count">' +
      escapeXml(data.totalCount) +
      '</span> results</span><div class="view-modifiers"><div class="view-select">View: <div class="view-icon view-icon-selected" id="viewIconGallery"><i class="icon-th"></i></div><div class="view-icon" id="viewIconList"><i class="icon-th-list"></i></div></div></div></div><div id="resultsTarget"><div class="search-results view-' +
      escapeXmlAttr(data.view) +
      '">');

    forEach(data.searchRecords, function(searchRecord) {
      context.w('<div class="search-item"><div class="search-item-container drop-shadow"><div class="img-container"><img' +
        attr("src", searchRecord.imgUrl) +
        '></div><h4 class="title"><a' +
        attr("href", searchRecord.viewItemUrl) +
        '>' +
        escapeXml(searchRecord.title) +
        '</a></h4>' +
        escapeXml(searchRecord.description));

      if (searchRecord.featured) {
        context.w('<div>Featured!</div>');
      }

      if (notEmpty(searchRecord.sizes)) {
        context.w('<div>Sizes available:<ul>');

        forEach(searchRecord.sizes, function(size) {
          context.w('<li>' +
            escapeXml(size) +
            '</li>');
        });

        context.w('</ul></div>');
      }

      context.w('</div></div>');
    });

    context.w('</div></div></div></div>');
  };
}