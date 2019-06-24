'use strict';

const defaultOptions = {
  unselected: {
    cx: 0,
    cy: 0,
    r: 3,
    shape: 'circle',
    stroke: 'transparent',
    width: '5px',
    height: '5px'
  },
  selected: {
    cx: 0,
    cy: 0,
    r: 5,
    shape: 'circle',
    stroke: 'transparent',
    width: '5px',
    height: '5px'
  },
  title: 'score plot'
};

/**
 * Project the dataset into the PCA space
 * @param {Array} x x axis to be displayed
 * @param {Array} y y values to be displayed
 * @param {String} type type of chart (scatter, color)
 * @param {Object} options color, unselected, selected (cx, cy, r, shape, stroke, width, height)
 * @return {Object} a chart
 */

function createChart(x, y, type, options) {
  options = Object.assign({}, defaultOptions, options);

  if (!options.color) {
    options.color = [];
    x.forEach(() => options.color.push('rgba(118,166,124,1)'));
  }

  if (!options.highlight) {
    options.highlight = [];
    x.forEach((v, i) => options.highlight.push([i]));
  }

  if (!options.id) {
    options.id = [];
    x.forEach((v, i) => options.id.push((i + 1).toString()));
  }

  options.info = [];
  x.forEach((v, i) =>
    options.info.push({
      id: options.id[i],
      _highlight: options.highlight[i]
    })
  );

  let unselected = [];
  x.forEach((v, i) =>
    unselected.push({
      cx: options.unselected.cx,
      cy: options.unselected.cy,
      fill: options.color[i],
      r: options.unselected.r,
      shape: options.unselected.shape,
      stroke: options.unselected.stroke,
      width: options.unselected.width,
      height: options.unselected.height
    })
  );

  let selected = [];
  x.forEach((v, i) =>
    selected.push({
      cx: options.selected.cx,
      cy: options.selected.cy,
      fill: options.color[i],
      r: options.selected.r,
      shape: options.selected.shape,
      stroke: options.selected.stroke,
      width: options.selected.width,
      height: options.selected.height
    })
  );

  let chart;
  switch (type) {
    case 'scatter':
      chart = {
        title: options.title,
        data: [
          {
            type: 'scatter',
            styles: {
              unselected: unselected,
              selected: selected
            },
            x: x,
            y: y,
            info: options.info
          }
        ]
      };
      break;
    case 'color':
      chart = {
        data: [{
          label: options.title,
          type: 'color',
          x: x,
          y: y,
          color: options.color
        }]
      };
      break;
    default:
      break;
  }

  return chart;
}

module.exports = createChart;
