import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
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

export function Login() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://talent2show.onrender.com/api/auth/login', {
        email: userData.email,
        password: userData.password,
      });

      if (response.data && response.data.token) {
        const { token } = response.data;
        localStorage.setItem('accessToken', token); // Armazena o token JWT no localStorage
        const { user } = response.data;

        // Redirecionamento baseado no tipo de perfil
        if (user.profile_type === 'player') {
          navigate('/player-dashboard');
        } else if (user.profile_type === 'scout') {
          navigate('/scout-dashboard');
        } else if (user.profile_type === 'club') {
          navigate('/club-dashboard');
        } else {
          navigate('/default-dashboard');
        }
      } else {
        alert(t('invalid_credentials_check_details'));
      }
    } catch (error) {
      console.error(t('login_error'), error.response ? error.response.data : error.message);
      alert(t('login_error_try_again'));
    }

    setUserData({
      ...userData,
      password: '', // Limpa a senha do estado após o envio do formulário
    });
  };

  return (
    <>

      <FloatingHeader>

        <Logo size="150px" logo="/assets/images/pngs/logo.png" />

        <Nav>

          <Button
            path="/"
            text={t('home_page')}
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.white}
            texthover={theme.colors.primary}
            border={theme.colors.white}
            borderhover={theme.colors.primary}
          />

          <Button
            path="/login"
            text={t('login')}
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.black}
            textcolor={theme.colors.primary}
            texthover={theme.colors.primary}
            border={theme.colors.primary}
            borderhover={theme.colors.primary}
            active
          />

          <Button
            path="/register"
            text={t('register')}
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.white}
            texthover={theme.colors.primary}
            border={theme.colors.white}
            borderhover={theme.colors.primary}
          />

          <Button
            path="/benefits"
            text={t('benefits')}
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.white}
            texthover={theme.colors.primary}
            border={theme.colors.white}
            borderhover={theme.colors.primary}
          />
        </Nav>
      </FloatingHeader>

      <Styled.LoginPage backgroundimagesrc={`/assets/images/backgrounds/login_register_${i18n.language}.png`}>
        <AuthWrapper>
          <AuthContainer>
            <Title text={t('login')} size={theme.sizes.xxlarge} />

            <AuthForm onSubmit={handleSubmit} method="post">
              <AuthInput
                type="email"
                name="email"
                id="email_input"
                placeholder={t('your_email')}
                title={t('email')}
                value={userData.email}
                onChange={handleChange}
                required
              />

              <AuthInput
                type="password"
                name="password"
                id="password_input"
                placeholder={t('insert_your_password')}
                title={t('password')}
                value={userData.password}
                onChange={handleChange}
                required
              />

              <AuthButton
                name="login_submit"
                id="login_submit"
                value={t('login')}
                onClick={handleSubmit}
              />

              <AuthOptions
                checkboxtext={t('remember_login')}
                checkboxid="rememberMe"
                path="/forgot-password"
                pathtext={t('forgot_password_question')}
              />

              <AuthRedirect
                text={t('have_account_question')}
                path="/register"
                pathtext={t('register')}
              />

              <StyledLink
                text={t('return_home')}
                path="/"
                color={theme.colors.secondary}
                hovercolor={theme.colors.tertiary}
              />
            </AuthForm>
          </AuthContainer>
        </AuthWrapper>
      </Styled.LoginPage>
    </>
  );
}
