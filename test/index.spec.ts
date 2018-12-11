import test from 'tape'
import {
  and,
  or,
  not,
  assert
} from '../src/index'

test('assert true', function(t) {
  t.equal(assert(true), true)

  t.end()
})

test('true and false = false', function(t) {
  t.equal(and(
    true,
    [1, '===', '1']
  ), false)

  t.end()
})

test('true and true = true', function(t) {
  t.equal(and(
    true,
    [1, '==', 1]
  ), true)

  t.end()
})

test('false and true = false', function(t) {
  t.equal(and(
    false,
    [1, '==', 1]
  ), false)

  t.end()
})

test('false and false = false', function(t) {
  t.equal(and(
    false,
    [1, '==', 2]
  ), false)

  t.end()
})

test('true or true = true', function(t) {
  t.equal(or(
    true,
    [1, '==', 1]
  ), true)

  t.end()
})

test('false or true = true', function(t) {
  t.equal(or(
    false,
    [1, '==', 1]
  ), true)

  t.end()
})

test('false or false = false', function(t) {
  t.equal(or(
    false,
    [1, '==', 2]
  ), false)

  t.end()
})

test('not false = true', function(t) {
  t.equal(not(false), true)

  t.end()
})