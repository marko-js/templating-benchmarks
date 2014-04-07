module.exports = function create(helpers) {
  var empty = helpers.e,
      notEmpty = helpers.ne,
      forEach = helpers.f,
      attr = helpers.a,
      escapeXml = helpers.x;

  return function render(data, context) {
    forEach(data.accounts, function(account) {
      context.w('<div>');

      if (account.accountStatus === 'closed') {
        context.w('<div>Your account has been closed!</div>');
      }
      else if (account.accountStatus === 'suspended') {
        context.w('<div>Your account has been temporarily suspended</div>');
      }
      else {
        context.w('<div>Bank balance: <span' +
          attr("class", (account.balance<0 ? "negative" : "positive")) +
          '>' +
          escapeXml(account.formattedBalance) +
          '</span></div>');
      }

      context.w('</div>');
    });
  };
}