import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext({
	currentUser: null,
	login: async () => {},
	logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		const fetchCurrentUser = async () => {
			const user = JSON.parse(localStorage.getItem('user'));
			if (user) {
				axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
				setCurrentUser(user);

				try {
					const response = await axios.get(
						`https://talent2show.onrender.com/api/userPhotos/${user.id}`
					);
					if (response.data.profile_image) {
						setCurrentUser(prevUser => ({
							...prevUser,
							profileImage: response.data.profile_image,
						}));
					}
				} catch (error) {
					console.error('Erro ao carregar a imagem de perfil:', error);
				}
			}
		};

		fetchCurrentUser();
	}, []);

	const login = async (email, password) => {
		try {
			const response = await axios.post(
				'https://talent2show.onrender.com/api/auth/login',
				{ email, password }
			);

			if (response.data && response.data.token && response.data.user) {
				const { token, user } = response.data;
				localStorage.setItem('token', token);
				localStorage.setItem('user', JSON.stringify(user));
				axios.defaults.headers.common.Authorization = `Bearer ${token}`;
				setCurrentUser(user);

				try {
					const profileImageResponse = await axios.get(
						`https://talent2show.onrender.com/api/userPhotos/${user.id}`
					);
					if (profileImageResponse.data.profile_image) {
						setCurrentUser(prevUser => ({
							...prevUser,
							profileImage: profileImageResponse.data.profile_image,
						}));
					}
				} catch (error) {
					console.error(
						'Erro ao carregar a imagem de perfil após login:',
						error
					);
				}
			} else {
				throw new Error('Resposta da API inválida');
			}
		} catch (error) {
			console.error('Erro ao fazer login:', error.message || error);
			throw new Error('Erro ao fazer login. Por favor, tente novamente.');
		}
	};

	const logout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		delete axios.defaults.headers.common.Authorization;
		setCurrentUser(null);
	};

	return (
		<AuthContext.Provider value={{ currentUser, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}
