import Prop from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './MyAffiliates-Styles';
import { GridCards } from '../../../../components/elements/GridCards/GridCards';
import { TextCopy } from '../../../../components/elements/TextCopy/TextCopy';

export function MyAffiliates({ affiliates, link }) {
  const { t } = useTranslation();
  return (
    <Styled.MyAffiliatesContainer>

      <TextCopy title={t('referral_link')} text={link} />
      <GridCards title={t('level_1')} items={affiliates} />
      <GridCards title={t('level_2')} items={affiliates} />

    </Styled.MyAffiliatesContainer>
  );
}

MyAffiliates.propTypes = {
  affiliates: Prop.arrayOf(Prop.object),
  link: Prop.string,
};
