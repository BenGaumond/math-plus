
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

  // handles #::lerp(#,#)
  if (typeof this === 'number') {
    delta = to
    to = from
    from = this
  }

  return from + delta * (to - from)

}

export function clamp (...args) {

  let num, min, max

  // handles #::clamp(#,#) while giving proper defaults
  if (typeof this === 'number') {
    ([ min = 0, max = 1 ] = args)
    num = this
  } else
    ([ num, min = 0, max = 1 ] = args)

  return num < min ? min : num > max ? max : num

}

export function isPrime (value) {

  if (typeof this === 'number')
    value = this

  for (let i = 2; i < value; i++)
    if (value % i === 0)
      return false

  return value > 1

}

export function * primes (...args) {

  let min, max

  // If a single argument is provided, it is the max
  if (args.length === 1) {
    ([ max = Infinity ] = args)
    min = 2

  // Otherwise we try to get the min and the max
  } else
    ([ min = 2, max = Infinity ] = args)

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

export function round (...args) {

  let value, place

  // handles #:round(0.25) while preserving defaults
  if (typeof this === 'number') {
    ([ place = 1 ] = args)
    value = this
  } else
    ([ value, place = 1 ] = args)

  return place === 0 ? value : _round(value / place) * place

}

export function floor (...args) {

  let value, place

  // handles #:floor(0.25) while preserving defaults
  if (typeof this === 'number') {
    ([ place = 1 ] = args)
    value = this
  } else
    ([ value, place = 1 ] = args)

  return place === 0 ? value : _floor(value / place) * place

}

export function ceil (...args) {

  let value, place

  // handles #:ceil(0.25) while preserving defaults
  if (typeof this === 'number') {
    ([ place = 1 ] = args)
    value = this
  } else
    ([ value, place = 1 ] = args)

  return place === 0 ? value : _ceil(value / place) * place

}
