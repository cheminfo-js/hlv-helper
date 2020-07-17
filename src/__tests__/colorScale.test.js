'use strict';

const chroma = require('chroma-js');

const colorScale = require('../colorScale.js');

describe('test colorScale', () => {
  it('test colorScale to be a function', () => {
    let x = [1, 2];
    let cs = colorScale(x, { color: ['red', 'blue'] });
    expect(typeof cs).toBe('function');
  });
  it('test chroma.scale to be a function', () => {
    expect(typeof chroma.scale).toBe('function');
  });
  it('test colorScale(1) to be red', () => {
    let x = [1, 2];
    let cs = colorScale(x, { color: ['red', 'blue'] });
    expect(cs(1)._rgb.toString()).toStrictEqual('255,0,0,1');
  });
  it('test colorScale(2) to be blue', () => {
    let x = [1, 2];
    let cs = colorScale(x, { color: ['red', 'blue'] });
    expect(cs(2)._rgb.toString()).toStrictEqual('0,0,255,1');
  });
  it('test colorScale(2) to be yellow', () => {
    let x = [1, 2, 3, 4];
    let cs = colorScale(x);
    expect(cs(2)._rgb.toString()).toStrictEqual('0,255,255,1');
  });
});

describe('colorscale input test', () => {
  it('wrong method', function () {
    expect(() =>
      colorScale(['1', '2', '3'], { color: ['red', 'blue'] }),
    ).toThrow('colorScale only accepts arrays of number or a range');
  });
});
