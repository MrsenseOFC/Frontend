import styled, { css } from 'styled-components';
import { slideIn } from '../../styles/animations';
import { AuthContainer } from '../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';
import { FloatingMenuContainer } from '../../components/FloatingMenu/FloatingMenu-Styles';
import { ButtonElement } from '../../components/elements/Button/Button-Styles';
import { IconContainer } from '../../components/elements/IconDiv/IconDiv-Styles';
import { NavContainer } from '../../components/Nav/Nav-Styles';
import { FloatingHeaderContainer } from '../../components/Headers/FloatingHeader/FloatingHeader-Styles';

export const LoginWrapper = styled.div`
  ${({ theme }) => css`
    
  ${FloatingHeaderContainer} {
      justify-content: space-between;


      ${NavContainer} {
        @media ${theme.medias.tablet} {
         display: none;
        }
      }

      ${IconContainer} {
        display: none;
        animation: none;

        @media ${theme.medias.tablet} {
          display: flex;
        }
      }
    }


    ${FloatingMenuContainer} {
      & ${ButtonElement} {
        height: 30px;
      }
    }

    > ${FloatingMenuContainer} {
      display: none;
      flex-direction: column;
      gap: ${theme.spacings.small};
      padding: ${theme.spacings.medium};

      @media ${theme.medias.tablet} {
        display: flex;
      }
    }
    
  `}
`;

export const LoginPage = styled.section`
  ${({ theme, backgroundimagesrc }) => css`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 1)
      ),
      url(${backgroundimagesrc});

     background-position: right;
     background-size: cover;
    
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     

     height: 100vh;

     ${AuthContainer} {
      max-width: 350px;
      height: auto;

      @media ${theme.medias.tablet} {
       width: 90%;
      }
     }
     
  `}
`;
