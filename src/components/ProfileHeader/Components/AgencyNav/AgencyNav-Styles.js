import styled, { css } from 'styled-components';

export const AgencyNav = styled.nav`
  ${({ theme }) => css`
     display: flex;
     justify-content: center;
     align-items: center;
     gap: ${theme.spacings.small};
     height: 100%;
     width: 100%;
     padding: ${theme.spacings.xsmall};
  `}
`;
