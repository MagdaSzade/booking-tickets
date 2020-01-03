import React from 'react';
import { connect } from 'react-redux';
import { selectedMovie, selectedDay, selectedHour, choosePlacePage } from '../../actions';

class BuyTickerButton extends React.Component {
    buyTicket() {
        this.props.selectedMovie(this.props.title); 
        this.props.selectedDay(this.props.day);
        this.props.selectedHour(this.props.hour);
        this.props.choosePlacePage();
    }

    render() {
        return (
            <button onClick={() => this.buyTicket()}>Kup bilet</button>
        );
    }
}

export default connect(null, { selectedMovie, selectedDay, selectedHour, choosePlacePage } )(BuyTickerButton);