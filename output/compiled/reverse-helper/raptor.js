module.exports = function create(helpers) {
  var empty = helpers.e,
      notEmpty = helpers.ne,
      util = require("../../helpers/util");

  return function render(data, context) {
    context.w(util.reverse(data.A))
      .w(util.reverse(data.B))
      .w(util.reverse(data.C))
      .w(util.reverse(data.D))
      .w(util.reverse(data.E));
  };
}