const INTERNAL_ASSERTION:{[key in keyof typeof Comparation]:(a:any, b:any)=>boolean} = {
  '==': function(a, b) {
    return a == b
  },
  '===': function(a, b) {
    return a === b
  },
  '!=': function(a, b) {
    return a != b
  },
  '!==': function(a, b) {
    return a !== b
  },
  '<': function(a, b) {
    return a < b
  },
  '>': function(a, b) {
    return a > b
  },
  '<=': function(a, b) {
    return a <= b
  },
  '>=': function(a, b) {
    return a >= b
  },
}

export enum Comparation {
  '==',
  '===',
  '!=',
  '!==',
  '<',
  '>',
  '<=',
  '>=',
}

export type Assertion = boolean
  | [any, keyof typeof Comparation, any]

export function assert(assertion:Assertion):boolean {
  if (typeof assertion === 'boolean') {
    return assertion
  } else if (Array.isArray(assertion)) {
    const [lvalue, op, rvalue] = assertion
    return INTERNAL_ASSERTION[op] && INTERNAL_ASSERTION[op](lvalue, rvalue)
  }
  return false
}

export function and(...args:Assertion[]):boolean {
  return args.every(arg => assert(arg))
}

export function or(...args:Assertion[]):boolean {
  return args.some(arg => assert(arg))
}

export function not(assertion:Assertion):boolean {
  return !assertion
}

export default {
  and,
  or,
  not,
  assert
}