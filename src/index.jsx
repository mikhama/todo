import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => (
  <ul>
    <li>Learn React</li>
    <li>Create ToDo App</li>
  </ul>
);

const AppHeader = () => (
  <h1>My Todo List</h1>
);

const SearchPanel = () => (
  <input placeholder="search what to do" />
);

const App = () => (
  <div>
    <AppHeader />
    <SearchPanel />
    <TodoList />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
