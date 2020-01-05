import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
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
    const { classes } = this.props;
    if (this.props.isLogin) {
      return <Button onClick={() => this.logout()}>LOG OUT</Button>;
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
          <Button className={classes.button} >Cennik </Button>
        </div>
        <div>
        <IconButton className={classes.searchButton} color="inherit">
          <SearchIcon />
          </IconButton>
          <TextField className={classes.textField}/>
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
        <IconButton edge="start" className={classes.menuButton}  color="inherit">
            <MenuIcon onClick={() => this.sideDrawer()}></MenuIcon>
          </IconButton>
          <Button className={classes.button} onClick={() => this.movies()}>Repertuar</Button>
          <Button className={classes.button} >Cennik </Button>
        </div>
        <div className={classes.spacer} ></div>
        <div>
        <IconButton className={classes.searchButton} color="inherit">
          <SearchIcon />
          </IconButton>
          <TextField className={classes.textField}/>
        </div>
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
