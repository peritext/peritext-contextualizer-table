/* eslint react/no-set-state : 0 */

import React from 'react';

const Table = ( {
  data = [],
  columns = [],
  contextualizer = {},
} ) => {
  const {
    parameters = {}
  } = contextualizer;
  const {
    pagedMaxRows = 10,
  } = parameters;
  const realData = pagedMaxRows && typeof pagedMaxRows === 'number' && pagedMaxRows > 0 ?
    data.slice( 0, pagedMaxRows ) : data;

    return (
      <table>
        <thead>
          <tr>
            {
              columns.map( ( column, index ) => ( <th key={ index }>{column.Header}</th> ) )
            }
          </tr>
        </thead>
        <tbody>
          {
            realData.map( ( row, rowIndex ) => (
              <tr key={ rowIndex }>
                {
                  columns.map( ( column, index ) => ( <th key={ index }>{row[column.accessor]}</th> ) )
                }
              </tr>
            ) )
          }
        </tbody>
      </table>
     );
};

export default Table;

