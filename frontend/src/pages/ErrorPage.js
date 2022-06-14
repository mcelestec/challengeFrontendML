import React from 'react'

const ErrorPage = (props) => {
    return (
        <main className="error-page__container">
            <div className="error-page__content">
                {props.children}
            </div>
        </main>
    )
}

export default ErrorPage
