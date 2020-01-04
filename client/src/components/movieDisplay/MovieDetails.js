import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import BuyTicketButton from './BuyTicketButton';  
import { Button} from '@material-ui/core';

class MovieDetails extends React.Component {
    seanses() {
        const { movie } = this.props.movie;
        const { classes } = this.props;
        return movie.seanses.map((seans) => {
            return (
                <div>
                    <div>{seans.day}</div>
                    <div>
                        {seans.hours.map((hour) => {
                            return (
                                <div className={ classes.displayFlex }>
                                    <div>{hour}</div>
                                    <BuyTicketButton className={classes.button} title={movie.name} day={seans.day} hour={hour}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        })
    }
    
    close(event) {
        if (event.target.className.includes('popup')) {
            this.props.closePopup();
        }    
    }

    render() {
        const { movie } = this.props.movie;
        const { classes } = this.props;  
        return (  
            <div className={ classes.popup } onClick={(event) => this.close(event)}>  
                <div className={ classes.inner }> 
                    <img className={ classes.image } src={movie.imgSrc} /> 
                    <h1>{movie.name}</h1>
                    <h3>{movie.description}</h3>
                    <h4>{movie.releaseDate} / {movie.genre} / {movie.origin} / {movie.time} </h4>
                    <div className={ classes.displayFlex }>
                        {this.seanses()}
                    </div> 
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
        backgroundColor: 'rgba(0,0,0, 0.5)'  
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
        width: '40%',
        hight: 'auto'
    },
    displayFlex: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
MovieDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(MovieDetails);