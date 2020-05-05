import React from 'react';
import ReactDOM from 'react-dom';

const el = (
  <div>
    <h1>My Todo List</h1>
    <input placeholder="search what to do" />
    <ul>
      <li>Learn React</li>
      <li>Create ToDo App</li>
    </ul>
  </div>
);

ReactDOM.render(el, document.getElementById('root'));
