import Prop from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { OptionsOutline as OptionsIcons } from '@styled-icons/evaicons-outline/OptionsOutline';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
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
import { S2tContext } from '../../../contexts/s2tContext/S2tContext';
import { filterPlayerProposals, searchPlayerProposals } from '../../../contexts/s2tContext/s2tActions';

export function FilterProposals() {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const { t } = useTranslation();

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

  const [searchData, setSearchData] = useState('');

  useEffect(() => {
    filterPlayerProposals(s2tDispatch, filterData);
  }, [filterData]);

  useEffect(() => {
    searchPlayerProposals(s2tDispatch, searchData);
  }, [searchData]);

  return (
    <Styled.FilterProposalsContainer isopen={isOpen ? 'isopen' : undefined}>
      <AuthWrapper>
        <AuthForm>

          <Row>
            <AuthDropdown
              id="filterOpportunityType"
              options={s2tState.formOptions.opportunityType}
              placeholder={t('all')}
              onDropdownChange={(option) => setFilterData((prevData) => ({ ...prevData, opportunityType: option }))}
            />

            <SearchWrapper>
              <IconDiv onclick={() => setIsOpen(!isOpen)} name="Filtrar oportunidades">
                <OptionsIcons />
              </IconDiv>
              <AuthSearch
                name="searchProposals"
                id="searchProposals"
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
              placeholder={t('categoria')}
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

            <AuthInput
              type="number"
              name="filterMinimumAge_input"
              id="filterMinimumAge_input"
              placeholder={t('minimum_age')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, league: e.target.value }))}
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
              name="filterMinimumHeigth_input"
              id="filterMinimumHeight_input"
              placeholder={t('minimum_height')}
              onChange={(e) => setFilterData((prevData) => ({ ...prevData, minimumAge: e.target.value }))}
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
              type="text"
              name="filterCountry_input"
              id="filterCountrycountry_input"
              placeholder={t('country')}
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
