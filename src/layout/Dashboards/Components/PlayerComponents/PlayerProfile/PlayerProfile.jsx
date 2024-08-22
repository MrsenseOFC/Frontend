import Prop from 'prop-types';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './PlayerProfile-Styles';
import { ProfileInfo } from '../../../../../components/elements/ProfileInfo/ProfileInfo';
import { Historic } from '../../../../../components/elements/Historic/Historic';
import { TextSlide } from '../../../../../components/elements/TextSlide/TextSlide';
import { PlayerContext } from '../../../../../contexts/userContext/PlayerProvider/PlayerContext';
import { Row } from '../../../../../components/RowContainer/Row';
import { OwnerSlide } from '../../../../../components/elements/ProfileSlideElements/OwnerSlide/OwnerSlide';
import { OwnerVideoSlide } from '../../../../../components/elements/ProfileSlideElements/OwnerVideoSlide/OwnerVideoSlide';

export function PlayerProfile() {
  const { t } = useTranslation();
  const playerContext = useContext(PlayerContext);
  const { playerState, playerDispatch } = playerContext;

  return (
    <Styled.PlayerProfileContainer>

      <ProfileInfo items={playerState?.profile?.info || []} />

      <OwnerSlide items={playerState?.profile?.photos || []} title={t('photos')} />
      <OwnerVideoSlide items={playerState?.profile?.videos || []} title={t('videos')} />

      <Row>
        <Historic items={playerState?.profile?.clubs || []} title={t('club_history')} />
        <Historic items={playerState?.profile?.studies || []} title={t('academic_history')} />
      </Row>

      <TextSlide items={playerState?.profile?.awards || []} title={t('titles_and_awards')} />

    </Styled.PlayerProfileContainer>
  );
}
