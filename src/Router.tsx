import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/page';
import React from "react";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
}