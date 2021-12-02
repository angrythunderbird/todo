import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const todoData = [
  {label: 'Снять обои', important: false},
  {label: 'Снять штукатурку', important: true},
  {label: 'Доучить основы React', important: false}
];

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
      
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
