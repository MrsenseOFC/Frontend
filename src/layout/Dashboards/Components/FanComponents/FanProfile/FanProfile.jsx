import Prop from 'prop-types';
import React, { useContext } from 'react';
import * as Styled from './FanProfile-Styles';
import { ProfileInfo } from '../../../../../components/elements/ProfileInfo/ProfileInfo';
import { FanContext } from '../../../../../contexts/userContext/FanProvider/FanContext';
import { OwnerSlide } from '../../../../../components/elements/ProfileSlideElements/OwnerSlide/OwnerSlide';
import { OwnerVideoSlide } from '../../../../../components/elements/ProfileSlideElements/OwnerVideoSlide/OwnerVideoSlide';

export function FanProfile() {
  const fanContext = useContext(FanContext);
  const { fanState, fanDispatch } = fanContext;

  return (
    <Styled.FanProfileContainer>

      <ProfileInfo items={fanState?.profile?.info || []} />

      <OwnerSlide items={fanState?.profile?.photos || []} title="Fotos" ownerview />
      <OwnerVideoSlide items={fanState?.profile?.videos || []} title="Vídeos" />

    </Styled.FanProfileContainer>
  );
}
