import Prop from 'prop-types';
import React, { useContext } from 'react';
import * as Styled from './PublicProfile-Styles';
import { ProfileInfo } from '../../../../../components/elements/ProfileInfo/ProfileInfo';
import { Historic } from '../../../../../components/elements/Historic/Historic';
import { TextSlide } from '../../../../../components/elements/TextSlide/TextSlide';
import { Row } from '../../../../../components/RowContainer/Row';
import { PlayerContext } from '../../../../../contexts/userContext/PlayerProvider/PlayerContext';
import { PublicSlide } from '../../../../../components/elements/ProfileSlideElements/PublicSlide/PublicSlide';
import { ClubContext } from '../../../../../contexts/userContext/ClubProvider/ClubContext';
import { PublicVideoSlide } from '../../../../../components/elements/ProfileSlideElements/PublicVideoSlide/PublicVideoSlide';

export function PublicProfile() {
  const clubContext = useContext(ClubContext);
  const { clubState, clubDispatch } = clubContext;

  const playerContext = useContext(PlayerContext);
  const { playerState, playerDispatch } = playerContext;

  return (
    <Styled.PublicProfileContainer>

      {/* Todos os dados aqui são polaceholder, necessário substituir posteriormente pelos dados do perfil acessado */}
      <ProfileInfo items={clubState.profile.info} />

      <PublicSlide items={clubState.profile.photos} title="Fotos" />
      <PublicVideoSlide items={playerState.profile.videos} title="Vídeos" />

      <Row>
        <Historic items={clubState.profile.leagues} title="Competições em disputa" />
      </Row>

      <TextSlide items={clubState.profile.championships} title="Títulos:" />

    </Styled.PublicProfileContainer>
  );
}
