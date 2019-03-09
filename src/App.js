import React from "react";
import SearchBar from "./components/SearchBar";
import Store from "./state/Store";

class App extends React.Component{

    state = Store.state;

    render(){
        return(
            <div className="go-app">
            <h2>GO</h2>
                <SearchBar className = "search-bar" searchDestination={}/>
            </div>
        );
    }
}

export default App;