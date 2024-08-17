import Prop from 'prop-types';
import React, { useContext } from 'react';
import * as Styled from './UniversityProfile-Styles';
import { ProfileInfo } from '../../../../../components/elements/ProfileInfo/ProfileInfo';
import { Historic } from '../../../../../components/elements/Historic/Historic';
import { TextSlide } from '../../../../../components/elements/TextSlide/TextSlide';
import { Row } from '../../../../../components/RowContainer/Row';
import { UniversityContext } from '../../../../../contexts/userContext/UniversityProvider/UniversityContext';
import { OwnerSlide } from '../../../../../components/elements/ProfileSlideElements/OwnerSlide/OwnerSlide';
import { OwnerVideoSlide } from '../../../../../components/elements/ProfileSlideElements/OwnerVideoSlide/OwnerVideoSlide';

export function UniversityProfile() {
  const universityContext = useContext(UniversityContext);
  const { universityState, univeristyDispatch } = universityContext;

  return (
    <Styled.UniversityProfileContainer>

      <ProfileInfo items={universityState?.profile?.info || []} />

      <OwnerSlide items={universityState?.profile?.photos || []} title="Fotos" ownerview />
      <OwnerVideoSlide items={universityState?.profil?.videos || []} title="Vídeos" />
      <Row>
        <Historic items={universityState?.profile?.competitions || []} title="Competições em disputa" />
      </Row>

      <TextSlide items={universityState?.profile?.awards || []} title="Títulos:" />
    </Styled.UniversityProfileContainer>
  );
}
