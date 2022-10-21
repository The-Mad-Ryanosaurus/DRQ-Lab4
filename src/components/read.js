import React from "react";
import axios from "axios";

import { Books } from "./books";

export class Read extends React.Component {

    // Invoked when Component becomes visible
    // Makes a HTTP Request with Axios
    // Shows the Response from API (promise)
    componentDidMount() {
        
        axios.get('https://jsonblob.com/api/jsonblob/1027219693823606784')
        // Get HTTP Request and Update State
        // => = function()
        .then((response)=>{
            this.setState({
                // Response is whole HTTP response 
                //.data is for the data we want from the arrays
                books: response.data
            })
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    state = {
        books: [ ]
    }
    render() {
        return (
            <div>
                <h1>My Read in another Component</h1>
                {/* Pulls the state to books and passes the state to the child (books) */}
                <Books books = {this.state.books}></Books>
            </div>
        );
    }
}