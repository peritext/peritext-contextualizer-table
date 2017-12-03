import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {updateData, getDataset} from './utils';


class BlockStatic extends Component {

  static contextTypes = {
    datasets: PropTypes.object,
  }

  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      data: undefined
    }
    updateData(props, this);
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
      props: {
        contextualizer,
      },
      state: {
        columns = [],
        data = [],
        error,
        loading = false
      }
    } = this;

    const realData = contextualizer && 
                      contextualizer.pageRowsLimit && 
                      typeof contextualizer.pageRowsLimit === 'number' ? 
                        data.slice(0, contextualizer.pageRowsLimit) 
                        : data;

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
            realData.map((row, rowIndex) => (
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
     );
  }
}



export default BlockStatic;