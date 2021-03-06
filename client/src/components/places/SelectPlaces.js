import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import database from '../../api/database';
import seansConteinerStyles from '../../styles/seansConteinerStyles';
import { updateSeans } from '../../__test__/bookingTicketTest';
import Message from './Message';

const styles = seansConteinerStyles();

class SelectPlaces extends React.Component {
  constructor(props) {
    super(props);
    this.placesReserved = [];
    this.seansId = null;
    this.text = '';
    this.state = {
      places: [],
      showPopup: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    let config = {
      'auth-token': this.props.isLogin
    };
    const response = await database.post(
      '/api/seanse/getOne',

      {
        movie: this.props.selectedMovie,
        day: this.props.selectedDay,
        hour: this.props.selectedSeansHour
      },
      { headers: config }
    );
    let seats = updateSeans(response.data.data[0].seats);
    this.seansId = response.data.data[0]._id;
    this.setState({ places: seats });
  }

  onSelectSeat(event) {
    console.log();
    console.log();
    if (event.target.getAttribute("data-reserved") === "false" && event.target.getAttribute("data-booked") === "false") {
      event.target.className = this.props.classes.placeReserved;
      event.target.setAttribute("data-reserved", "true");
      this.placesReserved = [
        event.target.getAttribute('data-key'),
        ...this.placesReserved
      ];
    } else if (event.target.getAttribute("data-reserved") === "true") {
      event.target.className = this.props.classes.placeNotBooked;
      event.target.setAttribute("data-reserved", "false");
      this.placesReserved = this.placesReserved.filter(value => {
        return value !== event.target.getAttribute('data-key');
      });
    }
  }

  async onConfirmPlaces(event) {
    let config = {
      'auth-token': this.props.isLogin
    };
    const response = await database.put(
      '/api/seanse/bookPlace',
      {
        seansId: this.seansId,
        places: this.placesReserved
      },
      { headers: config }
    );
    this.setState({ showPopup: true });
    this.placesReserved = [];
    if (response.status === 200) {
      this.text = 'Zarezerwowano bilety';
    } else {
      this.text = 'coś się nie udało. Proszę spróbuj ponownie';
    }
    this.fetchData();
  }

  togglePopup(movie) {
    if (this.state.showPopup === false) {
      this.setState({ showPopup: movie.name });
    } else {
      this.setState({ showPopup: false });
    }
  }

  seats() {
    const { classes } = this.props;
    return this.state.places.map(row => {
      return (
        <div key={row[0].seatMark} className={classes.grid}>
          {row.map(seat => {
            const seatClass = seat.isBooked
              ? classes.placeBooked
              : classes.placeNotBooked;
            return (
              <div
                onClick={event => this.onSelectSeat(event)}
                className={seatClass}
                data-booked={seat.isBooked}
                data-reserved="false"
                data-key={seat.seatMark}
                key={seat.seatMark}
              >
                {seat.seatMark}
              </div>
            );
          })}
        </div>
      );
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div>
          <div className={classes.screen}>EKRAN</div>
          {this.seats()}
          <Button
            className={classes.button}
            onClick={event => this.onConfirmPlaces(event)}
          >
            POTWIERDŹ REZERWACJĘ MIEJSC
          </Button>
          {this.state.showPopup === true ? (
            <Message
              text={this.text}
              closePopup={this.togglePopup.bind(this)}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedDay: state.selectedDay,
    selectedMovie: state.selectedMovie,
    selectedSeansHour: state.selectedSeansHour,
    isLogin: state.isLogin
  };
};

SelectPlaces.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(SelectPlaces));
