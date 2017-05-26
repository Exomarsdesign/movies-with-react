/**
 * Created by Mirela Bumb on 5/26/2017.
 */
import React,{Component} from 'react';

class SearchBox extends Component {
    constructor (props){
        super(props);
        this.searchHandler = this.searchHandler.bind(this);
        this.state = {
            term:''
        }
    }
    searchHandler(ev){
        this.setState({term: ev.target.value})
    }

    render (){
        return (
            <div className="SearchBox">
                <form>
                    <input className="form-control form-control-lg" placeholder="Search" type="text" onChange={this.searchHandler} value={this.term}/>
                </form>
            </div>
        )
    }
}
export default SearchBox;