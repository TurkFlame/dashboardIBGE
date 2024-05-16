import { Routes, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/Signup';
import Dashboard from '../pages/dashboard';

import Private from './private';

export default function RoutesApp() {
    return (
        <Routes>
            <Route path="/entrar" element={<SignIn />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )

} 