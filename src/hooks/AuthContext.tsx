import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface User {
  id: string;
  username: string;
  email: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}
interface AuthState {
  jwt: string;
  user: User;
}

interface SignInCredentials {
  identifier: string;
  password: string;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

// eslint-disable-next-line react/prop-types
export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const jwt = localStorage.getItem('@BravoSul:token');
    const user = localStorage.getItem('@BravoSul:user');

    if (jwt && user) {
      api.defaults.headers.authorization = `Bearer ${jwt}`;
      return { jwt, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ identifier, password }) => {
    const response = await api.post('auth/local', {
      identifier,
      password,
    });

    const { jwt, user } = response.data;
    localStorage.setItem('@BravoSul:token', jwt);
    localStorage.setItem('@BravoSul:user', JSON.stringify(user));
    api.defaults.headers.authorization = `Bearer ${jwt}`;
    setData({ jwt, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@BravoSul:token');
    localStorage.removeItem('@BravoSul:user');
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used whithin an AuthProvider');
  }

  return context;
}
