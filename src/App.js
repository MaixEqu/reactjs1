import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p id="text">[ Learn React (Mx, ver 0.1.4, J210) ]</p>
          <div id="edit">edit 02</div>
        </header>
      </div>
    );
  }
}

/*
export var Editor = React.createClass({
  displayName: 'Editor',
  propTypes: {
    name: React.PropTypes.string.isRequired
  },
  getInitialState: function() { 
    return {
      value: this.props.name
    };
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    return (
      <form id="noter-save-form" method="POST">
        <textarea id="noter-text-area" name="textarea" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Save" />
      </form>
    );
  }
});
*/
