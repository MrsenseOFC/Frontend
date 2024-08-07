import Prop from 'prop-types';
import React, { useEffect, useState } from 'react';
import { OptionsOutline as OptionsIcons } from '@styled-icons/evaicons-outline/OptionsOutline';
import axios from 'axios';
import { Password } from '@styled-icons/material-outlined';
import * as Styled from './FilterPlayers-Styles';
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
import { theme } from '../../../styles/theme';

export function FilterPlayers() {
  const [isOpen, setIsOpen] = useState(true);

  const [filterData, setFilterData] = useState({
    ageCategory: '',
    position: '',
    bestLeg: '',
    birthCountry: '',
    league: '',
    competitiveLevel: '',
    competitiveCategory: '',
    avaliability: '',
    minimumAge: '',
    maximumAge: '',
    minimumPayment: '',
    maximumPayment: '',
    minimumTransferValue: '',
    maximumTransferValue: '',
    passport: '',
    hasManager: '',
  });

  const [searchData, setSearchData] = useState('');

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
    { value: 'goalkeeper', text: 'Goleiro' },
    { value: 'left-back', text: 'Lateral Esquerdo' },
    { value: 'right-back', text: 'Lateral Direito' },
    { value: 'center-back', text: 'Zagueiro' },
    { value: 'wing-back', text: 'Ala' },
    { value: 'defensive midfielder', text: 'Primeiro Volante' },
    { value: 'central midfielder', text: 'Meio-Campista' },
    { value: 'attacking midfielder', text: 'Meia Ofensivo' },
    { value: 'wide midfielder', text: 'Meia Lateral' },
    { value: 'second striker', text: 'Segundo atacante' },
    { value: 'left winger', text: 'Ponta Esquerda' },
    { value: 'right winger', text: 'Ponta Direito' },
    { value: 'center forward', text: 'Centroavante' },
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

  const competitiveCategoryOptions = [
    { value: 'pro', text: 'Profissional' },
    { value: 'semiPro', text: 'Semi-Profissional' },
    { value: 'academic', text: 'Universitário' },
    { value: 'amateur', text: 'Amador' },
    { value: 'recreational', text: 'Recreacional' },
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
  ];

  useEffect(() => {
    const handleFilter = async () => {
      if (filterData) {
        try {
          const response = await axios.post('api', filterData);
          console.log('Filtro atualizado:', response.data);
        } catch (error) {
          console.error('Erro ao filtrar', error);
        }
      }
    };

    handleFilter();
  }, [filterData]);

  useEffect(() => {
    const handleSearch = async () => {
      if (searchData) {
        try {
          const response = await axios.post('api', searchData);
          console.log('Pesquisa atualizada:', response.data);
        } catch (error) {
          console.error('Erro ao pesquisar', error);
        }
      }
    };

    handleSearch();
  }, [searchData]);

  return (
    <Styled.FilterPlayersContainer isopen={isOpen ? 'isopen' : undefined}>
      <AuthWrapper>

        <AuthForm>

          <Row>
            <AuthDropdown
              id="competitiveCategory"
              options={competitiveCategoryOptions}
              placeholder="Categoria competitiva"
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, competitiveCategory: option }))}
            />

            <SearchWrapper>
              <IconDiv onclick={() => setIsOpen(!isOpen)} name="Filtrar oportunidades">
                <OptionsIcons />
              </IconDiv>
              <AuthSearch
                id="searchPlayers"
                name="searchPlayers"
                onChange={(e) => setSearchData(e.target.value)}
              />
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

            <AuthDropdown
              id="filterAvailability"
              placeholder="Disponibilidade"
              options={availabilityOptions}
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, avaliability: option }))}
            />

            <AuthDropdown
              id="hasManager"
              placeholder="Possui empresário?"
              options={managerOptions}
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, hasManager: option }))}
            />

            <AuthInput
              type="number"
              name="filterMinimumAge_input"
              id="filterMinimumAge_input"
              placeholder="Idade mínima"
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, minimumAge: e.target.value }))}
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
              type="number"
              name="filterMinimumTransferValue_input"
              id="filterMinimumTransferValue_input"
              placeholder="Valor mínimo de transferência"
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, minimumTransferValue: e.target.value }))}
            />

            <AuthInput
              type="number"
              name="filterMaximumTransferValue_input"
              id="filterMaximumTransferValue_input"
              placeholder="Valor máximo de transferência"
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, maximumTransferValue: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="filterBirthCountry_input"
              id="filterBirthCountrycountry_input"
              placeholder="País de nascimento"
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, birthCountry: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="filterPassport_input"
              id="filterPassport_input"
              placeholder="Passaporte"
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, passport: e.target.value }))}
            />

          </AuthLayout>

        </AuthForm>

      </AuthWrapper>

    </Styled.FilterPlayersContainer>
  );
}

FilterPlayers.propTypes = {
};
