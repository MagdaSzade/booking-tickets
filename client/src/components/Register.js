import React from 'react';
import { registerValidator } from '../validators/registerDataValidator';
import { registerUser } from '../api/user';


const listStyle = {
  listStyle: 'none',
  color: 'red',
};
class Register extends React.Component {

  state = {
    username: '',
    email: '',
    password: '',
    password2: '',
    formErrors: {},
    usernameValid: false,
    emailValid: false,
    passwordValid: false,
    formValid: false
  };

  displayErrors = () => {
    let list = [];
    let listItem = [];
    for (let key in this.state.formErrors) {
      if (this.state.formErrors.hasOwnProperty(key)) {
        listItem.push(<li>{this.state.formErrors[key]}</li>)
      }
    }
    list.push(<ul style={listStyle}>{listItem}</ul>)
    return list;
  }

  onFormSubmit = event => {
    event.preventDefault();
    loginPage();
    const userData ={
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
      password2: event.target.password2.value
    }
    let errors = registerValidator(userData);
    if (errors.length === 0) {
      registerUser(userData);
    } else {
      errors = Object.assign({}, ...errors);
      this.setState({formErrors:errors});
    }
  }

  render() {
    return(
      <div>

        {this.displayErrors()}

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
