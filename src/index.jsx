import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TaskStatusFilter from './components/task-status-filter';
import TodoList from './components/todo-list';

import './index.css';

const todoData = [
  {label: 'Снять обои', important: false},
  {label: 'Снять штукатурку', important: true},
  {label: 'Доучить основы React', important: false}
];

const App = () => {
  return (
    <div className="container">
      <AppHeader />
      <TaskStatusFilter />
      <SearchPanel />
      <TodoList todos={todoData} />
      
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
