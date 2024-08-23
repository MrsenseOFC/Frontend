import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as Styled from './Logout-Styles';
import { Popup } from '../../components/elements/Popup/Popup';
import { useAuth } from '../../contexts/AuthContext/AuthContext.tsx';

export function Logout() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.alert(t('successfully_logged_out'));
    navigate('/');
  };

  return (
    <Styled.LogoutPage>
      <Popup
        isopen
        title={t('end_seasson_question')}
        firstoption={t('yes')}
        onfirstclick={handleLogout}
        firstpath="/"
        secondoption={t('no')}
        onsecondclick={() => navigate(-1)}
      />
    </Styled.LogoutPage>
  );
}

Logout.propTypes = {
};
