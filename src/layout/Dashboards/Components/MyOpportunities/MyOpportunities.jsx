import React, { useContext } from 'react';
import Prop from 'prop-types';
import { useTranslation } from 'react-i18next';
import * as Styled from './MyOpportunities-Styles';
import { GridEditableProposals } from '../../../../components/elements/GridEditableProposals/GridEditableProposals';

export function MyOpportunities({ opportunities }) {
  const { t } = useTranslation();
  return (
    <Styled.MyOpportunitiesContainer>

      <GridEditableProposals title={t('my_opportunities')} items={opportunities} />

    </Styled.MyOpportunitiesContainer>
  );
}

MyOpportunities.propTypes = {
  opportunities: Prop.arrayOf(Prop.object),
};
