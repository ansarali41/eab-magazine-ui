import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';
import ErrorPage from './components/ErrorPage/ErrorPage';
import './index.css';
import MagazineDetails from './components/MagazineDetails/MagazineDetails';
import ThankYou from './components/ThankYou/ThankYou';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/cover-details/:id',
        element: <MagazineDetails />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/thank-you',
        element: <ThankYou />,
        errorElement: <ErrorPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
