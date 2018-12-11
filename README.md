# luoji

> luoji means logic in Chinese.

## Install

```bash
npm i luoji
```

## Usage

```javascript
import {and, or, not, assert} from 'luoji'

and(
  true,
  [1, '==', 1]
)
// true

or(
  true,
  [1, '===', 2]
)
// true

not(false)
// true


// Mix it up!
and(
  not(false),
  or(
    assert([1, '===', 1]),
    false
  )
)
// true
```

## API

with

```javascript
Assertion = boolean | [left, Comparation, right]

enum Comparation {
  '==',
  '===',
  '!=',
  '!==',
  '<',
  '>',
  '<=',
  '>=',
}
```

### and

and(Assertion, ...)

return true if all assertions are true, otherwise false.

### or

or(Assertion, ...)

return false if all assertions are false, otherwise true.

### not

not(Assertion)

return false if assertion is true, true if assertion is false

### assert

assert(Assertion)

get the result of assertion

## License

MIT