import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import { selectedDay } from '../../actions';

class Day extends React.Component {
    
    setDay() {
        this.props.selectedDay(this.props.data);
    }

    render() {
        const { classes } = this.props;
        return (
            <button onClick={() => this.setDay()} className={ classes.calenderPage }>
                {this.props.data}
            </button>
        )
    }
}

const styles = {
    calenderPage: {
        textAlign: 'center',
        padding: '20px',
        border: 'solid 1px green',
        position: "relative",
        marigin: 'auto'
    },
}

Day.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default connect(null, { selectedDay })(withStyles(styles)(Day));