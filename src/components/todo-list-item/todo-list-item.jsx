import React from 'react';
import { PropTypes } from 'prop-types';

const TodoListItem = ({
  label,
  onDeleted,
  onToggleImportant,
  onToggleDone,
  important,
  done,
}) => {
  let classNames = 'todo-list-item';
  if (done) {
    classNames += ' done';
  }

  if (important) {
    classNames += ' important';
  }

  return (
    <span className={classNames}>
      <span
        className="todo-list-item-label"
        onClick={onToggleDone}
        role="button"
      >
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onToggleImportant}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDeleted}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

TodoListItem.propTypes = {
  label: PropTypes.string.isRequired,
  important: PropTypes.bool.isRequired,
  done: PropTypes.bool.isRequired,
  onDeleted: PropTypes.func.isRequired,
  onToggleImportant: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
};

export default TodoListItem;
