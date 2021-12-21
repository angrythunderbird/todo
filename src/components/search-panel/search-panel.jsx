import { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
  state = {
    term: ''
  }

  onSearchChange = (event) => {
    const term = event.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  }

  render() {
    return (
      <input
        type="text"
        placeholder="search"
        className="form-control task-search"
        value={this.state.value}
        onChange={this.onSearchChange} />
    )
  }
};