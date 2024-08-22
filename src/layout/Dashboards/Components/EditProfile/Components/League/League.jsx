import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
import { addAwardHistory, addCompetitionHistory, changeProfileInfo } from '../../../../../../contexts/userContext/ClubProvider/clubActions';

export function League() {
  const navigate = useNavigate();
  const { t } = useNavigate();

  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const leagueContext = useContext(LeagueContext);
  const { clubState, leagueDispatch } = leagueContext;

  const [profileData, setProfileData] = useState({
    ...leagueState.profile.info,
  });

  return (
    <Styled.LeagueContainer>

      <AuthWrapper>

        <AuthContainer>

          <AuthForm>

            <Subtitle text={t('your_profile')} size={theme.sizes.xlarge} />

          </AuthForm>
        </AuthContainer>

      </AuthWrapper>
    </Styled.LeagueContainer>

  );
}
