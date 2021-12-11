import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    // setState(state) --- state.done === { done }
    this.setState(({ done }) => {
      return {
        done: !done
      };
    });
  };

  onImportantClick = () => {  
    this.setState(({ important }) => {
      return {
        important: !important
      };
    });
  }

  render() {
    const { label, id } = this.props;

    const { done, important } = this.state;

    const listItemStyle = important ? 'list-group-item-primary' : 'list-group-item-secondary';
    let listItemTextClassNames = 'text';

    if (done) {
      listItemTextClassNames += ' done';
    }

    return (
      <li className={"list-group-item item shadow-sm rounded " + listItemStyle}>
        <span className="marker">{id.toString()}</span>
        <div className="todo-list-item">
          <span className={listItemTextClassNames} onClick={this.onLabelClick}>{label}</span>
          <button type="button" className="btn btn-outline-success btn-sm float-right todo-list-item-btn" onClick={this.onImportantClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          </button>
          <button type="button" className="btn btn-outline-success btn-sm float-right todo-list-item-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          </button>
        </div>
      </li>
    );
  }
}