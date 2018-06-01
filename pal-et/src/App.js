import React, { Component } from 'react';
import './App.css';
import Collection from './Collection.jsx'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users:[],
      palette:[]
    }
    this.getpal = this.getpal.bind(this)
  }

  componentDidMount(){
    this.getpal()
  }

  getpal(){
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
        <h1 className="logo">PAL ET</h1>
          <div className="pal box is-flex">
            { this.state.palette.map((d,i) => {
                return <div
                  className="palette"
                  key={i}
                  style={{backgroundColor: `#${d}`}}
                  >
                    <h2 className="hex">#{this.state.palette[i]}</h2>
                  </div>
                })
            }
          </div>
          <button className="button is-rounded is-medium is-success is-focused" onClick={(e)=> this.getpal(e)}>New Pal!</button>

          <Collection />
      </div>
    );
  }
}

export default App;
