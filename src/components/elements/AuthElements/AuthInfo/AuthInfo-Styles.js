import styled, { css } from 'styled-components';
import { IconContainer } from '../../IconDiv/IconDiv-Styles';

export const AuthInfoContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;

    @media ${theme.medias.mobile} {
      font-size: ${theme.sizes.small};
    }

    ${IconContainer} {
     position: absolute;
     width: 25px;
     right: 5px;
     transition: all 500ms ease-in-out;
    }

  `}
`;

export const AuthInfoText = styled.p`
  ${({ theme }) => css`
     border: ${theme.borders.white};
     padding: ${theme.spacings.small};
     border-radius: 10px;
     background: ${theme.colors.mediumblack};
     width: 100%;
  `}
`;
