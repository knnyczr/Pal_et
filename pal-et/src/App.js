import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { users:[] }

  componentDidMount(){
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }))
  }

  render() {
    return (
      <div className="App">
        <h1>users</h1>
          <ul>
            {this.state.users.map(users =>
              <li key={users.id}>{users.username}</li>
            )}
          </ul>
      </div>
    );
  }
}

export default App;
