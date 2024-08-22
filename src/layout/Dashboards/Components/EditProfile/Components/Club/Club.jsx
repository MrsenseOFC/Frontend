import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import * as Styled from './Club-Styles';

import { AuthForm } from '../../../../../../components/elements/AuthElements/AuthForm/AuthForm';
import { AuthButton } from '../../../../../../components/elements/AuthElements/AuthButton/AuthButton';
import { AuthInput } from '../../../../../../components/elements/AuthElements/AuthInput/AuthInput';
import { AuthWrapper } from '../../../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper';

import { Subtitle } from '../../../../../../components/elements/Subtitle/Subtitle';

import { theme } from '../../../../../../styles/theme';
import { AuthContainer } from '../../../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';

import { AuthHistoric } from '../../../../../../components/elements/AuthElements/AuthHistoric/AuthHistoric';
import { Row } from '../../../../../../components/RowContainer/Row';
import { AuthFile } from '../../../../../../components/elements/AuthElements/AuthFile/AuthFile';
import { AuthAchievement } from '../../../../../../components/elements/AuthElements/AuthAchievement/AuthAchievement';
import { ClubContext } from '../../../../../../contexts/userContext/ClubProvider/ClubContext';
import { AuthDropdown } from '../../../../../../components/elements/AuthElements/AuthDropdown/AuthDropdown';
import { S2tContext } from '../../../../../../contexts/s2tContext/S2tContext';
import { addAwardHistory, addCompetitionHistory, changeProfileInfo } from '../../../../../../contexts/userContext/ClubProvider/clubActions';

export function Club() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const clubContext = useContext(ClubContext);
  const { clubState, clubDispatch } = clubContext;

  const [profileData, setProfileData] = useState({
    ...clubState.profile.info,
  });

  const [competitionHistory, setCompetitionHistory] = useState(
    {
      name: '',
      earliestDate: '',
    },
  );

  const handleAddCompetition = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Verifica se os campos estão preenchidos
    if (competitionHistory.name && competitionHistory.earliestDate) {
      // lógica para alterar o histórico de títulos e prêmios no backend

      addCompetitionHistory(clubDispatch, competitionHistory);
      setCompetitionHistory({
        name: '',
        earliestDate: '',
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

      addAwardHistory(clubDispatch, awardHistory);

      setAwardHistory({
        name: '',
        date: '',
      });
    } else {
      console.error(t('fill_all_fields'));
    }
  };

  const handleSubmit = async (e) => {
    if (profileData) {
      e.preventDefault();
      changeProfileInfo(clubDispatch, profileData);
      navigate(-1);
    }
  };

  return (
    <Styled.ClubContainer>

      <AuthWrapper>

        <AuthContainer>

          <AuthForm onSubmit={handleSubmit}>

            <Subtitle text={t('your_profile')} size={theme.sizes.xlarge} />

            <AuthInput
              type="text"
              name="clubRepresentative_input"
              id="clubRepresentative_input"
              title={t('representative')}
              placeholder={t('representative_club_name')}
              value={profileData.representative}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, representative: e.target.value }))}
            />

            <AuthDropdown
              title={t('which_club_competitive_level')}
              id="clubCompetitiveLevel"
              placeholder={t('select_level')}
              options={s2tState.formOptions.competitiveLevels}
              selectedvalue={profileData.competitiveLevel}
              onDropdownChange={(option) => setProfileData((prevData) => ({ ...prevData, competitiveLevel: option }))}
            />

            <AuthInput
              type="date"
              name="clubRoundationDate_input"
              id="clubFoundationDate_input"
              title={t('foundation_date')}
              value={profileData.foundationDate}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, foundationDate: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="clubCountry_input"
              id="clubCountry_input"
              title={t('country')}
              placeholder={t('which_country_club')}
              value={profileData.country}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, country: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="clubState_input"
              id="clubState_input"
              title={t('state')}
              placeholder={t('which_state_club')}
              value={profileData.state}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, state: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="clubTrainingCenter_input"
              id="clubTrainingCenter_input"
              title={t('training_center')}
              placeholder={t('where_club_train')}
              value={profileData.trainingCenter}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, trainingCenter: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="clubStadium_input"
              id="clubStadium_input"
              title={t('stadium_name')}
              placeholder={t('club_stadium')}
              value={profileData.stadium}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, stadium: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="clubCoach_input"
              id="clubCoach_input"
              title={t('coach_or_trainer')}
              placeholder={t('actual_club_coach')}
              value={profileData.coach}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, coach: e.target.value }))}
            />

            <Row>
              <AuthAchievement
                title={t('current_competitions')}
                id="clubCompetitionsHistory"
                inputtitle={t('competition')}
                placeholder={t('competition_name')}
              // Histórico do usuário (Dados anteriores que já estão salvos)
                achievements={clubState.profile.competitions}
              // OnChanges para atualizar o competionHistory
                onChangeName={(e) => setCompetitionHistory((prevData) => ({ ...prevData, name: e.target.value }))}
                onChangeDate={(e) => setCompetitionHistory((prevData) => ({ ...prevData, earliestDate: e.target.value }))}
              // Values para sincronizar os inputs com o estado do competionHistory
                nameValue={competitionHistory.name}
                DateValue={competitionHistory.earliestDate}
                onClick={(e) => handleAddCompetition(e)}
              />

              <AuthAchievement
                title={t('titles_and_awards_history')}
                id="clubAwardsHistory"
                inputtitle={t('competition_award')}
                placeholder={t('competition_award_name')}
                // Histórico do usuário (Dados anteriores que já estão salvos)
                achievements={clubState.profile.awards}
              // OnChanges para atualizar o awardHistory
                onChangeName={(e) => setAwardHistory((prevData) => ({ ...prevData, name: e.target.value }))}
                onChangeDate={(e) => setAwardHistory((prevData) => ({ ...prevData, date: e.target.value }))}
              // Values para sincronizar os inputs com o estado do awardHistory
                nameValue={awardHistory.name}
                dateValue={awardHistory.date}
                onClick={(e) => handleAddAward(e)}
              />
            </Row>

            <AuthButton
              name="editClubProfile_submit"
              id="editClubProfile_submit"
              value={t('confirm_changes')}
            />

          </AuthForm>
        </AuthContainer>

      </AuthWrapper>
    </Styled.ClubContainer>

  );
}
