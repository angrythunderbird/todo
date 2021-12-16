import React, { Component } from 'react';
import AppHeader from '../app-header/';
import ItemAddForm from '../item-add-form';
import SearchPanel from '../search-panel/';
import TaskStatusFilter from '../task-status-filter/';
import TodoList from '../todo-list/';

import './app.css';

export default class App extends Component {
  maxId = 1;

  state = {
    todoData: [
      this.createTodoItem('Ok, let`s go')
    ]
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  }

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
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr
      }
    });
  }

  toogleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  onToogleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toogleProperty(todoData, id, 'important')
      };
    });
  }

  onToogleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toogleProperty(todoData, id, 'done')
      };
    });
  }

  render() {

    const {todoData} = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const toDoCount = todoData.length - doneCount;

    return (
      <div className="container">
        <AppHeader toDo={toDoCount} done={doneCount} />
        <TaskStatusFilter />
        <SearchPanel />
        <TodoList todos={todoData}
          onDelete={this.deleteItem}
          onToogleImportant={this.onToogleImportant}
          onToogleDone={this.onToogleDone} />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
};