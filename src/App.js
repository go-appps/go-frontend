import React from "react";
import SearchBar from "./components/SearchBar";

class App extends React.Component{
    render(){
        return(
            <div className="go-app">
            <h2>GO</h2>
                <SearchBar className = "search-bar" history={this.props.history}/>
            </div>
        );
    }
}

export default App;