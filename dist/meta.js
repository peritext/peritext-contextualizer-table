"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  id: 'table',
  type: 'peritext-contextualizer',
  name: 'Tables contextualizer',
  acceptedResourceTypes: [{
    type: 'table'
  }],
  profile: {
    block: {
      mutable: false,
      options: {
        pagedMaxRows: {
          type: 'number'
        },
        screenedMaxRows: {
          type: 'number'
        },
        showPagination: {
          type: 'boolean'
        },
        showPageSizeOptions: {
          type: 'boolean'
        },
        defaultPageSize: {
          type: 'number'
        },
        sortable: {
          type: 'boolean'
        },
        filterable: {
          type: 'boolean'
        }
      },
      assetPickingRules: {
        element: {
          screened: ['dataAssetId'],
          paged: ['dataAssetId']
        }
      }
    }
  }
};
exports.default = _default;