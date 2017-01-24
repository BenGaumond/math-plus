"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lerp = lerp;
exports.clamp = clamp;
exports.random = random;

/******************************************************************************/
// Spread from Math Object
/******************************************************************************/

var abs = Math.abs,
    acos = Math.acos,
    acosh = Math.acosh,
    asin = Math.asin,
    asinh = Math.asinh,
    atan = Math.atan,
    atan2 = Math.atan2,
    atanh = Math.atanh,
    cbrt = Math.cbrt,
    ceil = Math.ceil,
    clz32 = Math.clz32,
    cos = Math.cos,
    cosh = Math.cosh,
    exp = Math.exp,
    expm1 = Math.expm1,
    floor = Math.floor,
    fround = Math.fround,
    hypot = Math.hypot,
    imul = Math.imul,
    log = Math.log,
    log10 = Math.log10,
    log1p = Math.log1p,
    log2 = Math.log2,
    max = Math.max,
    min = Math.min,
    pow = Math.pow,
    round = Math.round,
    sign = Math.sign,
    sin = Math.sin,
    sinh = Math.sinh,
    sqrt = Math.sqrt,
    tan = Math.tan,
    tanh = Math.tanh,
    trunc = Math.trunc;
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