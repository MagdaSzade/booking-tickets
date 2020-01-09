import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import BuyTicketButton from './BuyTicketButton';  
import { Button} from '@material-ui/core';

import movieDetailsStyles from '../../styles/movieDetailsStyles';

const styles = movieDetailsStyles();

class MovieDetails extends React.Component {
    seanses() {
        const { movie } = this.props.movie;
        const { classes } = this.props;
        return movie.seanses.map((seans) => {
            return (
                <div key={`${movie._id} ${seans.day}`} className={ classes.box}>
                    <div className={ classes.display} >{seans.day}</div>
                    <div>
                        {seans.hours.map((hour) => {
                            return (
                                <div key={`${hour} ${movie.name} ${seans}`} className={ classes.displayFlex }>
                                    <div  >{hour}</div>
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
                    <img className={ classes.image } alt={movie.name} src={movie.imgSrc} /> 
                    <h1>{movie.name}</h1>
                    <h3>{movie.description}</h3>
                    <h4>{movie.releaseDate} / {movie.genre} / {movie.origin} / {movie.time} </h4>
                    <div className={ classes.displayFlex }>
                        {this.seanses()}
                    </div> 
                    <Button className={classes.button} onClick={this.props.closePopup}>Wróć</Button>  
                </div>  
            </div>  
        );  
    }  
}  

MovieDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(MovieDetails);
