/* eslint no-new-func : 0 */

import React from 'react';

import meta from './meta';
import { chooseAppropriateAsset } from 'peritext-utils';

import DynamicTable from './DynamicTable';
import StaticTable from './StaticTable';

const Block = ( {
  resource,
  contextualizer = {},
  // contextualization,
  renderingMode = 'screened',
  assets = {},
} ) => {
  const {parameters = {simpleTable: false}} = contextualizer;
  const appropriateAsset = chooseAppropriateAsset( resource, meta.profile.block.assetPickingRules.element[renderingMode], assets );
  if ( appropriateAsset ) {
    const data = appropriateAsset.asset.data || [];
    const first = data.length ? data[0] : {};
    const columns = Object.keys( first )
    .filter( ( key ) => key.trim().length )
    .map( ( key ) => ( {
      Header: key,
      accessor: key
    } ) );
    switch ( renderingMode ) {
      case 'screened':
        if (parameters.simpleTable) {
          return (
            <div className="static-table-container">
              <StaticTable
                data={ data }
                columns={ columns }
                contextualizer={ contextualizer }
              />
            </div>
          )
        }
        return (
          <div className="dynamic-table-container">
          <DynamicTable
            data={ data }
            contextualizer={ contextualizer }
            columns={ columns }
          />
          </div>
        );
      case 'paged':
      case 'micro':
        return (
          <StaticTable
            data={ data }
            columns={ columns }
            contextualizer={ contextualizer }
          />
        );
      default:
        return null;
    }
  }
  return null;
};

export default Block;
