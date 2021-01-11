import React, { useState } from 'react';
import './Style.css';

const Search = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const updateSearchData = (e) => {
        console.log(e.target.name);
    }

    return (
        <form>
            <input
                value={name}
                onChange={e => updateSearchData(e)}
                placeholder="First name"
                type="text"
                name="firstName"
            />
            <input
                value={email}
                onChange={e => updateSearchData(e)}
                placeholder="E-mail"
                type="email"
                name="email"
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Search;