import PropTypes from 'prop-types';
import React from 'react';
import * as Styled from './Historic-Styles';
import { GridOneColumn } from '../../GridOneColumn/GridOneColumn';
import { Title } from '../Title/Title';

export function Historic({ items, title }) {
  const orderedItems = items.sort((a, b) => {
    const earliestYearA = new Date(a.earliestDate).getFullYear();
    const earliestYearB = new Date(b.earliestDate).getFullYear();

    if (earliestYearA === earliestYearB) {
      const latestYearA = a.latestDate ? new Date(a.latestDate).getFullYear() : new Date().getFullYear();
      const latestYearB = b.latestDate ? new Date(b.latestDate).getFullYear() : new Date().getFullYear();
      return latestYearB - latestYearA;
    }

    return earliestYearB - earliestYearA;
  });

  return (
    <Styled.HistoricContainer>
      <GridOneColumn>
        <Title text={title} uppercase />
        {orderedItems && orderedItems.map((item) => (
          <Styled.HistoricElement key={item.id}>
            <Styled.Image src={item.image} alt="Imagem que representa o item" />
            <Styled.Item>{item.name}</Styled.Item>
            <Styled.Years>
              (
              {new Date(item.earliestDate).getFullYear()}
              {' '}
              -
              {' '}
              {item.latestDate ? new Date(item.latestDate).getFullYear() : 'Atual'}

              )
            </Styled.Years>
          </Styled.HistoricElement>
        ))}
      </GridOneColumn>
    </Styled.HistoricContainer>
  );
}

Historic.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};
