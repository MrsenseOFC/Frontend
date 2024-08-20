import Prop from 'prop-types';
import React, { useState } from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useTranslation } from 'react-i18next';
import * as Styled from './ProposalModal-Styles';
import { Title } from '../Title/Title';
import { GridTwoColumn } from '../../GridTwoColumn/GridTwoColumn';
import { Button } from '../Button/Button';
import { theme } from '../../../styles/theme';
import { Subtitle } from '../Subtitle/Subtitle';
import { InfoInRow } from '../InfoInRow/InfoInRow';
import { Text } from '../Text/Text';
import { ColumnContainer } from '../../ColumnContainer/Column-Styles';
import { TextArea } from '../TextArea/TextArea';
import { Row } from '../../RowContainer/Row';
import { IconDiv } from '../IconDiv/IconDiv';
import { FavoriteIcon } from '../FavoriteIcon/FavoriteIcon';

export function ProposalModal({ proposal, onclick, isapplied }) {
  const [message, setMessage] = useState('');
  const { t } = useTranslation();

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    // enviar os dados para o backend
  };

  return (

    <Styled.ProposalModalElement>

      {proposal && (
      <>
        <Row>
          <Title text={t('opportunity')} uppercase />

          <IconDiv
            onclick={onclick}
            name={t('close_opportunity')}
            hovercolor={theme.colors.red}
          >
            <CloseIcon />
          </IconDiv>
        </Row>

        <Subtitle text={t('details')} uppercase />

        <GridTwoColumn>

          {proposal.details.from && <InfoInRow infotitle={t('opportunity_from')} info={proposal.details.from} uppercase />}
          {proposal.details.date && <InfoInRow infotitle={t('date')} info={proposal.details.date} uppercase />}
          {proposal.details.disponibility ? <InfoInRow infotitle={t('avaliability')} info={proposal.details.disponibility} uppercase /> : <InfoInRow infotitle={t('avaliability')} info="Imediato" uppercase />}
          {proposal.details.org && <InfoInRow infotitle={t('league')} info={proposal.details.org} uppercase />}
          {proposal.details.country && <InfoInRow infotitle={t('country')} info={proposal.details.country} uppercase />}
          {proposal.details.category && <InfoInRow infotitle={t('category')} info={proposal.details.category} uppercase />}
          {proposal.details.opportunity && <InfoInRow infotitle={t('position')} info={proposal.details.opportunity} uppercase />}
          {proposal.details.minHeight && <InfoInRow infotitle={t('minimum_height')} info={`${proposal.details.minHeight} M`} uppercase />}
          {proposal.details.age.minAge && <InfoInRow infotitle={t('minimum_age')} info={`${proposal.details.age.minAge} ${t('years')}`} uppercase />}
          {proposal.details.age.maxAge && <InfoInRow infotitle={t('maximum_age')} info={`${proposal.details.age.maxAge} ${t('years')}`} uppercase />}
          {proposal.details.payment.minPayment && <InfoInRow infotitle={t('payment')} info={`${proposal.details.payment.minPayment} | ${proposal.details.payment.maxPayment} ${proposal.details.payment.currency}`} uppercase />}

        </GridTwoColumn>

        {proposal.description && (
        <ColumnContainer>
          <Subtitle text={t('description')} uppercase />
          <Text text={proposal.description} />
        </ColumnContainer>
        )}

        {proposal.requirements && (
        <ColumnContainer>
          <Subtitle text={t('requirements')} uppercase />
          <Text text={proposal.requirements} />
        </ColumnContainer>
        )}

        <ColumnContainer>
          <Subtitle text={t('message')} uppercase />
          <TextArea
            placeholder={t('optional')}
            info="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          {isapplied ? (
            <Button
              text={t('opportunity_message_sent')}
              bgcolor={theme.colors.darkgray}
              bghover={theme.colors.darkgray}
              textcolor={theme.colors.white}
              texthover={theme.colors.white}
              border={theme.colors.lightgray}
              borderhover={theme.colors.lightgray}
            />
          ) : (
            <Button
              text={t('send_message')}
              bgcolor={theme.colors.quaternary}
              bghover={theme.colors.secondary}
              textcolor={theme.colors.white}
              texthover={theme.colors.white}
              border={theme.colors.tertiary}
              borderhover={theme.colors.white}
              onclick={handleSubmitMessage}
            />
          )}

        </ColumnContainer>
      </>
      )}

    </Styled.ProposalModalElement>

  );
}

ProposalModal.propTypes = {
  proposal: Prop.func,
  onclick: Prop.func,
  isapplied: Prop.bool,
};
