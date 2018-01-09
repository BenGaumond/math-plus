import { lerp, cos, sin, sqrt, atan2 } from './methods'

import { PI } from './constants'

/******************************************************************************/
// Helper
/******************************************************************************/

function equalOrNaN (a, b) {
  return a === b || (Number.isNaN(a) && Number.isNaN(b))
}
/******************************************************************************/
// Main
/******************************************************************************/

class Vector {

  static get zero () {
    return new Vector(0, 0)
  }

  static get up () {
    return new Vector(0, 1)
  }

  static get right () {
    return new Vector(1, 0)
  }

  static get down () {
    return new Vector(0, -1)
  }

  static get left () {
    return new Vector(-1, 0)
  }

  static lerp (from, to, delta = 0) {

    from = this.toVector(from)
    to = this.toVector(to)

    const x = lerp(from.x, to.x, delta)
    const y = lerp(from.y, to.y, delta)

    return new Vector(x, y)
  }

  static distance (from, to) {

    from = this.toVector(from)
    to = this.toVector(to)

    return sqrt(this.sqrDistance(from, to))
  }

  static sqrDistance (from, to) {

    from = this.toVector(from)
    to = this.toVector(to)

    return from.sub(to).sqrMagnitude
  }

  static dot (a, b) {

    a = this.toVector(a)
    a = this.toVector(b)

    const an = a.normalized()
    const bn = b.normalized()

    return an.x * bn.x + an.y * bn.y
  }

  static toVector (input) {

    if (input instanceof Vector)
      return input

    // will cast the result of Vector.toString() back to a vector
    // or any string that fits 'x,y'
    if (typeof input === 'string')
      input = input
        .replace(/\[|\sVector\]/g, '')
        .split(',')
        .map(n => parseFloat(n))

    // filters an array down to numbers, and a vector will be created
    // out of the first two
    if (input instanceof Array)
      return new Vector(...input.filter(v => isFinite(v)))

    if (input instanceof Object)
      return new Vector(input.x, input.y)

    input = parseFloat(input)
    input = isFinite(input) ? input : 0

    return new Vector(input, input)
  }

  constructor (x = 0, y = 0) {

    // if there was only a single argument and it isn't a number
    if (arguments.length === 1 && !isFinite(arguments[0]))
      return Vector.toVector(arguments[0])

    this.x = isFinite(x) ? x : 0
    this.y = isFinite(y) ? y : 0
  }

  iadd (vec = Vector.zero) {
    this.x += vec.x
    this.y += vec.y
    return this
  }

  add (vec = Vector.zero) {
    return new Vector(this.x + vec.x, this.y + vec.y)
  }

  isub (vec = Vector.zero) {
    this.x -= vec.x
    this.y -= vec.y
    return this
  }

  sub (vec = Vector.zero) {
    return new Vector(this.x - vec.x, this.y - vec.y)
  }

  imult (factor = 1) {
    this.x *= factor
    this.y *= factor
    return this
  }

  mult (factor = 1) {
    return new Vector(this.x * factor, this.y * factor)
  }

  idiv (factor = 1) {
    this.x /= factor
    this.y /= factor
    return this
  }

  div (factor = 0) {
    return new Vector(this.x / factor, this.y / factor)
  }

  ilerp (to = Vector.zero, delta = 0) {
    this.x = lerp(this.x, to.x, delta)
    this.y = lerp(this.y, to.y, delta)
    return this
  }

  lerp (to = Vector.zero, delta = 0) {
    return Vector.lerp(this, to, delta)
  }

  inormalize () {
    const mag = this.magnitude

    if (mag !== 0) {
      this.x /= mag
      this.y /= mag
    }

    return this
  }

  normalize () {
    const mag = this.magnitude

    return mag === 0
      ? Vector.zero
      : new Vector(this.x / mag, this.y / mag)
  }

  irotate (deg) {
    const rad = deg * PI / 180
    const c = cos(rad)
    const s = sin(rad)

    this.x = this.x * c - this.y * s
    this.y = this.x * s + this.y * c

    return this
  }

  rotate (deg) {
    const rad = deg * PI / 180
    const c = cos(rad)
    const s = sin(rad)

    return new Vector(this.x * c - this.y * s, this.x * s + this.y * c)
  }

  iperpendicular () {

    const x = -this.y
    const y = this.x

    this.x = x
    this.y = y

    return this
      .idiv(this.magnitude)
  }

  perpendicular () {
    return (new Vector(-this.y, this.x))
      .idiv(this.magnitude)
  }

  get angle () {
    return atan2(this.y, this.x) * 180 / PI
  }

  get magnitude () {
    return sqrt(this.sqrMagnitude)
  }

  get sqrMagnitude () {
    return this.x ** 2 + this.y ** 2
  }

  copy () {
    return new Vector(this.x, this.y)
  }

  set (vector) {
    this.x = vector.x
    this.y = vector.y

    return this
  }

  equals (vector) {

    return vector instanceof Vector &&
        equalOrNaN(this.x, vector.x) &&
        equalOrNaN(this.y, vector.y)

  }

  toString () {
    return `[${this.x},${this.y} Vector]`
  }

  * [Symbol.iterator] () {
    yield this.x
    yield this.y
  }

}

/******************************************************************************/
// Exports
/******************************************************************************/

export default Vector
