function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      util = require("../../helpers/util");

  return function render(data, out) {
    out.w(str(util.reverse(data.A)) +
      str(util.reverse(data.B)) +
      str(util.reverse(data.C)) +
      str(util.reverse(data.D)) +
      str(util.reverse(data.E)));
  };
}
(module.exports = require("marko").c(__filename)).c(create);