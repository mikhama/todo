import React, { Component } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class ItemAddForm extends Component {
  render() {
    const { onAdded } = this.props;

    return (
      <div className="input-group mb-3 item-add-form">
        <input
          type="text"
          className="form-control"
          placeholder="What to do?"
        />
        <div className="input-group-append">
          <button
            className="btn btn-danger"
            type="button"
            onClick={() => onAdded('Do what is great')}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

ItemAddForm.propTypes = {
  onAdded: PropTypes.func.isRequired,
};

export default ItemAddForm;
