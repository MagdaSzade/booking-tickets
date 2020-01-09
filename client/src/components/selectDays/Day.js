import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Button} from '@material-ui/core';
import { selectedDay } from '../../actions';
import daysStyles from '../../styles/daysStyles';

const styles = daysStyles();

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



Day.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default connect(null, { selectedDay })(withStyles(styles)(Day));