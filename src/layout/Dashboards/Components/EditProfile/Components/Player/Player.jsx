import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './Player-Styles';

import { AuthForm } from '../../../../../../components/elements/AuthElements/AuthForm/AuthForm';
import { AuthButton } from '../../../../../../components/elements/AuthElements/AuthButton/AuthButton';
import { AuthInput } from '../../../../../../components/elements/AuthElements/AuthInput/AuthInput';
import { AuthWrapper } from '../../../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper';

import { Subtitle } from '../../../../../../components/elements/Subtitle/Subtitle';

import { theme } from '../../../../../../styles/theme';
import { AuthContainer } from '../../../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';

import { AuthRadio } from '../../../../../../components/elements/AuthElements/AuthRadio/AuthRadio';
import { AuthHistoric } from '../../../../../../components/elements/AuthElements/AuthHistoric/AuthHistoric';
import { Row } from '../../../../../../components/RowContainer/Row';
import { AuthFile } from '../../../../../../components/elements/AuthElements/AuthFile/AuthFile';
import { AuthAchievement } from '../../../../../../components/elements/AuthElements/AuthAchievement/AuthAchievement';
import { AuthQualCheck } from '../../../../../../components/elements/AuthElements/AuthQualCheck/AuthQualCheck';
import { AuthDropdown } from '../../../../../../components/elements/AuthElements/AuthDropdown/AuthDropdown';
import { PlayerContext } from '../../../../../../contexts/userContext/PlayerProvider/PlayerContext';

