import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyAk2wYBk7x_TzBpLaNF_4_ZlhbJywm-Fp8"

// create a new component that should produce HTML
// => is function!!!

const App = () => {
    return (
     <div>
        <SearchBar />
    </div>
    );
} 

// take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector(".container"));




