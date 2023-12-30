import React, { useEffect, useState } from 'react';
import { v4 as uuid4 } from 'uuid';

import './App.css';
// import { Home } from './components/OLD/home';
// import Header from './components/OLD/header';
// import Footer from './components/OLD/footer';
import HomePage from './components/HomePage/HomePage';
import MagazinePage from './components/MagazinePage/MagazinePage';

export const App = () => {
    const queryParams = new URLSearchParams(window.location.search);
    console.log({ queryParams });
    const pKey = queryParams.get('key');
    let coreId = queryParams.get('coreId');
    console.log({ pKey, coreId });
    if (coreId === null) {
        coreId = uuid4();
    }
    console.log('test');

    // if (pKey === null || (typeof pKey === 'string' && pKey.trim().length !== 11)) {
    //     window.location.replace(window.env.CVENT_EVENT_URL);
    //     return null; // prevent rendering the rest of the app.
    // }

    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
    }, []);

    return (
        <div className="App">
            {/* <Home pKey={pKey} coreId={coreId} /> */}
            {isLoading ? <MagazinePage /> : <HomePage />}
        </div>
    );
};
