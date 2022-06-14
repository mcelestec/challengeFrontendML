import React from 'react'
import ProductItem from './ProductItem'
import PropTypes from 'prop-types';

const ProductList = ({ items }) => {
    return (
        <section className="product-list__container">
            <ul>
                {
                    items.map(item =>
                        <li key={item.id}>
                            <ProductItem item={item} />
                        </li>
                    )
                }
            </ul>
        </section>
    )
}

ProductList.propTypes = {
    items: PropTypes.arrayOf(
        ProductItem.propTypes.item
    ).isRequired
}

export default ProductList