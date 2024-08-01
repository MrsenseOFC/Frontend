import styled, { css } from 'styled-components';

export const AuthCheckboxElement = styled.div`
  ${({ theme }) => css`
     display: flex;
     flex-direction: row;
     align-items: center;
     gap: ${theme.spacings.xxsmall};
     font-family: ${theme.fonts.primary};
     cursor: pointer;
     user-select: none;
  `}
`;

export const AuthCheckboxInput = styled.input`
  ${({ theme }) => css`
    position: relative;
    width: 16px;
    height: 16px;
    appearance: none;
    border: ${theme.borders.xwhite};
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    user-select: none;

    &:checked::before {
      opacity: 1;
    }

    &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background-color: ${theme.colors.secondary}; 
    border-radius: 50%;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    }
  `}
`;

export const AuthCheckboxLabel = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.lightgray};
    font-size: ${theme.sizes.small};
    text-transform: uppercase;
    cursor: pointer;
    user-select: none;

    @media ${theme.medias.mobile} {
    font-size: ${theme.sizes.xsmall};
    }
  `}
`;
