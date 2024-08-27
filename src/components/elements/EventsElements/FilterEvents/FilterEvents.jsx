import Prop from 'prop-types';
import React, { useEffect, useState, useContext } from 'react';
import { OptionsOutline as OptionsIcons } from '@styled-icons/evaicons-outline/OptionsOutline';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
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
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';
import { filterEvents, searchEvents } from '../../../../contexts/s2tContext/s2tActions';

export function FilterEvents() {
  const [isOpen, setIsOpen] = useState(true);
  const { t } = useTranslation();

  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const [filterData, setFilterData] = useState({
    eventType: '',
    eventFormat: '',
    country: '',
    organizer: '',
  });

  const [searchData, setSearchData] = useState('');

  useEffect(() => {
    const handleFilter = async () => {
      if (filterData) {
        filterEvents(s2tDispatch, filterData);
      }
    };

    handleFilter();
  }, [filterData]);

  useEffect(() => {
    const handleSearch = async () => {
      if (searchData) {
        searchEvents(s2tDispatch, searchData);
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
              options={s2tState.formOptions.eventType}
              placeholder={t('all')}
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, eventType: option }))}
            />

            <SearchWrapper>
              <IconDiv onclick={() => setIsOpen(!isOpen)} name={t('filter_events')}>
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
              options={s2tState.formOptions.eventFormat}
              placeholder={t('event_format')}
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, eventFormat: option }))}
            />

            <AuthInput
              type="text"
              name="filterEventOrganizer_input"
              id="filterEventOrganizer_input"
              placeholder={t('organizer')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, organizer: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="filterEventCountry_input"
              id="filterEventCountry_input"
              placeholder={t('country')}
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
