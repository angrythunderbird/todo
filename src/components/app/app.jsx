import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import TaskStatusFilter from '../task-status-filter/';
import TodoList from '../todo-list/';

import './app.css';

const todoData = [
  { label: 'Снять обои', important: false },
  { label: 'Снять штукатурку', important: true },
  { label: 'Доучить основы React', important: false }
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

export default App;