import Prop from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { OptionsOutline as OptionsIcons } from '@styled-icons/evaicons-outline/OptionsOutline';
import axios from 'axios';
import { Password } from '@styled-icons/material-outlined';
import { useTranslation } from 'react-i18next';
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
import { filterPlayers, searchPlayers } from '../../../contexts/s2tContext/s2tActions';
import { S2tContext } from '../../../contexts/s2tContext/S2tContext';

export function FilterPlayers() {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;
  const { t } = useTranslation();

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

  useEffect(() => {
    filterPlayers(s2tDispatch, filterData);
  }, [filterData]);

  useEffect(() => {
    searchPlayers(s2tDispatch, searchData);
  }, [searchData]);

  return (
    <Styled.FilterPlayersContainer isopen={isOpen ? 'isopen' : undefined}>
      <AuthWrapper>

        <AuthForm>

          <Row>
            <AuthDropdown
              id="competitiveCategory"
              options={s2tState.formOptions.competitiveCategory}
              placeholder={t('competitive_category')}
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
              placeholder={t('competitive_level')}
              options={s2tState.formOptions.competitiveLevels}
              otheroption
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, competitiveLevel: option }))}
            />

            <AuthDropdown
              id="filterAgeCategory"
              placeholder={t('category')}
              options={s2tState.formOptions.ageCategory}
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, ageCategory: option }))}
            />

            <AuthDropdown
              placeholder={t('position')}
              id="filterPosition"
              options={s2tState.formOptions.positions}
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, position: option }))}
            />

            <AuthDropdown
              id="filterLeague"
              placeholder={t('league')}
              options={s2tState.formOptions.league}
              otheroption
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, league: option }))}
            />

            <AuthDropdown
              id="filterLeg"
              placeholder={t('best_leg')}
              options={s2tState.formOptions.leg}
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, bestLeg: option }))}
            />

            <AuthDropdown
              id="filterAvaliability"
              placeholder={t('avaliability')}
              options={s2tState.formOptions.avaliability}
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, avaliability: option }))}
            />

            <AuthDropdown
              id="hasManager"
              placeholder={t('has_manager_question')}
              options={s2tState.formOptions.manager}
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, hasManager: option }))}
            />

            <AuthInput
              type="number"
              name="filterMinimumAge_input"
              id="filterMinimumAge_input"
              placeholder={t('minimum_age')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, minimumAge: e.target.value }))}
            />

            <AuthInput
              type="number"
              name="filterMaximumAge_input"
              id="filterMaximumAge_input"
              placeholder={t('maximum_age')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, maximumAge: e.target.value }))}
            />

            <AuthInput
              type="number"
              name="filterMinimumPayment_input"
              id="filterMinimumPayment_input"
              placeholder={t('minimum_payment')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, minimumPayment: e.target.value }))}
            />

            <AuthInput
              type="number"
              name="filterMaximumPayment_input"
              id="filterMaximumPayment_input"
              placeholder={t('maximum_payment')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, maximumPayment: e.target.value }))}
            />

            <AuthInput
              type="number"
              name="filterMinimumTransferValue_input"
              id="filterMinimumTransferValue_input"
              placeholder={t('minimum_transfer_value')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, minimumTransferValue: e.target.value }))}
            />

            <AuthInput
              type="number"
              name="filterMaximumTransferValue_input"
              id="filterMaximumTransferValue_input"
              placeholder={t('maximum_transfer_value')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, maximumTransferValue: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="filterBirthCountry_input"
              id="filterBirthCountrycountry_input"
              placeholder={t('birth_country')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, birthCountry: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="filterPassport_input"
              id="filterPassport_input"
              placeholder={t('passport')}
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
