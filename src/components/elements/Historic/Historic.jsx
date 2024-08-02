import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import * as Styled from './Historic-Styles';
import { GridOneColumn } from '../../GridOneColumn/GridOneColumn';
import { Title } from '../Title/Title';
import { Text } from '../Text/Text';

export function Historic({ items, title }) {
  const [orderedItems, setOrderedItems] = useState();

  useEffect(() => {
    if (items) {
      setOrderedItems(items.sort((a, b) => {
        const parseDate = (dateString) => {
          const date = new Date(dateString);
          return Number.isNaN(date.getTime()) ? null : date; // Trata datas inválidas
        };

        const earliestYearA = parseDate(a.earliestDate)?.getFullYear() || 0;
        const earliestYearB = parseDate(b.earliestDate)?.getFullYear() || 0;

        if (earliestYearA === earliestYearB) {
          const latestYearA = parseDate(a.latestDate)?.getFullYear() || new Date().getFullYear();
          const latestYearB = parseDate(b.latestDate)?.getFullYear() || new Date().getFullYear();
          return latestYearB - latestYearA; // Ordena por latestDate em ordem decrescente
        }

        return earliestYearB - earliestYearA; // Ordena por earliestDate em ordem crescente
      }));
    }
  }, [items]);

  return (
    <Styled.HistoricContainer>
      <GridOneColumn>
        <Title text={title} uppercase />
        {orderedItems ? (
          <>
            {orderedItems.map((item) => (
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
          </>
        ) : (
          <>
            <Text text="Nenhum dado encontrado." />
          </>
        )}
      </GridOneColumn>
    </Styled.HistoricContainer>
  );
}

Historic.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};
