import React from 'react'
import { Link } from 'react-router-dom'
import Currency from '../currencies/Currency'
import PropTypes from 'prop-types';

const ProductItem = ({ item }) => {
    return (
        <div className="product-item__container">

            <Link className="product-item__image-link" to={`/items/${item.id}`}>
                <div>
                    <img src={item.picture} alt={item.title} />
                </div>
            </Link>

            <div className="product-item__description">

                <div className="product-item__currency">
                    <Currency currency={item.price.currency} amount={item.price.amount} decimals={item.price.decimals} />
                    {item.free_shipping && <span className="product-item__free-shipping-icon"></span>}
                </div>

                <div className="product-item__title">
                    <Link to={`/items/${item.id}`}><h2>{item.title}</h2></Link>
                </div>

            </div>

            <div className='product-item__additional'>
                <span>{item.address}</span>
            </div>
        </div >
    )
}

ProductItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        address: PropTypes.string,
        free_shipping: PropTypes.bool.isRequired,
        price: PropTypes.shape({
            currency: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            decimals: PropTypes.number.isRequired
        }).isRequired
    }).isRequired
}

export default ProductItem