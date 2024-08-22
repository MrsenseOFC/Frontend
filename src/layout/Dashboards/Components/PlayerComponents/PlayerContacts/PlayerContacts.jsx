import Prop from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './PlayerContacts-Styles';
import { ContactCard } from '../../../../../components/elements/ContactCard/ContactCard';
import { VerticalMiniSlide } from '../../../../../components/elements/VerticalMiniSlide/VerticalMiniSlide';
import { VerticalLongSlide } from '../../../../../components/elements/VerticalLongSlide/VerticalLongSlide';

export function PlayerContacts() {
  const { t } = useTranslation();
  return (
    <Styled.PlayerContactsContainer>

      {/* Necessário mudanças. Está assim apenas para renderizar algo visual */}
      <VerticalLongSlide type="contact" title={t('your_messages')} />

      {/* placeholder do que seria o chat em si */}
      <section />
    </Styled.PlayerContactsContainer>
  );
}

PlayerContacts.propTypes = {

};
