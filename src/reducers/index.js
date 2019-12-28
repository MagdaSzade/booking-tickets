import { combineReducers } from 'redux';

const islogginReducer = (isLoggin = false, action) => {
    switch (action.type) {
        case 'LOG_IN': return true;
        case 'LOG_OUT': return false;
        default: return isLoggin;
    }
}

export default combineReducers({
    isLogin: islogginReducer,
});