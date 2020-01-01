import { combineReducers } from 'redux';

const islogginReducer = (isLoggin = false, action) => {
    switch (action.type) {
        case 'LOG_IN': return true;
        case 'LOG_OUT': return false;
        default: return isLoggin;
    }
}

const contentPageReducer = (content = 'REGISTER_PAGE', action) => {
    switch (action.type) {
        case 'LOGIN_PAGE': return 'LOGIN_PAGE';
        case 'REGISTER_PAGE': return 'REGISTER_PAGE';
        case 'MOVIES_PAGE': return 'MOVIES_PAGE';
        case 'CHOOSE_PLACE_PAGE' : return 'CHOOSE_PLACE_PAGE';
        case 'CONFIRM_PAGE': return 'CONFIRM_PAGE';
        default: return content;
    }
}

export default combineReducers({
    isLogin: islogginReducer,
    content: contentPageReducer
});

