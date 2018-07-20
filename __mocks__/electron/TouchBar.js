const TouchBarButton = require('./TouchBarButton')


class TouchBar {
  static TouchBarButton = TouchBarButton

  constructor(buttons) {
    this.buttons = buttons
  }
}

module.exports = TouchBar
