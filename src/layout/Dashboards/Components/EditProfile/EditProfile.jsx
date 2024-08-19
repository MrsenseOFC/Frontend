import Prop from 'prop-types';
import React from 'react';
import * as Styled from './EditProfile-Styles';
import { Club } from './Components/Club/Club';
import { Player } from './Components/Player/Player';
import { University } from './Components/University/University';
import { Staff } from './Components/Staff/Staff';
import { Fan } from './Components/Fan/Fan';

export function EditProfile({ type }) {
  return (
    <Styled.EditProfileContainer>

      {type === 'club' && <Club />}
      {type === 'player' && <Player />}
      {type === 'league' && <Club />}
      {type === 'university' && <University />}
      {type === 'staff' && <Staff />}
      {type === 'fan' && <Fan />}

    </Styled.EditProfileContainer>
  );
}

EditProfile.propTypes = {
  type: Prop.string.isRequired,
};
