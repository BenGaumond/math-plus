import { random, round, floor, ceil } from '../src'
import { assert } from 'chai'
/* global describe it */

describe('overridden methods', () => {

  describe('random($min, $max, $seed)', () => {

    it('creates random numbers between min and max value', () => {
      for (let i = 0; i < 100000; i++) {
        const result = random(-5, 5)
        assert(result >= -5 && result <= 5, `${result} out of range`)
      }
    })

    it('can be provided a seed as the third argument', () => {

      for (let seed = 0; seed < 100000; seed += 1) {
        const r1 = random(0, 10, seed)
        const r2 = random(0, 10, seed)
        assert(r1 >= 0 && r1 < 10, `${r1} out of range`)
        assert(r1 === r2, `${seed} should provide the same random values, got ${r1} and ${r2}`)
      }

    })

    it('seed can be bound', () => {
      for (let seed = 0; seed < 100000; seed += 1) {
        const r1 = random(0, 10, seed)
        const r2 = seed::random(0, 10)
        assert(r1 >= 0 && r1 < 10, `${r1} out of range`)
        assert(r1 === r2, `${seed} should provide the same random values, got ${r1} and ${r2}`)
      }
    })

  });

  [ round, floor, ceil ].forEach(func => {
    describe(`${func.name}($value, $place)`, () => {

      it('rounds numbers by a specific place value', () => {

        for (let place = 0.125; place < 10; place += 0.75)
          for (let i = 0; i < 10000; i++) {
            const result = func(random(0, 100), place)
            assert(result % place === 0, `${result} is not rounded to ${place}`)
          }
      })

      it('negative place values are ignored', () => {
        const neg = 5.5::func(-2)
        const pos = 5.5::func(2)
        assert(neg === pos, `5.5 ${func.name}ed by -2 should be ${neg}, is ${pos}`)
      })

      it('0 place value has no effect', () => {
        const _in = 5.1234
        const out = func(_in, 0)
        assert(_in === out, `0 place value makes ${_in} === ${out}`)
      })

      it('can be bound', () => {
        const result = 0.75::func(0.5)
        const result2 = func(0.75, 0.5)

        assert(result === result2, `bound value different than regular value: ${result} !== ${result2}`)
      })

    })

  })

})
