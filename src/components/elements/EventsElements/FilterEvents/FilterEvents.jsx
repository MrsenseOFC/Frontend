import Prop from 'prop-types';
import React, { useEffect, useState } from 'react';
import { OptionsOutline as OptionsIcons } from '@styled-icons/evaicons-outline/OptionsOutline';
import axios from 'axios';
import * as Styled from './FilterEvents-Styles';
import { AuthInput } from '../../AuthElements/AuthInput/AuthInput';
import { AuthDropdown } from '../../AuthElements/AuthDropdown/AuthDropdown';
import { AuthWrapper } from '../../AuthElements/AuthWrapper/AuthWrapper';
import { AuthForm } from '../../AuthElements/AuthForm/AuthForm';
import { GridLayout } from '../../../GridLayout/GridLayout';
import { AuthSearch } from '../../AuthElements/AuthSearch/AuthSearch';
import { Row } from '../../../RowContainer/Row';
import { IconDiv } from '../../IconDiv/IconDiv';
import { AuthLayout } from '../../AuthElements/AuthLayout/AuthLayout';
import { SearchWrapper } from '../../AuthElements/AuthSearch/AuthSearch-Styles';

export function FilterEvents() {
  const [isOpen, setIsOpen] = useState(true);

  const [filterData, setFilterData] = useState({
    eventType: '',
    eventFormat: '',
    country: '',
    organizer: '',
  });

  const [searchData, setSearchData] = useState('');

  const eventTypeOptions = [
    { value: 'match', text: 'Partida' },
    { value: 'camping', text: 'Camping' },
    { value: 'clinic', text: 'Clínica' },
    { value: 'palestra', text: 'Palestra' },
    { value: 'tour', text: 'Tour' },
    { value: 'showcase', text: 'Showcase' },
    { value: 'exchange', text: 'Intercâmbio' },
  ];

  const eventFormatOptions = [
    { value: 'online', text: 'Online' },
    { value: 'inPerson', text: 'Presencial' },
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
    <Styled.FilterEventsContainer isopen={isOpen ? 'isopen' : undefined}>
      <AuthWrapper>
        <AuthForm>

          <Row>
            <AuthDropdown
              id="filterEventType"
              options={eventTypeOptions}
              placeholder="Todos"
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, eventType: option }))}
            />

            <SearchWrapper>
              <IconDiv onclick={() => setIsOpen(!isOpen)} name="Filtrar oportunidades">
                <OptionsIcons />
              </IconDiv>
              <AuthSearch
                name="searchEvent"
                id="searchEvent"
                onChange={(e) => setSearchData(e.target.value)}
              />
            </SearchWrapper>

          </Row>

          <AuthLayout isopen={isOpen}>

            <AuthDropdown
              id="filterEventFormat"
              options={eventFormatOptions}
              placeholder="Formato do evento"
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, eventFormat: option }))}
            />

            <AuthInput
              type="text"
              name="filterEventOrganizer_input"
              id="filterEventOrganizer_input"
              placeholder="Organizador(a)"
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, organizer: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="filterEventCountry_input"
              id="filterEventCountry_input"
              placeholder="País"
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, country: e.target.value }))}
            />

          </AuthLayout>

        </AuthForm>

      </AuthWrapper>

    </Styled.FilterEventsContainer>
  );
}

FilterEvents.propTypes = {
};
