import React, { Component } from 'react';

import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

class App extends Component {
  lastId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Todo App'),
      this.createTodoItem('Have a dinner'),
    ],
  }

  deleteItem = (id) => this.setState(({ todoData, ...state }) => ({
    ...state,
    todoData: todoData.filter((item) => item.id !== id),
  }));

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData, ...state }) => ({
      ...state,
      todoData: [...todoData, newItem],
    }));
  };

  onToggleProperty = (id, propertyName) => this.setState(({ todoData, ...state }) => ({
    ...state,
    todoData: todoData.map(
      (item) => (item.id === id
        ? { ...item, [propertyName]: !item[propertyName] }
        : item),
    ),
  }));

  createTodoItem(label) {
    // eslint-disable-next-line no-multi-assign
    const id = this.lastId += 1;

    return {
      id,
      label,
      important: false,
      done: false,
    };
  }

  render() {
    const { todoData } = this.state;

    const doneCount = todoData.filter((item) => item.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader
          toDo={todoCount}
          done={doneCount}
        />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleProperty={this.onToggleProperty}
        />
        <ItemAddForm
          onAdded={this.addItem}
        />
      </div>
    );
  }
}

export default App;
