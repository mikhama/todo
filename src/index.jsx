import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
  const items = ['Learn React', 'Create ToDo App'];
  return (
    <ul>
      <li>{ items[0] }</li>
      <li>{ items[1] }</li>
    </ul>
  );
};

const AppHeader = () => (
  <h1>My Todo List</h1>
);

const SearchPanel = () => {
  const placeholder = 'Search what to do';
  const style = {
    fontSize: '20px',
  };

  return (
    <input
      style={style}
      placeholder={placeholder}
    />
  );
};

const App = () => (
  <div>
    <AppHeader />
    <SearchPanel />
    <TodoList />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
