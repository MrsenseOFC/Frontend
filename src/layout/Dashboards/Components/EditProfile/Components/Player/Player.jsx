import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

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
      console.error(t('fill_all_fields'));
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
      console.error(t('fill_all_fields'));
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
      console.error(t('fill_all_fields'));
    }
  };

  // Submit principal
  const handleSubmit = async (e) => {
    if (profileData) {
      e.preventDefault();
      changeProfileInfo(playerDispatch, profileData);
      navigate(-1);
    }
  };

  return (
    <Styled.PlayerContainer>

      <AuthWrapper>

        <AuthContainer>

          <AuthForm onSubmit={handleSubmit}>

            <Subtitle text={t('your_profile')} size={theme.sizes.xlarge} />

            <AuthRadio
              title={t('which_best_leg')}
              options={s2tState.formOptions.leg}
              groupname="playerLegOptions"
              selectedvalue={profileData.bestLeg}
              onChange={(option) => setProfileData((prevData) => ({ ...prevData, bestLeg: option }))}
            />

            <AuthDropdown
              title={t('which_competitive_level')}
              id="playerCompetitiveLevel"
              placeholder={t('select_level')}
              options={s2tState.formOptions.competitiveLevels}
              selectedvalue={profileData.competitiveLevel}
              onDropdownChange={(option) => setProfileData((prevData) => ({ ...prevData, competitiveLevel: option }))}
            />

            <AuthDropdown
              title={t('which_category_you_act')}
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
              title={t('birth_date')}
              value={profileData.birthDate}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, birthDate: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="playerWeight_input"
              id="playerWeight_input"
              title={t('weight')}
              placeholder={t('your_current_weight')}
              value={profileData.weight}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, weight: e.target.value }))}

            />

            <AuthInput
              type="text"
              name="playerHeight_input"
              id="playerHeight_input"
              placeholder={t('your_current_height')}
              title={t('height')}
              value={profileData.height}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, height: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="playerPrimaryBirthCountry_input"
              id="playerPrimaryBirthCountry_input"
              title={t('primary_nationality')}
              placeholder={t('your_primary_nationality')}
              value={profileData.primaryNationality}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, primaryNationality: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="playerSecondaryBirthCountry_input"
              id="playerSecondaryBirthCountry_input"
              title={t('secondary_nationality')}
              placeholder={t('your_secondary_nationality')}
              value={profileData.secondaryNationality}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, secondaryNationality: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="playerCountry_Of_Operation_input"
              id="playerCountry_Of_Operation_input"
              title={t('operation_country')}
              placeholder={t('country_you play_in')}
              value={profileData.primaryNationality}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, primaryNationality: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="playerBirthState_input"
              id="playerBirthState_input"
              title={t('state')}
              placeholder={t('your_birth_state')}
              value={profileData.birthCity}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, birthCity: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="playerBirthCity_input"
              id="playerBirthCity_input"
              title={t('city')}
              placeholder={t('your_birth_city')}
              value={profileData.birthCity}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, birthCity: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="playerPassports_input"
              id="playerPassports_input"
              title={t('have_passports_question')}
              placeholder={t('if_yes_list_the_countries')}
              value={profileData.passports}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, passports: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="playerPayment_input"
              id="playerPayment_input"
              title={t('payment')}
              placeholder={t('your_base_payment')}
              value={profileData.payment}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, payment: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="playerTransferValue_input"
              id="playerTransferValue_input"
              title={t('transfer_value')}
              placeholder={t('your_transfer_value')}
              value={profileData.transferValue}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, transferValue: e.target.value }))}
            />

            <AuthDropdown
              title={t('main_position')}
              placeholder={t('your_main_position')}
              id="playerMainPosition"
              options={s2tState.formOptions.positions}
              selectedvalue={profileData.primaryPosition}
              onDropdownChange={(option) => setProfileData((prevData) => ({ ...prevData, primaryPosition: option }))}
            />

            <AuthDropdown
              title={t('secondary_position')}
              placeholder={t('your_secondary_position')}
              id="playerSecondaryPosition"
              options={s2tState.formOptions.positions}
              selectedvalue={profileData.secondaryPosition}
              onDropdownChange={(option) => setProfileData((prevData) => ({ ...prevData, secondaryPosition: option }))}
            />

            <AuthDropdown
              title={t('tertiary_position')}
              placeholder={t('your_tertiary_position')}
              id="playerTertiaryPosition"
              options={s2tState.formOptions.positions}
              selectedvalue={profileData.tertiaryPosition}
              onDropdownChange={(option) => setProfileData((prevData) => ({ ...prevData, tertiaryPosition: option }))}
            />

            <AuthDropdown
              title={t('play_in_league_question')}
              id="playerLeague"
              placeholder={t('select_your_league')}
              options={s2tState.formOptions.league}
              otheroption
              selectedvalue={profileData.league}
              onDropdownChange={(option) => setProfileData((prevData) => ({ ...prevData, league: option }))}
            />

            <AuthRadio
              title={t('have_manager_question')}
              options={s2tState.formOptions.manager}
              groupname="playerManagerOptions"
              selectedvalue={profileData.hasManager}
              onChange={(option) => setProfileData((prevData) => ({ ...prevData, hasManager: option }))}
            />

            <Subtitle text={t('your_sporting_history')} size={theme.sizes.xlarge} />

            <Row>
              <AuthHistoric
              // Dados padrão do componente
                title={t('club_history')}
                id="playerClubHistory"
                inputtitle={t('club')}
                placeholder={t('club_name')}
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
                title={t('titles_and_awards_history')}
                id="playerAwardHistory"
                inputtitle={t('competition_award')}
                placeholder={t('competition_award_name')}
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

            <Subtitle text={t('your_academic_history')} size={theme.sizes.xlarge} />

            <AuthQualCheck
              title={t('take_toefl_question')}
              groupname="playerToefl"
              selectedvalue={profileData.toefl}
              onChange={(option) => setProfileData((prevData) => ({ ...prevData, toefl: option }))}
            />

            <AuthQualCheck
              title={t('take_act_question')}
              groupname="playeAct"
              selectedvalue={profileData.act}
              onChange={(option) => setProfileData((prevData) => ({ ...prevData, act: option }))}
            />

            <AuthQualCheck
              title={t('take_act_question')}
              groupname="playerSat"
              selectedvalue={profileData.sat}
              onChange={(option) => setProfileData((prevData) => ({ ...prevData, sat: option }))}
            />

            <AuthInput
              type="date"
              name="secondGradeYear_input"
              id="secondGradeYear_input"
              title={t('second_grade_graduation_date')}
              value={profileData.graduationDate}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, graduationDate: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="playerGpa_input"
              id="playerGpa_input"
              title={t('gpa')}
              placeholder={t('grade_point_average')}
              value={profileData.gradePointAverage}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, gradePointAverage: e.target.value }))}
            />

            <AuthHistoric
              title={t('certifications')}
              id="playerAcademicHistory"
              inputtitle={t('certification')}
              placeholder={t('certification_name')}
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
              value={t('confirm_changes')}
            />

          </AuthForm>
        </AuthContainer>

      </AuthWrapper>
    </Styled.PlayerContainer>

  );
}
