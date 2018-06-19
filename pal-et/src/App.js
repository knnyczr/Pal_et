import React, { Component } from 'react';
import './App.css';
import Collection from './Collection.jsx'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users:[],
      palette:[],
      palettes:[]
    }
    this.getpal = this.getpal.bind(this)
  }

  componentDidMount(){
    this.getpal()
    this.thebackend()
  }

  thebackend(){
    fetch(`/api`)
    .then(res => res.json())
    .then(pals => {
      this.setState({palettes:pals})
    })
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
    let palettes = this.state.palettes;
    console.log(this.state.palette)
    return (
      <div className="App">
        <h1 className="logo">PAL ET</h1>
          <div className="pal box is-flex">
            { this.state.palette.map((d,i) => {
                return <div className="palette" key={i} style={{backgroundColor: `#${d}`}}>
                    <h2 className="hex">#{this.state.palette[i]}</h2>
                  </div>
                })
            }
          </div>
          <button className="button is-rounded is-medium is-success is-focused" onClick={(e)=> this.getpal(e)}>New Pal!</button>
        <form method="post" action="/api/">
        <div className="creating">
          <input name="hex1" value={`# + ${this.state.palette.hex1}`}/>
          <input name="hex2" value={`# + ${this.state.palette.hex2}`}/>
          <input name="hex3" value={`# + ${this.state.palette.hex3}`}/>
          <input name="hex4" value={`# + ${this.state.palette.hex4}`}/>
          <input name="hex5" value={`# + ${this.state.palette.hex5}`}/>
        </div>
          <input className="createnewpal button is-rounded is-medium is-success is-focused" type="submit" value="Add New Pal!"/>
        </form>

          <Collection palettes={palettes} />
      </div>
    );
  }
}

export default App;
