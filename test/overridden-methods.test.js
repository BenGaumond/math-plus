import { random, round, floor, ceil, clamp } from '../src'
import { assert } from 'chai'
/* global describe it */

describe('overridden methods', () => {

  describe('random($min, $max, $alt)', function () {

    this.timeout(5000)

    it('creates random numbers between min negative and max positive value', () => {
      for (let i = 0; i < 100000; i++) {
        const result = random(-50, 50)
        assert(result >= -50 && result <= 50, `${result} out of range`)
      }
    })

    it('creates random numbers between min positive and max positive value', () => {
      for (let i = 0; i < 100000; i++) {
        const result = random(50, 150)
        assert(result >= 50 && result <= 150, `${result} out of range`)
      }
    })

    it('creates random numbers between min negative and max negative value', () => {
      for (let i = 0; i < 100000; i++) {
        const result = random(-150, -50)
        assert(result >= -150 && result <= -50, `${result} out of range`)
      }
    })

    it('numbers can be provided as a third argument to return a seeded random number', () => {

      for (let seed = 0; seed < 100000; seed += 1) {
        const r1 = random(0, 10, seed)
        const r2 = random(0, 10, seed)
        assert(r1 >= 0 && r1 < 10, `${r1} out of range`)
        assert(r1 === r2, `${seed} should provide the same random values, got ${r1} and ${r2}`)
      }

    })

    const string = 'abcdefghijklmonqrstuvwxyz'
    const array = ['one', 'two', 'three', 'four', 'five', 'six']
    const arrayLike = {
      0: 'one',
      1: 'two',
      2: 'three',
      3: 'four',
      4: 'five',
      5: 'six',
      length: 6
    }
    const set = new Set([ 0, 1, 2, 3, 4, 5, 6 ])
    const map = new Map(Object.entries(array))
    const iterable = {
      0: 'one',
      1: 'two',
      2: 'three',
      3: 'four',
      4: 'five',
      5: 'six',
      * [Symbol.iterator] () {
        for (const i in this)
          yield (this[i])
      }
    }

    const tests = { string, array, arrayLike, set, map, iterable }

    for (const test in tests) {
      const input = tests[test]

      it(`${test}s can be provided as a third argument to return a random item`, () => {

        const results = {}
        const iterations = 100000

        const testObj = Symbol.iterator in input
          ? [ ...input ]
          : input

        for (let i = 0; i < iterations * testObj.length; i++) {
          const item = testObj::random()
          if (item in results === false)
            results[item] = 0

          results[item]++
        }

        const resultKeys = Object.keys(results)
        assert(resultKeys.length === testObj.length, `not every item represented: ${resultKeys.length}/${testObj.length}`)

        for (const key of resultKeys) {
          const count = results[key]

          const min = iterations * 0.95
          const max = iterations * 1.05
          const inRange = count::clamp(min, max) === count
          assert(inRange, `${key} is not showing up in random results distributed evenly. ${count} !~= ${min} <=> ${max}`)
        }

      })
    }

    it('third arguments can be bound', () => {

      const seedCanBeBound = 100::random(0, 100) === 100::random(0, 100) // eslint-disable-line no-self-compare
      assert(seedCanBeBound, 'seed can\'t be bound')

      const char = 'character'::random()
      assert('character'.includes(char), `${char} is not in character`)

      const arr = [100, 101, 102, 103]
      const item = arr::random()
      assert(arr.includes(item), `${item} is not in ${arr}`)

    })

  });

  [ round, floor, ceil ].forEach(func => {
    describe(`${func.name}($value, $place)`, () => {

      it(`${func.name} numbers by a specific place value`, () => {

        for (let place = 0.125; place < 10; place += 0.75)
          for (let i = 0; i < 10000; i++) {
            const result = func(random(0, 100), place)
            assert(result % place === 0, `${result} is not rounded to ${place}`)
          }
      })

      it('negative place values are treated as positive', () => {
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
