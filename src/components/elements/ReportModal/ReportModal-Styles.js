import styled, { css } from 'styled-components';
import { fadeIn, slideIn } from '../../../styles/animations';
import { SubtitleElement } from '../Subtitle/Subtitle-Styles';
import { RowContainer } from '../../RowContainer/Row-Styles.js';
import { TextElement } from '../Text/Text-Styles.js';
import { ButtonElement } from '../Button/Button-Styles.js';
import { IconContainer } from '../IconDiv/IconDiv-Styles.js';
import { AuthButtonElement } from '../AuthElements/AuthButton/AuthButton-Styles.js';
import { AuthFormContainer } from '../AuthElements/AuthForm/AuthForm-Styles.js';

export const ReportModalElement = styled.div`
  ${({ theme }) => css`

     display: flex;
     flex-direction: column;
     gap: ${theme.spacings.medium};

     padding: ${theme.spacings.large};


     @media ${theme.medias.smallpc} {
      padding: ${theme.spacings.medium};
     }

     ${ButtonElement} {
      animation: ${slideIn} 1000ms;
      padding: ${theme.spacings.large};
      display: flex;
      justify-content: center;
      align-items: center;
     }

     ${AuthButtonElement} {
        animation: ${slideIn} 500ms;

      }

     & ${IconContainer} {
      animation: none;
     }

     ${AuthFormContainer} {
     }


     ${TextElement}{
      animation: ${slideIn} 1000ms;
     }

     > ${RowContainer} {
      justify-content: space-between;

      @media ${theme.medias.smallpc} {
        flex-direction: row;
      }

      > ${SubtitleElement} {
        margin: auto 0;
      }
     }
     
  `}
`;
