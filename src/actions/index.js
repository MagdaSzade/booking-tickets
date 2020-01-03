export const login = () => {
    return {
        type: 'LOG_IN'
    }
};

export const logout = () => {
    return {
        type: 'LOG_OUT'
    }
};

export const loginPage = () => {
    return {
        type: 'LOGIN_PAGE'
    }
}

export const registerPage = () => {
    return {
        type: 'REGISTER_PAGE'
    }
}

export const moviesPage = () => {
    return {
        type: 'MOVIES_PAGE'
    }
}

export const choosePlacePage = () => {
    return {
        type: 'CHOOSE_PLACE_PAGE'
    }
}

export const confirmPage = () => {
    return {
        type: 'CONFIRM_PAGE'
    }
}

export const movies = (movies) => {
    return {
        type: "MOVIES",
        payload: movies
    }
}

export const selectedDay = (day) => {
    return {
        type: "SELECTED_DAY",
        payload: day
    }
}

export const selectedMovie = (movie) => {
    return {
        type: "SELECTED_MOVIE",
        payload: movie
    }
}

export const selectedHour = (seansHour) => {
    return {
        type: "SELECTED_SEANS_HOUR",
        payload: seansHour
    }
}