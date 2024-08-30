import Prop from 'prop-types';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const clubContext = useContext(ClubContext);
  const { clubState, clubDispatch } = clubContext;

  const playerContext = useContext(PlayerContext);
  const { playerState, playerDispatch } = playerContext;

  return (
    <Styled.PublicProfileContainer>

      {/* Todos os dados aqui são placeholder, necessário substituir posteriormente pelos dados do perfil acessado */}
      <ProfileInfo items={clubState.profile.info} />

      {clubState.profile.photos && clubState.profile.photos.length > 0 ? (
        <PublicSlide items={clubState.profile.photos} title={t('photos')} />
      ) : (
        <></>
      )}

      {clubState.profile.videos && clubState.profile.videos.length > 0 ? (
        <PublicSlide items={clubState.profile.videos} title={t('videos')} />
      ) : (
        <></>
      )}

      <Row>
        <Historic items={clubState.profile.leagues} title={t('current_competitions')} />
      </Row>

      <TextSlide items={clubState.profile.championships} title={t('titles_and_awards')} />

    </Styled.PublicProfileContainer>
  );
}
