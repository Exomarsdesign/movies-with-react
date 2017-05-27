/**
 * Created by Mirela Bumb on 5/26/2017.
 */
import React,{Component} from 'react';
import '../search.css';

class SearchBox extends Component {
    constructor (props){
        super(props);
        this.state = {term:''};
        this.searchHandler = this.searchHandler.bind(this);
    }
    searchHandler(ev){
        console.log('the event ..');
        this.setState({term: ev.target.value});
        console.log('after setstate');
        alert('The new value of input is:' + this.state.term);

    }
    render (){
        console.log('I was triggered during render');
        return (
            <div className="SearchBox">
                <form>
                    <label>Looking for a specific movie?</label>
                    <input className="form-control form-control-lg" placeholder="Search" type="text" onChange={this.searchHandler} value={this.state.term} />
                </form>
            </div>
        )

    }
}
export default SearchBox;