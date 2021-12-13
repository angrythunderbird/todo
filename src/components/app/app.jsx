import React, { Component } from 'react';
import AppHeader from '../app-header/';
import ItemAddForm from '../item-add-form';
import SearchPanel from '../search-panel/';
import TaskStatusFilter from '../task-status-filter/';
import TodoList from '../todo-list/';

import './app.css';

export default class App extends Component {
  maxId = 100;

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

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    };
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr
      }
    });
  }

  render() {
    return (
      <div className="container">
        <AppHeader />
        <TaskStatusFilter />
        <SearchPanel />
        <TodoList todos={this.state.todoData}
          onDelete={this.deleteItem} />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
};