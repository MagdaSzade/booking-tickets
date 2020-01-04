import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

import { seans } from '../../__test__/bookingTicketTest';
import  seansConteinerStyles from '../../styles/seansConteinerStyles'

const styles = seansConteinerStyles();

class SelectPlaces extends React.Component {

    condition(seat) {
        const { classes } = this.props;

    }

    seats() {
        const { classes } = this.props;
        const places = seans('name', 'srame', 'dupame');
        console.log(places);
        return (
            places.map((row) => {
                return (
                    <div className={ classes.grid }>
                        {row.map((seat) => {
                            return (
                                <div>?</div>
                            )
                        })}
                    </div>
                ) 
            })
        )
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className={ classes.screen }>EKRAN</div>
                {this.seats()}
            </div>
        )
    }
}

SelectPlaces.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectPlaces);