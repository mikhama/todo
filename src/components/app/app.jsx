import React, { Component } from 'react';

import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import { FILTER_TYPES } from './constants';

class App extends Component {
  lastId = 100;

  state = {
    todos: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Todo App'),
      this.createTodoItem('Have a dinner'),
    ],
    searchText: '',
    filterType: 'all',
  }

  deleteItem = (id) => this.setState(({ todos, ...state }) => ({
    ...state,
    todos: todos.filter((item) => item.id !== id),
  }));

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todos, ...state }) => ({
      ...state,
      todos: [...todos, newItem],
    }));
  };

  onToggleProperty = (id, propertyName) => this.setState(({ todos, ...state }) => ({
    ...state,
    todos: todos.map(
      (item) => (item.id === id
        ? { ...item, [propertyName]: !item[propertyName] }
        : item),
    ),
  }));

  onSearchTextAdded = (searchText) => this.setState((state) => ({
    ...state,
    searchText,
  }));

  onFilterAdded = (filterType) => this.setState((state) => ({
    ...state,
    filterType,
  }));

  filter = (todos, filterType) => {
    switch (filterType) {
      case FILTER_TYPES.ACTIVE: {
        return todos.filter(({ isDone }) => !isDone);
      }
      case FILTER_TYPES.DONE: {
        return todos.filter(({ isDone }) => isDone);
      }
      case FILTER_TYPES.ALL:
      default: {
        return todos;
      }
    }
  };

  search = (todos, searchText) => todos
    .filter(({ label }) => label.match(new RegExp(searchText, 'i')));

  createTodoItem(label) {
    // eslint-disable-next-line no-multi-assign
    const id = this.lastId += 1;

    return {
      id,
      label,
      isImportant: false,
      isDone: false,
    };
  }

  render = () => {
    const {
      todos,
      filterType,
      searchText,
    } = this.state;

    const doneCount = todos.filter(({ isDone }) => isDone).length;
    const todoCount = todos.length - doneCount;

    const visibleTodos = this.search(this.filter(todos, filterType), searchText);

    return (
      <div className="todo-app">
        <AppHeader
          toDo={todoCount}
          done={doneCount}
        />
        <div className="top-panel d-flex">
          <SearchPanel
            onSearchTextAdded={this.onSearchTextAdded}
          />
          <ItemStatusFilter
            onFilterAdded={this.onFilterAdded}
            filterType={filterType}
          />
        </div>

        <TodoList
          todos={visibleTodos}
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
