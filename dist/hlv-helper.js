/**
 * hlv-helper - helper for metabolic profiling analysis in the visualizer
 * @version v0.0.1
 * @link https://github.com/cheminfo-js/hlv-helper#readme
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["hlvHelper"] = factory();
	else
		root["hlvHelper"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const createChart = __webpack_require__(1);

const colorCoding = __webpack_require__(2);

function five() {
  return 5;
}

module.exports = {
  five,
  createChart,
  colorCoding
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
  x.forEach((v, i) => options.info.push({
    id: options.id[i],
    _highlight: options.highlight[i]
  }));
  let unselected = [];
  x.forEach((v, i) => unselected.push({
    cx: options.unselected.cx,
    cy: options.unselected.cy,
    fill: options.color[i],
    r: options.unselected.r,
    shape: options.unselected.shape,
    stroke: options.unselected.stroke,
    width: options.unselected.width,
    height: options.unselected.height
  }));
  let selected = [];
  x.forEach((v, i) => selected.push({
    cx: options.selected.cx,
    cy: options.selected.cy,
    fill: options.color[i],
    r: options.selected.r,
    shape: options.selected.shape,
    stroke: options.selected.stroke,
    width: options.selected.width,
    height: options.selected.height
  }));
  let chart;

  switch (type) {
    case 'scatter':
      chart = {
        title: options.title,
        data: [{
          type: 'scatter',
          styles: {
            unselected: unselected,
            selected: selected
          },
          x: x,
          y: y,
          info: options.info
        }]
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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function colorCoding(vector, colorScale) {
  let color = vector.map(x => colorScale(x));
  return color;
}

module.exports = colorCoding;

/***/ })
/******/ ]);
});
//# sourceMappingURL=hlv-helper.js.map