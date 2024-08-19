import Prop from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './ProductCard-Styles';
import { Subtitle } from '../Subtitle/Subtitle';

import { theme } from '../../../styles/theme';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import { StyledLink } from '../StyledLink/StyledLink';

export function ProductCard({
  name, imagesrc, price, path,
}) {
  const { t } = useTranslation();
  const normalizedPrice = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <Styled.ProductCardElement>
      <StyledLink path={path}>
        <Subtitle text={name} as="h5" uppercase size={theme.sizes.medium} />

        <Styled.ProductImage src={imagesrc} alt={name} />

        <Text text={normalizedPrice} uppercase />

        <Button
          text={t('buy')}
          bgcolor={theme.colors.lightprimary}
          bghover={theme.colors.primary}
          textcolor={theme.colors.black}
          texthover={theme.colors.black}
          border={theme.colors.lightprimary}
          borderhover={theme.colors.primary}
        />
      </StyledLink>
    </Styled.ProductCardElement>
  );
}

ProductCard.propTypes = {
  name: Prop.string,
  imagesrc: Prop.string,
  price: Prop.number,
  path: Prop.string,
};
