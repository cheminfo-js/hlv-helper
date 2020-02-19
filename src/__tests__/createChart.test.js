'use strict';

const createChart = require('../createChart.js');

describe('test createChart', () => {
  it('test chart title', () => {
    let x = [1, 2];
    let y = [2, 3];
    let type = 'scatter';
    let options = [];
    let chart = createChart(x, y, type, options);
    expect(chart.title).toBe('my plot');
  });
  it('test chart x length', () => {
    let x = [1, 2];
    let y = [2, 3];
    let type = 'scatter';
    let options = [];
    let chart = createChart(x, y, type, options);
    expect(chart.data[0].x).toHaveLength(2);
  });
  it('test chart y length', () => {
    let x = [1, 2];
    let y = [2, 3];
    let type = 'scatter';
    let options = [];
    let chart = createChart(x, y, type, options);
    expect(chart.data[0].y).toHaveLength(2);
  });
  it('test chart styles unselected length', () => {
    let x = [1, 2];
    let y = [2, 3];
    let type = 'scatter';
    let options = [];
    let chart = createChart(x, y, type, options);
    expect(chart.data[0].styles.unselected).toHaveLength(2);
  });
  it('test chart styles selected length', () => {
    let x = [1, 2];
    let y = [2, 3];
    let type = 'scatter';
    let options = [];
    let chart = createChart(x, y, type, options);
    expect(chart.data[0].styles.selected).toHaveLength(2);
  });
  it('test chart default unselected color', () => {
    let x = [1, 2];
    let y = [2, 3];
    let type = 'scatter';
    let options = [];
    let chart = createChart(x, y, type, options);
    let unselected = chart.data[0].styles.unselected;
    expect(unselected.map((e) => e.fill)).toStrictEqual([
      'rgba(118,166,124,1)',
      'rgba(118,166,124,1)',
    ]);
  });

  it('test chart passed color 1', () => {
    let x = [1, 2];
    let y = [2, 3];
    let type = 'scatter';
    let options = [];
    options.color = ['rgba(118,166,124,0)', 'rgba(118,166,123,0)'];
    let chart = createChart(x, y, type, options);
    let unselected = chart.data[0].styles.unselected;
    expect(unselected.map((e) => e.fill)).toStrictEqual([
      'rgba(118,166,124,0)',
      'rgba(118,166,123,0)',
    ]);
  });
});
