import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

import { moviesPage, selectedMovie, selectedHour } from '../../actions'
import  seansConteinerStyles from '../../styles/seansConteinerStyles'
import SelectPlaces from './SelectPlaces'

const styles = seansConteinerStyles();

class SelectPlaceConteiner extends React.Component {

    back() {
        this.props.moviesPage();
        this.props.selectedMovie(null);
        this.props.selectedHour(null);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div>
                    <Button className={ classes.button} onClick={() => this.back()}>WRÓĆ</Button>
                </div>
                <SelectPlaces />
            </div>
        )
    }
}

SelectPlaceConteiner.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default connect(null, { moviesPage, selectedMovie, selectedHour } )(withStyles(styles)(SelectPlaceConteiner));