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
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Todo App', important: true, id: 2 },
      { label: 'Have a dinner', important: false, id: 3 },
    ],
  }

  deleteItem = (id) => this.setState(({ todoData, ...state }) => ({
    ...state,
    todoData: todoData.filter((item) => item.id !== id),
  }));

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.lastId += 1,
    };

    this.setState(({ todoData, ...state }) => ({
      ...state,
      todoData: [...todoData, newItem],
    }));
  };

  onToggleImportant = (id) => console.log('important', id);

  onToggleDone = (id) => console.log('done', id);

  render() {
    const { todoData } = this.state;

    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm
          onAdded={this.addItem}
        />
      </div>
    );
  }
}

export default App;
