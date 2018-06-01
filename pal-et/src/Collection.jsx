import React, { Component } from 'react';
import './collection.css'

export default class Collection extends Component{
  constructor(props){
    super(props);
    this.state = {
      palette:[]
    }
  }

  componentDidMount(){
    fetch(`/api`)
    .then(res => res.json())
    .then(data => console.log(data))
  }

  render(){
    return(
      <div className="wrapper">
        <div className="box">
          this is going to be a collection of things
        </div>
      </div>
    )
  }
}
