"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/no-set-state : 0 */
const Table = ({
  data = [],
  columns = [],
  contextualizer = {}
}) => {
  const {
    parameters = {}
  } = contextualizer;
  const {
    pagedMaxRows = 10
  } = parameters;
  const realData = pagedMaxRows && typeof pagedMaxRows === 'number' && pagedMaxRows > 0 ? data.slice(0, pagedMaxRows) : data;
  return _react.default.createElement("table", null, _react.default.createElement("thead", null, _react.default.createElement("tr", null, columns.map((column, index) => _react.default.createElement("th", {
    key: index
  }, column.Header)))), _react.default.createElement("tbody", null, realData.map((row, rowIndex) => _react.default.createElement("tr", {
    key: rowIndex
  }, columns.map((column, index) => _react.default.createElement("th", {
    key: index
  }, row[column.accessor]))))));
};

var _default = Table;
exports.default = _default;