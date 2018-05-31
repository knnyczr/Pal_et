import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users:[],
      palette:[]
    }
  }

  getexpress(){
    fetch(`/api`)
    .then(res => res.json())
    .then(data => console.log(data))
  }

  componentDidMount(){
    fetch(`http://www.colr.org/json/colors/random/5`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.colors)
      let colors = data.matching_colors
      this.setState({palette : colors})
    })


  }




  render() {
    console.log(this.state.palette)
    return (
      <div className="App">
          <button onClick={(e) => {this.getexpress(e)}} >get express</button>
          {/* <button onClick={(e)=> this.getpal(e)}>colors!</button> */}
          <br />

          <div className="pal box is-flex">
            {
              this.state.palette.map((d,i) => {
                return <div
                  className="palette"
                  key={i}
                  style={{backgroundColor: `#${d}`}}
                  >
                    {this.state.palette[i]}
                  </div>
              })
            }
          </div>
      </div>
    );
  }
}

export default App;
