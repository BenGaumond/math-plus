import { random, pow, abs, acos, acosh, asin, asinh, atan, atanh,
  cbrt, clz32, cos, cosh, exp, expm1, fround, log, log10, log1p, log2, sign, sin,
  sinh, sqrt, tan, tanh, trunc } from '../src'

import { assert } from 'chai'

/******************************************************************************/
// Data
/******************************************************************************/

/* global describe it */

const methods = [ pow, abs, acos, acosh, asin, asinh, atan, atanh,
  cbrt, clz32, cos, cosh, exp, expm1, fround, log, log10, log1p, log2, sign, sin,
  sinh, sqrt, tan, tanh, trunc ]

describe('bindable methods', () => {

  methods.forEach(method => {
    it(`${method.name}($value)`, () => {
      for (let i = 0; i < 10000; i++) {
        const value = random(-100, 100)

        const r1 = (value)::method()
        const r2 = method(value)
        assert(r1 === r2 || (Number.isNaN(r1) && Number.isNaN(r2)), `${method.name}(${value}) !== ${value}::${method.name}(), ${r1} !== ${r2}`)
      }
    })
  })

})
