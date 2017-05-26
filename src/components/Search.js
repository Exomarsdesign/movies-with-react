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
            <form>
                <input type="text" onChange={this.searchHandler} value={this.term}/>
            </form>
        )
    }
}
export default SearchBox;