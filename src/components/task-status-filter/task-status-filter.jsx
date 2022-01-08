import React, { Component } from 'react';

import './task-status-filter.css';

export default class TaskStatusFilter extends Component {

  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}

  ]

  render() {

    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const btnClass = isActive ? 'btn-info' : 'btn-outline-secondary';
      return <button type="button"
                     className={`btn task-status-btn ${btnClass}`}
                     key={name}
                     onClick={() => onFilterChange(name)}>
                {label}
             </button>
    })

    return (
      <div className="task-status-filter">
        {buttons}
      </div>
    );
  }
};