import React, {Component} from 'react';

//Equals to this:
// const Component = React.Component;

class SearchBar extends Component{
    // replacement of getInitialState
    constructor(props){
        super(props);
       this.setState = {term:''}
    }
    render(){
        return(
            <div>
                <input onChange={e => this.setState({term: e.target.value})}/>
            </div>
       

        )
    }
}
export default SearchBar;
// module.exports = SearchBar;