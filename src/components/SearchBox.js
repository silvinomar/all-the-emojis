import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
    return (
        <article className="py-4 sticky-top">
            <div className="container text-center px-5">
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">🔎</span>
                    <input type="text" className="form-control" onChange={searchChange}  placeholder="What emoji are you looking for?" aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
            </div>
        </article>
    );
}

export default SearchBox;