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

## Added Features

Currently, the ```random()``` method is overridden to take up to three parameters:
*min, max and step*.

```js
import { random } from 'math-plus'

random(2, 5, 1/4) // random value between 2 and 5, rounded to the nearest 0.125
```

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

And a 2D ```Vector``` class, which is pretty fully featured.

I will add further documentation as the package matures.
