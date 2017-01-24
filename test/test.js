import test from 'ava';
import $ from 'jquery';
import { scrambler, unscrambler } from '../index';

test.before('check test DOM', (t) => {
  const domLength = $('span').length;
  t.falsy(domLength, `test DOM has ${domLength} elements`);
  $('document').add('body');
});

test('scrambler test', (t) => {
  scrambler('peanut butter');
  const text = $('span [hidden=true]').text();
  t.is(text, 'peanut butter', `Instead of peanut butter there is ${text}`);
  t.true($('span').length > text.length, 'scramble text not found');
});

test('unscrambler test', (t) => {
  unscrambler();
  const text = $('span').text();
  t.is(text, 'peanut butter');
});
