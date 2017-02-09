"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trunc = exports.tanh = exports.tan = exports.sqrt = exports.sinh = exports.sin = exports.sign = exports.round = exports.pow = exports.min = exports.max = exports.log2 = exports.log1p = exports.log10 = exports.log = exports.imul = exports.hypot = exports.fround = exports.floor = exports.expm1 = exports.exp = exports.cosh = exports.cos = exports.clz32 = exports.ceil = exports.cbrt = exports.atanh = exports.atan2 = exports.atan = exports.asinh = exports.asin = exports.acosh = exports.acos = exports.abs = undefined;

var _trunc = require("babel-runtime/core-js/math/trunc");

var _trunc2 = _interopRequireDefault(_trunc);

var _tanh = require("babel-runtime/core-js/math/tanh");

var _tanh2 = _interopRequireDefault(_tanh);

var _sinh = require("babel-runtime/core-js/math/sinh");

var _sinh2 = _interopRequireDefault(_sinh);

var _sign = require("babel-runtime/core-js/math/sign");

var _sign2 = _interopRequireDefault(_sign);

var _log = require("babel-runtime/core-js/math/log2");

var _log2 = _interopRequireDefault(_log);

var _log1p = require("babel-runtime/core-js/math/log1p");

var _log1p2 = _interopRequireDefault(_log1p);

var _log3 = require("babel-runtime/core-js/math/log10");

var _log4 = _interopRequireDefault(_log3);

var _imul = require("babel-runtime/core-js/math/imul");

var _imul2 = _interopRequireDefault(_imul);

var _hypot = require("babel-runtime/core-js/math/hypot");

var _hypot2 = _interopRequireDefault(_hypot);

var _fround = require("babel-runtime/core-js/math/fround");

var _fround2 = _interopRequireDefault(_fround);

var _expm = require("babel-runtime/core-js/math/expm1");

var _expm2 = _interopRequireDefault(_expm);

var _cosh = require("babel-runtime/core-js/math/cosh");

var _cosh2 = _interopRequireDefault(_cosh);

var _clz = require("babel-runtime/core-js/math/clz32");

var _clz2 = _interopRequireDefault(_clz);

var _cbrt = require("babel-runtime/core-js/math/cbrt");

var _cbrt2 = _interopRequireDefault(_cbrt);

var _atanh = require("babel-runtime/core-js/math/atanh");

var _atanh2 = _interopRequireDefault(_atanh);

var _asinh = require("babel-runtime/core-js/math/asinh");

var _asinh2 = _interopRequireDefault(_asinh);

var _acosh = require("babel-runtime/core-js/math/acosh");

var _acosh2 = _interopRequireDefault(_acosh);

exports.lerp = lerp;
exports.clamp = clamp;
exports.random = random;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    ceil = Math.ceil,
    clz32 = _clz2.default,
    cos = Math.cos,
    cosh = _cosh2.default,
    exp = Math.exp,
    expm1 = _expm2.default,
    floor = Math.floor,
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
    round = Math.round,
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
exports.ceil = ceil;
exports.clz32 = clz32;
exports.cos = cos;
exports.cosh = cosh;
exports.exp = exp;
exports.expm1 = expm1;
exports.floor = floor;
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
exports.round = round;
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

  return from + delta * (to - from);
}

function clamp(num) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;


  return num < min ? min : num > max ? max : num;
}

/******************************************************************************/
// Overridden functions
/******************************************************************************/

function random(min, max, step) {

  min = isFinite(min) ? min : 0;
  max = isFinite(max) ? max : 1;
  step = isFinite(step) ? step : 0;

  var value = Math.random() * (max - min) + min;

  return step !== 0 ? round(value / step) * step : value;
}