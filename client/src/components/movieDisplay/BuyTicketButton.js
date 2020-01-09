import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Button} from '@material-ui/core';
import { selectedMovie, selectedDay, selectedHour, choosePlacePage, loginPage } from '../../actions';

import buttonStyles from '../../styles/buyTicketButtonStyles';

const styles = buttonStyles();

class BuyTickerButton extends React.Component {
    buyTicket() {
        this.props.selectedMovie(this.props.title); 
        this.props.selectedDay(this.props.day);
        this.props.selectedHour(this.props.hour);
        if (this.props.isLogin) {
            this.props.choosePlacePage();
        } else {
            this.props.loginPage();
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Button className={classes.button} onClick={() => this.buyTicket()}>Kup bilet</Button>
        );
    }
}



BuyTickerButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        isLogin: state.isLogin
    }
};

export default connect(mapStateToProps, { selectedMovie, selectedDay, selectedHour, choosePlacePage, loginPage } ) (withStyles(styles)(BuyTickerButton));