import Prop from 'prop-types';
import React from 'react';
import * as Styled from './EditProfile-Styles';
import { Club } from './Components/Club/Club';
import { Player } from './Components/Player/Player';
import { University } from './Components/University/University';
import { Staff } from './Components/Staff/Staff';
import { Fan } from './Components/Fan/Fan';
import { Agency } from './Components/Agency/Agency';

export function EditProfile({ type }) {
  const normalizedType = type.toLowerCase();

  return (
    <Styled.EditProfileContainer>

      {normalizedType === 'club' && <Club />}
      {normalizedType === 'player' && <Player />}
      {normalizedType === 'league' && <Club />}
      {normalizedType === 'university' && <University />}
      {normalizedType === 'agency' && <Agency />}
      {normalizedType === 'staff' && <Staff />}
      {normalizedType === 'fan' && <Fan />}

    </Styled.EditProfileContainer>
  );
}

EditProfile.propTypes = {
  type: Prop.string,
};
