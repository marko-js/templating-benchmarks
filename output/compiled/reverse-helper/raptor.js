module.exports = function create(__helpers) {
  var empty = __helpers.e,
      notEmpty = __helpers.ne,
      util = require("../../helpers/util");

  return function render(data, context) {
    context.w((util.reverse(data.A)) +
      (util.reverse(data.B)) +
      (util.reverse(data.C)) +
      (util.reverse(data.D)) +
      (util.reverse(data.E)));
  };
}