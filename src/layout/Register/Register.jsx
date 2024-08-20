import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
      console.log('Resposta do servidor:', response.data);

      localStorage.setItem('username', username);
      navigate('/login');
    } catch (error) {
      console.error('Erro ao registrar usuário:', error.response ? error.response.data : error.message);
      alert('Ocorreu um erro ao registrar o usuário. Por favor, tente novamente.');
    }
  };

  return (
    <>
      <FloatingHeader>
        <Logo size="150px" logo="/assets/images/pngs/logo.png" />
        <Nav>
          <Button
            path="/"
            text="Página principal"
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.white}
            texthover={theme.colors.primary}
            border={theme.colors.white}
            borderhover={theme.colors.primary}
          />
          <Button
            path="/login"
            text="Login"
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.white}
            texthover={theme.colors.primary}
            border={theme.colors.white}
            borderhover={theme.colors.primary}
          />
          <Button
            path="/register"
            text="Registre-se"
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
            text="Benefícios"
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
          <Subtitle text="Passo a passo" uppercase as="h4" size={theme.sizes.xlarge} />
          <ListContainer>
            <ListItem>
              Informe seus dados pessoais com atenção e complete todos os campos obrigatórios.
            </ListItem>
            <ListItem>
              Selecione o tipo de perfil que deseja criar
            </ListItem>
            <ListItem>
              Valide sua conta: Confirme seu email e siga as instruções para concluir o processo de cadastro.
            </ListItem>

            <ListItem>
              Acesse "Editar perfil" e adicione detalhes sobre sua experiência, habilidades, formação e conquistas.
            </ListItem>
          </ListContainer>
        </Bubble>
        <AuthContainer>
          <Subtitle text="Registre-se" uppercase as="h4" size={theme.sizes.xlarge} />
          <AuthForm onSubmit={handleSubmit}>

            <AuthInput
              type="text"
              name="username"
              id="username"
              title="Nome de usuário"
              placeholder="Seu nome de usuário na T2S"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <AuthInput
              type="email"
              name="email"
              id="email"
              title="E-mail"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <AuthInput
              type="password"
              name="password"
              id="password"
              title="Senha"
              placeholder="Sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <AuthInput
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              title="Confirmação de senha"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <AuthDropdown
              title="Qual o seu tipo de perfil?"
              id="profileType"
              placeholder="Escolha seu tipo de perfil"
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
                title="Nome"
                placeholder={
               {
                 player: 'Qual o seu nome completo',
                 club: 'Qual o nome do seu clube',
                 university: 'Qual o nome da sua universidade',
                 agency: 'Qual o nome da sua agência',
                 league: 'Qual o nome da sua liga',
                 staff: 'Qual o seu nome completo',
                 fan: 'Qual o seu nome completo',
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
                title="Qual categoria competitiva?"
                id="competitiveCategory"
                placeholder="Escolha a categoria"
                options={s2tState.formOptions.competitiveCategory}
                selectedvalue={competitiveCategory}
                onDropdownChange={(value) => setCompetitiveCategory(value)}
                required
              />

              {/* -------------------------Modalidade------------------------- */}
              {profileType === 'player' && (
              <AuthDropdown
                title="Deseja atuar em qual modalidade?"
                id="playerModality"
                placeholder="Escolha a modalidade"
                options={s2tState.formOptions.modality}
                selectedvalue={modality}
                onDropdownChange={(value) => setModality(value)}
              />
              )}

              {profileType === 'club' && (
              <AuthDropdown
                title="Qual a modalidade do seu Clube?"
                id="clubModality"
                placeholder="Escolha a modalidade"
                options={s2tState.formOptions.modality}
                selectedvalue={modality}
                onDropdownChange={(value) => setModality(value)}
              />
              )}
            </>
            )}

            <AuthButton type="submit" title="Cadastrar-se" />
          </AuthForm>
        </AuthContainer>
      </Styled.RegisterPage>
    </>
  );
}
