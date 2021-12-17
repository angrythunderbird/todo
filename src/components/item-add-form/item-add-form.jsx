import React, { Component } from "react";

import './item-add-form.css';

export default class ItemAddForm extends Component {
  state = {
    label: '',
    placeholder: 'type task',
    inputClassName: 'form-control item-add-input'
  }

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.label === '') {
      this.setState({
        placeholder: 'input is empty',
        inputClassName: 'form-control item-add-input input-alarm'
      });
      return;
    } else {
      this.setState({
        placeholder: 'type task',
        inputClassName: 'form-control item-add-input'
      });
    };
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    });
  }

  render() {
    return (
      <form className="item-add-form" 
            onSubmit={this.onSubmit}>
        <input type="text"
               placeholder={this.state.placeholder}
               className={this.state.inputClassName}
               onChange={this.onLabelChange}
               value={this.state.label} />
        <button className="item-add-form-btn btn btn-info">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </button>
      </form>
    );
  };
}