import React, { useState, useContext, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth';
import '../../../public/style.css'
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
        <div className='body'>
            <div className='container'>
                <div className="login">
                    <form onSubmit={handleSignIn}>
                        <div className='login-h1'>
                            <h1>Acesse Sua Conta</h1>
                            <p>Insira seu usuario e senha</p>
                        </div>
                        <div className='email'>
                            <input
                                type="email"
                                placeholder="Usuário"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <input
                            type="password"
                            placeholder='Senha'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        <div className='centro'>
                            <button type="submit" className='link-button' disabled={loadingAuth}>
                                {loadingAuth ? 'Carregando...' : 'Acessar'}
                            </button>
                        </div>
                        <div className='pCadastro'>
                            <p>---------------</p>
                            <p>Crie sua conta</p>
                            <p>---------------</p>
                        </div>
                        <div className='cadastro'>
                            <Link to="/signup" className='register-btn'>Cadastro</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Entrada;