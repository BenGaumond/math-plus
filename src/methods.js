
/******************************************************************************/
// Spread from Math Object
/******************************************************************************/

const { abs, acos, acosh, asin, asinh, atan, atan2, atanh, cbrt, ceil: _ceil, clz32, cos,
  cosh, exp, expm1, floor: _floor, fround, hypot, imul, log, log10, log1p, log2, max, min,
  pow, random: _random, round: _round, sign, sin, sinh, sqrt, tan, tanh, trunc } = Math

export { abs, acos, acosh, asin, asinh, atan, atan2, atanh, cbrt, clz32, cos,
  cosh, exp, expm1, fround, hypot, imul, log, log10, log1p, log2, max, min,
  pow, sign, sin, sinh, sqrt, tan, tanh, trunc }

/******************************************************************************/
// Custom Functions
/******************************************************************************/

export function lerp (from, to, delta) {

  return from + delta * (to - from)

}

export function clamp (num, min = 0, max = 1) {

  return num < min ? min : num > max ? max : num

}

export function isPrime (value) {

  for (let i = 2; i < value; i++)
    if (value % i === 0)
      return false

  return value > 1

}

export function * primes (...args) {

  const [ min = 2, max = Infinity ] = args.length >= 2
    ? args
    : [2, ...args]

  for (let i = min; i < max; i++)
    if (isPrime(i))
      yield i

}

/******************************************************************************/
// Overridden functions
/******************************************************************************/

export function random (min = 0, max = 1, place = 0) {

  const value = _random() * (max - min) + min

  return round(value, place)
}

export function round (value, place = 1) {

  return place === 0 ? value : _round(value / place) * place

}

export function floor (value, place = 1) {

  return place === 0 ? value : _floor(value / place) * place

}

export function ceil (value, place = 1) {

  return place === 0 ? value : _ceil(value / place) * place

}
