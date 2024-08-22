import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import * as Styled from './University-Styles';

import { AuthForm } from '../../../../../../components/elements/AuthElements/AuthForm/AuthForm';
import { AuthButton } from '../../../../../../components/elements/AuthElements/AuthButton/AuthButton';
import { AuthInput } from '../../../../../../components/elements/AuthElements/AuthInput/AuthInput';
import { AuthWrapper } from '../../../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper';

import { Subtitle } from '../../../../../../components/elements/Subtitle/Subtitle';

import { theme } from '../../../../../../styles/theme';
import { AuthContainer } from '../../../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';

import { Row } from '../../../../../../components/RowContainer/Row';
import { AuthFile } from '../../../../../../components/elements/AuthElements/AuthFile/AuthFile';
import { AuthAchievement } from '../../../../../../components/elements/AuthElements/AuthAchievement/AuthAchievement';
import { UniversityContext } from '../../../../../../contexts/userContext/UniversityProvider/UniversityContext';
import { AuthDropdown } from '../../../../../../components/elements/AuthElements/AuthDropdown/AuthDropdown';
import { S2tContext } from '../../../../../../contexts/s2tContext/S2tContext';
import { addAwardHistory, addCompetitionHistory, changeProfileInfo } from '../../../../../../contexts/userContext/UniversityProvider/universityActions';

export function University() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const universityContext = useContext(UniversityContext);
  const { universityState, universityDispatch } = universityContext;

  const [profileData, setProfileData] = useState({
    ...universityState.profile.info,
  });

  const [awardHistory, setAwardHistory] = useState(
    {
      name: '',
      earliestDate: '',
    },
  );

  const handleAddAward = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Verifica se os campos estão preenchidos
    if (awardHistory.name && awardHistory.earliestDate) {
      // lógica para alterar o histórico de títulos e prêmios no backend

      addAwardHistory(universityDispatch, awardHistory);
      setAwardHistory({
        name: '',
        earliestDate: '',
      });
    } else {
      console.error(t('fill_all_fields'));
    }
  };

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

      addCompetitionHistory(universityDispatch, competitionHistory);
      setCompetitionHistory({
        name: '',
        earliestDate: '',
      });
    } else {
      console.error(t('fill_all_fields'));
    }
  };

  const handleSubmit = async (e) => {
    if (profileData) {
      e.preventDefault();
      changeProfileInfo(universityDispatch, profileData);
      navigate(-1);
    }
  };

  return (
    <Styled.UniversityContainer>

      <AuthWrapper>

        <AuthContainer>

          <AuthForm onSubmit={handleSubmit}>

            <Subtitle text={t('your_profile')} size={theme.sizes.xlarge} />

            <AuthInput
              type="text"
              name="universityRepresentative_input"
              id="universityRepresentative_input"
              title={t('representative')}
              placeholder={t('representative_university_name')}
              value={profileData.representative}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, representative: e.target.value }))}
            />

            <AuthDropdown
              title={t('which_university_competitive_lelvel')}
              id="universityCompetitiveLevel"
              placeholder={t('select_level')}
              options={s2tState.formOptions.universityCompetitiveLevels}
              selectedvalue={profileData.competitiveLevel}
              otheroption
              onDropdownChange={(option) => setProfileData((prevData) => ({ ...prevData, competitiveLevel: option }))}
            />

            <AuthInput
              type="date"
              name="universityFoundationDate_input"
              id="universityFoundationDate_input"
              title={t('foundation_date')}
              value={profileData.foundationDate}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, foundationDate: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="universityCountry_input"
              id="universityCountry_input"
              title={t('country')}
              placeholder={t('which_country_university')}
              value={profileData.country}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, country: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="universityState_input"
              id="universityState_input"
              title={t('state')}
              placeholder={t('which_state_university')}
              value={profileData.state}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, state: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="universityTrainingCenter_input"
              id="universityTrainingCenter_input"
              title={t('training_center')}
              placeholder={t('where_university_train')}
              value={profileData.trainingCenter}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, trainingCenter: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="universityStadium_input"
              id="universityStadium_input"
              title={t('stadium_name')}
              placeholder={t('university_stadium')}
              value={profileData.stadium}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, stadium: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="universityCoach_input"
              id="universityCoach_input"
              title={t('coach')}
              placeholder={t('actual_university_coach')}
              value={profileData.coach}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, coach: e.target.value }))}
            />

            <Row>

              <AuthAchievement
                title={t('current_competitions')}
                id="universityCompetitionsHistory"
                inputtitle={t('competition')}
                placeholder={t('competition_name')}
              // Histórico do usuário (Dados anteriores que já estão salvos)
                achievements={universityState.profile.competitions}
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
                id="universityAwardsHistory"
                inputtitle={t('competition_award')}
                placeholder={t('competition_award_name')}
                // Histórico do usuário (Dados anteriores que já estão salvos)
                achievements={universityState.profile.awards}
              // OnChanges para atualizar o awardHistory
                onChangeName={(e) => setAwardHistory((prevData) => ({ ...prevData, name: e.target.value }))}
                onChangeDate={(e) => setAwardHistory((prevData) => ({ ...prevData, earliestDate: e.target.value }))}
              // Values para sincronizar os inputs com o estado do awardHistory
                nameValue={awardHistory.name}
                dateValue={awardHistory.date}
                onClick={(e) => handleAddAward(e)}
              />
            </Row>

            <AuthButton
              name="editUniversityProfile_submit"
              id="editUniversityProfile_submit"
              value={t('confirm_changes')}
            />

          </AuthForm>
        </AuthContainer>

      </AuthWrapper>
    </Styled.UniversityContainer>

  );
}
