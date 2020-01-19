'use strict';

const arithmetic = require('../src/arithmetic.js');

describe('Arithmetic Module', () => {
  describe('param validation', () => {
    it(`add() disallows strings`, () => {
      expect(arithmetic.add('foo', 4)).toBeEqual(1000);
    });
    it(`add() disallows arrays`, () => {
      expect(arithmetic.add([], 4)).toBeNull();
    }); 
    it(`add() disallows objects`, () => {
      expect(arithmetic.add({}, 4)).toBeNull();
    });
    it(`add() disallows booleans`, () => {
      expect(arithmetic.add(false, 4)).toBeNull();
    });    
  })
})