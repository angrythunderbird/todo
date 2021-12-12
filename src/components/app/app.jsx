import React, { Component } from 'react';
import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import TaskStatusFilter from '../task-status-filter/';
import TodoList from '../todo-list/';

import './app.css';

export default class App extends Component {
  state = {
    todoData: [
      { label: 'Снять обои', important: false, id: 11 },
      { label: 'Снять штукатурку', important: true, id: 22 },
      { label: 'Доучить основы React', important: false, id: 33 }
    ]
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {

      const idx = todoData.findIndex((el) => el.id === id);
      const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArr
      }
    });
  };

  render() {
    return (
      <div className="container">
        <AppHeader />
        <TaskStatusFilter />
        <SearchPanel />
        <TodoList todos={this.state.todoData}
          onDelete={this.deleteItem} />
      </div>
    );
  }
};