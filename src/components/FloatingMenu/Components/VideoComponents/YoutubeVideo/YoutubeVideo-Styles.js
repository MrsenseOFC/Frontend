import styled, { css } from 'styled-components';
import { PopupElement } from '../../../../elements/Popup/Popup-Styles.js';
import { RowContainer } from '../../../../RowContainer/Row-Styles.js.js';
import { SubtitleElement } from '../../../../elements/Subtitle/Subtitle-Styles.js';
import { AuthButtonElement } from '../../../../elements/AuthElements/AuthButton/AuthButton-Styles.js';
import { AuthInputElement } from '../../../../elements/AuthElements/AuthInput/AuthInput-Styles.js';

export const YoutubeVideoContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: ${theme.spacings.large};
    padding: ${theme.spacings.xsmall};

    ${AuthInputElement} {
      &:hover {
       border: ${theme.borders.red};
      }

      &:focus {
       border: ${theme.borders.red};
       box-shadow: 0px 0px 5px 1px ${theme.colors.red};
     }
    }
  `}
`;
