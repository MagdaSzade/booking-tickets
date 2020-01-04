import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Button} from '@material-ui/core';
import { selectedDay } from '../../actions';

class Day extends React.Component {
    
    setDay() {
        this.props.selectedDay(this.props.data);
    }

    render() {
        const { classes } = this.props;
        return (
            <Button onClick={() => this.setDay()} className={ classes.calenderPage }>
                {this.props.data}
            </Button>
        )
    }
}

const styles = {
    calenderPage: {
        textAlign: 'center',
        position: "relative",
        background: '#006064',
        borderRadius: 2,
        boxShadow: ' 0 2px 8px 8px rgba(10, 105, 135, .3)',
        color: '#FFC53D',
        height: 40,
        padding: '0 30px',
    },
}

Day.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default connect(null, { selectedDay })(withStyles(styles)(Day));