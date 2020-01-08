import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import { fetchMovies } from '../../actions';
import MovieDetails from './MovieDetails';
import BuyTicketButton from './BuyTicketButton';

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
                                    <BuyTicketButton  title={movie.name} day={movie.seanses [i].day} hour={hour}/>
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
                                <h1  style={{margin:'0px 0px 15px 15px', color: 'white',}} >{movie.name}</h1>
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
                            <Button className={classes.button} onClick={() => this.togglePopup(movie)}>Więcej...</Button>
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
        width: "90%",
        borderBottom: '4px dashed #FFC53D',
        display: 'flex',
        margin: '30px',
        padding: '10px',
    },
    image: {
        width: '275px',
        height: 'auto',
        objectFit: 'contain',

    },
    text: {
        margin: '25px',
        color: '#d8d8d8',
    },
    textND: {
        margin: '30px',
        color: '#FFC53D',
        fontWeight: 'bold',
        fontSize: '20px',
    },
    button: {
        textAlign: 'center',
        position: "absolute",
        right: '25px',
        background: '#006064',
        borderRadius: 2,
        boxShadow: ' 0 2px 8px 8px rgba(10, 105, 135, .3)',
        color: '#FFC53D',
        height: 30,
        padding: '0 20px',
        marginTop: '-10px',
    },
    time: {
        alignItems: 'center',
        position: "relative",
        margin: '30px',
        height: 20,
        display: 'flex',
    },
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