import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import MovieMini from './MovieMini';


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

const styles = {
    conteiner: {
        margin: 'auto',
        background: 'rgba(10, 105, 135, 0.2)',
    }
}

MoviesConteiner.propTypes = {
    classes: PropTypes.object.isRequired,
}
  
export default withStyles(styles)(MoviesConteiner);
