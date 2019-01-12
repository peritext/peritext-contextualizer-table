"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.computeColumns = exports.formatData = void 0;

var _d3Dsv = require("d3-dsv");

const formatData = (data, fileName) => {
  const extension = fileName.split('.').pop();

  switch (extension) {
    case 'csv':
      return (0, _d3Dsv.csvParse)(data);

    case 'tsv':
      return (0, _d3Dsv.tsvParse)(data);

    case 'json':
    default:
      return data;
  }
};
/**
 * Determines of the columns of a dataset
 */


exports.formatData = formatData;

const computeColumns = data => {
  const keys = {};
  data.forEach(datum => {
    Object.keys(datum).forEach(key => {
      keys[key] = 'bla';
    });
  });
  const columns = Object.keys(keys).map(key => ({
    Header: key,
    accessor: key
  }));
  return columns;
};

exports.computeColumns = computeColumns;