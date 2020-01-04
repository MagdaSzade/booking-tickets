import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Day from './Day';

class UpperDaysBar extends React.Component {

    setDayText(day) {
        const dd = String(day.getDate()).padStart(2, '0');
        const mm = String(day.getMonth() + 1).padStart(2, '0');
        const yyyy = day.getFullYear();
        const today = dd + '.' + mm + '.' + yyyy;
    
        return today;
    }

    calenderPages() {
        const repertuarDays = 5;
        const daysArray = [];

        for (let i = 0; i < repertuarDays; i++) {
            const day = new Date();
            day.setDate(day.getDate() + i);
            daysArray.push(day); 
        }

        return (
            daysArray.map((day) => {
                return (
                    <div key={day.getDate()}>
                        <Day data={this.setDayText(day)} />
                    </div>
                )
            })
        )
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.calender}>
                {this.calenderPages()}
            </div>
        );
    }
}

const styles = {
    calender: {
        padding: '25px 0px',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'space-around',
        fontWeight: 'bold'
    }
}

UpperDaysBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(UpperDaysBar);