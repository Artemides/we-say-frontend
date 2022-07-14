import React from 'react';
import {MdSearch} from 'react-icons/md';
import '../styles/SearchBar.css';
export const SearchBar=()=>{
    return(
        <section className="search-bar--container">
            <MdSearch className="search-bar--icon" fill='white'/>
            <input type="text" className="search-bar--text" placeholder='Search' />
        </section>
    );
}