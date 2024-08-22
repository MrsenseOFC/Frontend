import React, { useContext } from 'react';
import Prop from 'prop-types';
import { useTranslation } from 'react-i18next';
import * as Styled from './Friends-Styles';
import { PlayerContext } from '../../../../contexts/userContext/PlayerProvider/PlayerContext';
import { GridCards } from '../../../../components/elements/GridCards/GridCards';

export function Friends({ friends }) {
  const { t } = useTranslation();

  return (
    <Styled.FriendsContainer>
      <GridCards title={t('friends')} items={friends} />
    </Styled.FriendsContainer>
  );
}

Friends.propTypes = {
  friends: Prop.object,
};
