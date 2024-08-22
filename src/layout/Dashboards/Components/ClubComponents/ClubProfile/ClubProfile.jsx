import Prop from 'prop-types';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './ClubProfile-Styles';
import { ProfileInfo } from '../../../../../components/elements/ProfileInfo/ProfileInfo';
import { Historic } from '../../../../../components/elements/Historic/Historic';
import { TextSlide } from '../../../../../components/elements/TextSlide/TextSlide';
import { Row } from '../../../../../components/RowContainer/Row';
import { ClubContext } from '../../../../../contexts/userContext/ClubProvider/ClubContext';
import { OwnerSlide } from '../../../../../components/elements/ProfileSlideElements/OwnerSlide/OwnerSlide';
import { OwnerVideoSlide } from '../../../../../components/elements/ProfileSlideElements/OwnerVideoSlide/OwnerVideoSlide';

export function ClubProfile() {
  const { t } = useTranslation();
  const clubContext = useContext(ClubContext);
  const { clubState, clubDispatch } = clubContext;

  return (
    <Styled.ClubProfileContainer>

      <ProfileInfo items={clubState?.profile?.info || []} />

      <OwnerSlide items={clubState?.profile?.photos || []} title={t('photos')} ownerview />
      <OwnerVideoSlide items={clubState?.profile?.videos || []} title={t('videos')} />

      <Row>
        <Historic items={clubState?.profile?.competitions || []} title={t('current_competitions')} />
      </Row>

      <TextSlide items={clubState?.profile?.awards || []} title={t('titles_and_awards')} />
    </Styled.ClubProfileContainer>
  );
}
