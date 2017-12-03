import React, {Component} from 'react';
import PropTypes from 'prop-types';

import BlockDynamic from '../src/BlockDynamic';

export default class DynamicContainer extends Component {

  constructor(props) {
    super(props);
  }

  getChildContext () {
    return {
      datasets: this.props.datasets
    }
  }
  render() {
    const {
      props: {
        resource,
        contextualization,
        contextualizer,
        // datasets
      }
    } = this;
    const style = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    };
    return (
      <div style={style}>
        <BlockDynamic
          resource={resource}
          contextualizer={contextualizer}
          allowInteractions={true}
        />
      </div>
    )
  }
}

DynamicContainer.childContextTypes = {
  datasets: PropTypes.object
};  