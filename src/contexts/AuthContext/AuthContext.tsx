import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';
import axiosInstance from '../../axios';  // Importa a instância customizada do axios

interface User {
  id: string;
  email: string;
  profile_type: string;
  profileImage?: string;
}

interface AuthContextType {
  currentUser: User | null;
  logout: () => void;
  error: string | null;
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  logout: () => {},
  error: null,
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchProfileImage = async (userId: string) => {
    try {
      const response = await axiosInstance.get(`https://talent2show.onrender.com/api/userPhotos/${userId}`);
      if (response.data.profile_image) {
        setCurrentUser(prevUser => ({
          ...prevUser,
          profileImage: response.data.profile_image,
        } as User));
      }
    } catch (error) {
      console.error('Erro ao carregar a imagem de perfil:', error);
    }
  };

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null;
        const token = Cookies.get('token');

        if (user && token) {
          axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
          setCurrentUser(user);
          await fetchProfileImage(user.id);
        }
      } catch (error) {
        console.error('Erro ao carregar o usuário atual:', error);
      }
    };

    fetchCurrentUser();
  }, []);

  const logout = () => {
    Cookies.remove('token');
    localStorage.removeItem('user');
    delete axiosInstance.defaults.headers.common.Authorization;
    setCurrentUser(null);
    setError(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
}
