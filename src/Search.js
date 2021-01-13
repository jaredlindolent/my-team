import React, { useState, useEffect } from 'react';
import './style.css';

const Search = (props) => {
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        props.onSearchChanged(searchField);
    }, [searchField])

    const updateSearchData = (e) => {
        setSearchField(e.target.value)
    }

    return (
        <input
            value={searchField}
            onChange={e => updateSearchData(e)}
            placeholder="Search by name or e-mail"
            type="text"
            name="searchField"
            autoFocus={true}
        />
    )
}

export default Search;