import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
    competitiveLevel: '',
    ageCategory: '',
    birthDate: '',
    age: 0,
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
    graduationDate: '',
    gradePointAverage: '',
  });

  // Calcula a idade do usuário baseado na data de nascimento
  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date(profileData.birthDate);
      if (birthDate) {
        const today = new Date();
        const ageInMilliseconds = today - birthDate;
        const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24
   * 365.25));
        setProfileData((prevData) => ({ ...prevData, age: ageInYears }));
      }
    };

    calculateAge();
  }, [profileData.birthDate]);

  // Inputs Options
  const legOptions = [
    { value: 'right', label: 'Direita' },
    { value: 'left', label: 'Esquerda' },
  ];

  const competitiveLevelsOptions = [
    { value: 'serieA', text: 'Serie A' },
    { value: 'serieB', text: 'Serie B' },
    { value: 'serieC', text: 'Serie C' },
    { value: 'serieD', text: 'Serie D' },
  ];

  const ageCategoryOptions = [
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
    { value: 'goalkeeper', text: 'Goleiro' },
    { value: 'left-back', text: 'Lateral Esquerdo' },
    { value: 'right-back', text: 'Lateral Direito' },
    { value: 'center-back', text: 'Zagueiro' },
    { value: 'wing-back', text: 'Ala' },
    { value: 'defensive midfielder', text: 'Primeiro Volante' },
    { value: 'central midfielder', text: 'Meio-Campista' },
    { value: 'attacking midfielder', text: 'Meia Ofensivo' },
    { value: 'wide midfielder', text: 'Meia Lateral' },
    { value: 'second striker', text: 'Segundo atacante' },
    { value: 'left winger', text: 'Ponta Esquerda' },
    { value: 'right winger', text: 'Ponta Direito' },
    { value: 'center forward', text: 'Centroavante' },
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

  const handleAddClub = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Verifica se os campos estão preenchidos
    if (clubHistory.name && clubHistory.earliestDate) {
      // lógica para alterar o histórico de clubes no backend
      try {
        const response = await axios.post('api', clubHistory);
        console.log('Perfil alterado com sucesso:', response.data);

        // Reseta o estado local
        setClubHistory({
          name: '',
          earliestDate: '',
          latestDate: '',
        });
      } catch (error) {
        console.error('Erro ao editar perfil:', error);
      }
    } else {
      console.error('Por favor, preencha todos os campos.');
    }
  };

  const [awardHistory, setAwardHistory] = useState(
    {
      name: '',
      date: '',
    },
  );

  const handleAddAward = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Verifica se os campos estão preenchidos
    if (awardHistory.name && awardHistory.date) {
      // lógica para alterar o histórico de títulos e prêmios no backend
      try {
        const response = await axios.post('api', awardHistory);
        console.log('Perfil alterado com sucesso:', response.data);

        // Reseta o estado local
        setAwardHistory({
          name: '',
          date: '',
        });
      } catch (error) {
        console.error('Erro ao editar perfil:', error);
      }
    } else {
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

  const handleAddAcademic = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Verifica se os campos estão preenchidos
    if (academicHistory.name && academicHistory.earliestDate) {
      // lógica para alterar o histórico acadêmico no backend
      try {
        const response = await axios.post('api', academicHistory);
        console.log('Perfil alterado com sucesso:', response.data);

        // Reseta o estado local
        setAcademicHistory({
          name: '',
          earliestDate: '',
          latestDate: '',
        });
      } catch (error) {
        console.error('Erro ao editar perfil:', error);
      }
    } else {
      console.error('Por favor, preencha todos os campos.');
    }
  };

  // Submit principal
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (profileData) {
      try {
        const response = await axios.post('api', profileData);
        console.log('Perfil alterado com sucesso:', response.data);
      } catch (error) {
        console.error('Erro ao editar perfil:', error);
      }
    }
  };

  return (
    <Styled.PlayerContainer>

      <AuthWrapper>

        <AuthContainer>

          <AuthForm onSubmit={handleSubmit}>

            <Subtitle text="Seu perfil" size={theme.sizes.xlarge} />

            <AuthRadio
              title="Qual sua melhor perna?"
              options={legOptions}
              groupname="playerLegOptions"
              onClick={(e) => setProfileData((prevData) => ({ ...prevData, bestLeg: e.target.value }))}
            />

            <AuthDropdown
              title="Qual o seu nível competitivo?"
              id="playerCompetitiveLevel"
              placeholder="Escolha o nível"
              options={competitiveLevelsOptions}
              onDropdownChange={(option) => setProfileData((prevData) => ({ ...prevData, competitiveLevel: option }))}
            />

            <AuthDropdown
              title="Você atua em qual categoria?"
              id="playerAgeCategory"
              placeholder="Escolha sua categoria"
              options={ageCategoryOptions}
              onDropdownChange={(option) => setProfileData((prevData) => ({ ...prevData, ageCategory: option }))}
              required
            />

            <AuthInput
              type="date"
              name="playerBirthDate_input"
              id="playerBirthDate_input"
              title="Data de nascimento"
              value={profileData.birthDate}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, birthDate: e.target.value }))}
              required
            />

            <AuthInput
              type="text"
              name="playerWeight_input"
              id="playerWeight_input"
              title="Peso"
              placeholder="Seu peso atual (em KG)"
              value={profileData.weight}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, weight: e.target.value }))}

            />

            <AuthInput
              type="text"
              name="playerHeight_input"
              id="playerHeight_input"
              placeholder="Sua altura atual (Ex: 1,70)"
              title="Altura"
              value={profileData.height}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, height: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="playerPrimaryBirthCountry_input"
              id="playerPrimaryBirthCountry_input"
              title="Nacionalidade primária"
              placeholder="Sua nacionalidade primária"
              value={profileData.primaryNationality}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, primaryNationality: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="playerSecondaryBirthCountry_input"
              id="playerSecondaryBirthCountry_input"
              title="Nacionalidade secundária"
              placeholder="Sua nacionalidade secundária"
              value={profileData.secondaryNationality}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, secondaryNationality: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="playerBirthCity_input"
              id="playerBirthCity_input"
              title="Cidade"
              placeholder="Sua cidade de nascimento"
              value={profileData.birthCity}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, birthCity: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="playerPassports_input"
              id="playerPassports_input"
              title="Possui passporte para algum país?"
              placeholder="Caso sim, liste os países"
              value={profileData.passports}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, passports: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="playerPayment_input"
              id="playerPayment_input"
              title="Salário"
              placeholder="Seu salário base"
              value={profileData.payment}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, payment: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="playerTransferValue_input"
              id="playerTransferValue_input"
              title="Valor de transferência"
              placeholder="Seu valor de transferência"
              value={profileData.transferValue}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, transferValue: e.target.value }))}
            />

            <AuthDropdown
              title="Posição Principal"
              placeholder="Sua posição principal"
              id="playerMainPosition"
              options={positionsOptions}
              onDropdownChange={(option) => setProfileData((prevData) => ({ ...prevData, mainPosition: option }))}
              required
            />

            <AuthDropdown
              title="Posição Secundária"
              placeholder="Sua posição secundária"
              id="playerSecondaryPosition"
              options={positionsOptions}
              onDropdownChange={(option) => setProfileData((prevData) => ({ ...prevData, secondaryPosition: option }))}
            />

            <AuthDropdown
              title="Posição terciária"
              placeholder="Sua posição terciária"
              id="playerTertiaryPosition"
              options={positionsOptions}
              onDropdownChange={(option) => setProfileData((prevData) => ({ ...prevData, tertiaryPosition: option }))}
            />

            <AuthDropdown
              title="Você atua em alguma liga?"
              id="playerLeague"
              placeholder="Escolha sua Liga"
              options={leagueOptions}
              otheroption
              onDropdownChange={(option) => setProfileData((prevData) => ({ ...prevData, league: option }))}
            />

            <AuthRadio
              title="Você possui algum empresário?"
              options={managerOptions}
              groupname="playerManagerOptions"
              onClick={(e) => setProfileData((prevData) => ({ ...prevData, hasManager: e.target.value }))}
            />

            <Subtitle text="Sua história esportiva" size={theme.sizes.xlarge} />

            <Row>
              <AuthHistoric
              // Dados padrão do componente
                title="Histórico de clubes"
                id="playerClubHistory"
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
                id="playerAwardsHistory"
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

            <AuthQualCheck
              title="Realizou a prova TOEFL?"
              groupname="playerToefl"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, toefl: e.target.value }))}
            />
            <AuthQualCheck
              title="Realizou a prova ACT?"
              groupname="playeAct"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, act: e.target.value }))}
            />
            <AuthQualCheck
              title="Realizou a prova SAT?"
              groupname="playerSat"
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, sat: e.target.value }))}
            />

            <AuthInput
              type="date"
              name="secondGradeYear_input"
              id="secondGradeYear_input"
              title="Data de formatura do segundo grau"
              value={profileData.graduationDate}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, graduationDate: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="playerGpa_input"
              id="playerGpa_input"
              title="GPA (Grade Point Average)"
              placeholder="Nota média final"
              value={profileData.gradePointAverage}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, gradePointAverage: e.target.value }))}
            />

            <AuthHistoric
              title="Conhecimentos"
              id="playerAcademicHistory"
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
              name="editOPlayerProfile_submit"
              id="editPlayerProfile_submit"
              value="Confirmar alteração"
            />

          </AuthForm>
        </AuthContainer>

      </AuthWrapper>
    </Styled.PlayerContainer>

  );
}
