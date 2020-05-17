import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemStatusFilter extends Component {
  buttons = [
    {
      name: 'all',
      label: 'All',
    },
    {
      name: 'active',
      label: 'Active',
    },
    {
      name: 'done',
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

  render() {
    return (
      <div className="btn-group">
        {this.renderButtons()}
      </div>
    );
  }
}

ItemStatusFilter.propTypes = {
  onFilterAdded: PropTypes.func.isRequired,
  filterType: PropTypes.string.isRequired,
};

export default ItemStatusFilter;
