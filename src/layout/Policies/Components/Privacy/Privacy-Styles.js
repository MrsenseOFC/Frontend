import styled, { css } from 'styled-components';
import { ColumnContainer } from '../../../../components/ColumnContainer/Column-Styles';
import { SubtitleElement } from '../../../../components/elements/Subtitle/Subtitle-Styles';
import { LinkContainer } from '../../../../components/elements/StyledLink/StyledLink-Styles';
import { slideIn } from '../../../../styles/animations';

export const PrivacyWrapper = styled.section`
  ${({ theme }) => css`
      animation: ${slideIn} 500ms;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  `}
`;

export const PrivacyContainer = styled.div`
  ${({ theme }) => css`
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: ${theme.spacings.xlarge};

      padding: ${theme.spacings.xlarge};
      @media ${theme.medias.smallpc}{
        width: 100%;
      }

      @media ${theme.spacings.mobile} {
        padding: ${theme.spacings.medium};
      }

     ${ColumnContainer} {
      gap: ${theme.spacings.small};

      ${SubtitleElement} {
        margin-bottom: none;
      }

      ${LinkContainer} {
        
        display: inline-block;

      }
  `}
`;
