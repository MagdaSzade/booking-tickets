import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { seans } from '../../__test__/bookingTicketTest';
import  seansConteinerStyles from '../../styles/seansConteinerStyles'

const styles = seansConteinerStyles();

class SelectPlaces extends React.Component {
    onSelectSeat(event) {
        console.log(event.target);
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
                            console.log(seat);
                            return (
                                <div onClick={(event) => this.onSelectSeat(event)}data-booked={seat.isBooked}
                                data-movie={this.props.selectedMovie}
                                data-day={this.props.selectedDay}
                                data-hour={this.props.selectedSeansHour}
                                data-key={seat.seatMark}>?</div>
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

const mapStateToProps = (state) => {
    return ({
        selectedDay: state.selectedDay,
        selectedMovie: state.selectedMovie,
        selectedSeansHour: state.selectedSeansHour
    });
}

SelectPlaces.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(SelectPlaces));