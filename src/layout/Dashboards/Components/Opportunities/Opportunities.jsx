import React, { useContext, useState } from 'react';
import Prop from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as Styled from './Opportunities-Styles';
import { GridProposals } from '../../../../components/elements/GridProposals/GridProposals';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';
import { PlayerContext } from '../../../../contexts/userContext/PlayerProvider/PlayerContext';
import { Title } from '../../../../components/elements/Title/Title';
import { AuthDropdown } from '../../../../components/elements/AuthElements/AuthDropdown/AuthDropdown';
import { AuthSearch } from '../../../../components/elements/AuthElements/AuthSearch/AuthSearch';
import { ProposalModal } from '../../../../components/elements/ProposalModal/ProposalModal';

export function Opportunities() {
  const { t } = useTranslation();

  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const playerContext = useContext(PlayerContext);
  const { playerState, playerDispatch } = playerContext;

  const location = useLocation();
  const selectedProposal = location.state?.selectedProposal || null;

  const proposals = [
    ...s2tState.proposals[playerState.profile.info.modality][playerState.profile.info.competitiveCategory].agents,
    ...s2tState.proposals[playerState.profile.info.modality][playerState.profile.info.competitiveCategory].clubs,
  ];

  return (
    <Styled.OpportunitiesContainer>

      <GridProposals title={t('opportunities')} items={proposals} selectedproposal={selectedProposal} />

    </Styled.OpportunitiesContainer>
  );
}

Opportunities.propTypes = {
  selectedproposal: Prop.object,
};
