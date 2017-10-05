import React from 'react';
import ReactTable from 'react-table';

export default ({
  resource,
  contextualizer,
  contextualization
}) => {
  const data = resource.data;
  // this is weak
  const columns = Object.keys(data[0]).map(key => ({
    Header: key,
    accessor: key
  }));
  return (
  <figure
   className="peritext-contextualization peritext-contextualization-block peritext-contextualization-web peritext-contextualizer-table"
  >
    <ReactTable
     data={data} 
     columns={columns} 
     />
  </figure>
   );
}
