/**
 * Created by Mirela Bumb on 5/26/2017.
 */
import React,{Component} from 'react';
import {moviesAll} from  '../constants/movieList.js';
import App from '../App.js';
import '../search.css';

class SearchBox extends Component {
    constructor (props){
        super(props);
        this.state = {
            movies: moviesAll
        };
        this.filteredList = this.filteredList.bind(this);
    }

    filteredList(event) {
        let updatedList = this.state.movies;
        updatedList = updatedList.filter(function(item) {
            return item.name.toLowerCase().search(
                    event.target.value.toLowerCase()) !== -1;
        });
        this.setState({movies:updatedList});
    }

    render (){
        return (
            <div className="SearchBox">
                <form>
                    <label>Looking for a specific movie?</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filteredList} />
                </form>
               <App moviesAll={this.state.movies}/>
            </div>
        )
    }
}
export default SearchBox;