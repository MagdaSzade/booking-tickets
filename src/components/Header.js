import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Button, InputBase } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';

import headerStyles from '../styles/headerStyles';

const styles = headerStyles();

class Header extends React.Component {
  isLogin() {
    if (this.props.isLogin) {
      return <Button>LOG OUT</Button>;
    } else {
      return (
        <div>
          <Button>Log in</Button>
          <Button>Register</Button>
        </div>
      )
    }
  }

  render() {
    console.log(this.props)
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div>
          <Button>Repertuar</Button>
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

export default connect(mapStateToProps)(withStyles(styles)(Header));
