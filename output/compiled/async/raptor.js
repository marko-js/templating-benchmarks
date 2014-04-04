module.exports = function create(helpers) {
  var empty = helpers.e,
      notEmpty = helpers.ne,
      forEach = helpers.f,
      raptor_templates_taglibs_async_async_fragment_tag = require("../../../raptor-templates/taglibs/async/async-fragment-tag"),
      escapeXml = helpers.x;

  return function render(data, context) {
    forEach(data.chars(), function(c) {
      helpers.t(context, 
        raptor_templates_taglibs_async_async_fragment_tag,
        {
          "dataProvider": data.delayRaptor
        },
        function(context,foo) {
          context.w(escapeXml(c));
        });
    });

    context.w(escapeXml(data.reset()));
  };
}