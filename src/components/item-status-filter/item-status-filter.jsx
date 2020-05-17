import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FILTER_TYPES } from '../app/constants';

class ItemStatusFilter extends Component {
  buttons = [
    {
      name: FILTER_TYPES.ALL,
      label: 'All',
    },
    {
      name: FILTER_TYPES.ACTIVE,
      label: 'Active',
    },
    {
      name: FILTER_TYPES.DONE,
      label: 'Done',
    },
  ]

  renderButtons = () => {
    const { filterType, onFilterAdded } = this.props;

    return this.buttons.map(({ label, name }) => (
      <button
        type="button"
        className={`btn ${filterType === name ? 'btn-info' : 'btn-outline-secondary'}`}
        onClick={() => onFilterAdded(name)}
        key={name}
      >
        {label}
      </button>
    ));
  }

  render = () => (
    <div className="btn-group">
      {this.renderButtons()}
    </div>
  );
}

ItemStatusFilter.propTypes = {
  onFilterAdded: PropTypes.func.isRequired,
  filterType: PropTypes.string.isRequired,
};

export default ItemStatusFilter;
