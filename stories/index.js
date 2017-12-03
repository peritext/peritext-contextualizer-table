import React from 'react';
import {csvParse} from 'd3-dsv';

import 'react-table/react-table.css';

const datasetFileName = 'milestones-history-datavis-all.csv';
const rawData = csvParse(require(`raw-loader!../dataset_examples/${datasetFileName}`));
// const rawData = csvParse(readFileSync(`../${datasetFileName}`));

import { storiesOf } from '@storybook/react';


import Static from './StaticContextualizationContainer';
import Dynamic from './DynamicContextualizationContainer';

const resource = {
  metadata: {
    title: 'coucou',
  },
  data: {
    dataset: 'test'
 }
};
const datasets = {
  test: {
    rawData,
    format: 'csv',
    method: 'raw'
  }
}

storiesOf('Dynamic block contextualization', module)
  .add('Basic (raw data)', () => (
    <Dynamic
      resource={resource}
      datasets={datasets}
    />
  ))
  .add('Basic (dataset uri)', () => (
    <Dynamic
      resource={resource}
      datasets={{
        ...datasets,
        test: {
          method: 'get',
          format: 'csv',
          uri: `/${datasetFileName}`
        }
      }}
    />
  ))

storiesOf('Static block contextualization', module)
  .add('Basic (raw data)', () => (
    <Static
      resource={resource}
      datasets={datasets}
    />
  ))
  .add('Basic (dataset uri)', () => (
    <Static
      resource={resource}
      datasets={{
        ...datasets,
        test: {
          method: 'get',
          format: 'csv',
          uri: `/${datasetFileName}`
        }
      }}
    />
  ))