import React from "react";
import SearchName from "../SearchName";

import "./Nav.css";

function Nav (){
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="search-area col-4">
            <SearchName />
        </div>
        </nav>
    )
}

export default Nav;