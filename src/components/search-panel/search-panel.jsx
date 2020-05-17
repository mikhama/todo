import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchPanel extends Component {
  state = {
    text: '',
  }

  onTextChanged = ({ target: { value } }) => {
    const { onSearchTextAdded } = this.props;

    onSearchTextAdded(value);
    this.setState({ text: value });
  }

  render = () => {
    const { text } = this.state;

    return (
      <input
        className="form-control search-input"
        type="text"
        placeholder="Type to search"
        onChange={this.onTextChanged}
        value={text}
      />
    );
  }
}

SearchPanel.propTypes = {
  onSearchTextAdded: PropTypes.func.isRequired,
};

export default SearchPanel;
