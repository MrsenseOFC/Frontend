import styled, { css } from 'styled-components';
import { PopupElement } from '../../../../elements/Popup/Popup-Styles.js';
import { RowContainer } from '../../../../RowContainer/Row-Styles.js.js';
import { SubtitleElement } from '../../../../elements/Subtitle/Subtitle-Styles.js';
import { IconContainer } from '../../../../elements/IconDiv/IconDiv-Styles.js';

export const UploadOptionsContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: ${theme.spacings.small};

    ${IconContainer} {
      animation: none;
    }

  `}
`;
