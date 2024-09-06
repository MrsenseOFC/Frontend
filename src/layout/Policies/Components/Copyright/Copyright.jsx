import Prop from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './Copyright-Styles';
import { Text } from '../../../../components/elements/Text/Text';
import { Title } from '../../../../components/elements/Title/Title';
import { Subtitle } from '../../../../components/elements/Subtitle/Subtitle';
import { Column } from '../../../../components/ColumnContainer/Column';
import { StyledLink } from '../../../../components/elements/StyledLink/StyledLink';
import { theme } from '../../../../styles/theme';

export function Copyright({ children }) {
  const { t } = useTranslation();

  return (
    <Styled.CopyrightWrapper>
      <Styled.CopyrightContainer>

        <Title text={t('copyright_policy_title')} uppercase />

        <Column>
          <Text text={t('copyright_policy_text_1')} />
          <Text text={t('copyright_policy_text_2')} />
          <Text text={t('copyright_policy_text_3')} />
          <Text text={t('copyright_policy_text_4')} />
          <Text text={t('copyright_policy_text_5')} />
          <Text text={t('copyright_policy_text_6')} />
          <Text text={t('copyright_policy_text_7')} />
          <Text text={t('copyright_policy_text_8')} />
          <Text text={t('copyright_policy_text_9')} />
          <Text text={t('copyright_policy_text_10')} />
          <Text text={t('copyright_policy_text_11')} />
          <Text text={t('copyright_policy_text_12')} />
          <Text text={t('copyright_policy_text_13')} />
          <Text text={t('copyright_policy_text_14')} />
          <Text text={t('copyright_policy_text_15')} />
          <Text text={t('copyright_policy_text_16')} />
          <Text text={t('copyright_policy_text_17')} />
          <Text text={t('copyright_policy_text_18')} />
          <Text text={t('copyright_policy_text_19')} />
          <Text text={t('copyright_policy_text_20')} />
          <Text text={t('copyright_policy_text_21')} />
          <Text text={t('copyright_policy_text_22')} />
        </Column>

      </Styled.CopyrightContainer>
    </Styled.CopyrightWrapper>
  );
}

Copyright.propTypes = {
  children: Prop.node.isRequired,
};
