import React, { Component } from 'react';
import './collection.css'

export default class Collection extends Component{
  constructor(props){
    super(props);
    this.state = {
      palettes:[]
    }
  }

  render(){
    let collection;
    if(this.props.palettes.length === 0) {
      collection = '';
    } else {
      console.log('thisisprops',this.props.palettes)
      collection = this.props.palettes.pals.map((d, i) => {
        return(
          <div className="palswrapper card column is-one-third">
            <header className="card-header">
              <p className="card-header-title">#{i}</p>
            </header>
            <div className="card-content">
              <div className="content">
                <div key={d.id} className="is-flex">
                  <div key={`${d.id} + ${d.hex1}`} className="singles" style={{backgroundColor:`${d.hex1}`}}></div>
                  <div key={`${d.id} + ${d.hex2}`} className="singles" style={{backgroundColor:`${d.hex2}`}}></div>
                  <div key={`${d.id} + ${d.hex3}`} className="singles" style={{backgroundColor:`${d.hex3}`}}></div>
                  <div key={`${d.id} + ${d.hex4}`} className="singles" style={{backgroundColor:`${d.hex4}`}}></div>
                  <div key={`${d.id} + ${d.hex5}`} className="singles" style={{backgroundColor:`${d.hex5}`}}></div>
                </div>
              </div>
            </div>
            <footer className="card-footer">
              <a href="" className="card-footer-item">EDIT</a>
              <a href="" className="card-footer-item">VIEW</a>
              <a href="" className="card-footer-item">DELETE</a>
            </footer>
          </div>
        )
      })
    }

    return(
      <div className="wrapper">
        <div className="box">
          <div className="inner columns is-multiline">
            {collection}
          </div>
        </div>
      </div>
    )
  }
}
