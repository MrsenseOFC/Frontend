import Prop from 'prop-types';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './LeagueProfile-Styles';
import { ProfileInfo } from '../../../../../components/elements/ProfileInfo/ProfileInfo';
import { Historic } from '../../../../../components/elements/Historic/Historic';
import { TextSlide } from '../../../../../components/elements/TextSlide/TextSlide';
import { Row } from '../../../../../components/RowContainer/Row';
import { LeagueContext } from '../../../../../contexts/userContext/LeagueProvider/LeagueContext';
import { OwnerSlide } from '../../../../../components/elements/ProfileSlideElements/OwnerSlide/OwnerSlide';
import { OwnerVideoSlide } from '../../../../../components/elements/ProfileSlideElements/OwnerVideoSlide/OwnerVideoSlide';

export function LeagueProfile() {
  const { t } = useTranslation();
  const leagueContext = useContext(LeagueContext);
  const { leagueState, leagueDispatch } = leagueContext;

  return (
    <Styled.LeagueProfileContainer>

      <ProfileInfo items={leagueState?.profile?.info || []} />

      <OwnerSlide items={leagueState?.profile?.photos || []} title={t('photos')} ownerview />
      <OwnerVideoSlide items={leagueState?.profile?.videos || []} title={t('videos')} profileType="league" />
      <Row>
        <Historic items={leagueState?.profile?.competitions || []} title={t('current_competitions')} />
      </Row>

      <TextSlide items={leagueState?.profile?.awards || []} title={t('titles_and_awards')} />
    </Styled.LeagueProfileContainer>
  );
}
