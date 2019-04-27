"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _meta = _interopRequireDefault(require("./meta"));

var _peritextUtils = require("peritext-utils");

var _DynamicTable = _interopRequireDefault(require("./DynamicTable"));

var _StaticTable = _interopRequireDefault(require("./StaticTable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-new-func : 0 */
const Block = ({
  resource,
  contextualizer = {},
  // contextualization,
  renderingMode = 'screened',
  assets = {}
}) => {
  const {
    parameters = {
      simpleTable: false
    }
  } = contextualizer;
  const appropriateAsset = (0, _peritextUtils.chooseAppropriateAsset)(resource, _meta.default.profile.block.assetPickingRules.element[renderingMode], assets);

  if (appropriateAsset) {
    const data = appropriateAsset.asset.data || [];
    const first = data.length ? data[0] : {};
    const columns = Object.keys(first).filter(key => key.trim().length).map(key => ({
      Header: key,
      accessor: key
    }));

    switch (renderingMode) {
      case 'screened':
        if (parameters.simpleTable) {
          return _react.default.createElement(_StaticTable.default, {
            data: data,
            columns: columns,
            contextualizer: contextualizer
          });
        }

        return _react.default.createElement(_DynamicTable.default, {
          data: data,
          contextualizer: contextualizer,
          columns: columns
        });

      case 'paged':
      case 'micro':
        return _react.default.createElement(_StaticTable.default, {
          data: data,
          columns: columns,
          contextualizer: contextualizer
        });

      default:
        return null;
    }
  }

  return null;
};

var _default = Block;
exports.default = _default;