import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import * as Styled from './Agency-Styles';

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
import { AgencyContext } from '../../../../../../contexts/userContext/AgencyProvider/AgencyContext';
import { AuthDropdown } from '../../../../../../components/elements/AuthElements/AuthDropdown/AuthDropdown';
import { S2tContext } from '../../../../../../contexts/s2tContext/S2tContext';
import { addAwardHistory, addCompetitionHistory, changeProfileInfo } from '../../../../../../contexts/userContext/AgencyProvider/agencyActions';

export function Agency() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const agencyContext = useContext(AgencyContext);
  const { agencyState, agencyDispatch } = agencyContext;

  const [profileData, setProfileData] = useState({
    ...agencyState.profile.info,
  });

  const handleSubmit = async (e) => {
    if (profileData) {
      e.preventDefault();
      changeProfileInfo(agencyDispatch, profileData);
      navigate(-1);
    }
  };

  return (
    <Styled.AgencyContainer>

      <AuthWrapper>

        <AuthContainer>

          <AuthForm onSubmit={handleSubmit}>

            <Subtitle text={t('your_profile')} size={theme.sizes.xlarge} />

            <AuthDropdown
              title={t('your_agency_type_question')}
              id="agencyProfileType"
              placeholder={t('select_type')}
              options={s2tState.formOptions.agencyProfileType}
              selectedvalue={profileData.profileType}
              otheroption
              onDropdownChange={(option) => setProfileData((prevData) => ({ ...prevData, profileType: option }))}
            />

            <AuthButton
              name="editAgencyProfile_submit"
              id="editAgencyProfile_submit"
              value={t('confirm_changes')}
            />

          </AuthForm>
        </AuthContainer>

      </AuthWrapper>
    </Styled.AgencyContainer>

  );
}
