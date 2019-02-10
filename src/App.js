import React, { Component } from 'react';

const sVersion = "ver 0.1.5 (J210)";

const sFTime = () => {
  let oDateNow = new Date();
  return oDateNow.toISOString().replace(/[A-Z]/g, " ").trim(); // + '.' + add3Zero(oDateNow.getMilliseconds());
};
//const add3Zero = (n) => ("000" + n).slice(-3);

export class Header extends Component {
  render() {
    let time_ver = `[${sFTime()}]: ${sVersion}`;
    return (
      <div className="App">
        <header className="App-header">
          <p id="text">[ Learn React Mx, {sVersion} ]</p>
          <div id="textarea">textareas here...</div>
          <br />
        </header>
        <footer>{time_ver}</footer>
      </div>
    );
  }
}

export class Textareas extends React.Component {
  render() {
    return (
      <div>
        <textarea name="t1" cols={25} rows={15} defaultValue="textarea-1" />
        <span> </span>
        <textarea name="t2" cols={25} rows={15} defaultValue="textarea-2" />
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
