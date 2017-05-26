import React, { Component } from 'react';
import './App.css';
import {movies} from  './constants/movieList.js';
import SearchBox from './components/Search.js';

function searchingFor (term) {
    return function (y) {
        return y || !term;
    }
}

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies:movies,
            term:'',
        }
    }
    render() {
        const {term,movies} = this.state;
        return (
            <div className="container">
                <SearchBox />

                {
                    movies.filter(searchingFor(term)).map(movie => {
                        return(
                            <div className="movies">
                                <div key={movie.id} className="col-md-6">
                                    <h1 className="well">{movie.name}</h1>
                                    <ul className="list-group">
                                        <li className="list-group-item">{movie.year}</li>
                                        <li className="list-group-item">{movie.date}</li>
                                        <li className="list-group-item">{movie.directors}</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default App;
