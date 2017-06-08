import React, {Component} from 'react';
import {moviesAll} from  './constants/movieList.js';
import SearchBox from "./components/Search";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesAll: moviesAll
        };
    }

    render() {
        return (
            <div className="container">
                <SearchBox/>
                {
                    this.state.moviesAll.map((movie, index) =>
                        <div key={index} className="movies">
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
