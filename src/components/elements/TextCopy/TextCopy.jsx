import Prop from 'prop-types';
import React, { useEffect, useState } from 'react';
import { ContentCopy as CopyIcon } from '@styled-icons/material-outlined';
import { useTranslation } from 'react-i18next';
import * as Styled from './TextCopy-Styles';
import { Text } from '../Text/Text';
import { IconDiv } from '../IconDiv/IconDiv';
import { Subtitle } from '../Subtitle/Subtitle';
import { Row } from '../../RowContainer/Row';
import { theme } from '../../../styles/theme';

export function TextCopy({ title, text }) {
  const { t } = useTranslation();
  const [message, setMessage] = useState(''); // Armazena a mensagem exibida
  const [isCopied, setIsCopied] = useState(false); // Indica se o texto foi copiado

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setMessage(t('text_copied_sucess'));
      setIsCopied(true);
    } catch (error) {
      setMessage(t('text_copy_error'));
      setIsCopied(false);
    }
  };

  useEffect(() => {
    let timeoutId;

    if (message && isCopied) {
      timeoutId = setTimeout(() => {
        setMessage('');
        setIsCopied(false);
      }, 3500);
    }

    return () => clearTimeout(timeoutId);
  }, [message, isCopied]);

  return (
    <Styled.TextCopyContainer>

      <Text text={title} uppercase />

      <Row>
        <Styled.TextCopyElement active={isCopied ? 'active' : undefined}>
          <Text text={text || 'Link aqui'} color={isCopied ? theme.colors.primary : theme.colors.white} />
          <IconDiv name={t('copy')} onclick={handleCopyText} active={isCopied}>
            <CopyIcon />
          </IconDiv>
        </Styled.TextCopyElement>

        {message && <Text text={message} />}
      </Row>

    </Styled.TextCopyContainer>

  );
}
