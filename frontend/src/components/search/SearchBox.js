import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

const SearchBox = () => {
    const [searchParams] = useSearchParams();
    const [filterText, setfilterText] = useState('');

    const navigate = useNavigate();

    // query y el useEffect que depende de query se emplean para actualizar el filterText
    // en caso de que se ingrese una url de búsqueda manualmente 
    const query = searchParams.get("search");
    useEffect(() => {
        if (query) {
            setfilterText(query);
        } else {
            setfilterText('');
        }
    }, [query]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (filterText.trim()) {
            // se navega a la búsqueda
            navigate(`/items?search=${filterText}`);
        }
    }

    const changeHandler = (e) => {
        setfilterText(e.target.value);
    }

    return (
        <div className="search-box__container">
            <form onSubmit={submitHandler}>
                <input type="text"
                    name="filterText"
                    value={filterText}
                    onChange={changeHandler}
                    placeholder="Nunca dejes de buscar" />

                <input type="submit" />
            </form>
        </div>
    )
}

export default SearchBox