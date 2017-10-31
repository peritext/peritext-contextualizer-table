import React from 'react';

export default ({
  resource,
  contextualizer: {
    pageRowsLimit
  },
  contextualization
}) => {
  const data = pageRowsLimit && typeof pageRowsLimit === 'number' ? resource.data.slice(0, pageRowsLimit) : resource.data;
  // @todo: handle columns definition in a better way than inspecting the keys of the first object
  const columns = Object.keys(data[0]).map(key => ({
    Header: key,
    accessor: key
  }));
  return (
    <figure
      className="peritext-contextualization peritext-contextualization-block peritext-contextualization-codex peritext-contextualizer-table"
    >
      <table>
        <thead>
          <tr>
            {
              columns.map((column, index) => (<th key={index}>{column.Header}</th>))
            }
          </tr>
        </thead>
        <tbody>
          {
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {
                  columns.map((column, index) => (<th key={index}>{row[column.accessor]}</th>))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </figure>
  )
}