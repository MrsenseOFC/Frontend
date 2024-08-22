import Prop from 'prop-types';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './AgencyProfile-Styles';
import { ProfileInfo } from '../../../../../components/elements/ProfileInfo/ProfileInfo';
import { Historic } from '../../../../../components/elements/Historic/Historic';
import { TextSlide } from '../../../../../components/elements/TextSlide/TextSlide';
import { Row } from '../../../../../components/RowContainer/Row';
import { AgencyContext } from '../../../../../contexts/userContext/AgencyProvider/AgencyContext';
import { OwnerSlide } from '../../../../../components/elements/ProfileSlideElements/OwnerSlide/OwnerSlide';
import { OwnerVideoSlide } from '../../../../../components/elements/ProfileSlideElements/OwnerVideoSlide/OwnerVideoSlide';

export function AgencyProfile() {
  const { t } = useTranslation();
  const agencyContext = useContext(AgencyContext);
  const { agencyState, agencyDispatch } = agencyContext;

  return (
    <Styled.AgencyProfileContainer>

      <ProfileInfo items={agencyState?.profile?.info || []} />

      <OwnerSlide items={agencyState?.profile?.photos || []} title={t('photos')} ownerview />
      <OwnerVideoSlide items={agencyState?.profile?.videos || []} title={t('videos')} />

    </Styled.AgencyProfileContainer>
  );
}
