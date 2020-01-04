import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import contentStyles from '../styles/contentStyles';
import Loggin from './Login';
import Register from './Register';
import Movies from './movieDisplay/Movies';
import UpperDaysBar from './selectDays/UpperDaysBar';
import ChoosePlace from './places/SelectPlaceConteiner';

const styles = contentStyles();

class Content extends React.Component {

    contentTypeCondition() {
        if (this.props.contentType ==='LOGIN_PAGE') {
            return <Loggin />
        }
        if (this.props.contentType ==='REGISTER_PAGE') {
            return <Register />
        }
        if (this.props.contentType ==='MOVIES_PAGE') {
            return (
                <div>
                    <UpperDaysBar />
                    <Movies />
                </div>
            );
        }
        if (this.props.contentType ==='CHOOSE_PLACE_PAGE') {
            return (
                <div>
                    <UpperDaysBar />
                    <ChoosePlace />
                </div>
            );
        }
        if (this.props.contentType ==='CONFIRM_PAGE') {
            return (
                <div>CONFIRM_PAGE</div>
            );
        } else {
            return <div>COŚ SIĘ ZEPSUŁO</div>;
        }
    }

    render() {
        return (
            <div>
                {this.contentTypeCondition()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { contentType: state.content }
  }
  
Content.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default connect(mapStateToProps)(withStyles(styles)(Content));
