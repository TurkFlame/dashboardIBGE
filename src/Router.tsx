import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/page';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/Signup';
import React from "react";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/entrar" element={<SignIn />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}