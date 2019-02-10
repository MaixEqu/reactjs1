import React, { Component } from 'react';

const sVersion = "ver 0.1.8 (J210)";

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
          <div id="textarea2">textareas 2 here...</div>
          <div id="form">form here...</div>
          <div id="textarea">textareas here...</div>
          <div id="calc">calc here...</div>
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

export class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:<br />
          <textarea cols={25} rows={15} value={this.state.value} onChange={this.handleChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
        <BoilingVerdict
          celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}