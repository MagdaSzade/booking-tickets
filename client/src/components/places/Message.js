import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Button} from '@material-ui/core';

import messageStyles from '../../styles/messageStyles';

const styles = messageStyles();

class Message extends React.Component {
    
    close(event) {
        if (event.target.className.includes('popup')) {
            this.props.closePopup();
        }    
    }

    render() {
        const { classes } = this.props;  
        return (  
            <div className={ classes.popup } onClick={(event) => this.close(event)}>  
                <div className={ classes.inner }> 
                    <h1>{this.props.text}</h1>
                    <Button className={classes.button} onClick={this.props.closePopup}>Zamknij</Button>  
                </div>  
            </div>  
        );  
    }  
}  



Message.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Message);
