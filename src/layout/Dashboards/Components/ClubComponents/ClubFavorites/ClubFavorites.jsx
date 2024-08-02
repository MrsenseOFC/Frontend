import Prop from 'prop-types';
import React, { useContext } from 'react';
import * as Styled from './ClubFavorites-Style';
import { S2tContext } from '../../../../../contexts/s2tContext/S2tContext';
import { GridPlayers } from '../../../../../components/elements/GridPlayers/GridPlayers';
import { PublicSlide } from '../../../../../components/elements/ProfileSlideElements/PublicSlide/PublicSlide';

export function ClubFavorites() {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  return (
    <Styled.ClubFavoritesContainer>
      <GridPlayers title="Jogadores favoritos" items={s2tState.users.players} publicview />

      <PublicSlide items={s2tState.videos.trending} title="Vídeos em alta" publicview />

      <PublicSlide items={s2tState.videos.trending} title="Meus vídeos favoritos" publicview />
    </Styled.ClubFavoritesContainer>
  );
}

ClubFavorites.propTypes = {
};
