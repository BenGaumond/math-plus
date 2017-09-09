'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trunc = exports.tanh = exports.tan = exports.sqrt = exports.sinh = exports.sin = exports.sign = exports.pow = exports.min = exports.max = exports.log2 = exports.log1p = exports.log10 = exports.log = exports.imul = exports.hypot = exports.fround = exports.expm1 = exports.exp = exports.cosh = exports.cos = exports.clz32 = exports.cbrt = exports.atanh = exports.atan2 = exports.atan = exports.asinh = exports.asin = exports.acosh = exports.acos = exports.abs = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _trunc = require('babel-runtime/core-js/math/trunc');

var _trunc2 = _interopRequireDefault(_trunc);

var _tanh = require('babel-runtime/core-js/math/tanh');

var _tanh2 = _interopRequireDefault(_tanh);

var _sinh = require('babel-runtime/core-js/math/sinh');

var _sinh2 = _interopRequireDefault(_sinh);

var _sign = require('babel-runtime/core-js/math/sign');

var _sign2 = _interopRequireDefault(_sign);

var _log = require('babel-runtime/core-js/math/log2');

var _log2 = _interopRequireDefault(_log);

var _log1p = require('babel-runtime/core-js/math/log1p');

var _log1p2 = _interopRequireDefault(_log1p);

var _log3 = require('babel-runtime/core-js/math/log10');

var _log4 = _interopRequireDefault(_log3);

var _imul = require('babel-runtime/core-js/math/imul');

var _imul2 = _interopRequireDefault(_imul);

var _hypot = require('babel-runtime/core-js/math/hypot');

var _hypot2 = _interopRequireDefault(_hypot);

var _fround = require('babel-runtime/core-js/math/fround');

var _fround2 = _interopRequireDefault(_fround);

var _expm = require('babel-runtime/core-js/math/expm1');

var _expm2 = _interopRequireDefault(_expm);

var _cosh = require('babel-runtime/core-js/math/cosh');

var _cosh2 = _interopRequireDefault(_cosh);

var _clz = require('babel-runtime/core-js/math/clz32');

var _clz2 = _interopRequireDefault(_clz);

var _cbrt = require('babel-runtime/core-js/math/cbrt');

var _cbrt2 = _interopRequireDefault(_cbrt);

var _atanh = require('babel-runtime/core-js/math/atanh');

var _atanh2 = _interopRequireDefault(_atanh);

var _asinh = require('babel-runtime/core-js/math/asinh');

var _asinh2 = _interopRequireDefault(_asinh);

var _acosh = require('babel-runtime/core-js/math/acosh');

var _acosh2 = _interopRequireDefault(_acosh);

exports.lerp = lerp;
exports.clamp = clamp;
exports.isPrime = isPrime;
exports.primes = primes;
exports.random = random;
exports.round = round;
exports.floor = floor;
exports.ceil = ceil;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(primes);

/******************************************************************************/
// Spread from Math Object
/******************************************************************************/

var abs = Math.abs,
    acos = Math.acos,
    acosh = _acosh2.default,
    asin = Math.asin,
    asinh = _asinh2.default,
    atan = Math.atan,
    atan2 = Math.atan2,
    atanh = _atanh2.default,
    cbrt = _cbrt2.default,
    _ceil = Math.ceil,
    clz32 = _clz2.default,
    cos = Math.cos,
    cosh = _cosh2.default,
    exp = Math.exp,
    expm1 = _expm2.default,
    _floor = Math.floor,
    fround = _fround2.default,
    hypot = _hypot2.default,
    imul = _imul2.default,
    log = Math.log,
    log10 = _log4.default,
    log1p = _log1p2.default,
    log2 = _log2.default,
    max = Math.max,
    min = Math.min,
    pow = Math.pow,
    _random = Math.random,
    _round = Math.round,
    sign = _sign2.default,
    sin = Math.sin,
    sinh = _sinh2.default,
    sqrt = Math.sqrt,
    tan = Math.tan,
    tanh = _tanh2.default,
    trunc = _trunc2.default;
