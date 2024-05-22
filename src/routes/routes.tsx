import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Entrance from '../pages/entrance';
import Dashboard from '../pages/dashboard';
import PageName from '../pages/pageName';
import PageSearch from '../pages/pageSearch';
import SignIn from '../pages/SignIn/index';
import SignUp from '../pages/SignUp/index';
import Dashboards from '../pages/dashboard';
import Private from './private';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Entrance />} />
            <Route path="/page-name" element={<PageName />} />
            <Route path="/page-search" element={<PageSearch />} />
            <Route path="/signin" element={<SignIn />} /> {/* Tela para ir para o login */}
            <Route path="/signup" element={<SignUp />} /> {/* Tela para ir para o cadastro */}
            <Route path="/dashboards" element={<Private><Dashboards /></Private>} /> {/* Tela para centralizar as dashboards */}
            <Route path="/dashboard" element={<Private><Dashboard /></Private>} /> {/* Tela para cada dashboard */}
            <Route path="/getNameRanking" element={<Private><Dashboard /></Private>} /> {/* Tela para cada dashboard */}
        </Routes>
    );
}