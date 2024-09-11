import Prop from 'prop-types';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './UniversityProfile-Styles';
import { ProfileInfo } from '../../../../../components/elements/ProfileInfo/ProfileInfo';
import { Historic } from '../../../../../components/elements/Historic/Historic';
import { TextSlide } from '../../../../../components/elements/TextSlide/TextSlide';
import { Row } from '../../../../../components/RowContainer/Row';
import { UniversityContext } from '../../../../../contexts/userContext/UniversityProvider/UniversityContext';
import { OwnerSlide } from '../../../../../components/elements/ProfileSlideElements/OwnerSlide/OwnerSlide';
import { OwnerVideoSlide } from '../../../../../components/elements/ProfileSlideElements/OwnerVideoSlide/OwnerVideoSlide';

export function UniversityProfile() {
  const { t } = useTranslation();
  const universityContext = useContext(UniversityContext);
  const { universityState, univeristyDispatch } = universityContext;

  return (
    <Styled.UniversityProfileContainer>

      <ProfileInfo items={universityState?.profile?.info || []} />

      <OwnerSlide items={universityState?.profile?.photos || []} title={t('photos')} ownerview />
      <OwnerVideoSlide items={universityState?.profile?.videos || []} title={t('videos')} profileType="university" />
      <Row>
        <Historic items={universityState?.profile?.competitions || []} title={t('current_competitions')} />
      </Row>

      <TextSlide items={universityState?.profile?.awards || []} title={t('titles_and_awards')} />
    </Styled.UniversityProfileContainer>
  );
}
