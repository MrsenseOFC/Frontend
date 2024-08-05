import Prop from 'prop-types';
import React, { useState } from 'react';
import { OptionsOutline as OptionsIcons } from '@styled-icons/evaicons-outline/OptionsOutline';
import * as Styled from './FilterProposals-Styles';
import { AuthInput } from '../AuthElements/AuthInput/AuthInput';
import { AuthDropdown } from '../AuthElements/AuthDropdown/AuthDropdown';
import { AuthWrapper } from '../AuthElements/AuthWrapper/AuthWrapper';
import { AuthForm } from '../AuthElements/AuthForm/AuthForm';
import { GridLayout } from '../../GridLayout/GridLayout';
import { AuthSearch } from '../AuthElements/AuthSearch/AuthSearch';
import { Row } from '../../RowContainer/Row';
import { IconDiv } from '../IconDiv/IconDiv';
import { AuthLayout } from '../AuthElements/AuthLayout/AuthLayout';
import { SearchWrapper } from '../AuthElements/AuthSearch/AuthSearch-Styles';

export function FilterProposals() {
  const [isOpen, setIsOpen] = useState(true);

  const [filterData, setFilterData] = useState({
    opportunityType: '',
    ageCategory: '',
    position: '',
    bestLeg: '',
    country: '',
    league: '',
    competitiveLevel: '',
    minimumAge: '',
    maximumAge: '',
    minimumPayment: '',
    minimumHeight: '',
  });

  const legOptions = [
    { value: 'right', text: 'Direita' },
    { value: 'left', text: 'Esquerda' },
  ];

  const ageCategoryOptions = [
    { value: 'sub7', text: 'Sub-7 (6 e 7 anos)' },
    { value: 'sub8', text: 'Sub-8 (8 anos)' },
    { value: 'sub9', text: 'Sub-9 (8 e 9 anos)' },
    { value: 'sub11', text: 'Sub-11 (10 e 11 anos)' },
    { value: 'sub13', text: 'Sub-13 (12 e 13 anos)' },
    { value: 'sub15', text: 'Sub-15 (14 e 15 anos)' },
    { value: 'sub17', text: 'Sub 17 (16 e 17 anos)' },
    { value: 'sub20', text: 'Sub-20 (18, 19 e 20 anos)' },
    { value: 'adult', text: 'Adulto (Já atua no time principal)' },
  ];

  const positionsOptions = [
    { value: 'goleiro', text: 'Goleiro' },
    { value: 'lateral esquerdo', text: 'Lateral Esquerdo' },
    { value: 'lateral direito', text: 'Lateral Direito' },
    { value: 'zagueiro', text: 'Zagueiro' },
    { value: 'ala', text: 'Ala' },
    { value: 'primeiro volante', text: 'Primeiro Volante' },
    { value: 'segundo volante', text: 'Segundo Volante' },
    { value: 'meio-campista', text: 'Meio-Campista' },
    { value: 'meia-ofensivo', text: 'Meia Ofensivo' },
    { value: 'meia-lateral', text: 'Meia Lateral' },
    { value: 'segundo atacante', text: 'Segundo atacante' },
    { value: 'ponta esquerda', text: 'Ponta Esquerda' },
    { value: 'ponta direita', text: 'Ponta Direito' },
    { value: 'centroavante', text: 'Centroavante' },
  ];

  const leagueOptions = [
    { value: 'lifa', text: 'LIFA' },
  ];

  const managerOptions = [
    { value: 'yes', text: 'Sim' },
    { value: 'no', text: 'Não' },
  ];

  const availabilityOptions = [
    { value: 'activeFree', text: 'Ativo - Sem contrato' },
    { value: 'active', text: 'Ativo - Com contrato' },
    { value: 'injuredFree', text: 'Lesionado - Sem contrato' },
    { value: 'injured', text: 'Lesionado - Com contrato' },
  ];

  const competitiveLevelsOptions = [
    { value: 'serieA', text: 'Serie A' },
    { value: 'serieB', text: 'Serie B' },
    { value: 'serieC', text: 'Serie C' },
    { value: 'serieD', text: 'Serie D' },
  ];

  const opportunityTypeOptions = [
    { value: 'scouts', text: 'Scouts' },
    { value: 'agents', text: 'Agentes' },
    { value: 'clubs', text: 'Clubes' },
    { value: 'universitys', text: 'Universidades' },
    { value: 'exchangeAgencies', text: 'Agências de intercâmbio' },
  ];

  console.log(filterData);

  return (
    <Styled.FilterProposalsContainer isopen={isOpen ? 'isopen' : undefined}>
      <AuthWrapper>
        <AuthForm>

          <Row>
            <AuthDropdown
              id="filterOpportunityType"
              options={opportunityTypeOptions}
              placeholder="Todas"
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, opportunityType: option }))}
            />

            <SearchWrapper>
              <IconDiv onclick={() => setIsOpen(!isOpen)} name="Filtrar oportunidades">
                <OptionsIcons />
              </IconDiv>
              <AuthSearch name="proposalSearch" id="proposalSearch" />
            </SearchWrapper>

          </Row>

          <AuthLayout isopen={isOpen}>

            <AuthDropdown
              id="filterCompetitiveLevel"
              placeholder="Nível competitivo"
              options={competitiveLevelsOptions}
              otheroption
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, competitiveLevel: option }))}
            />

            <AuthDropdown
              id="filterAgeCategory"
              placeholder="Categoria"
              options={ageCategoryOptions}
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, ageCategory: option }))}
            />

            <AuthDropdown
              placeholder="Posição"
              id="filterPosition"
              options={positionsOptions}
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, position: option }))}
            />

            <AuthDropdown
              id="filterLeague"
              placeholder="Liga"
              options={leagueOptions}
              otheroption
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, league: option }))}
            />

            <AuthDropdown
              id="filterLeg"
              placeholder="Melhor perna"
              options={legOptions}
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, bestLeg: option }))}
            />

            <AuthInput
              type="number"
              name="filterMinimumAge_input"
              id="filterMinimumAge_input"
              placeholder="Idade mínima"
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, league: e.target.value }))}
            />

            <AuthInput
              type="number"
              name="filterMaximumAge_input"
              id="filterMaximumAge_input"
              placeholder="Idade máxima"
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, maximumAge: e.target.value }))}
            />

            <AuthInput
              type="number"
              name="filterMinimumHeigth_input"
              id="filterMinimumHeight_input"
              placeholder="Altura mínima"
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, minimumAge: e.target.value }))}
            />

            <AuthInput
              type="number"
              name="filterMinimumPayment_input"
              id="filterMinimumPayment_input"
              placeholder="Salário mínimo"
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, minimumPayment: e.target.value }))}
            />

            <AuthInput
              type="number"
              name="filterMaximumPayment_input"
              id="filterMaximumPayment_input"
              placeholder="Salário máximo"
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, maximumPayment: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="filterCountry_input"
              id="filterCountrycountry_input"
              placeholder="País"
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, country: e.target.value }))}
            />

          </AuthLayout>

        </AuthForm>

      </AuthWrapper>

    </Styled.FilterProposalsContainer>
  );
}

FilterProposals.propTypes = {
};
