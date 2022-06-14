import React from 'react'
import { urlItemsAPI } from '../../helpers/apiURL';
import { useRequestAPI } from '../../hooks/useRequestAPI';
import { useSearchParams } from "react-router-dom";
import CategoryList from '../../components/categories/CategoryList';
import ErrorPage from '../ErrorPage';
import ProductList from '../../components/products/ProductList';


const SearchResultPage = () => {

    // se obtienen los párametros de esta vista (valores en la URL después de ?)
    const [searchParams] = useSearchParams();

    // se obtiene el parámetro "search"
    const query = searchParams.get("search");

    // se busca en el backend los productos que cumplen que cumplen con la condición de filtrado.
    // Por requerimiento, se devuelven solo 4.
    //
    // loaded indica si finalizó la búsqueda (para poder decidir si se muestra el resultado o 
    // la pantalla de búsqueda sin coincidencias).
    const { data, loaded } = useRequestAPI(urlItemsAPI(query, 4));

    return (
        <>
            {(loaded &&
                (data.items.length > 0 ?

                    <main className="search-result__container">
                        <CategoryList items={data.categories} />
                        <ProductList items={data.items} />
                    </main>

                    :

                    <ErrorPage >
                        <h3>No hay publicaciones que coincidan con tu búsqueda.</h3>
                        <ul>
                            <li><strong>Revisá la ortografía</strong> de la palabra.</li>
                            <li>Utilizá <strong>palabras más genéricas</strong> o menos palabras.</li>
                            <li>Navegá por las categorías para encontrar un producto similar</li>
                        </ul>
                    </ErrorPage >))}
        </>
    )
}

export default SearchResultPage