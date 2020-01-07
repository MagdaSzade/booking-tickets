import React from 'react';
import { loginValidator } from '../validators/loginDataValidator';
import database from '../api/database';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

class Login extends React.Component {
  state = {
      email: '',
      password: ''
  };

  loginUser = async (user) => {
    let response = {};
    try {
        response = await database.post('api/login', {
            user
        })
    } catch (err) {
        console.log(err);
    }
    console.log(response.data);
  }

  onFormSubmit(event) {
    event.preventDefault();
    const userData ={
      email: event.target.email.value,
      password: event.target.password.value,
    }
    const errors = loginValidator(userData);
    console.log(errors);
    if (errors.length === 0) {
      this.loginUser(userData);
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
                    <input className={classes.button} type="submit" value="Submit"></input>
                </form>
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


Login.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Login);
