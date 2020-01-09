import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import MovieMini from './MovieMini';

import moviesConteinerStyles from '../../styles/moviesConteinerStyles';

const styles = moviesConteinerStyles();

class MoviesConteiner extends React.Component {
 
    render() {
        const { classes } = this.props;
        return (
            <div className={ classes.conteiner }>
                <MovieMini />
            </div>
        )
    }
}

MoviesConteiner.propTypes = {
    classes: PropTypes.object.isRequired,
}
  
export default withStyles(styles)(MoviesConteiner);
