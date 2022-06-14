import React from 'react'
import Currency from '../currencies/Currency'
import PropTypes from 'prop-types';

const ProductDescription = ({ item }) => {
    return (
        <div className="product-description__container">

            <figure className="product-description__image">
                <img src={item.picture} alt={item.title} />
            </figure>

            <div className='product-description__information'>
                <h3>{`${(item.condition === "new" ? "Nuevo" : "Usado")} - ${item.sold_quantity} vendidos`}</h3>
                <h2>{item.title}</h2>
            </div>

            <div className="product-description__price">
                <Currency currency={item.price.currency} amount={item.price.amount} decimals={item.price.decimals} />
            </div>

            <button className="product-description__buy-button">Comprar</button>

            {item.description &&
                <div className='product-description__description'>
                    <h3>Descripción del producto</h3>
                    <pre>{item.description}</pre>
                </div>
            }
        </div>
    )
}

ProductDescription.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        address: PropTypes.string,
        condition: PropTypes.string.isRequired,
        sold_quantity: PropTypes.number.isRequired,
        free_shipping: PropTypes.bool.isRequired,
        description: PropTypes.string,
        price: PropTypes.shape({
            currency: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            decimals: PropTypes.number.isRequired
        }).isRequired
    }).isRequired
}

export default ProductDescription