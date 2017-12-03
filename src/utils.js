import {get} from 'axios';
import {csvParse, tsvParse} from 'd3-dsv';

export const getDataset = (props, self) => {
    return self.context && 
           self.context.datasets && 
           self.context.datasets[props.resource.data.dataset]
  }

export const formatData = (data, dataset) => {
    switch(dataset.format) {
      case 'csv':
        return csvParse(data);
      case 'tsv':
        return tsvParse(data);
      case 'json':
      default:
        return data;
    }
  }
/**
 * Determines of the columns of a dataset
 */
export const computeColumns = (data) => {
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


export const updateData = (props, self) => {
  const dataset = getDataset(props, self);
  if (dataset === undefined) {
    return;
  }
  if (dataset.rawData) {
    self.setState({
      loading: false,
      data: dataset.rawData,
      columns: computeColumns(dataset.rawData),
      error: undefined,
    })
  } else if (dataset.uri) {
    self.setState({
      loading: true,
      error: undefined,
    });
    get(dataset.uri)
    .then((response) => {
      const data = formatData(response.data, dataset);
      self.setState({
        data,
        columns: computeColumns(data),
        loading: false,
      })
    })
    .catch((error) => {
      self.setState({
        error
      })
    });
  } else {
    self.setState({
      error: 'no-dataset'
    })
  }
}