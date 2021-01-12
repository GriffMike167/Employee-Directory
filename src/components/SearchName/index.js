import React, { useContext } from "react";
import "./SearchName.css";
import DataAreaContext from "../../utils/DataAreaContext";


const SearchName = () => {
    const context = useContext(DataAreaContext)

    return (
        <div className="searchbox">
            <form className="form-inline">
                <input
                className="form-control mr-sm-4"
                type="search"
                placeholder="Search"
                onChange={e => context.handleSearchChange(e)}/>
                <buttin className="btn" type="submit">
                    Search
                </buttin>
            </form>
        </div>
    )
}

export default SearchName;