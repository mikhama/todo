import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = () => (
  <ul>
    <li><TodoListItem label="Drink coffee" /></li>
    <li><TodoListItem label="Build todo app" important /></li>
  </ul>
);

export default TodoList;
