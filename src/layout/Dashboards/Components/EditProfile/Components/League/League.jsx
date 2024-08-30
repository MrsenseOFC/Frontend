import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as Styled from './League-Styles';

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
import { LeagueContext } from '../../../../../../contexts/userContext/LeagueProvider/LeagueContext';
import { AuthDropdown } from '../../../../../../components/elements/AuthElements/AuthDropdown/AuthDropdown';
import { S2tContext } from '../../../../../../contexts/s2tContext/S2tContext';
import { changeProfileInfo } from '../../../../../../contexts/userContext/LeagueProvider/leagueActions';

export function League() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const leagueContext = useContext(LeagueContext);
  const { leagueState, leagueDispatch } = leagueContext;

  const [profileData, setProfileData] = useState({
    ...leagueState.profile.info,
  });

  const handleSubmit = async (e) => {
    if (profileData) {
      e.preventDefault();
      changeProfileInfo()(leagueDispatch, profileData);
      navigate(-1);
    }
  };

  return (
    <Styled.LeagueContainer>

      <AuthWrapper>

        <AuthContainer>

          <AuthForm>

            <Subtitle text={t('your_profile')} size={theme.sizes.xlarge} />

            <AuthInput
              type="text"
              name="leagueRepresentative_input"
              id="leagueRepresentative_input"
              title={t('representative')}
              placeholder={t('representative_league_name')}
              value={profileData.representative}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, representative: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="leagueCountry_input"
              id="leagueCountry_input"
              title={t('country')}
              placeholder={t('which_country_league')}
              value={profileData.country}
              onChange={(e) => setProfileData((prevData) => ({ ...prevData, country: e.target.value }))}
            />

            <AuthButton
              name="editLeagueProfile_submit"
              id="editLeagueProfile_submit"
              value={t('confirm_changes')}
            />

          </AuthForm>
        </AuthContainer>

      </AuthWrapper>
    </Styled.LeagueContainer>

  );
}
