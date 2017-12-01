import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {get} from 'axios';
import dsv from 'd3-dsv';

class BlockStatic extends Component {

  static contextTypes = {
    datasets: PropTypes.object,
  }

  constructor (props) {
    super(props);
  }

  componentWillMount() {
    this.updateData(this.props);
  }

  componentWillReceiveProps (nextProps) {
    if (
        this.props.data !== nextProps.data ||
        getDataset(this.props) !== getDataset(nextProps)
      ) {
      this.updateData(nextProps);
    }
  }

  getDataset = (props) => {
    return this.context && 
           this.context.datasets && 
           this.context.datasets[props.data.dataset]
  }

  formatData = (data, dataset) => {
    switch(dataset.format) {
      case 'csv':
        return dsv.csvParse(data);
      case 'tsv':
        return dsv.tsvParse(data);
      case 'json':
      default:
        return data;
    }
  }

  updateData = (props) => {
    const dataset = this.getDataset(props);
    if (dataset === undefined) {
      return;
    }
    if (dataset.rawData) {
      this.setState({
        loading: false,
        data: dataset.rawData,
        error: undefined,
      })
    } else if (dataset.uri) {
      this.setState({
        loading: true,
        error: undefined,
      });
      axios.get(dataset.uri)
      .then((response) => {
        const data = this.formatData(response.data, dataset);
        this.setState({
          data,
          columns: computeColumns(data),
          loading: false,
        })
      })
      .catch((error) => {
        this.setState({
          error
        })
      });
    } else {
      this.setState({
        error: 'no-dataset'
      })
    }
  }

  /**
   * Determines of the columns of a dataset
   */
  computeColumns = (data) => {
    const keys = {};
    data.forEach(datum => {
      Object.keys(datum).forEach(key => {
        keys[key] = 'bla'
      })
    });
    const columns = Object.keys(keys).map(key => ({
      Header: key,
      accessor: key
    }));
    return columns;
  }

  render () {
    const {
      props: {
        contextualizer: {
          pageRowsLimit
        },
      },
      state: {
        columns = [],
        data = [],
        error,
        loading = false
      }
    } = this;

    const realData = pageRowsLimit && typeof pageRowsLimit === 'number' ? data.slice(0, pageRowsLimit) : data;

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