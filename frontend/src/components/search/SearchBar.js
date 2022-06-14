import React from 'react'
import { Link } from 'react-router-dom'
import SearchBox from '../search/SearchBox'

const SearchBar = () => {
    return (
        <header className="search-bar__container">
            <nav>
                <Link to="/" aria-hidden>Mercado Libre Logo</Link>
                <SearchBox />
            </nav>
        </header>
    )
}

export default SearchBar