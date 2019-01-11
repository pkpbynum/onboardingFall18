import React from "react";

const SearchInput = props => (
    <input onChange={props.setQuery} placeholder='Search'></input>
)

export default SearchInput;