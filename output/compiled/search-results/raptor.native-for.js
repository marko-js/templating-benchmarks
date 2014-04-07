module.exports = function create(helpers) {
  var empty = helpers.e,
      notEmpty = helpers.ne,
      escapeXml = helpers.x,
      escapeXmlAttr = helpers.xa,
      forLoop = helpers.fl,
      attr = helpers.a;

  return function render(data, context) {
    context.w('<div class="search-results-container"><div class="searching" id="searching"><div class="wait-indicator-icon"></div> Searching...</div><div id="resultsContainer"><div class="hd"><span class="count"><span id="count">' +
      escapeXml(data.totalCount) +
      '</span> results</span><div class="view-modifiers"><div class="view-select">View: <div class="view-icon view-icon-selected" id="viewIconGallery"><i class="icon-th"></i></div><div class="view-icon" id="viewIconList"><i class="icon-th-list"></i></div></div></div></div><div id="resultsTarget"><div class="search-results view-' +
      escapeXmlAttr(data.view) +
      '">');

    forLoop(data.searchRecords, function(__array,__index,__length,searchRecord) {
      for (;__index<__length;__index++) {
        searchRecord=__array[__index];

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

          forLoop(searchRecord.sizes, function(__array,__index,__length,size) {
            for (;__index<__length;__index++) {
              size=__array[__index];

              context.w('<li>' +
                escapeXml(size) +
                '</li>');
            }
          });

          context.w('</ul></div>');
        }

        context.w('</div></div>');
      }
    });

    context.w('</div></div></div></div>');
  };
}