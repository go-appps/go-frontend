import React from "react";
import TextField from '@material-ui/core/TextField';
import Store from "./state/Store";

class SearchBar extends React.Component{

    constructor(){
        this.state = {
            search: Store.state.destination,
            value: ""
        }
    }

    destinationRef = React.createRef();

    goToMaps = (event) => {
        event.preventDefault();
        alert("SIDD IS A SCHMUCK");
    };

    

    render(){
        return(
        //     <form className = "destination-entry">
        //     <input 
        //     type='text' 
        //     required placeholder='Enter Destination' 
        //     ref={this.destinationRef}
        //     />
        //     <button type = "submit" onClick={this.goToMaps}>Search</button>
        // </form>
        <div>
            <TextField
                id="outlined-search"
                label="Search field"
                type="search"
                className="searchBar"
                margin="normal"
                variant="outlined"
            />
        </div>
        );
    }
}

export default SearchBar;