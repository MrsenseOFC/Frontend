import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './Logout-Styles';
import { Popup } from '../../components/elements/Popup/Popup';
import { useAuth } from '../../contexts/AuthContext/AuthContext.tsx';

export function Logout() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.alert('Usuário deslogado com sucesso');
    navigate('/');
  };

  return (
    <Styled.LogoutPage>
      <Popup
        isopen
        title="Você deseja realmente encerrar sua sessão?"
        firstoption="Sim"
        onfirstclick={handleLogout}
        firstpath="/"
        secondoption="Não"
        onsecondclick={() => navigate(-1)}
      />
    </Styled.LogoutPage>
  );
}

Logout.propTypes = {
};
