import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useTranslation } from 'react-i18next';
import * as Styled from './Register-Styles';

import { Subtitle } from '../../components/elements/Subtitle/Subtitle';
import { AuthContainer } from '../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';
import { AuthForm } from '../../components/elements/AuthElements/AuthForm/AuthForm';
import { AuthInput } from '../../components/elements/AuthElements/AuthInput/AuthInput';
import { AuthDropdown } from '../../components/elements/AuthElements/AuthDropdown/AuthDropdown';
import { AuthButton } from '../../components/elements/AuthElements/AuthButton/AuthButton';
import { FloatingHeader } from '../../components/Headers/FloatingHeader/FloatingHeader';
import { Logo } from '../../components/elements/Logo/Logo';
import { Nav } from '../../components/Nav/Nav';
import { Button } from '../../components/elements/Button/Button';
import { ListContainer, ListItem } from '../../components/elements/List/List-Styles';
import { Bubble } from '../../components/Bubble/Bubble';
import { theme } from '../../styles/theme';
import { S2tContext } from '../../contexts/s2tContext/S2tContext';

export function Register() {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profileType, setProfileType] = useState('');
  const [competitiveCategory, setCompetitiveCategory] = useState('');
  const [competitiveLevel, setCompetitiveLevel] = useState('');
  const [modality, setModality] = useState('');
  const [teamModality, setTeamModality] = useState('');

  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }

    const input = {
      name,
      username,
      email,
      password,
      profile_type: profileType,
      competitive_category: competitiveCategory,
      competitive_level: competitiveLevel,
      modality: profileType === 'player' ? modality : '',
    };

    try {
      const response = await axios.post('https://talent2show.onrender.com/api/auth/register', input);
      console.log(t('server_response'), response.data);

      localStorage.setItem('username', username);
      navigate('/login');
    } catch (error) {
      console.error(t('register_error'), error.response ? error.response.data : error.message);
      alert(t('register_error_try_again'));
    }
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
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.white}
            texthover={theme.colors.primary}
            border={theme.colors.white}
            borderhover={theme.colors.primary}
          />
          <Button
            path="/register"
            text={t('register')}
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.black}
            textcolor={theme.colors.primary}
            texthover={theme.colors.primary}
            border={theme.colors.primary}
            borderhover={theme.colors.primary}
            active
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
      <Styled.RegisterPage>
        <Bubble>
          <Subtitle text={t('step_by_step')} uppercase as="h4" size={theme.sizes.xlarge} />
          <ListContainer>
            <ListItem>
              {t('register_step_1')}
            </ListItem>
            <ListItem>
              {t('register_step_2')}
            </ListItem>
            <ListItem>
              {t('register_step_3')}
            </ListItem>

            <ListItem>
              {t('register_step_4')}
            </ListItem>
          </ListContainer>
        </Bubble>
        <AuthContainer>
          <Subtitle text={t('register')} uppercase as="h4" size={theme.sizes.xlarge} />
          <AuthForm onSubmit={handleSubmit}>

            <AuthInput
              type="text"
              name="username"
              id="username"
              title={t('username')}
              placeholder={t('your_username_on_t2s')}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <AuthInput
              type="email"
              name="email"
              id="email"
              title={t('email')}
              placeholder={t('your_email')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <AuthInput
              type="password"
              name="password"
              id="password"
              title={t('password')}
              placeholder={t('your_password')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <AuthInput
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              title={t('password_confirmation')}
              placeholder={t('confirm_password')}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <AuthDropdown
              title={t('profile_type_question')}
              id="profileType"
              placeholder={t('select_profile_type')}
              options={s2tState.formOptions.profileType}
              selectedvalue={profileType}
              onDropdownChange={(value) => setProfileType(value)}
              required
            />

            {(profileType && profileType.length > 0) && (
              <AuthInput
                type="text"
                name="name"
                id="name"
                title={t('name')}
                placeholder={
               {
                 player: t('player_name_question'),
                 club: t('club_name_question'),
                 university: t('university_name_question'),
                 agency: t('agency_name_question'),
                 league: t('league_name_question'),
                 staff: t('staff_name_question'),
                 fan: t('fan_name_question'),
               }[profileType] || '' // string vazia se nenhum perfil corresponder
               }
                onChange={(e) => setName(e.target.value)}
                required
              />
            )}

            {(profileType !== 'fan' && profileType !== 'exchangeAgencie') && (

            <>
              {/* -------------------------Categoria competitiva------------------------- */}
              <AuthDropdown
                title={t('which_competitive_category')}
                id="competitiveCategory"
                placeholder={t('select_category')}
                options={s2tState.formOptions.competitiveCategory}
                selectedvalue={competitiveCategory}
                onDropdownChange={(value) => setCompetitiveCategory(value)}
                required
              />

              {/* -------------------------Modalidade------------------------- */}
              {profileType === 'player' && (
              <AuthDropdown
                title={t('which_modality')}
                id="playerModality"
                placeholder={t('select_modality')}
                options={s2tState.formOptions.modality}
                selectedvalue={modality}
                onDropdownChange={(value) => setModality(value)}
              />
              )}

              {profileType === 'club' && (
              <AuthDropdown
                title={t('which_club_modality')}
                id="clubModality"
                placeholder={t('select_modality')}
                options={s2tState.formOptions.modality}
                selectedvalue={modality}
                onDropdownChange={(value) => setModality(value)}
              />
              )}

            </>
            )}

            <AuthButton
              type="submit"
              value={t('register')}
            />
          </AuthForm>
        </AuthContainer>
      </Styled.RegisterPage>
    </>
  );
}
