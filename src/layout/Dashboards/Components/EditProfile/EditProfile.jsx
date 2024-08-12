import Prop from 'prop-types';
import React from 'react';
import * as Styled from './EditProfile-Styles';
import { Club } from './Components/Club/Club';
import { Player } from './Components/Player/Player';
import { University } from './Components/University/University';
import { Staff } from './Components/Staff/Staff';

export function EditProfile({ type }) {
  return (
    <Styled.EditProfileContainer>

      {type === 'club' && <Club />}
      {type === 'player' && <Player />}
      {type === 'university' && <University />}
      {type === 'staff' && <Staff />}

    </Styled.EditProfileContainer>
  );
}

EditProfile.propTypes = {
  type: Prop.string.isRequired,
};
