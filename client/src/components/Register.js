import React from 'react';
import {
  registerValidator
} from '../validators/registerDataValidator';
import {
  registerUser
} from '../api/user';
import PropTypes from 'prop-types';
import {
  withStyles
} from '@material-ui/styles';


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
            listItem.push( < li > {
                this.state.formErrors[key]
              } < /li>)
            }
          }
          list.push( < ul style = {
              listStyle
            } > {
              listItem
            } < /ul>)
            return list;
          }

          onFormSubmit = event => {
            event.preventDefault();
            loginPage();
            const userData = {
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
              this.setState({
                formErrors: errors
              });
            }
          }

          render() {
            const {
              classes
            } = this.props;
            return ( <
              div className = {
                classes.conteiner
              } > {
                this.displayErrors()
              } <
              form className = {
                classes.conteiner2
              }
              onSubmit = {
                this.onFormSubmit
              } >
              <
              label className = {
                classes.label
              }
              htmlFor = 'username' > Nazwa użytkownika: < /label> <
              input className = {
                classes.input
              }
              type = 'text'
              name = 'username'
              value = {
                this.state.username
              }
              onChange = {
                e => this.setState({
                  username: e.target.value
                })
              }
              /> <
              br / >
              <
              label className = {
                classes.label
              }
              htmlFor = 'email' > E - mail: < /label> <
              input className = {
                classes.input
              }
              type = 'text'
              name = 'email'
              value = {
                this.state.email
              }
              onChange = {
                e => this.setState({
                  email: e.target.value
                })
              }
              /> <
              br / >
              <
              label className = {
                classes.label
              }
              htmlFor = 'password' > Hasło: < /label> <
              input className = {
                classes.input
              }
              type = 'text'
              name = 'password'
              value = {
                this.state.password
              }
              onChange = {
                e => this.setState({
                  password: e.target.value
                })
              }
              /> <
              br / >
              <
              label className = {
                classes.label
              }
              htmlFor = 'password2' > Potwierdź hasło: < /label> <
              input className = {
                classes.input
              }
              type = 'text'
              name = 'password2'
              value = {
                this.state.password2
              }
              onChange = {
                e => this.setState({
                  password2: e.target.value
                })
              }
              /> <
              br / >
              <
              input className = {
                classes.button
              }
              type = "submit"
              value = "Submit" > < /input> <
              /form> <
              /div>
            );
          }
        }

        const styles = {
          conteiner: {
            height: '260px',
            marginTop: '30px',
            background: 'rgba(10, 105, 135, 0.2)',
            display: 'flex',
            justifyContent: 'center',
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
            marginTop: '20px',

          },
          label: {
            marginRight: '15px',
            marginBottom: '15px',
          },
          input: {
            marginBottom: '15px',
            background: 'none',
            border: 'none',
            borderBottom: '1px solid grey',
          },
        }


        Register.propTypes = {
          classes: PropTypes.object.isRequired,
        };


        export default withStyles(styles)(Register);
