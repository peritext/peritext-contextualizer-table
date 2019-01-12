/* eslint react/no-set-state : 0 */
import React from 'react';
import ReactTable from 'react-table';

const DynamicTable = ( { data = [], columns = [], contextualizer = {} } ) => {
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
    filterable = false,
  } = parameters;
  const realData = screenedMaxRows && typeof screenedMaxRows === 'number' && screenedMaxRows > 0 ?
    data.slice( 0, screenedMaxRows ) : data;
  return (
    <ReactTable
      data={ realData }
      columns={ columns }
      {
        ...{
          showPagination,
          showPageSizeOptions,
          defaultPageSize,
          sortable,
          filterable,
        }
      }
    />
  );
};

export default DynamicTable;
