import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';

import {updateData, getDataset} from './utils';

class BlockDynamic extends Component {

  static contextTypes = {
    datasets: PropTypes.object,
  }

  constructor (props) {
    super(props);
  }

  componentWillMount() {
    updateData(this.props, this);
  }

  componentWillReceiveProps (nextProps) {
    if (
        this.props.data !== nextProps.data ||
        getDataset(this.props, this) !== getDataset(nextProps, this)
      ) {
      updateData(nextProps, this);
    }
  }


  render () {
    const {
      state: {
        columns = [],
        data = [],
        error,
        loading = false
      }
    } = this;

    return (
    <figure
     className="peritext-contextualization peritext-contextualization-block peritext-contextualization-web peritext-contextualizer-table"
    >
      {<ReactTable
       data={data} 
       columns={columns}
       loading={loading} 
       />}
    </figure>
     );
  }
}



export default BlockDynamic;