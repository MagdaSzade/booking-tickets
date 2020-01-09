import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Button} from '@material-ui/core';

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
                    <Button className={classes.button} onClick={this.props.closePopup}>close me</Button>  
                </div>  
            </div>  
        );  
    }  
}  

const styles = {
    popup: {  
        position: 'fixed',  
        width: '100%',
        height: '100%',  
        top: 0,  
        left: 0,  
        right: 0,  
        bottom: 0,  
        margin: 'auto',  
        backgroundColor: 'rgba(0,0,0, 0.5)',
        zIndex: '1',
      },  
      inner: {  
        position: 'absolute',  
        left: '15%',  
        right: '15%',  
        top: '15%',  
        bottom: '15%',  
        margin: '20px',  
        padding: '20px 20px',
        borderRadius: '15px',  
        background: 'lightgrey',
        color: '#212121',
        hight: '100%',
      },
    image: {
        width: '100px',
        hight: 'auto'
    },
    box:{
        border: '2px solid #96bbc7',
        margin: "15px",
        padding: "10px",
        justifyContent: 'center',
    },
    display:{
        display: 'flex',
        justifyContent: 'center',
        color: 'black',
        fontWeight: 'bold',
        margin: "5px",
    },
    displayFlex: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        fontWeight: 'bold',
    },
    button: {
        textAlign: 'center',
        position: "relative",
        background: '#006064',
        borderRadius: 2,
        boxShadow: ' 0 2px 8px 8px rgba(10, 105, 135, .3)',
        color: '#FFC53D',
        height: 30,
        margin: "5px",
    }

}
Message.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Message);
