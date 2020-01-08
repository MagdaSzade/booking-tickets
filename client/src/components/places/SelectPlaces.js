import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { seans } from '../../__test__/bookingTicketTest';
import database from '../../api/database';
import  seansConteinerStyles from '../../styles/seansConteinerStyles'

const styles = seansConteinerStyles();

class SelectPlaces extends React.Component {
    state = {
        places: []
    };

    componentDidMount() {
        this.fetchData();  
    }

    async fetchData() {
        const response = await database.post('/api/seanse/getOne', {
            movie: this.props.selectedMovie,
            day: this.props.selectedDay,
            hour: this.props.selectedSeansHour
        } )
        console.log(response.data.data[0].seats);
        this.setState({places: response.data.data[0].seats})
    }

    onSelectSeat(event) {
        console.log(event.target);
    }

    seats() {
        const { classes } = this.props;
        return (
            this.state.places.map((row) => {
                return (
                    <div key={row[0].seatMark} className={ classes.grid }>
                        {row.map((seat) => {
                            return (
                                <div onClick={(event) => this.onSelectSeat(event)}data-booked={seat.isBooked}
                                data-movie={this.props.selectedMovie}
                                data-day={this.props.selectedDay}
                                data-hour={this.props.selectedSeansHour}
                                data-key={seat.seatMark}
                                key={seat.seatMark}>
                                    {seat.seatMark}
                                </div>
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
            <div className={ classes.container }>
                <div>
                <div className={ classes.screen }>EKRAN</div>
                {this.seats()}
                </div>
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