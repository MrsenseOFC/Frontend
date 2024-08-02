import Prop from 'prop-types';
import React, { useContext } from 'react';
import * as Styled from './PublicProfile-Styles';
import { ProfileInfo } from '../../../../../components/elements/ProfileInfo/ProfileInfo';
import { Historic } from '../../../../../components/elements/Historic/Historic';
import { TextSlide } from '../../../../../components/elements/TextSlide/TextSlide';
import { Row } from '../../../../../components/RowContainer/Row';
import { PlayerContext } from '../../../../../contexts/userContext/PlayerProvider/PlayerContext';
import { PublicSlide } from '../../../../../components/elements/ProfileSlideElements/PublicSlide/PublicSlide';

export function PublicProfile() {
  const playerContext = useContext(PlayerContext);
  const { playerState, playerDispatch } = playerContext;

  return (
    <Styled.PublicProfileContainer>

      {/* <ProfileInfo items={playerState.profile.info} />

      <PublicSlide items={playerState.profile.photos} title="Fotos / Vídeos" publicview />

      <Row>
        <Historic items={playerState.profile.leagues} title="Competições em disputa" />
        <Historic items={playerState.profile.studies} title="Histórico acadêmico" />
      </Row>

      <TextSlide items={playerState.profile.championships} title="Títulos:" /> */}

    </Styled.PublicProfileContainer>
  );
}
