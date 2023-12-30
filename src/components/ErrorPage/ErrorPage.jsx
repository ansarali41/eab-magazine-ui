import React from 'react';
import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <div className="root">
            <div className="loading-container d-flex align-items-center justify-content-center">
                <div>
                    <div>
                        <h1 className="text-center">Oops!</h1>
                        <p className="text-center heading-text fw-bolder">Sorry, an unexpected error occurred.</p>
                        <p className="text-center heading-text fw-bolder">Not Found.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
