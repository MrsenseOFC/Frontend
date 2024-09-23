import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Close as CloseIcon } from '@styled-icons/material-outlined';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import * as Styled from './Login-Styles';
import { AuthForm } from '../../components/elements/AuthElements/AuthForm/AuthForm';
import { AuthButton } from '../../components/elements/AuthElements/AuthButton/AuthButton';
import { AuthInput } from '../../components/elements/AuthElements/AuthInput/AuthInput';
import { AuthRedirect } from '../../components/elements/AuthElements/AuthRedirect/Redirect';
import { AuthOptions } from '../../components/elements/AuthElements/AuthOptions/AuthOptions';
import { AuthWrapper } from '../../components/elements/AuthElements/AuthWrapper/AuthWrapper';
import { StyledLink } from '../../components/elements/StyledLink/StyledLink';
import { Title } from '../../components/elements/Title/Title';
import { theme } from '../../styles/theme';
import { AuthContainer } from '../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';
import { FloatingHeader } from '../../components/Headers/FloatingHeader/FloatingHeader';
import { Logo } from '../../components/elements/Logo/Logo';
import { Nav } from '../../components/Nav/Nav';
import { Button } from '../../components/elements/Button/Button';
import { IconDiv } from '../../components/elements/IconDiv/IconDiv';
import { FloatingMenu } from '../../components/FloatingMenu/FloatingMenu';

export function Login() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [mobileHeader, setMobileHeader] = useState(false);
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Limpa a mensagem de erro

    try {
      const response = await axios.post('https://talent2show.onrender.com/api/auth/login', userData);

      if (response.data && response.data.token) {
        const { token, user } = response.data;
        localStorage.setItem('accessToken', token);

        // Redirecionamento baseado no tipo de perfil
        switch (user.profile_type) {
          case 'player':
            navigate('/player-dashboard');
            break;
          case 'scout':
            navigate('/scout-dashboard');
            break;
          case 'club':
            navigate('/club-dashboard');
            break;
          case 'staff':
            navigate('/staff-dashboard');
            break;
          case 'agent':
            navigate('/agent-dashboard');
            break;
          case 'league':
            navigate('/league-dashboard');
            break;
          case 'university':
            navigate('/university-dashboard');
            break;
          case 'fan':
            navigate('/fan-dashboard');
            break;
          case 'exchangeAgencie':
            navigate('/exchangeAgencie-dashboard');
            break;
          default:
            navigate('/default-dashboard');
            break;
        }
      } else {
        setErrorMessage(t('invalid_credentials_check_details'));
      }
    } catch (error) {
      console.error(t('login_error'), error.response ? error.response.data : error.message);
      setErrorMessage(t('login_error_try_again'));
    }

    setUserData({ ...userData, password: '' }); // Limpa a senha após o envio
  };

  const [menuVisibility, setMenuVisibility] = useState(false);

  return (
    <Styled.LoginWrapper>
      <FloatingHeader>
        <Logo size="150px" logo="/assets/images/pngs/logo.png" />
        <Nav>
          <Button path="/" text={t('home_page')} bgcolor={theme.colors.mediumblack} />
          <Button path="/login" text={t('login')} bgcolor={theme.colors.mediumblack} active />
          <Button path="/register" text={t('register')} bgcolor={theme.colors.mediumblack} />
          <Button path="/benefits" text={t('benefits')} bgcolor={theme.colors.mediumblack} />
        </Nav>

        {mobileHeader ? (
          <IconDiv name={t('menu')} onclick={() => setMobileHeader(!mobileHeader)}>
            <CloseIcon />
          </IconDiv>
        ) : (
          <IconDiv name={t('close_menu')} onclick={() => setMobileHeader(!mobileHeader)}>
            <MenuIcon />
          </IconDiv>
        )}
      </FloatingHeader>

      {mobileHeader && (
        <FloatingMenu>
          <Button path="/" text={t('home_page')} bgcolor={theme.colors.mediumblack} />
          <Button path="/login" text={t('login')} bgcolor={theme.colors.mediumblack} active />
          <Button path="/register" text={t('register')} bgcolor={theme.colors.mediumblack} />
          <Button path="/benefits" text={t('benefits')} bgcolor={theme.colors.mediumblack} />
        </FloatingMenu>
      )}

      <Styled.LoginPage backgroundimagesrc={`/assets/images/backgrounds/login_register_${i18n.language}.png`}>
        <AuthWrapper>
          <AuthContainer>
            <Title text={t('login')} size={theme.sizes.xxlarge} />

            {errorMessage && <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>}

            <AuthForm onSubmit={handleSubmit}>
              <AuthInput
                type="email"
                name="email"
                placeholder={t('your_email')}
                value={userData.email}
                onChange={handleChange}
                required
              />
              <AuthInput
                type="password"
                name="password"
                placeholder={t('insert_your_password')}
                value={userData.password}
                onChange={handleChange}
                required
              />
              <AuthButton name="login_submit" value={t('login')} onClick={handleSubmit} />
              <AuthOptions
                checkboxtext={t('remember_login')}
                checkboxid="rememberMe"
                path="/forgot-password"
                pathtext={t('forgot_password_question')}
              />
              <AuthRedirect text={t('have_account_question')} path="/register" pathtext={t('register')} />
              <StyledLink text={t('return_home')} path="/" color={theme.colors.secondary} />
            </AuthForm>
          </AuthContainer>
        </AuthWrapper>
      </Styled.LoginPage>
    </Styled.LoginWrapper>
  );
}
