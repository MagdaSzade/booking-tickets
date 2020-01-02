import React from 'react';
import UpperDaysBar from './UpperDaysBar';
import MoviesConteiner from './MoviesConteiner';

class Movies extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <UpperDaysBar />
                </div>
                <div>
                    <MoviesConteiner />
                </div>
            </div>
        )
    }
}

export default Movies;