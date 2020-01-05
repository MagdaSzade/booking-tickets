import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Button} from '@material-ui/core';
import { selectedMovie, selectedDay, selectedHour, choosePlacePage } from '../../actions';

class BuyTickerButton extends React.Component {
    buyTicket() {
        this.props.selectedMovie(this.props.title); 
        this.props.selectedDay(this.props.day);
        this.props.selectedHour(this.props.hour);
        this.props.choosePlacePage();
    }

    render() {
        const { classes } = this.props;
        return (
            <Button className={classes.button} onClick={() => this.buyTicket()}>Kup bilet</Button>
        );
    }
}

const styles = {
    button: {
        textAlign: 'center',
        position: "relative",
        background: '#006064',
        borderRadius: 2,
        boxShadow: ' 0 2px 8px 8px rgba(10, 105, 135, .3)',
        color: 'white',
        height: 30,
        margin: "10px",
    }

}

BuyTickerButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(null, { selectedMovie, selectedDay, selectedHour, choosePlacePage } ) (withStyles(styles)(BuyTickerButton));