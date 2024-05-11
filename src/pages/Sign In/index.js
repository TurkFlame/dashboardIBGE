import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/Auth';
import './sign.css'


export default function Entrada() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const { signIn, loadingAuth } = useContext(AuthContext);

    async function handleSignIn(e) {
        e.preventDefault();
        if (email !== '' && senha !== '') {
            await signIn(email, senha);
        }
    }

    return (
        <div className='container'>
            <div className="login">
                <form onSubmit={handleSignIn}>
                    <div className='login-h1'>
                        <h1>Entrar</h1>
                    </div>
                    <input
                        type="email"
                        placeholder="Informe seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder='Informe a sua senha'
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </form>
                <div className='centro'>
                    <Link to="/cadastro" className='link-button espaco'>Cadastro</Link>
                    <Link to="/dashboard" className='link-button espaco'>Acessar</Link>
                </div>
            </div>
        </div>
    );


}