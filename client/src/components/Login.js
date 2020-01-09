import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import { loginValidator } from '../validators/loginDataValidator';
import { loginUser } from '../api/user';
import { login, moviesPage, choosePlacePage } from '../actions';

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
                <input className={classes.button} type="submit"value="Submit"></input>
            </form>
            {this.displayErrors()}
          </div>
        );
    }
}

const styles = {
  conteiner: {
      height: '160px',
      marginTop: '30px',
      background: 'rgba(10, 105, 135, 0.2)',
      display: 'flex',
      justifyContent:'center',
      alignItems: 'center',
  },
  conteiner2: {
    marginTop: '-40px',
    position: 'relative',

},
  button: {
    textAlign: 'center',
    position: "absolute",
    background: '#006064',
    border: 'none',
    borderRadius: 2,
    boxShadow: ' 0 2px 8px 8px rgba(10, 105, 135, .3)',
    color: '#FFC53D',
    height: 30,
    padding: '0 20px',
    left: '50%',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginLeft: '-50px',
    marginTop: '10px',
  },
  label:{
      marginRight: '15px',
      marginBottom: '15px',
  },
  input:{
    marginBottom: '15px',
    background: 'none',
    border: 'none',
    borderBottom: '1px solid grey',
  },
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
