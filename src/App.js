import React, { Component } from 'react';
import './App.css';
import {movies} from  './constants/movieList.js';
import SearchBox from './components/Search.js';

console.log('return form searchBox', SearchBox);

function searchingFor (term) {
    return function (y) {
        console.log('this is y', y);
        return !(!y.name.toLowerCase().includes(term.toLowerCase()) && term);
    }
}

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies: movies,
            term: ''
        };
    }
    render() {
        console.log('I was triggered during app render');
        const {term,movies} = this.state;
        console.log('the state before search',this.state);
        console.log('the movies is',movies);
        console.log('the term is', term+'is empty?');
        return (
            <div className="container">
                <SearchBox />
                {
                    movies.filter(searchingFor(term)).map(movie =>
                        <div key={movie.id} className="movies">
                            <div className="col-md-6">
                                <h1 className="well">{movie.name}</h1>
                                <ul className="list-group">
                                    <li className="list-group-item">{movie.year}</li>
                                    <li className="list-group-item">{movie.date}</li>
                                    <li className="list-group-item">Directed by: {movie.directors}</li>
                                </ul>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default App;
