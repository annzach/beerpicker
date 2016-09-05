import React, { Component } from 'react';
import UserActions from '../actions/UserActions'

export default class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
    this._onInputChange = this._onInputChange.bind(this);
    this._submit = this._submit.bind(this);
  }

  _onInputChange(e) {
    let key = e.target.dataset.statekey;
    let value = e.target.value;

    this.setState({
      [key]: value
    });
  }

  _submit(e) {
    e.preventDefault();
    
    UserActions.login(this.state);
  }

  render() {
    let { email, password } = this.state;

    return (
      <div>
        <form onSubmit={this._submit}>
          <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" placeholder="Email" required value={email} data-statekey='email' onChange={this._onInputChange}/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" required value={password} data-statekey='password' onChange={this._onInputChange}/>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}
