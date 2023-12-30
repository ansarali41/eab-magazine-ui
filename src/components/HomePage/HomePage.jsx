import React from 'react';
import './homePage.css';

const HomePage = () => {
    return (
        <div className="root">
            <h1>home</h1>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default HomePage;
