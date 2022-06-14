import React from 'react'
import PropTypes from 'prop-types';

const Currency = ({ currency, amount, decimals }) => {
    return (
        <div className="currency__general">
            <span className="currency__general-amount" data-testid="currency-amount">{(amount).toLocaleString("es-ar",
                {
                    style: "currency",
                    currency: `${currency}`,
                    maximumFractionDigits: 0
                })}
            </span>
            {(decimals && decimals > 0) && <span className="currency__general-decimals" data-testid="currency-decimals">{decimals.toString().padStart(2, 0)}</span>}
        </div>
    )
}

Currency.propTypes = {
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    decimals: PropTypes.number
}


export default Currency