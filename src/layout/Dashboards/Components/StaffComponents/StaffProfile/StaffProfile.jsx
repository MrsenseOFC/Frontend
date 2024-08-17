import Prop from 'prop-types';
import React, { useContext } from 'react';
import * as Styled from './StaffProfile-Styles';
import { ProfileInfo } from '../../../../../components/elements/ProfileInfo/ProfileInfo';
import { Historic } from '../../../../../components/elements/Historic/Historic';
import { TextSlide } from '../../../../../components/elements/TextSlide/TextSlide';
import { PlayerContext } from '../../../../../contexts/userContext/PlayerProvider/PlayerContext';
import { Row } from '../../../../../components/RowContainer/Row';
import { OwnerSlide } from '../../../../../components/elements/ProfileSlideElements/OwnerSlide/OwnerSlide';
import { StaffContext } from '../../../../../contexts/userContext/StaffProvider/StaffContext';
import { OwnerVideoSlide } from '../../../../../components/elements/ProfileSlideElements/OwnerVideoSlide/OwnerVideoSlide';

export function StaffProfile() {
  const staffContext = useContext(StaffContext);
  const { staffState, staffDispatch } = staffContext;

  return (
    <Styled.StaffProfileContainer>

      <ProfileInfo items={staffState?.profile?.info || []} />

      <OwnerSlide items={staffState?.profile?.photos || []} title="Fotos" ownerview />
      <OwnerVideoSlide items={staffState?.profile?.videos || []} title="Vídeos" />
      <Row>
        <Historic items={staffState?.profile?.clubs || []} title="Histórico de clubes" />
        <Historic items={staffState?.profile?.studies || []} title="Histórico acadêmico" />
      </Row>

      <TextSlide items={staffState?.profile?.awards || []} title="Títulos e prêmios:" />

    </Styled.StaffProfileContainer>
  );
}
