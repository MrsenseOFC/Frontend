import React, { useEffect, useState, useMemo } from 'react';
import Prop from 'prop-types';
import { useTranslation } from 'react-i18next';
import * as Styled from './GridCards-Styles';
import { ImageCard } from '../ImageCard/ImageCard';
import { GridLayoutContainer, ItemContainer } from '../../GridLayout/GridLayout-Styles';
import { theme } from '../../../styles/theme';
import { Button } from '../Button/Button';
import { Subtitle } from '../Subtitle/Subtitle';
import { Text } from '../Text/Text';

export function GridCards({ items, title }) {
  const [showMoreItems, setShowMoreItems] = useState(false);
  const { t } = useTranslation();

  // Usando useMemo para memorizar os itens a serem renderizados
  const itemsToShow = useMemo(() => {
    if (items && items.length > 0) {
      return showMoreItems ? items : items.slice(0, 12);
    }
    return [];
  }, [items, showMoreItems]);

  const handleShowMore = () => setShowMoreItems(!showMoreItems);

  return (
    <Styled.GridCardsWrapper>
      <Subtitle text={title} uppercase as="h3" size={theme.sizes.xxlarge} />

      <Styled.GridCardsContainer>

        <GridLayoutContainer>
          {itemsToShow && itemsToShow.length > 0 ? (
            <>
              {itemsToShow.map((item) => (
                <ItemContainer key={item.id}>
                  <ImageCard
                    src={item.profileImageSrc}
                    title={item.name}
                    path={item.path}
                  />
                </ItemContainer>
              ))}
            </>
          ) : (
            <>
              <Text text={t('data_not_found')} />
            </>
          )}
        </GridLayoutContainer>

      </Styled.GridCardsContainer>

      {items?.length > 12 && (

      <Button
        onclick={handleShowMore}
        text={showMoreItems ? t('show_less') : t('show_more')}
        bgcolor={theme.colors.black}
        bghover={theme.colors.white}
        textcolor={theme.colors.white}
        texthover={theme.colors.black}
        border={theme.colors.white}
        borderhover={theme.colors.white}
      />
      )}
    </Styled.GridCardsWrapper>

  );
}

GridCards.propTypes = {
  title: Prop.string,
  items: Prop.arrayOf(Prop.object).isRequired,
};
