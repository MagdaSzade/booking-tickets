import React from 'react';
import { loginValidator } from '../validators/loginDataValidator';
import { loginUser } from '../api/user';

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    };


  onFormSubmit(event) {
    event.preventDefault();
    const userData ={
      email: event.target.email.value,
      password: event.target.password.value,
    }
    const errors = loginValidator(userData);
    console.log(errors);
    if (errors.length === 0) {
        loginUser(userData);
    }
  }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <label>E-mail</label>
                    <input
                      type='text'
                      name='email'
                      value={this.state.email}
                      onChange={e => this.setState({ email: e.target.value})}
                    />
                    <br />
                    <label>Password</label>
                    <input
                      type='text'
                      name='password'
                      value={this.state.password}
                      onChange={e => this.setState({ password: e.target.value})}
                    />
                    <br />
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}

export default Login;
