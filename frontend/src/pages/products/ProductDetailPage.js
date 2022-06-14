import React from 'react'
import { urlItemAPI } from '../../helpers/apiURL';
import { useRequestAPI } from '../../hooks/useRequestAPI';
import { useParams } from "react-router-dom"
import CategoryList from '../../components/categories/CategoryList';
import ProductDescription from '../../components/products/ProductDescription';

const ProductDetailPage = () => {

    // se obtiene el parametro id
    let { id } = useParams();

    // se buscan los datos del producto en el backend
    const { data } = useRequestAPI(urlItemAPI(id));

    return (
        <>
            {data && <main className='product-detail__container'>
                <CategoryList items={data.item.categories} />
                <ProductDescription item={data.item} />
            </main>
            }
        </>
    )
}

export default ProductDetailPage