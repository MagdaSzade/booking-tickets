import { combineReducers } from 'redux';
import moviesTestData from '../__test__/moviesTestData';
let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();
today = dd + '.' + mm + '.' + yyyy;

const islogginReducer = (isLoggin = false, action) => {
    switch (action.type) {
        case 'LOG_IN': return true;
        case 'LOG_OUT': return false;
        default: return isLoggin;
    }
}

const contentPageReducer = (content = 'MOVIES_PAGE', action) => {
    switch (action.type) {
        case 'LOGIN_PAGE': return 'LOGIN_PAGE';
        case 'REGISTER_PAGE': return 'REGISTER_PAGE';
        case 'MOVIES_PAGE': return 'MOVIES_PAGE';
        case 'CHOOSE_PLACE_PAGE' : return 'CHOOSE_PLACE_PAGE';
        case 'CONFIRM_PAGE': return 'CONFIRM_PAGE';
        default: return content;
    }
}

const moviesReducer = (movies = moviesTestData, action) => {
    switch (action.type) {
        case 'MOVIES': return action.payload;
        default: return movies
    }
}

const selectedDayReducer = (day = today, action) => {
    switch (action.type) {
        case 'SELECTED_DAY': return action.payload;
        default: return day;
    }
}

const selectedMovieReducer = (movie = null, action) => {
    switch (action.type) {
        case 'SELECTED_MOVIE': return action.payload;
        default: return movie;
    }
}

const selectedSeansHourReducer = (seansHour = null, action) => {
    switch (action.type) {
        case 'SELECTED_SEANS_HOUR': return action.payload;
        default: return seansHour;
    }
}

export default combineReducers({
    isLogin: islogginReducer,
    content: contentPageReducer,
    movies: moviesReducer,
    selectedDay: selectedDayReducer,
    selectedMovie: selectedMovieReducer,
    selectedSeansHour: selectedSeansHourReducer
});

