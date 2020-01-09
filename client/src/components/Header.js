import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { moviesPage, loginPage, registerPage, logout } from '../actions';

import headerStyles from '../styles/headerStyles';

const styles = headerStyles();



class Header extends React.Component {

  register() {
   this.props.registerPage();
  }

  loginMe() {
    this.props.loginPage();
  }
  
  logout() {
    this.props.logout();
    this.props.moviesPage();
  }

  movies() {
    this.props.moviesPage();
  }

  isLogin() {
    const { classes } = this.props;
    if (this.props.isLogin) {
      return <Button className={classes.button} onClick={() => this.logout()}>LOG OUT</Button>;
    } else {
      return (
        <div>
          <Button className={classes.button} onClick={() => this.loginMe()}>Logowanie</Button>
          <Button className={classes.button} onClick={() => this.register()}>Rejestracja</Button>
        </div>
      )
    }
  }

  sideDrawer() {
    const { classes } = this.props;
    return (
      <div className={classes.sideDrawer} >
        <div className={classes.box}>
          <Button className={classes.button} onClick={() => this.movies()}>Repertuar</Button>
        </div>
        <div className={classes.box}>
          {this.isLogin()}
        </div>
      </div>
    );
  };



  render() {
    const { classes } = this.props;
    return (
      <nav className={classes.container}>
        <div>
          <Button className={classes.button} onClick={() => this.movies()}>Repertuar</Button>
        </div>
        <div className={classes.spacer} ></div>
        <div>
          {this.isLogin()}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return { isLogin: state.isLogin }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { moviesPage, logout, loginPage, registerPage } )(withStyles(styles)(Header));
