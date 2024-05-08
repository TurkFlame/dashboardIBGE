import { Routes, Route } from 'react-router-dom';
// import Entrance from './pages/entrance';
import Dashboard from './pages/dashboard';
// import Dashboards from './pages/dashboards';
// import LoginLogout from './pages/loginAndLogout';
import React from "react";

export default function Router() {
    return (
        <Routes>
            {/* <Route path="/" element={<Entrance/>} />
            <Route path="/loginLogout" element={<LoginLogout/>} />
            <Route path="/dashboards/" element={<Dashboards />} /> */}
            <Route path="/dashboard" element={<Dashboard />} /> {/* Tela para cada dashboard*/} 
            <Route path="/getNameRanking" element={<Dashboard />} /> {/* Tela para cada dashboard*/} 
        </Routes>
    );
}