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
        <form>
            <input
                value={searchField}
                onChange={e => updateSearchData(e)}
                placeholder="Search by name or e-mail"
                type="text"
                name="searchField"
            />
        </form>
    )
}

export default Search;