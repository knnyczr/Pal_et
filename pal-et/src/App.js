import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    users:[],
    palette:[]
  }

  componentDidMount(){
    // e.preventDefault();
    let url = "http://colormind.io/api/";
    let data = {
      model: "default",
      input: ["N","N","N","N","N"]
    }
    var http = new XMLHttpRequest();
    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
        this.setState({ palette: (JSON.parse(http.responseText).result) })
      }
    }
    http.open("POST", url, true);
    http.send(JSON.stringify(data));
  }

  getpal(e){
    e.preventDefault();
    let url = "http://colormind.io/api/";
    let data = {
      model: "default",
      input: ["N","N","N","N","N"]
    }
    var http = new XMLHttpRequest();
    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
        this.setState({ palette: (JSON.parse(http.responseText).result) })
      }
    }
    http.open("POST", url, true);
    http.send(JSON.stringify(data));
  }


  render() {
    console.log(this.state.palette)
    return (
      <div className="App">
        {/* <h1>users</h1>
          <ul>
            {this.state.users.map(users => {
              return <li key={users.id}>{users.username}</li>
            })}
          </ul> */}
          <button onClick={(e)=> this.getpal(e)}>colors!</button>
          <br />

          <div className="pal box is-flex">
            {
              this.state.palette.map((d,i) => {
                return <div
                  className="palette"
                  key={i}
                  style={{backgroundColor: `rgb(${d})`}}
                  >
                  </div>
              })
            }
          </div>
      </div>
    );
  }
}

export default App;
