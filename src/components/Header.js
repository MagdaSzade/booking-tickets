import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';
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
  }

  movies() {
    this.props.moviesPage();
  }

  isLogin() {
    if (this.props.isLogin) {
      return <Button onClick={() => this.logout()}>LOG OUT</Button>;
    } else {
      return (
        <div>
          <Button onClick={() => this.loginMe()}>Log in</Button>
          <Button onClick={() => this.register()}>Register</Button>
        </div>
      )
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div>
          <Button onClick={() => this.movies()}>Repertuar</Button>
          <Button>Cennik</Button>
        </div>
        <div>
          <SearchIcon />
        </div>
        <div>
          {this.isLogin()}
        </div>
      </div>
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
