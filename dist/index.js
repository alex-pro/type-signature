'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var jsdom = require('jsdom');

var _require = require('canvas'),
    registerFont = _require.registerFont,
    createCanvas = _require.createCanvas;

registerFont('./assets/fonts/HomemadeApple-Regular.ttf', { family: 'Homemade Apple' });

var JSDOM = jsdom.JSDOM;
var document = new JSDOM('').window.document;

var TypeSignature = function () {
  function TypeSignature() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Alex Partitsky';

    _classCallCheck(this, TypeSignature);

    this.height = 80;
    this.width = 400;
    this.font = '2em "Homemade Apple"';
    this.text = text;
  }

  _createClass(TypeSignature, [{
    key: 'generateBase64',
    value: function generateBase64() {
      var canvas = createCanvas(this.width, this.height);
      var ctx = canvas.getContext('2d');
      ctx.font = this.font;
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.moveTo(0, 0);
      ctx.fillStyle = 'black';
      ctx.fillText(this.text, 10, canvas.height - 25);

      return canvas.toDataURL();
    }
  }]);

  return TypeSignature;
}();

module.exports = TypeSignature;