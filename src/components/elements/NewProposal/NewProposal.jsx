import Prop from 'prop-types';
import React, { useContext, useState } from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import * as Styled from './NewProposal-Styles';
import { Subtitle } from '../Subtitle/Subtitle';
import { ColumnContainer } from '../../ColumnContainer/Column-Styles';
import { AuthWrapper } from '../AuthElements/AuthWrapper/AuthWrapper';
import { AuthForm } from '../AuthElements/AuthForm/AuthForm';
import { TextArea } from '../TextArea/TextArea';
import { AuthInput } from '../AuthElements/AuthInput/AuthInput';
import { AuthButton } from '../AuthElements/AuthButton/AuthButton';
import { IconDiv } from '../IconDiv/IconDiv';
import { Title } from '../Title/Title';
import { Row } from '../../RowContainer/Row';
import { AuthLayout } from '../AuthElements/AuthLayout/AuthLayout';
import { AuthDropdown } from '../AuthElements/AuthDropdown/AuthDropdown';
import { S2tContext } from '../../../contexts/s2tContext/S2tContext';
import { addProposal } from '../../../contexts/s2tContext/s2tActions';

export function NewProposal({ onclick }) {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const currentDate = new Date().toISOString().substring(0, 10); // Get current date in YYYY-MM-DD format

  const [proposalData, setProposalData] = useState({
    opportunityId: 0,
    details: {
      from: '', // Tipo de perfil do usuário que publicou a proposta
      date: currentDate,
      disponibility: '',
      category: '',
      opportunity: '',
      country: '',
      org: '',
      age: {
        minAge: undefined,
        maxAge: undefined,
      },
      payment: {
        minPayment: '',
        maxPayment: '',
        currency: '',
      },
      minHeight: '',
    },
    description: '',
    requirements: '',
  });

  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    addProposal(s2tDispatch, proposalData);
    onclick();
  };

  return (
    <Styled.NewProposalContainer>
      <Row>

        <Title text={t('create_new_opportunity')} uppercase />

        <IconDiv name={t('back')} onclick={onclick}>
          <CloseIcon />
        </IconDiv>
      </Row>

      <AuthWrapper>
        <AuthForm onSubmit={handleSubmit}>
          <Subtitle text={t('details')} uppercase />
          <AuthLayout isopen>
            <AuthInput
              type="text"
              name="league_input"
              id="league_input"
              placeholder={t('which_league')}
              title={t('league')}
              value={proposalData.details.org}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, org: e.target.value } }))}
              required
            />

            <AuthInput
              type="text"
              name="country_input"
              id="country_input"
              placeholder={t('which_country_opportunity')}
              title={t('country')}
              required
              value={proposalData.details.country}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, country: e.target.value } }))}
            />

            <AuthDropdown
              title={t('which_position')}
              placeholder={t('select_position')}
              id="position"
              required
              options={s2tState.formOptions.positions}
              onDropdownChange={(option) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, opportunity: option } }))}
            />

            <AuthDropdown
              title={t('which_category')}
              id="competitiveCategory"
              placeholder={t('select_category')}
              options={s2tState.formOptions.competitiveCategory}
              onDropdownChange={(option) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, category: option } }))}
              required
            />

            <AuthInput
              type="date"
              name="disponibility_input"
              id="disponibility_input"
              title={t('which_disponibility_date')}
              value={proposalData.details.disponibility}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, disponibility: e.target.value } }))}
            />

            <AuthInput
              type="text"
              name="minimumHeight_input"
              id="minimumHeight_input"
              placeholder={t('which_minimum_height')}
              title={t('minimum_height')}
              value={proposalData.details.minHeight}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, minHeight: e.target.value } }))}
            />

            <AuthInput
              type="number"
              name="minimumAge_input"
              id="minimumAge_input"
              placeholder={t('which_minimum_age')}
              title={t('minimum_age')}
              value={proposalData.details.age.minAge}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, age: { ...prevData.details.age, minAge: e.target.value } } }))}
            />

            <AuthInput
              type="text"
              name="maximumAge_input"
              id="maximumAge_input"
              placeholder={t('which_maximum_age')}
              title={t('maximum_age')}
              value={proposalData.details.age.maxAge}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, age: { ...prevData.details.age, maxAge: e.target.value } } }))}
            />

            <AuthInput
              type="text"
              name="mininumPayment_input"
              id="mininumPayment_input"
              placeholder={t('which_minimum_payment')}
              title={t('minimum_payment')}
              required
              value={proposalData.details.payment.minPayment}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, payment: { ...prevData.details.payment, minPayment: e.target.value } } }))} // Atualize aqui
            />

            <AuthInput
              type="text"
              name="maximumPayment_input"
              id="maximumPayment_input"
              placeholder={t('which_maximum_payment')}
              title={t('maximum_payment')}
              value={proposalData.details.payment.maxPayment}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, payment: { ...prevData.details.payment, maxPayment: e.target.value } } }))} // Atualize aqui
            />

            <AuthDropdown
              title={t('which_currency')}
              placeholder={t('select_currency')}
              id="paymentCurrency"
              options={s2tState.formOptions.currency}
              required
              onDropdownChange={(option) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, payment: { ...prevData.details.payment, currency: option } } }))}
            />

          </AuthLayout>

          <ColumnContainer>
            <Subtitle text={t('description')} uppercase />
            <TextArea
              placeholder={t('insert_description')}
              name="description"
              value={proposalData.description}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, description: e.target.value }))}
            />
          </ColumnContainer>

          <ColumnContainer>
            <Subtitle text={t('requirements')} uppercase />
            <TextArea
              placeholder={t('insert_requirements')}
              name="requirements"
              value={proposalData.requirements}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, requirements: e.target.value }))}
            />
          </ColumnContainer>

          <AuthButton
            name="createProposal_submit"
            id="createProposal_submit"
            value={t('publish_opportunity')}
          />
        </AuthForm>
      </AuthWrapper>

    </Styled.NewProposalContainer>
  );
}

NewProposal.propTypes = {
  onclick: Prop.func,
};
