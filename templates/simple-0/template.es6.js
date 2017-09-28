
class BespokeTemplate {
  exec(info) {
    return `Hello {info.name}! <strong>You have {info.messageCount} messages! {info.colors}`;
  }
};

module.exports = new BespokeTemplate();
