import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';  

class MovieDetails extends React.Component {
    seanses() {
        const { classes } = this.props;
        return this.props.movie.movie.seanses.map((seans) => {
            return (
                <div>
                    <div>{seans.day}</div>
                    <div>
                        {seans.hours.map((hour) => {
                            return (
                                <div className={ classes.displayFlex }>
                                    <div>{hour}</div>
                                    <button>kup bilet</button>
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
                    <button onClick={this.props.closePopup}>close me</button>  
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
        left: '25%',  
        right: '25%',  
        top: '25%',  
        bottom: '25%',  
        margin: 'auto',  
        borderRadius: '20px',  
        background: 'white'  
      },
    image: {
        width: '40%',
        hight: 'auto'
    },
    displayFlex: {
        display: 'flex'
    }
}
MovieDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(MovieDetails);