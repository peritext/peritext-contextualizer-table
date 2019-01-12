"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactTable = _interopRequireDefault(require("react-table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const DynamicTable = ({
  data = [],
  columns = [],
  contextualizer = {}
}) => {
  const {
    parameters = {}
  } = contextualizer;
  const {
    // pagedMaxRows,
    screenedMaxRows,
    showPagination = true,
    showPageSizeOptions = true,
    defaultPageSize = 5,
    sortable = true,
    filterable = false
  } = parameters;
  const realData = screenedMaxRows && typeof screenedMaxRows === 'number' && screenedMaxRows > 0 ? data.slice(0, screenedMaxRows) : data;
  return _react.default.createElement(_reactTable.default, _extends({
    data: realData,
    columns: columns
  }, {
    showPagination,
    showPageSizeOptions,
    defaultPageSize,
    sortable,
    filterable
  }));
};

var _default = DynamicTable;
exports.default = _default;