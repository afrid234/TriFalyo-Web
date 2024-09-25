// src/Routes.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SubscriptionPage from '../Pages/subscriptions/subscription'; // Your Subscription page
import HomePage from '../Pages/Homepage/Home';

const AppRoutes = () => {
    return (

        <BrowserRouter>

            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/subscription" element={<SubscriptionPage />} />
                {/* Add more routes as needed */}
            </Routes>

        </BrowserRouter>
    );
};

export default AppRoutes;
