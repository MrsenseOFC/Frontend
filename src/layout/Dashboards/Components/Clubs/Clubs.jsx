import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './Clubs-Styles';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';
import { GridCards } from '../../../../components/elements/GridCards/GridCards';
import { Text } from '../../../../components/elements/Text/Text';

export function Clubs() {
  const { t } = useTranslation();
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  return (
    <Styled.ClubsContainer>

      <GridCards title={t('clubs')} items={s2tState.users.clubs || []} />
    </Styled.ClubsContainer>
  );
}
