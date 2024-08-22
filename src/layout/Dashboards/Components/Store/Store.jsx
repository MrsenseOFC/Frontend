import Prop from 'prop-types';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './Store-Styles';
import { ProductCard } from '../../../../components/elements/ProductCard/ProductCard';
import { ProductSlide } from '../../../../components/elements/ProductsSlide/ProductsSlide';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';
import { Text } from '../../../../components/elements/Text/Text';
import { Title } from '../../../../components/elements/Title/Title';

export function Store() {
  const { t } = useTranslation();
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  return (
    <Styled.StoreContainer>
      <Title text={t('store')} uppercase />
      <Text text={t('store_text')} />

      <ProductSlide title={t('t_shirts')} items={s2tState.products.shirts} />
      <ProductSlide title={t('football_boots')} items={s2tState.products.footballBoots} />
    </Styled.StoreContainer>
  );
}

Store.propTypes = {
};
