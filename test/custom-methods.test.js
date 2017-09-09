import { assert } from 'chai'
import { lerp, clamp, isPrime, primes } from '../src'

/* global describe it */

describe('custom methods', () => {

  describe('lerp($from, $to, $delta)', () => {

    it('lerps a value from $from $to to by $delta: \tlerp(5,10,0.5) === 7.5', () => {
      assert.equal(lerp(5, 10, 0.5), 7.5)
    })

    it('works from hi to low: \t\t\t\tlerp(6,2,0.25) === 5', () => {
      assert.equal(lerp(6, 2, 0.25), 5)
    })

    it('works on negative values: \t\t\tlerp(0, -10, 0.1) === -1', () => {
      assert.equal(lerp(0, -10, 0.1), -1)
    })

    it('$delta is unclamped: \t\t\t\tlerp(-10, 10, 1.5) === 20', () => {
      assert.equal(lerp(-10, 10, 1.5), 20)
    })

    it('$delta is unclamped: \t\t\t\tlerp(-10, 10, 1.5) === 20', () => {
      assert.equal(lerp(-10, 10, 1.5), 20)
    })

    it('can be bound: \t\t\t\t\t10::lerp(0, 0.25) === 0.75', () => {
      assert.equal(10::lerp(0, 0.25), 7.5)
    })

  })

  describe('clamp($num, $min, $max)', () => {

    it('clamps $num between $min and $max: \t\tclamp(5,2,4) === 4', () => {
      assert.equal(clamp(5, 2, 4), 4)
    })

    it('clamps between 0 and 1 by default: \t\tclamp(-1) === 0', () => {
      assert.equal(clamp(-1), 0)
    })

    it('can be bound: \t\t\t\t\t5::clamp(4,6) === 5', () => {
      assert.equal(5::clamp(4, 6), 5)
    })

    it('bound values transfer defaults properly: \t2::clamp() === 1', () => {
      assert.equal(2::clamp(), 1)
    })

  })

  describe('isPrime($value)', () => {

    it('returns true if a number is prime, false otherwise', () => {

      const primes = [ 2, 3, 5, 7, 11, 13, 17 ]
      const subs = [ 1, 4, 6, 8, 9, 10, 12, 14, 15, 16 ]

      for (const prime of primes)
        assert.equal(isPrime(prime), true, `${prime} should be prime`)

      for (const sub of subs)
        assert.equal(isPrime(sub), false, `${sub} should not be prime`)

    })

    it('can be bound:\t\t\t\t\t5::isPrime()', () => {
      assert(5::isPrime(), '5 should be prime')
    })

  })

  describe('*primes($max) -or- *primes($min, $max)', () => {

    it('generates primes: for (const prime of primes(20))', () => {
      for (const prime of primes(20))
        assert(prime::isPrime(), `${prime} is not prime`)
    })

    it('spreads into an array: [...primes(500,1000)]', () => {
      const arr = [...primes(500, 1000)]
      assert.equal(arr.length, 73)
    })

  })

})
