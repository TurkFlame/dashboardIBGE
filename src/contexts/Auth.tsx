import React, { useState, createContext, useEffect, ReactNode } from 'react';
import { auth, db, storage } from '../services/firebaseConnection';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// Definindo a interface para o contexto de autenticação
interface AuthContextProps {
  signed: boolean;
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  loadingAuth: boolean;
  loading: boolean;
  setUser: (user: User | null) => void;
}

interface User {
  uid: string;
  nome: string;
  email: string;
  avatarUrl: string | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const storageUser = localStorage.getItem('@ticketsPRO');

      if (storageUser) {
        setUser(JSON.parse(storageUser));
      }

      setLoading(false);
    }

    loadUser();
  }, []);

  async function signIn(email: string, password: string) {
    setLoadingAuth(true);

    try {
      const value = await signInWithEmailAndPassword(auth, email, password);
      const uid = value.user.uid;

      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = {
          uid: uid,
          nome: docSnap.data()?.nome,
          email: value.user.email,
          avatarUrl: docSnap.data()?.avatarUrl
        };

        setUser(data);
        storageUser(data);
        setLoadingAuth(false);
        toast.success("Bem-vindo(a) de volta!");
        navigate("/dashboard");
      } else {
        throw new Error("User data not found");
      }
    } catch (error) {
      console.log(error);
      setLoadingAuth(false);
      toast.error("Ops, algo deu errado!");
    }
  }

  async function signUp(email: string, password: string, name: string) {
    setLoadingAuth(true);

    try {
      const value = await createUserWithEmailAndPassword(auth, email, password);
      const uid = value.user.uid;

      await setDoc(doc(db, "users", uid), {
        nome: name,
        avatarUrl: null
      });

      const data = {
        uid: uid,
        nome: name,
        email: value.user.email,
        avatarUrl: null
      };

      setUser(data);
      storageUser(data);
      setLoadingAuth(false);
      toast.success("Seja bem-vindo ao sistema!");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      setLoadingAuth(false);
      toast.error("Ops, algo deu errado!");
    }
  }

  function storageUser(data: User) {
    localStorage.setItem('@ticketsPRO', JSON.stringify(data));
  }

  async function logout() {
    await signOut(auth);
    localStorage.removeItem('@ticketsPRO');
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signUp,
        logout,
        loadingAuth,
        loading,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;