exports.abs = abs;
exports.acos = acos;
exports.acosh = acosh;
exports.asin = asin;
exports.asinh = asinh;
exports.atan = atan;
exports.atan2 = atan2;
exports.atanh = atanh;
exports.cbrt = cbrt;
exports.clz32 = clz32;
exports.cos = cos;
exports.cosh = cosh;
exports.exp = exp;
exports.expm1 = expm1;
exports.fround = fround;
exports.hypot = hypot;
exports.imul = imul;
exports.log = log;
exports.log10 = log10;
exports.log1p = log1p;
exports.log2 = log2;
exports.max = max;
exports.min = min;
exports.pow = pow;
exports.sign = sign;
exports.sin = sin;
exports.sinh = sinh;
exports.sqrt = sqrt;
exports.tan = tan;
exports.tanh = tanh;
exports.trunc = trunc;

/******************************************************************************/
// Custom Functions
/******************************************************************************/

function lerp(from, to, delta) {

  // handles #::lerp(#,#)
  if (typeof this === 'number') {
    delta = to;
    to = from;
    from = this;
  }

  return from + delta * (to - from);
}

function clamp() {

  var num = void 0,
      min = void 0,
      max = void 0;

  // handles #::clamp(#,#) while giving proper defaults

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (typeof this === 'number') {
    var _args$ = args[0];
    min = _args$ === undefined ? 0 : _args$;
    var _args$2 = args[1];
    max = _args$2 === undefined ? 1 : _args$2;

    num = this;
  } else {
    ;

    num = args[0];
    var _args$3 = args[1];
    min = _args$3 === undefined ? 0 : _args$3;
    var _args$4 = args[2];
    max = _args$4 === undefined ? 1 : _args$4;
  }return num < min ? min : num > max ? max : num;
}

function isPrime(value) {

  if (typeof this === 'number') value = this;

  for (var i = 2; i < value; i++) {
    if (value % i === 0) return false;
  }return value > 1;
}

function primes() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var min, max, _args$5, _args$6, _args$7, i;

  return _regenerator2.default.wrap(function primes$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          min = void 0, max = void 0;

          // If a single argument is provided, it is the max

          if (args.length === 1) {
            _args$5 = args[0];
            max = _args$5 === undefined ? Infinity : _args$5;

            min = 2;

            // Otherwise we try to get the min and the max
          } else {
            ;

            _args$6 = args[0];
            min = _args$6 === undefined ? 2 : _args$6;
            _args$7 = args[1];
            max = _args$7 === undefined ? Infinity : _args$7;
          }i = min;

        case 3:
          if (!(i < max)) {
            _context.next = 10;
            break;
          }

          if (!isPrime(i)) {
            _context.next = 7;
            break;
          }

          _context.next = 7;
          return i;

        case 7:
          i++;
          _context.next = 3;
          break;

        case 10:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

/******************************************************************************/
// Overridden functions
/******************************************************************************/

function random() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var place = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;


  var value = _random() * (max - min) + min;

  return round(value, place);
}

function round() {

  var value = void 0,
      place = void 0;

  // handles #:round(0.25) while preserving defaults

  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  if (typeof this === 'number') {
    var _args$8 = args[0];
    place = _args$8 === undefined ? 1 : _args$8;

    value = this;
  } else {
    ;

    value = args[0];
    var _args$9 = args[1];
    place = _args$9 === undefined ? 1 : _args$9;
  }return place === 0 ? value : _round(value / place) * place;
}

function floor() {

  var value = void 0,
      place = void 0;

  // handles #:floor(0.25) while preserving defaults

  for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  if (typeof this === 'number') {
    var _args$10 = args[0];
    place = _args$10 === undefined ? 1 : _args$10;

    value = this;
  } else {
    ;

    value = args[0];
    var _args$11 = args[1];
    place = _args$11 === undefined ? 1 : _args$11;
  }return place === 0 ? value : _floor(value / place) * place;
}

function ceil() {

  var value = void 0,
      place = void 0;

  // handles #:ceil(0.25) while preserving defaults

  for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  if (typeof this === 'number') {
    var _args$12 = args[0];
    place = _args$12 === undefined ? 1 : _args$12;

    value = this;
  } else {
    ;

    value = args[0];
    var _args$13 = args[1];
    place = _args$13 === undefined ? 1 : _args$13;
  }return place === 0 ? value : _ceil(value / place) * place;
}