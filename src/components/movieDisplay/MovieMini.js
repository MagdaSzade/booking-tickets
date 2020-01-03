import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';

import MovieDetails from './MovieDetails';
import BuyTicketButton from './BuyTicketButton';

class MovieMini extends React.Component {
    state = { showPopup: false };   

    togglePopup(movie) {
        if (this.state.showPopup === false) {
            this.setState( { showPopup: movie.name });    
        } else {
            this.setState({ showPopup: false });
        }  
   }

    seanses(movie) {
        for (let i = 0; i < movie.seanses.length; i++) {
            if (movie.seanses[i].day === this.props.selectedDay) {
                return (
                     movie.seanses[i].hours.map((hour) => {
                         return (
                             <div>
                                <div>{hour}</div>
                                <BuyTicketButton title={movie.name} day={movie.seanses[i].day} hour={hour}/>
                            </div>
                         )
                     })
                )
            }
        }
        return (
            <div>Dzisiaj nie wyświetlamy</div>
        )
    }

    render() {
        const { classes } = this.props;
        return (
            this.props.movies.map((movie) => {
                return(
                    <div key={ movie._id } className={ classes.movieContent }>
                        <img alt='movie poster' src={movie.imgSrc} className={ classes.image }/>
                        <div className={ classes.text }>
                            <div>
                                <h1>{movie.name}</h1>
                            </div>
                            <div>
                                {movie.genre}
                            </div>
                            <div>
                                {movie.time}
                            </div>
                            <div>
                                {movie.origin}
                            </div>
                            <div>
                                {movie.releaseDate}
                            </div>
                            <button onClick={() => this.togglePopup(movie)}>Więcej...</button>
                        </div>
                        <div>
                            {this.seanses(movie)}
                        </div>
                        {(this.state.showPopup === movie.name) ? <MovieDetails movie={{movie}} closePopup={this.togglePopup.bind(this)}/> : null }
                    </div>
                )                
            })
        )
    }
}

const styles = {
    movieContent: {
        width: "100%",
        border: '2px solid yellow',
        display: 'flex',
    },
    image: {
        width: '250px',
        height: 'auto',
        margin: '10px'
    },
    text: {
        margin: '10px'
    }
}

const mapStateToProps = (state) => {
    return {
        selectedDay: state.selectedDay
    }
}

MovieMini.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default connect(mapStateToProps)(withStyles(styles)(MovieMini));