import React from 'react';
import { connect } from 'react-redux';
import { moviesPage } from '../../actions'
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import  seansConteinerStyles from '../../styles/seansConteinerStyles'
import SelectsPlaces from './SelectPlaces'

const styles = seansConteinerStyles();

class SelectPlaceConteiner extends React.Component {
    componentDidMount() {

    }

    back() {
        this.props.moviesPage();
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={() => this.back()}>WRÓĆ</button>
                </div>
                <SelectsPlaces />
            </div>
        )
    }
}

SelectPlaceConteiner.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(null, { moviesPage } )(withStyles(styles)(SelectPlaceConteiner));