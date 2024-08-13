// import Prop from 'prop-types';
import React, { useContext } from 'react';
import * as Styled from './StaffFavorites-Style';
import { S2tContext } from '../../../../../contexts/s2tContext/S2tContext';
import { PlayerContext } from '../../../../../contexts/userContext/PlayerProvider/PlayerContext';
import { GridProposals } from '../../../../../components/elements/GridProposals/GridProposals';
import { PublicSlide } from '../../../../../components/elements/ProfileSlideElements/PublicSlide/PublicSlide';
import { PublicVideoSlide } from '../../../../../components/elements/ProfileSlideElements/PublicVideoSlide/PublicVideoSlide';

export function StaffFavorites() {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const playerContext = useContext(PlayerContext);
  const { playerState, playerDispatch } = playerContext;

  return (
    <Styled.StaffFavoritesContainer>
      <PublicVideoSlide items={s2tState.videos.trending} title="Meus vídeos favoritos" publicview lazy />

      {/* A ideia é chamar o componente passando para ele no items as oportunidades que o usuário favoritou.
      Aqui estou passando apenas as oportunidades dos clubs para ter um exemplo */}
      <GridProposals title="Oportunidades favoritas" items={s2tState.proposals.male.professional.clubs} />
    </Styled.StaffFavoritesContainer>
  );
}

StaffFavorites.propTypes = {
  // children: Prop.node.isRequired,
};
