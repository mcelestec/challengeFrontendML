import React from 'react'
import PropTypes from 'prop-types';

const CategoryList = ({ items }) => {
    return (
        <div className="category-list__container">
            {
                items.map(category =>
                    <span className="category-list__item" key={category} data-testid="category-list-item">{category}</span>
                )
            }
        </div>
    )
}

CategoryList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default CategoryList