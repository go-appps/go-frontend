import React from "react";

class SearchBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoaded: true,
            items: [],
        }
    }

    myInput = React.createRef();
    
    handleSubmit = (event) => {
        // 1. stop form from submitting
        event.preventDefault();
        // 2. get the text from that input
        const destination = this.myInput.current.value;
        
        this.setState({
            isLoaded: false
        });  

        fetch(`https://go-app-api.herokuapp.com/places/search?location=${destination}`)
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json.predictions
            })
        });
        
        //this.props.history.push(`/maps/${locationName}`);
    };
     
    render(){
        var {isLoaded, items} = this.state;

        if(!isLoaded){
            return (<div>Loading...</div>);
        }

        return(
            <div>
                <form className="destination-entry" onSubmit={this.handleSubmit}>
                    <input 
                    type='text' 
                    ref={this.myInput}
                    required placeholder='Enter Destination' 
                    />
                    <button type="submit">Search</button>
                </form>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.place_id}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default SearchBar;