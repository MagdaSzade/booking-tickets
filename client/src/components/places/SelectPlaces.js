import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { seans, updateSeans } from '../../__test__/bookingTicketTest';
import database from '../../api/database';
import  seansConteinerStyles from '../../styles/seansConteinerStyles'

const styles = seansConteinerStyles();

class SelectPlaces extends React.Component {
    constructor(props) {
        super(props);
        this.placesReserved = [];
        this.state = {
            places: [],
        };
    }


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
        let seats = updateSeans(response.data.data[0].seats);
        this.setState({places: seats});
    }

    onSelectSeat(event) {
        if (event.target.className.includes("placeNotBooked")) {
            event.target.className = this.props.classes.placeReserved;
            this.placesReserver = [event.target.getAttribute('data-key'), ...this.placesReserved];
            console.log(this.placesReserved);
        } else if (event.target.className.includes("placeReserved")) {
            event.target.className = this.props.classes.placeNotBooked;
        }
    }

    seats() {
        const { classes } = this.props;
        return (
            this.state.places.map((row) => {
                return (
                    <div key={row[0].seatMark} className={ classes.grid }>
                        {row.map((seat) => {
                            const seatClass = seat.isBooked ? classes.placeBooked : classes.placeNotBooked;
                            return (
                                <div onClick={(event) => this.onSelectSeat(event)} 
                                className={ seatClass }
                                data-booked={seat.isBooked}
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
                    <button>POTWIERDŹ REZERWACJĘ MIEJSC</button>
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