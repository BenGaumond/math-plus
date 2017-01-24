'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vector = exports.clamp = exports.lerp = exports.trunc = exports.tanh = exports.tan = exports.sqrt = exports.sinh = exports.sin = exports.sign = exports.round = exports.random = exports.pow = exports.min = exports.max = exports.log2 = exports.log1p = exports.log10 = exports.log = exports.imul = exports.hypot = exports.fround = exports.floor = exports.expm1 = exports.exp = exports.cosh = exports.cos = exports.clz32 = exports.ceil = exports.cbrt = exports.atanh = exports.atan2 = exports.atan = exports.asinh = exports.asin = exports.acosh = exports.acos = exports.abs = exports.SQRT2 = exports.SQRT1_2 = exports.PI = exports.LOG10E = exports.LOG2E = exports.LN10 = exports.LN2 = exports.E = undefined;

var _constants = require('./constants');

var _methods = require('./methods');

var _vector = require('./vector');

var _vector2 = _interopRequireDefault(_vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/******************************************************************************/
// Exports
/******************************************************************************/

exports.E = _constants.E;
exports.LN2 = _constants.LN2;
exports.LN10 = _constants.LN10;
exports.LOG2E = _constants.LOG2E;
exports.LOG10E = _constants.LOG10E;
exports.PI = _constants.PI;
exports.SQRT1_2 = _constants.SQRT1_2;
exports.SQRT2 = _constants.SQRT2;
exports.abs = _methods.abs;
exports.acos = _methods.acos;
exports.acosh = _methods.acosh;
exports.asin = _methods.asin;
exports.asinh = _methods.asinh;
exports.atan = _methods.atan;
exports.atan2 = _methods.atan2;
exports.atanh = _methods.atanh;
exports.cbrt = _methods.cbrt;
exports.ceil = _methods.ceil;
exports.clz32 = _methods.clz32;
exports.cos = _methods.cos;
exports.cosh = _methods.cosh;
exports.exp = _methods.exp;
exports.expm1 = _methods.expm1;
exports.floor = _methods.floor;
exports.fround = _methods.fround;
exports.hypot = _methods.hypot;
exports.imul = _methods.imul;
exports.log = _methods.log;
exports.log10 = _methods.log10;
exports.log1p = _methods.log1p;
exports.log2 = _methods.log2;
exports.max = _methods.max;
exports.min = _methods.min;
exports.pow = _methods.pow;
exports.random = _methods.random;
exports.round = _methods.round;
exports.sign = _methods.sign;
exports.sin = _methods.sin;
exports.sinh = _methods.sinh;
exports.sqrt = _methods.sqrt;
exports.tan = _methods.tan;
exports.tanh = _methods.tanh;
exports.trunc = _methods.trunc;
exports.lerp = _methods.lerp;
exports.clamp = _methods.clamp;
exports.Vector = _vector2.default;