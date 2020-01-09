import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import { loginValidator } from '../validators/loginDataValidator';
import { loginUser } from '../api/user';
import { login, moviesPage, choosePlacePage } from '../actions';


import loginStyles from '../styles/loginStyles';

const styles = loginStyles();

const listStyle = {
  listStyle: 'none',
  color: '#ff9a00',
  marginLeft: '1rem'
};

class Login extends React.Component {
  state = {
      email: '',
      password: '',
      formErrors: {}
  };

  displayErrors = () => {
    let list = [];
    let listItem = [];
    for (let key in this.state.formErrors) {
      if (this.state.formErrors.hasOwnProperty(key)) {
        listItem.push(<li key={this.state.formErrors[key]}>{this.state.formErrors[key]}</li>)
      }
    }
    list.push(<ul style={listStyle}>{listItem}</ul>)
    return list;
  }

  onFormSubmit = async (event) => {
    event.preventDefault();
    const userData ={
      email: event.target.email.value,
      password: event.target.password.value,
    }
    let errors = loginValidator(userData);
    if (errors.length === 0) {
      const response = await loginUser(userData);
      if (response.includes("Invalid")) {
        errors = {error: response};
        this.setState({formErrors: errors});
      } else {
        this.props.login(response);
        if (this.props.selectedMovie != null) {
          this.props.choosePlacePage();
        } else {
          this.props.moviesPage();
        }
      }
    } else {
      errors = Object.assign({}, ...errors);
      this.setState({formErrors: errors});
    }
  }

    render() {
      const { classes } = this.props;
        return(
          <div className={classes.conteiner}>
            <form className={classes.conteiner2} onSubmit={this.onFormSubmit}>
                <label className={classes.label} >E-mail:</label>
                <input className={classes.input} 
                  type='text'
                  name='email'
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value})}
                />
                <br />
                <label className={classes.label} >Hasło:</label>
                <input className={classes.input} 
                  type='text'
                  name='password'
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value})}
                />
                <br />
                <input className={classes.button} type="submit"value="Wyślij"></input>
            </form>
            {this.displayErrors()}
          </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default connect(mapStateToProps, { login, moviesPage, choosePlacePage })(withStyles(styles)(Login));
