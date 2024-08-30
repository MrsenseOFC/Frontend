import styled, { css } from 'styled-components';
import { PopupElement } from '../../../elements/Popup/Popup-Styles';
import { TextCopyElement } from '../../../elements/TextCopy/TextCopy-Styles';

export const ShareMenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: ${theme.spacings.small};
    padding: ${theme.spacings.xsmall};
    ${TextCopyElement} {
      border
    }
    
  `}
`;
