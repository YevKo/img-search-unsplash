import { useState } from "react";

function SearchBar( { onSubmit }) {

    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    }

    return <div>
        <form onSubmit={handleFormSubmit}>
            <label> Enter a search term
            <input type="search" value={term} onChange={(event) => {setTerm(event.target.value)}}/>
            </label>
        </form>
    </div>
}

export default SearchBar;