import React, { Component } from 'react';
import SearchActions from '../actions/SearchActions'

export default class PickBeer extends Component {
  constructor(){
    super();
   this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    console.log("pick beer");
    SearchActions.beersearch();
   
  }


  render() {
    return (
      <div>
        <form onSubmit ={this.submit}>
        <h1 className="text-center">PickBeer</h1>
        <button type ="submit" className ="btn btn-primary">Pick Beer</button>
        </form>
      </div>
    )
  }
}
