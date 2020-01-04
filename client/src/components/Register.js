import React from 'react';
import { registerValidator } from '../validators/registerDataValidator';
import { registerUser } from '../api/user';

class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: '',
    formErrors: {username:'', email: '', password: ''},
    usernameValid: false,
    emailValid: false,
    passwordValid: false,
    formValid: false
  };

  onFormSubmit(event) {
    event.preventDefault();
    const userData ={
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
      password2: event.target.password2.value
    }
    const errors = registerValidator(userData);
    console.log(errors);
    if (errors.length === 0) {
      registerUser(userData);
    }
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              name='username'
              value={this.state.username}
              onChange={e => this.setState({username:e.target.value})}
            />
            <br />
            <label htmlFor='email'>e-mail</label>
            <input
              type='text'
              name='email'
              value={this.state.email}
              onChange={e => this.setState({email:e.target.value})}
            />
            <br />
            <label htmlFor='password'>Password</label>
            <input
              type='text'
              name='password'
              value={this.state.password}
              onChange={e => this.setState({password:e.target.value})}
            />
            <br />
            <label htmlFor='password2'>Confirmpassword</label>
            <input
              type='text'
              name='password2'
              value={this.state.password2}
              onChange={e => this.setState({password2:e.target.value})}
            />
            <br />
            <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default Register;
