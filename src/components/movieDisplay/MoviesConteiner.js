import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import MovieMini from './MovieMini';

class MoviesConteiner extends React.Component {
 
    render() {
        const { classes } = this.props;
        return (
            <div className={ classes.conteiner }>
                <MovieMini movies={this.props.movies}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        movies: state.movies, 
        selectedDay: state.selectedDay
    }
}

const styles = {
    conteiner: {
        margin: 'auto',
        border: "1px solid blue",
    }
}
MoviesConteiner.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default connect(mapStateToProps)(withStyles(styles)(MoviesConteiner));
