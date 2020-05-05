import React from 'react';
import { PropTypes } from 'prop-types';

const TodoListItem = ({ label, important }) => {
  const style = {
    color: important ? 'tomato' : 'black',
  };

  return <span style={style}>{label}</span>;
};

TodoListItem.propTypes = {
  label: PropTypes.string.isRequired,
  important: PropTypes.bool,
};

TodoListItem.defaultProps = {
  important: false,
};

export default TodoListItem;
