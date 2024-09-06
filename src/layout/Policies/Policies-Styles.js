import styled, { css } from 'styled-components';
import { StandardHeaderContainer } from '../../components/Headers/StandardHeader/StandardHeader-Styles';
import { IconContainer } from '../../components/elements/IconDiv/IconDiv-Styles';
import { NavContainer } from '../../components/Nav/Nav-Styles';
import { MobileNavContainer } from '../../components/MobileNav/MobileNav-Styles';
import { ButtonElement } from '../../components/elements/Button/Button-Styles';

export const PoliciesContainer = styled.section`
  ${({ theme }) => css`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  

  > ${NavContainer} {
   > ${ButtonElement} {
     min-width: 150px;
    }
  }

  ${StandardHeaderContainer} {

    margin-bottom: ${theme.spacings.xlarge};

    ${IconContainer} {
    display: none;
    animation: none;

    @media ${theme.medias.smallpc} {
      display: flex;
    }
    }

    ${NavContainer} {
      @media ${theme.medias.smallpc} {
      display: none;
    }
    }
    }

    ${MobileNavContainer} {
    position: absolute;
    top: 80px;
    padding: ${theme.spacings.huge};

    @media ${theme.medias.smallpc} {
      display: flex;
    }

    @media ${theme.medias.tablet} {
      top: 75px;
    }
    }



    ${NavContainer} {
    @media ${theme.medias.tablet} {
      flex-direction: column;
      gap: ${theme.spacings.small};
    }
    }
  `}
`;
