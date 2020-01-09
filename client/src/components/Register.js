import React from 'react';
import { connect } from 'react-redux';
import { loginPage } from '../actions';
import { registerValidator } from '../validators/registerDataValidator';
import { registerUser } from '../api/user';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import registeryStyles from '../styles/registeryStyles';

const styles = registeryStyles();

const listStyle = {
  listStyle: 'none',
  color: '#ff9a00',
  marginLeft: '1rem'
};

class Register extends React.Component {

  state = {
    username: '',
    email: '',
    password: '',
    password2: '',
    formErrors: {},
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

  onFormSubmit = async event => {
    event.preventDefault();
    const userData ={
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
      password2: event.target.password2.value
    }
    let errors = registerValidator(userData);
    if (errors.length === 0) {
      let response = await registerUser(userData);
      if (response.data.includes("User registered")) {
        this.props.loginPage();
      } else {
        errors = {error: response.data};
        this.setState({formErrors: errors});
      }
    } else {
      errors = Object.assign({}, ...errors);
      this.setState({formErrors:errors});
    }
  }

  render() {
    const { classes } = this.props;
    return(
      <div className={classes.conteiner}>
        <form className={classes.conteiner2} onSubmit={this.onFormSubmit}>
            <label className={classes.label} htmlFor='username'>Nazwa użytkownika:</label>
            <input className={classes.input}
              type='text'
              name='username'
              value={this.state.username}
              onChange={e => this.setState({username:e.target.value})}
            />
            <br />
            <label className={classes.label} htmlFor='email'>E-mail:</label>
            <input className={classes.input}
              type='text'
              name='email'
              value={this.state.email}
              onChange={e => this.setState({email:e.target.value})}
            />
            <br />
            <label className={classes.label} htmlFor='password'>Hasło:</label>
            <input className={classes.input}
              type='text'
              name='password'
              value={this.state.password}
              onChange={e => this.setState({password:e.target.value})}
            />
            <br />
            <label className={classes.label} htmlFor='password2'>Potwierdź hasło:</label>
            <input className={classes.input}
              type='text'
              name='password2'
              value={this.state.password2}
              onChange={e => this.setState({password2:e.target.value})}
            />
            <br />
            <input className={classes.button} type="submit" value="Wyślij"></input>
        </form>
        {this.displayErrors()}
      </div>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default connect(null, { loginPage })(withStyles(styles)(Register));
