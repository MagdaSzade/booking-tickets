import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import appStyles from '../styles/appStyles';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const styles = appStyles();

class App extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
