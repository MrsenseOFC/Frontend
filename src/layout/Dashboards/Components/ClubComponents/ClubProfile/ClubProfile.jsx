import Prop from 'prop-types';
import React, { useContext } from 'react';
import * as Styled from './ClubProfile-Styles';
import { ProfileInfo } from '../../../../../components/elements/ProfileInfo/ProfileInfo';
import { Historic } from '../../../../../components/elements/Historic/Historic';
import { TextSlide } from '../../../../../components/elements/TextSlide/TextSlide';
import { Row } from '../../../../../components/RowContainer/Row';
import { ClubContext } from '../../../../../contexts/userContext/ClubProvider/ClubContext';
import { OwnerSlide } from '../../../../../components/elements/ProfileSlideElements/OwnerSlide/OwnerSlide';

export function ClubProfile() {
  const clubContext = useContext(ClubContext);
  const { clubState, clubDispatch } = clubContext;

  return (
    <Styled.ClubProfileContainer>

      <ProfileInfo items={clubState.profile.info} />

      <OwnerSlide items={clubState.profile.photos} title="Fotos" ownerview />

      <Row>
        <Historic items={clubState.profile.competitions} title="Competições em disputa" />
      </Row>

      <TextSlide items={clubState.profile.awards} title="Títulos:" />
    </Styled.ClubProfileContainer>
  );
}
