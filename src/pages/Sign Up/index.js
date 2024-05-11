import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../services/firebaseConnection';
import { AuthContext } from '../../contexts/Auth'
import {
    createUserWithEmailAndPassword
} from 'firebase/auth';
import '../SignIn/sign.css'
export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signUp, loadingAuth } = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();

        if (name !== '' && email !== '' && password !== '') {
            await signUp(email, password, name)
        }

    }

    async function novoUsuario() {
        try {
            await createUserWithEmailAndPassword(auth, email, password);

            setName('');
            setEmail('');
            setPassword('');
            window.setTimeout(function () {
                window.history.back();
            }, 1000);
        } catch (error) {
            if (error.code === 'auth/weak-password') {
            } else if (error.code === 'auth/email-already-in-use') {
                console.error('Email já existente');
            } else {
                console.error('Erro ao criar usuário:', error);
            }
        }
    }

    return (
        <div className="container">
            <div className="login">

                <form onSubmit={handleSubmit}>
                    <div className='login-h1'>
                        <h1>Nova conta</h1>
                    </div>

                    <input
                        type="text"
                        placeholder="Informe seu nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Informe seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Informe sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </form>
                <div className='centro'>
                    <Link to="/" className='link-button espaco'>Voltar</Link>
                    <button onClick={novoUsuario}>{loadingAuth ? 'Carregando...' : 'Salvar'}</button>
                </div>
            </div>
        </div>
    )
}