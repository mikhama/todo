import React from 'react';
import PropTypes from 'prop-types';

import TodoListItem from './todo-list-item';

import './todo-list.css';

const TodoList = ({ todos }) => {
  const elements = todos.map(({ id, ...itemProps }) => (
    <li key={id} className="list-group-item">
      <TodoListItem {...itemProps} />
    </li>
  ));

  return (
    <ul className="list-group todo-list">
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
