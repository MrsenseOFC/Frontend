import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
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
import { AuthAchievement } from '../../../../../../components/elements/AuthElements/AuthAchievement/AuthAchievement';
import { AuthQualCheck } from '../../../../../../components/elements/AuthElements/AuthQualCheck/AuthQualCheck';
import { AuthDropdown } from '../../../../../../components/elements/AuthElements/AuthDropdown/AuthDropdown';
import { PlayerContext } from '../../../../../../contexts/userContext/PlayerProvider/PlayerContext';
import { S2tContext } from '../../../../../../contexts/s2tContext/S2tContext';
import {
  addAcademicHistory, addAwardHistory, addClubHistory, changeProfileInfo,
} from '../../../../../../contexts/userContext/PlayerProvider/playerActions';

export function Player() {
  const navigate = useNavigate();

  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const playerContext = useContext(PlayerContext);
  const { playerState, playerDispatch } = playerContext;

  const [profileData, setProfileData] = useState({
    ...playerState.profile.info,
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

  // Historic Handlers
  const [clubHistory, setClubHistory] = useState(
    {
      name: '',
      earliestDate: '',
      latestDate: '',
    },
  );

  const [clubHistoryData, setClubHistoryData] = useState(
    ...playerState.profile.clubs,
  );

  const handleAddClub = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Verifica se os campos estão preenchidos
    if (clubHistory.name && clubHistory.earliestDate) {
      addClubHistory(playerDispatch, clubHistory);

      setClubHistory({
        name: '',
        earliestDate: '',
        latestDate: '',
      });
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

      addAwardHistory(playerDispatch, awardHistory);

      setAwardHistory({
        name: '',
        date: '',
      });
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
      addAcademicHistory(playerDispatch, academicHistory);

      // Reseta o estado local
      setAcademicHistory({
        name: '',
        earliestDate: '',
        latestDate: '',
      });
    } else {
      console.error('Por favor, preencha todos os campos.');
    }
  };

  // Submit principal
  const handleSubmit = async (e) => {
    e.preventDefault();
    changeProfileInfo(playerDispatch, profileData);
    navigate(-1);
  };

  return (
    <Styled.PlayerContainer>

      <AuthWrapper>

        <AuthContainer>

          <AuthForm onSubmit={handleSubmit}>

            <Subtitle text="Seu perfil" size={theme.sizes.xlarge} />

            <AuthRadio
              title="Qual sua melhor perna?"
              options={s2tState.formOptions.leg}
              groupname="playerLegOptions"
              selectedvalue={profileData.bestLeg}
              onChange={(option) => setProfileData((prevData) => ({ ...prevData, bestLeg: option }))}
            />

            <AuthDropdown
              title="Qual o seu nível competitivo?"
              id="playerCompetitiveLevel"
              placeholder="Escolha o nível"
              options={s2tState.formOptions.competitiveLevels}
              selectedvalue={profileData.competitiveLevel}
              onDropdownChange={(option) => setProfileData((prevData) => ({ ...prevData, competitiveLevel: option }))}
            />

            <AuthDropdown
              title="Você atua em qual categoria?"
              id="playerAgeCategory"
              placeholder="Escolha sua categoria"
              options={s2tState.formOptions.ageCategory}
              selectedvalue={profileData.ageCategory}
              onDropdownChange={(option) => setProfileData((prevData) => ({ ...prevData, ageCategory: option }))}
            />

            <AuthInput
              type="date"
              name="playerBirthDate_input"
              id="playerBirthDate_input"
              title="Data de nascimento"
              value={profileData.birthDate}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, birthDate: e.target.value }))}
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
              options={s2tState.formOptions.positions}
              selectedvalue={profileData.primaryPosition}
              onDropdownChange={(option) => setProfileData((prevData) => ({ ...prevData, primaryPosition: option }))}
            />

            <AuthDropdown
              title="Posição Secundária"
              placeholder="Sua posição secundária"
              id="playerSecondaryPosition"
              options={s2tState.formOptions.positions}
              selectedvalue={profileData.secondaryPosition}
              onDropdownChange={(option) => setProfileData((prevData) => ({ ...prevData, secondaryPosition: option }))}
            />

            <AuthDropdown
              title="Posição terciária"
              placeholder="Sua posição terciária"
              id="playerTertiaryPosition"
              options={s2tState.formOptions.positions}
              selectedvalue={profileData.tertiaryPosition}
              onDropdownChange={(option) => setProfileData((prevData) => ({ ...prevData, tertiaryPosition: option }))}
            />

            <AuthDropdown
              title="Você atua em alguma liga?"
              id="playerLeague"
              placeholder="Escolha sua Liga"
              options={s2tState.formOptions.league}
              otheroption
              selectedvalue={profileData.league}
              onDropdownChange={(option) => setProfileData((prevData) => ({ ...prevData, league: option }))}
            />

            <AuthRadio
              title="Você possui algum empresário?"
              options={s2tState.formOptions.manager}
              groupname="playerManagerOptions"
              selectedvalue={profileData.hasManager}
              onChange={(option) => setProfileData((prevData) => ({ ...prevData, hasManager: option }))}
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
                id="playerAwardHistory"
                inputtitle="Competição / Prêmio"
                placeholder="Nome da competição ou prêmio"
              // Histórico do usuário (Dados anteriores que já estão salvos)
                achievements={playerState.profile.awards}
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
              selectedvalue={profileData.toefl}
              onChange={(option) => setProfileData((prevData) => ({ ...prevData, toefl: option }))}
            />

            <AuthQualCheck
              title="Realizou a prova ACT?"
              groupname="playeAct"
              selectedvalue={profileData.act}
              onChange={(option) => setProfileData((prevData) => ({ ...prevData, act: option }))}
            />

            <AuthQualCheck
              title="Realizou a prova SAT?"
              groupname="playerSat"
              selectedvalue={profileData.sat}
              onChange={(option) => setProfileData((prevData) => ({ ...prevData, sat: option }))}
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
