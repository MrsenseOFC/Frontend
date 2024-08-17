import Prop from 'prop-types';
import React from 'react';
import { Chat as ChatIcon } from '@styled-icons/fluentui-system-filled/Chat';
import { ChatArrowBack, ChatMultiple, ChatWarning } from '@styled-icons/fluentui-system-filled';
import { useTranslation } from 'react-i18next';
import * as Styled from './ContactCard-Styles';
import { Text } from '../Text/Text';
import { Column } from '../../ColumnContainer/Column';
import { IconDiv } from '../IconDiv/IconDiv';
import { theme } from '../../../styles/theme';

export function ContactCard({
  title, subtitle, imagesrc, newmessage,
}) {
  const { t } = useTranslation();
  return (
    <Styled.ContactCardContainer>

      <Styled.ContactImage src={imagesrc} alt="Foto de perfil" />

      <Column>
        <Styled.ContactText>
          <Text text={title} uppercase />
          <Text text={subtitle} />
        </Styled.ContactText>
      </Column>

      {newmessage ? (
        <IconDiv name={t('new_message')} active={newmessage} activecolor={theme.colors.primary} hovercolor={theme.colors.primary}>
          <ChatMultiple />
        </IconDiv>
      ) : (
        <IconDiv name={t('message')} active={newmessage} color={theme.colors.lightgray} hovercolor={theme.colors.white}>
          <ChatIcon />
        </IconDiv>
      )}

    </Styled.ContactCardContainer>
  );
}

ContactCard.propTypes = {
  title: Prop.string,
  subtitle: Prop.string,
  newmessage: Prop.bool,
  imagesrc: Prop.string,
};
