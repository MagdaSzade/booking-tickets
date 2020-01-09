import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import { fetchMovies } from '../../actions';
import MovieDetails from './MovieDetails';
import BuyTicketButton from './BuyTicketButton';

import movieMiniStyles from '../../styles/movieMiniStyles';

const styles = movieMiniStyles();

class MovieMini extends React.Component {
    state = { showPopup: false };
    
    componentDidMount() {
        this.props.fetchMovies();
    }

    togglePopup(movie) {
        if (this.state.showPopup === false) {
            this.setState( { showPopup: movie.name });    
        } else {
            this.setState({ showPopup: false });
        }  
   }

    seanses(movie) {
        const { classes } = this.props;
        if (movie.seanses != null) {
            for (let i = 0; i < movie.seanses.length; i++) {
                if (movie.seanses[i].day === this.props.selectedDay) {
                    return (
                         movie.seanses[i].hours.map((hour) => {
                             return (
                                 <div key={`${hour} ${movie.name} ${movie.seanses[i].day}`} className={classes.time}>
                                    <div>{hour}</div>
                                    <BuyTicketButton  title={movie.name} day={movie.seanses[i].day} hour={hour}/>
                                </div>
                             )
                         })
                    )
                }
            }
        }
        return (
            <div className={ classes.textND}>Dzisiaj nie wyświetlamy</div>
        )
    }

    render() {
        const { classes } = this.props;
        console.log(this.props.movies)
        return (
            this.props.movies.map((movie) => {
                return(
                    <div key={ movie._id } className={ classes.movieContent }>
                        <img alt='movie poster' src={movie.imgSrc} className={ classes.image }/>
                        <div className={ classes.text }>
                            <div>
                                <h1 className={ classes.headerText } >{movie.name}</h1>
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
                        </div>
                        <div >
                            {this.seanses(movie)}
                        </div>
                        <div className={classes.buttonBox } >
                        <Button className={classes.button} onClick={() => this.togglePopup(movie)}>Więcej...</Button>
                        </div>
                        {(this.state.showPopup === movie.name) ? <MovieDetails movie={{movie}} closePopup={this.togglePopup.bind(this)}/> : null }
                    </div>
                )                
            })
        )
    }
}


const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        selectedDay: state.selectedDay
    }
}

MovieMini.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default connect(mapStateToProps, { fetchMovies })(withStyles(styles)(MovieMini));