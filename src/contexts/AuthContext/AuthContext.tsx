import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';
import axiosInstance from '../../axios';
import API_BASE_URL from '../../../config'; // Importa a URL base

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
  isLoading: boolean;
  updateProfileImage: (imageUrl: string) => void;
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  logout: () => {},
  error: null,
  isLoading: false,
  updateProfileImage: () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      setIsLoading(true);
      try {
        const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null;
        const token = Cookies.get('token');

        if (user && token) {
          axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
          
          const response = await axiosInstance.get(`${API_BASE_URL}/api/profilePicture/${user.id}`);
          const profileImage = response.data.profile_image || '';

          const updatedUser = { ...user, profileImage };
          setCurrentUser(updatedUser);
          localStorage.setItem('user', JSON.stringify(updatedUser)); // Atualiza o localStorage
        } else {
          setError('Usuário não autenticado.');
        }
      } catch (error) {
        setError('Erro ao carregar o usuário atual.');
        console.error('Erro ao carregar o usuário atual:', error);
      } finally {
        setIsLoading(false);
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

  const updateProfileImage = (imageUrl: string) => {
    if (currentUser) {
      const updatedUser = { ...currentUser, profileImage: imageUrl };
      setCurrentUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser)); // Atualiza o localStorage
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, logout, error, isLoading, updateProfileImage }}>
      {children}
    </AuthContext.Provider>
  );
}
