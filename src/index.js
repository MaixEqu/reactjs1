import React from 'react';
import ReactDOM from 'react-dom';
import * as App from './App';

ReactDOM.render(<App.Header />, document.getElementById('root'));
ReactDOM.render(<App.NameForm />, document.getElementById('form'));
//ReactDOM.render(<App.Textareas />, document.getElementById('textarea'));
ReactDOM.render(<App.EssayForm />, document.getElementById('textarea2'));
ReactDOM.render(<App.Calculator />, document.getElementById('calc'));
ReactDOM.render(<App.Calculator2 />, document.getElementById('calc2'));
//ReactDOM.render(<App.Editor name={this.state.fileData} />, document.getElementById('edit'));