export function Player() {
  const navigate = useNavigate();

  const playerContext = useContext(PlayerContext);
  const { playerState, playerDispatch } = playerContext;

  const [profileData, setProfileData] = useState({
    bestLeg: '',
    ageCategory: '',
    birthDate: '',
    birthCity: '',
    weight: '',
    height: '',
    primaryNationality: '',
    secondaryNationality: '',
    passports: '',
    payment: '',
    transferValue: '',
    mainPosition: '',
    secondaryPosition: '',
    tertiaryPosition: '',
    league: '',
    hasManager: '',
    toefl: '',
    act: '',
    sat: '',
    graduationYear: '',
    gradePointAverage: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // enviar os dados para o backend
    navigate('/player-profile'); // Direciona o usuário para alguma página quando ele clica no submit
  };

  // Dropdown Options
  const legOptions = [
    { value: 'right', label: 'Direita' },
    { value: 'left', label: 'Esquerda' },
  ];

  const categoryOptions = [
    { value: 'sub7', text: 'Sub-7 (6 e 7 anos)' },
    { value: 'sub8', text: 'Sub-8 (8 anos)' },
    { value: 'sub9', text: 'Sub-9 (8 e 9 anos)' },
    { value: 'sub11', text: 'Sub-11 (10 e 11 anos)' },
    { value: 'sub13', text: 'Sub-13 (12 e 13 anos)' },
    { value: 'sub15', text: 'Sub-15 (14 e 15 anos)' },
    { value: 'sub17', text: 'Sub-17 (16 e 17 anos)' },
    { value: 'sub20', text: 'Sub-20 (18, 19 e 20 anos)' },
    { value: 'adult', text: 'Adulto (Já atua no time principal)' },
  ];

  const positionsOptions = [
    { value: 'goleiro', text: 'Goleiro' },
    { value: 'lateral esquerdo', text: 'Lateral Esquerdo' },
    { value: 'lateral direito', text: 'Lateral Direito' },
    { value: 'zagueiro', text: 'Zagueiro' },
    { value: 'ala', text: 'Ala' },
    { value: 'primeiro volante', text: 'Primeiro Volante' },
    { value: 'segundo volante', text: 'Segundo Volante' },
    { value: 'meio-campista', text: 'Meio-Campista' },
    { value: 'meia-ofensivo', text: 'Meia Ofensivo' },
    { value: 'meia-lateral', text: 'Meia Lateral' },
    { value: 'segundo atacante', text: 'Segundo atacante' },
    { value: 'ponta esquerda', text: 'Ponta Esquerda' },
    { value: 'ponta direita', text: 'Ponta Direito' },
    { value: 'centroavante', text: 'Centroavante' },
  ];

  const managerOptions = [
    { value: 'yes', label: 'Sim' },
    { value: 'no', label: 'Não' },
  ];

  const leagueOptions = [
    { value: 'lifa', text: 'LIFA' },
  ];

  // Historic Handlers
  const [clubHistory, setClubHistory] = useState(
    {
      name: '',
      earliestDate: '',
      latestDate: '',
    },
  );

  const handleAddClub = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Verifica se os campos estão preenchidos
    if (clubHistory.name && clubHistory.earliestDate) {
      // Os dados do formulário estão armazenados no clubHistory
      window.alert('Acessar Player em EditProfile para adicionar lógica para trazer os dados para o backend');
      console.log(clubHistory);

      setClubHistory({
        name: '',
        earliestDate: '',
        latestDate: '',
      });
    } else {
      // Opcional: Mostrar uma mensagem de erro ao usuário
      console.error('Por favor, preencha todos os campos.');
    }
  };

  const [awardHistory, setAwardHistory] = useState(
    {
      name: '',
      date: '',
    },
  );

  const handleAddAward = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Verifica se os campos estão preenchidos
    if (awardHistory.name && awardHistory.date) {
      // Os dados do formulário estão armazenados no clubHistory
      window.alert('Acessar Player em EditProfile para adicionar lógica para trazer os dados para o backend');
      console.log(awardHistory);

      setAwardHistory({
        name: '',
        date: '',
      });
    } else {
      // Opcional: Mostrar uma mensagem de erro ao usuário
      console.error('Por favor, preencha todos os campos.');
    }
  };

  const [academicHistory, setAcademicHistory] = useState(
    {
      name: '',
      earliestDate: '',
      latestDate: '',
    },
  );

  const handleAddAcademic = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Verifica se os campos estão preenchidos
    if (academicHistory.name && academicHistory.earliestDate) {
      // Os dados do formulário estão armazenados no clubHistory
      window.alert('Acessar Player em EditProfile para adicionar lógica para trazer os dados para o backend');
      console.log(academicHistory);

      setAcademicHistory({
        name: '',
        earliestDate: '',
        latestDate: '',
      });
    } else {
      // Opcional: Mostrar uma mensagem de erro ao usuário
      console.error('Por favor, preencha todos os campos.');
    }
  };

  return (
    <Styled.PlayerContainer>

      <AuthWrapper>

        <AuthContainer>

          <AuthForm>

            <Subtitle text="Seu perfil" size={theme.sizes.xlarge} />

            <AuthRadio
              title="Qual sua melhor perna?"
              options={legOptions}
              groupname="legOptions"
              onClick={(e) => setProfileData((prevData) => ({ ...prevData, bestLeg: e.target.value }))}
            />

            <AuthDropdown
              title="Você atua em qual categoria?"
              id="category"
              placeholder="Escolha sua categoria"
              options={categoryOptions}
              otheroption
              onDropdownChange={(option) => setProfileData((prevData) => ({ ...prevData, ageCategory: option }))}
            />

            {/* {profileData.ageCategory === 'other' && (
            <AuthInput
              type="name"
              name="other_input"
              id="other_input"
              placeholder="insira aqui a categoria"
              title="Qual categoria?"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, ageCategory: e.target.value }))}
            />
            )} */}

            <AuthInput
              type="date"
              name="date_input"
              id="date_input"
              title="Data de nascimento"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, birthDate: e.target.value }))}
            />

            <AuthInput
              type="number"
              name="weight_input"
              id="weight_input"
              title="Peso"
              placeholder="Seu peso atual (em KG)"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, weight: e.target.value }))}
            />

            <AuthInput
              type="number"
              name="height_input"
              id="height_input"
              placeholder="Sua altura altura (Ex: 1,70)"
              title="Altura"
              required
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, height: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="primaryBirthCountry_input"
              id="primaryBirthCountry_input"
              title="Nacionalidade primária"
              placeholder="Sua nacionalidade primária"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, primaryNationality: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="secondaryBirthCountry_input"
              id="secondaryBirthCountry_input"
              title="Nacionalidade secundária"
              placeholder="Sua nacionalidade secundária"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, secondaryNationality: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="birthCity_input"
              id="birthCity_input"
              title="Cidade"
              placeholder="Sua cidade de nascimento"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, birthCity: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="passport_input"
              id="passport_input"
              title="Possui passporte para algum país?"
              placeholder="Caso sim, liste os países"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, passports: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="payment_input"
              id="payment_input"
              title="Salário"
              placeholder="Seu salário base"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, payment: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="transferValue_input"
              id="transferValue_input"
              title="Valor de transferência"
              placeholder="Seu valor de transferência"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, transferValue: e.target.value }))}
            />

            <AuthDropdown
              title="Posição Principal"
              placeholder="Sua posição principal"
              id="mainPosition"
              options={positionsOptions}
              onDropdownChange={(option) => setProfileData((prevData) => ({ ...prevData, mainPosition: option }))}
            />

            <AuthDropdown
              title="Posição Secundária"
              placeholder="Sua posição secundária"
              id="secondaryPosition"
              options={positionsOptions}
              onDropdownChange={(option) => setProfileData((prevData) => ({ ...prevData, secondaryPosition: option }))}
            />

            <AuthDropdown
              title="Posição terciária"
              placeholder="Sua posição terciária"
              id="tertiaryPosition"
              options={positionsOptions}
              onDropdownChange={(option) => setProfileData((prevData) => ({ ...prevData, tertiaryPosition: option }))}
            />

            <AuthDropdown
              title="Você atua em alguma liga?"
              id="league"
              placeholder="Escolha sua Liga"
              options={leagueOptions}
              onDropdownChange={(option) => setLeague(option.value)}
              otheroption
              onDropdownChange={(option) => setProfileData((prevData) => ({ ...prevData, league: option }))}
            />

            {/* {league === 'other' && (
            <AuthInput
              type="name"
              name="other_input"
              id="other_input"
              placeholder="Insira aqui o nome da liga"
              title="Qual?"
              required
            />
            )} */}

            <AuthRadio
              title="Você possui algum empresário?"
              options={managerOptions}
              groupname="managerOptions"
              onClick={(e) => setProfileData((prevData) => ({ ...prevData, hasManager: e.target.value }))}
            />

            <Subtitle text="Sua história esportiva" size={theme.sizes.xlarge} />

            <Row>
              <AuthHistoric
              // Dados padrão do componente
                title="Histórico de clubes"
                id="clubHistory"
                inputtitle="Clube"
                placeholder="Nome do Clube"
              // Histórico do usuário (Dados anteriores que já estão salvos)
                historic={playerState.profile.clubs}
              // OnChanges para atualizar o clubHistory
                onChangeName={(e) => setClubHistory((prevData) => ({ ...prevData, name: e.target.value }))}
                onChangeEarliestDate={(e) => setClubHistory((prevData) => ({ ...prevData, earliestDate: e.target.value }))}
                onChangeLatestDate={(e) => setClubHistory((prevData) => ({ ...prevData, latestDate: e.target.value || undefined }))}
              // Values para sincronizar os inputs com o estado do clubHistory
                nameValue={clubHistory.name}
                earliestDateValue={clubHistory.earliestDate}
                latestDateValue={clubHistory.latestDate}
                onClick={(e) => handleAddClub(e)}
              />

              <AuthAchievement
                title="Histórico de títulos e prêmios"
                id="awardsHistory"
                inputtitle="Competição / Prêmio"
                placeholder="Nome da competição ou prêmio"
              // Histórico do usuário (Dados anteriores que já estão salvos)
                achievements={playerState.profile.championships}
              // OnChanges para atualizar o awardHistory
                onChangeName={(e) => setAwardHistory((prevData) => ({ ...prevData, name: e.target.value }))}
                onChangeDate={(e) => setAwardHistory((prevData) => ({ ...prevData, date: e.target.value }))}
              // Values para sincronizar os inputs com o estado do awardHistory
                nameValue={awardHistory.name}
                dateValue={awardHistory.date}
                onClick={(e) => handleAddAward(e)}
              />
            </Row>

            <Subtitle text="Sua história acadêmica" size={theme.sizes.xlarge} />

            {/* <Column> */}
            <AuthQualCheck
              title="Realizou a prova TOEFL?"
              groupname="toefl"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, toefl: e.target.value }))}
            />
            <AuthQualCheck
              title="Realizou a prova ACT?"
              groupname="act"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, act: e.target.value }))}
            />
            <AuthQualCheck
              title="Realizou a prova SAT?"
              groupname="sat"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, sat: e.target.value }))}
            />

            <AuthInput
              type="date"
              name="secondGrade_input"
              id="secondGrade_input"
              title="Ano de formatura do segundo grau"
              placeholder="Ano"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, graduationYear: e.target.value }))}
            />

            <AuthInput
              type="number"
              name="secondGradeGpa_input"
              id="secondGradeGpa_input"
              title="GPA (Grade Point Average)"
              placeholder="Nota média final"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, gradePointAverage: e.target.value }))}
            />

            <AuthHistoric
              title="Conhecimentos"
              id="Academic"
              inputtitle="Formação"
              placeholder="Nome da formação"
            // Histórico do usuário (Dados anteriores que já estão salvos)
              historic={playerState.profile.studies}
            // OnChanges para atualizar o clubHistory
              onChangeName={(e) => setAcademicHistory((prevData) => ({ ...prevData, name: e.target.value }))}
              onChangeEarliestDate={(e) => setAcademicHistory((prevData) => ({ ...prevData, earliestDate: e.target.value }))}
              onChangeLatestDate={(e) => setAcademicHistory((prevData) => ({ ...prevData, latestDate: e.target.value || undefined }))}
            // Values para sincronizar os inputs com o estado do clubHistory
              nameValue={academicHistory.name}
              earliestDateValue={academicHistory.earliestDate}
              latestDateValue={academicHistory.latestDate}
              onClick={(e) => handleAddAcademic(e)}
            />

            <AuthButton
              name="register_submit"
              id="register_submit"
              value="Confirmar alteração"
            />

          </AuthForm>
        </AuthContainer>

      </AuthWrapper>
    </Styled.PlayerContainer>

  );
}
