import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import footerStyles from '../styles/footerStyles';

const styles = footerStyles();

class Footer extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.conteiner}> </div>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Footer);
