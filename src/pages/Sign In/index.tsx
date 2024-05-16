import React, { useState, useContext, FormEvent } from 'react';
import { Link } from 'react-router-dom';
//import { AuthContext } from '../../npcontexts/Auth';
import './sign.css';

const Entrada: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');

    const { signIn, loadingAuth } = useContext(AuthContext);

    const handleSignIn = async (e: FormEvent) => {
        e.preventDefault();
        if (email !== '' && senha !== '') {
            await signIn(email, senha);
        }
    };

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
                    <div className='centro'>
                        <Link to="/cadastro" className='link-button espaco'>Cadastro</Link>
                        <Link to="/dashboard" className='link-button espaco'>Acessar</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Entrada;