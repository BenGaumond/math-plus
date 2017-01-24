
/******************************************************************************/
// Spread from Math Object
/******************************************************************************/

const { abs, acos, acosh, asin, asinh, atan, atan2, atanh, cbrt, ceil, clz32, cos,
  cosh, exp, expm1, floor, fround, hypot, imul, log, log10, log1p, log2, max, min,
  pow, /*random,*/ round, sign, sin, sinh, sqrt, tan, tanh, trunc } = Math

export { abs, acos, acosh, asin, asinh, atan, atan2, atanh, cbrt, ceil, clz32, cos,
  cosh, exp, expm1, floor, fround, hypot, imul, log, log10, log1p, log2, max, min,
  pow, /*random,*/ round, sign, sin, sinh, sqrt, tan, tanh, trunc }

/******************************************************************************/
// Custom Functions
/******************************************************************************/

export function lerp(from, to, delta) {

  return from + delta * (to - from)

}

export function clamp(num, min = 0, max = 1) {

  return num < min ? min : num > max ? max : num

}

/******************************************************************************/
// Overridden functions
/******************************************************************************/

export function random(min, max, step) {

  min = isFinite(min) ? min : 0
  max = isFinite(max) ? max : 1
  step = isFinite(step) ? step : 0

  const value = Math.random() * (max - min) + min

  return step !== 0
    ? round(value / step) * step
    : value
}
