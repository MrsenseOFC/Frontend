import Prop from 'prop-types';
import React from 'react';
import * as Styled from './ProfileInfo-Styles';
import { GridTwoColumn } from '../../GridTwoColumn/GridTwoColumn';
import { InfoInRow } from '../InfoInRow/InfoInRow';
import { Button } from '../Button/Button';
import { theme } from '../../../styles/theme';
import { Text } from '../Text/Text';

export function ProfileInfo({ items }) {
  const infoLabel = {
    bestLeg: 'Melhor Perna',
    competitiveLevel: 'Nível competitivo',
    birthDate: 'Data de nascimento',
    ageCategory: 'Categoria',
    age: 'Idade',
    birthCity: 'Nascimento',
    weight: 'Peso',
    height: 'Altura',
    primaryNationality: 'Nacionalidade primária',
    secondaryNationality: 'Nacionalidade secundária',
    passports: 'Passaportes',
    payment: 'Salário base',
    transferValue: 'Valor de transferência',
    primaryPosition: 'Posição principal',
    secondaryPosition: 'Posição secundária',
    tertiaryPosition: 'Posição terciária',
    league: 'Liga',
    hasManager: 'Possui empresário',
    toefl: 'TOEFL',
    act: 'ACT',
    sat: 'SAT',
    graduationDate: 'Data de graduação',
    gradePointAverage: 'Nota média final',

  };

  return (
    <Styled.ProfileInfoElement>
      <GridTwoColumn>
        {/* Verifica se items existe */}
        {items && Object.keys(items).length > 0 ? (
          <>
            {Object.keys(items).map((key) => (
              <>
                {/* Verifica se a informação foi preenchida ou não pelo usuário */}
                {items[key] && (
                <InfoInRow
                  key={key}
                  infotitle={infoLabel[key] || key}
                  info={items[key]}
                  uppercase
                />
                )}
              </>
            ))}
          </>
        ) : (
          <Text text="Nenhum dado foi encontrado..." />
        )}
      </GridTwoColumn>
    </Styled.ProfileInfoElement>
  );
}

ProfileInfo.propTypes = {
  items: Prop.arrayOf(Prop.object).isRequired, // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
};
