import Prop from 'prop-types';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './FanProfile-Styles';
import { ProfileInfo } from '../../../../../components/elements/ProfileInfo/ProfileInfo';
import { FanContext } from '../../../../../contexts/userContext/FanProvider/FanContext';
import { OwnerSlide } from '../../../../../components/elements/ProfileSlideElements/OwnerSlide/OwnerSlide';
import { OwnerVideoSlide } from '../../../../../components/elements/ProfileSlideElements/OwnerVideoSlide/OwnerVideoSlide';

export function FanProfile() {
  const { t } = useTranslation();
  const fanContext = useContext(FanContext);
  const { fanState, fanDispatch } = fanContext;

  return (
    <Styled.FanProfileContainer>

      <ProfileInfo items={fanState?.profile?.info || []} />

      <OwnerSlide items={fanState?.profile?.photos || []} title={t('photos')} ownerview />
      <OwnerVideoSlide items={fanState?.profile?.videos || []} title={t('videos')} profileType="fan" />

    </Styled.FanProfileContainer>
  );
}
