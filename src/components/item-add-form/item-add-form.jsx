import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemAddForm extends Component {
  state = {
    label: '',
  };

  onLabelChange = ({ target: { value } }) => this.setState({ label: value });

  onSubmit = (event) => {
    const { onAdded } = this.props;
    const { label } = this.state;

    event.preventDefault();
    onAdded(label);
  };

  render() {
    return (
      <form
        className="input-group mb-3 item-add-form"
        onSubmit={this.onSubmit}
      >
        <input
          type="text"
          className="form-control"
          placeholder="What to do?"
          onChange={this.onLabelChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-danger"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    );
  }
}

ItemAddForm.propTypes = {
  onAdded: PropTypes.func.isRequired,
};

export default ItemAddForm;
