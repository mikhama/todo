import React from 'react';
import PropTypes from 'prop-types';

import TodoListItem from './todo-list-item';

const TodoList = ({ todos }) => {
  const elements = todos.map(({ id, ...itemProps }) => (
    <li key={id}>
      <TodoListItem {...itemProps} />
    </li>
  ));

  return (
    <ul>
      {elements}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    important: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default TodoList;
