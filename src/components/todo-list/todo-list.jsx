import React from 'react';
import PropTypes from 'prop-types';

import TodoListItem from '../todo-list-item';

const TodoList = ({ todos, onDeleted }) => {
  const elements = todos.map(({ id, ...itemProps }) => (
    <li key={id} className="list-group-item">
      <TodoListItem
        {...itemProps}
        onDeleted={() => onDeleted(id)}
      />
    </li>
  ));

  return (
    <div className="todo-list">
      <ul className="list-group">
        {elements}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    important: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  onDeleted: PropTypes.func.isRequired,
};

export default TodoList;
