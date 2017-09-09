# Math Plus
____

## Why

There are dozens of math libraries out there. Why use this one?

No good reason, personal preference. It's a lightweight Math library that extends
the standard Math object with some overridden functionality, added methods and classes.

## Usage

The main reason I use this package is because I like the rest/spread syntax in
es6.

Rather than this:

```js
const { random, floor, ceil } = Math
```

I can do this:
```js
import { random, floor, ceil } from 'math-plus'
```

## Overridden Methods

The ```round()```, ```floor()``` and ```ceil()``` methods is overridden to take a second parameter
*place*.

```js
import { round, ceil, floor } from 'math-plus'

round(10.575, 0.1) // rounds to the nearest 0.1 = 10.6
ceil(109.10, 10) // ceil to the nearest 10 = 110
floor(86.5, 100) // floor to the nearest 100 = 0
```


The ```random()``` method is overridden to take up to three parameters:
*min, max and place*.

```js
import { random } from 'math-plus'

random(2, 5, 1/4) // random value between 2 and 5, rounded to the nearest 0.125
```


## Added Methods

The ```lerp()``` method, which interpolates one value to another:

```js
import { lerp } from 'math-plus'

//lerp(from, to, interpolator)
lerp(5, 10, 0.5) // 7.5
lerp(2, 1, 0.5) // 1.5
lerp(3, 6, 2) // 9
```


The ```clamp()``` method, which is self explanatory

```js
import { clamp } from 'math-plus'

//clamp(value, min = 0, max = 1)
clamp(2) // 1
clamp(0, 1, 2) // 1
```

The ```isPrime()``` method, also self explanatory

```js
import { isPrime } from 'math-plus'

//isPrime(value)
isPrime(5) // true
isPrime(4) // false
```

The ```primes()``` method, which returns a generator that iterates prime numbers

```js
import { primes } from 'math-plus'

const to10 = [...primes(9)] // [2,3,5,7,9]

for (const prime of primes(50, 100))
  console.log(prime) //logs every prime between 50 and 100
```

# bind operator ``:``

I don't know if you have heard of the bind operator, but I LOVE the bind operator.
Read more here: https://babeljs.io/docs/plugins/transform-function-bind/
Where-ever prudent, the overridden and custom methods allow numbers to be bound
to them:

```js

// Bindable methods:
import { round, ceil, floor, lerp, clamp, isPrime } from 'math-plus'

10.4::round() //10
5.15::floor(0.1) // 5.1
6.625::ceil(0.25) // 6.75

5::lerp(10, 0.5) // 7.5
3::clamp() // 1

5::isPrime() // true

```

And a 2D ```Vector``` class, which is pretty fully featured.

I will add further documentation as the package matures.
