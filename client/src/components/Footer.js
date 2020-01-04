import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

class Footer extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.conteiner}>this is footer</div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        movies: state.movies, 
        selectedDay: state.selectedDay
    }
}

const styles = {
    conteiner: {
        margin: '25px auto',
        height: '190px',
        backgroundImage: "linear-gradient(rgba(10, 105, 135, .7), rgba(10, 105, 135, .4)), url('https://i.ibb.co/vD0DkF9/1504-m00-i104-n034-s-c12-157751486-cinema-with-white-screen.jpg')",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        boxShadow: '0 0 5px 5px #3A3A3A inset',
        opacity: '0.50',
    }
}
Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default connect(mapStateToProps)(withStyles(styles)(Footer));