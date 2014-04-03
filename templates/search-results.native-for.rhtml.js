module.exports = function create(helpers) {
  var empty = helpers.e,
      notEmpty = helpers.ne,
      escapeXml = helpers.x,
      escapeXmlAttr = helpers.xa,
      forLoop = helpers.fl;

  return function render(data, context) {
    context.w('<div class="search-results-container"><div class="searching" id="searching"><div class="wait-indicator-icon"></div> Searching...</div><div id="resultsContainer"><div class="hd"><span class="count"><span id="count">')
      .w(escapeXml(data.totalCount))
      .w('</span> results</span><div class="view-modifiers"><div class="view-select">View: <div class="view-icon view-icon-selected" id="viewIconGallery"><i class="icon-th"></i></div><div class="view-icon" id="viewIconList"><i class="icon-th-list"></i></div></div></div></div><div id="resultsTarget"><div class="search-results view-')
      .w(escapeXmlAttr(data.view))
      .w('">');

    forLoop(data.searchRecords, function(__array,__index,__length,searchRecord) {
      for (;__index<__length;__index++) {
        searchRecord=__array[__index];

        context.w('<div class="search-item"><div class="search-item-container drop-shadow"><div class="img-container"><img');
        helpers.a(context, "src", searchRecord.imgUrl);

        context.w('></div><h4 class="title"><a');
        helpers.a(context, "href", searchRecord.viewItemUrl);

        context.w('>')
          .w(escapeXml(searchRecord.title))
          .w('</a></h4>')
          .w(escapeXml(searchRecord.description));

        if (searchRecord.featured) {
          context.w('<div>Featured!</div>');
        }

        if (notEmpty(searchRecord.sizes)) {
          context.w('<div>Sizes available:<ul>');

          forLoop(searchRecord.sizes, function(__array,__index,__length,size) {
            for (;__index<__length;__index++) {
              size=__array[__index];

              context.w('<li>')
                .w(escapeXml(size))
                .w('</li>');
            }

            context.w('<li>')
              .w(escapeXml(size))
              .w('</li>');
          });

          context.w('</ul></div>');
        }

        context.w('</div></div>');
      }

      context.w('<div class="search-item"><div class="search-item-container drop-shadow"><div class="img-container"><img');
      helpers.a(context, "src", searchRecord.imgUrl);

      context.w('></div><h4 class="title"><a');
      helpers.a(context, "href", searchRecord.viewItemUrl);

      context.w('>')
        .w(escapeXml(searchRecord.title))
        .w('</a></h4>')
        .w(escapeXml(searchRecord.description));

      if (searchRecord.featured) {
        context.w('<div>Featured!</div>');
      }

      if (notEmpty(searchRecord.sizes)) {
        context.w('<div>Sizes available:<ul>');

        forLoop(searchRecord.sizes, function(__array,__index,__length,size) {
          for (;__index<__length;__index++) {
            size=__array[__index];

            context.w('<li>')
              .w(escapeXml(size))
              .w('</li>');
          }

          context.w('<li>')
            .w(escapeXml(size))
            .w('</li>');
        });

        context.w('</ul></div>');
      }

      context.w('</div></div>');
    });

    context.w('</div></div></div></div>');
  };
}