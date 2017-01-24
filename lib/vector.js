'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _methods = require('./methods');

var _constants = require('./constants');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector = function () {
  _createClass(Vector, null, [{
    key: 'lerp',
    value: function lerp(from, to) {
      var delta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;


      from = this.toVector(from);
      to = this.toVector(to);

      var x = (0, _methods.lerp)(from.x, to.x, delta);
      var y = (0, _methods.lerp)(from.y, to.y, delta);

      return new Vector(x, y);
    }
  }, {
    key: 'distance',
    value: function distance(from, to) {

      from = this.toVector(from);
      to = this.toVector(to);

      return (0, _methods.sqrt)(this.sqrDistance(from, to));
    }
  }, {
    key: 'sqrDistance',
    value: function sqrDistance(from, to) {

      from = this.toVector(from);
      to = this.toVector(to);

      return from.sub(to).sqrMagnitude;
    }
  }, {
    key: 'dot',
    value: function dot(a, b) {

      a = this.toVector(a);
      a = this.toVector(b);

      var an = a.normalized();
      var bn = b.normalized();

      return an.x * bn.x + an.y * bn.y;
    }
  }, {
    key: 'toVector',
    value: function toVector(input) {

      if (input instanceof Vector) return input;

      //will cast the result of Vector.toString() back to a vector
      //or any string that fits 'x,y'
      if (typeof input === 'string') input = input.replace(/\[|\sVector\]/g, '').split(',').map(function (n) {
        return parseFloat(n);
      });

      //filters an array down to numbers, and a vector will be created
      //out of the first two
      if (input instanceof Array) return new (Function.prototype.bind.apply(Vector, [null].concat(_toConsumableArray(input.filter(function (v) {
        return isFinite(v);
      })))))();

      if (input instanceof Object) return new Vector(input.x, input.y);

      input = parseFloat(input);
      input = isFinite(input) ? input : 0;

      return new Vector(input, input);
    }
  }, {
    key: 'zero',
    get: function get() {
      return new Vector(0, 0);
    }
  }, {
    key: 'up',
    get: function get() {
      return new Vector(0, 1);
    }
  }, {
    key: 'right',
    get: function get() {
      return new Vector(1, 0);
    }
  }, {
    key: 'down',
    get: function get() {
      return new Vector(0, -1);
    }
  }, {
    key: 'left',
    get: function get() {
      return new Vector(-1, 0);
    }
  }]);

  function Vector() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Vector);

    //if there was only a single argument and it isn't a number
    if (arguments.length === 1 && !isFinite(arguments[0])) return Vector.toVector(arguments[0]);

    this.x = isFinite(x) ? x : 0;
    this.y = isFinite(y) ? y : 0;
  }

  _createClass(Vector, [{
    key: 'iadd',
    value: function iadd() {
      var vec = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Vector.zero;

      this.x += vec.x;
      this.y += vec.y;
      return this;
    }
  }, {
    key: 'add',
    value: function add() {
      var vec = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Vector.zero;

      return new Vector(this.x + vec.x, this.y + vec.y);
    }
  }, {
    key: 'isub',
    value: function isub() {
      var vec = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Vector.zero;

      this.x -= vec.x;
      this.y -= vec.y;
      return this;
    }
  }, {
    key: 'sub',
    value: function sub() {
      var vec = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Vector.zero;

      return new Vector(this.x - vec.x, this.y - vec.y);
    }
  }, {
    key: 'imult',
    value: function imult() {
      var factor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      this.x *= factor;
      this.y *= factor;
      return this;
    }
  }, {
    key: 'mult',
    value: function mult() {
      var factor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      return new Vector(this.x * factor, this.y * factor);
    }
  }, {
    key: 'idiv',
    value: function idiv() {
      var factor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      this.x /= factor;
      this.y /= factor;
      return this;
    }
  }, {
    key: 'div',
    value: function div() {
      var factor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      return new Vector(this.x / factor, this.y / factor);
    }
  }, {
    key: 'ilerp',
    value: function ilerp() {
      var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Vector.zero;
      var delta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      this.x = (0, _methods.lerp)(this.x, to.x, delta);
      this.y = (0, _methods.lerp)(this.y, to.y, delta);
      return this;
    }
  }, {
    key: 'lerp',
    value: function lerp() {
      var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Vector.zero;
      var delta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      return Vector.lerp(this, to, delta);
    }
  }, {
    key: 'inormalize',
    value: function inormalize() {
      var mag = this.magnitude;

      if (mag !== 0) {
        this.x /= mag;
        this.y /= mag;
      }

      return this;
    }
  }, {
    key: 'normalize',
    value: function normalize() {
      var mag = this.magnitude;

      return mag === 0 ? Vector.zero : new Vector(this.x / mag, this.y / mag);
    }
  }, {
    key: 'irotate',
    value: function irotate(deg) {
      var rad = deg * _constants.PI / 180;
      var c = (0, _methods.cos)(rad);
      var s = (0, _methods.sin)(rad);

      this.x = this.x * c - this.y * s;
      this.y = this.x * s + this.y * c;

      return this;
    }
  }, {
    key: 'rotate',
    value: function rotate(deg) {
      var rad = deg * _constants.PI / 180;
      var c = (0, _methods.cos)(rad);
      var s = (0, _methods.sin)(rad);

      return new Vector(this.x * c - this.y * s, this.x * s + this.y * c);
    }
  }, {
    key: 'iperpendicular',
    value: function iperpendicular() {

      var x = -this.y;
      var y = this.x;

      this.x = x;
      this.y = y;

      return this.idiv(this.magnitude);
    }
  }, {
    key: 'perpendicular',
    value: function perpendicular() {
      return new Vector(-this.y, this.x).idiv(this.magnitude);
    }
  }, {
    key: 'copy',
    value: function copy() {
      return new Vector(this.x, this.y);
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '[' + this.x + ',' + this.y + ' Vector]';
    }
  }, {
    key: Symbol.iterator,
    value: regeneratorRuntime.mark(function value() {
      return regeneratorRuntime.wrap(function value$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.x;

            case 2:
              _context.next = 4;
              return this.y;

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, value, this);
    })
  }, {
    key: 'angle',
    get: function get() {
      return (0, _methods.atan2)(this.y, this.x) * 180 / _constants.PI;
    }
  }, {
    key: 'magnitude',
    get: function get() {
      return (0, _methods.sqrt)(this.sqrMagnitude);
    }
  }, {
    key: 'sqrMagnitude',
    get: function get() {
      return Math.pow(this.x, 2) + Math.pow(this.y, 2);
    }
  }]);

  return Vector;
}();

exports.default = Vector;