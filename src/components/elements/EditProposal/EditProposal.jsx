import Prop from 'prop-types';
import React, { useContext, useState } from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as Styled from './EditProposal-Styles';
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
import { editProposal } from '../../../contexts/s2tContext/s2tActions';

export function EditProposal({ onclick, proposal }) {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const { t } = useTranslation();

  const navigate = useNavigate();

  const [proposalData, setProposalData] = useState({
    opportunityId: proposal.opportunityId,
    details: {
      ...proposal.details,
    },
    description: proposal.description,
    requirements: proposal.requirements,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (proposalData) {
      editProposal(s2tDispatch, proposalData);
      navigate(-1);
    }
  };

  return (
    <Styled.EditProposalContainer>
      <Row>
        <Title text={t('edit_my_opportunity')} uppercase />

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
              placeholder={t('which_country')}
              title={t('country')}
              required
              value={proposalData.details.country}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, country: e.target.value } }))}
            />

            <AuthDropdown
              title={t('which_position')}
              id="position"
              required
              selectedvalue={proposalData.details.opportunity}
              options={s2tState.formOptions.positions}
              onDropdownChange={(option) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, opportunity: option } }))}
            />

            <AuthDropdown
              title={t('which_category')}
              id="competitiveCategory"
              selectedvalue={proposalData.details.category}
              options={s2tState.formOptions.competitiveCategory}
              onDropdownChange={(option) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, category: option } }))}
              required
            />

            <AuthInput
              type="date"
              name="disponibility_input"
              id="disponibility_input"
              title={t('which_disponibility_date_question')}
              value={proposalData.details.disponibility}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, disponibility: e.target.value } }))}
            />

            <AuthInput
              type="number"
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
              type="number"
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
              selectedvalue={proposalData.details.payment.currency}
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
            name="editProposal_submit"
            id="editProposal_submit"
            value={t('confirm_edit')}
            onclick={(e) => handleSubmit(e)}
          />

        </AuthForm>
      </AuthWrapper>

    </Styled.EditProposalContainer>
  );
}

EditProposal.propTypes = {
  onclick: Prop.func,
  proposal: Prop.arrayOf(Prop.object),
};
