import { Routes, Route } from 'react-router-dom';
import Entrance from './pages/entrance';
import PageName from './pages/pageName';
import PageNews from './pages/pageNews';
import React from "react";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Entrance/>} />
            <Route path="/page-name" element={<PageName />} />
            <Route path="/page-maregrafo" element={<PageNews />} />
        </Routes>
    );
}