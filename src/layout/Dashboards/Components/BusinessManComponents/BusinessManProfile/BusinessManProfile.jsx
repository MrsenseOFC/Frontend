import Prop from 'prop-types';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './BusinessManProfile-Styles';
import { ProfileInfo } from '../../../../../components/elements/ProfileInfo/ProfileInfo';
import { Historic } from '../../../../../components/elements/Historic/Historic';
import { TextSlide } from '../../../../../components/elements/TextSlide/TextSlide';
import { PlayerContext } from '../../../../../contexts/userContext/PlayerProvider/PlayerContext';
import { Row } from '../../../../../components/RowContainer/Row';
import { OwnerSlide } from '../../../../../components/elements/ProfileSlideElements/OwnerSlide/OwnerSlide';
import { BusinessManContext } from '../../../../../contexts/userContext/BusinessManProvider/BusinessManContext';
import { OwnerVideoSlide } from '../../../../../components/elements/ProfileSlideElements/OwnerVideoSlide/OwnerVideoSlide';

export function BusinessManProfile() {
  const { t } = useTranslation();
  const businessManContext = useContext(BusinessManContext);
  const { businessManState, businessManDispatch } = businessManContext;

  return (
    <Styled.BusinessManProfileContainer>

      <ProfileInfo items={businessManState?.profile?.info || []} />

      <OwnerSlide items={businessManState?.profile?.photos || []} title={t('photos')} ownerview />
      <OwnerVideoSlide items={businessManState?.profile?.videos || []} title={t('videos')} profileType="business_man" />
      <Row>
        <Historic items={businessManState?.profile?.clubs || []} title={t('club_history')} />
        <Historic items={businessManState?.profile?.studies || []} title={t('academic_history')} />
      </Row>

      <TextSlide items={businessManState?.profile?.awards || []} title={t('titles_and_awards')} />

    </Styled.BusinessManProfileContainer>
  );
}
