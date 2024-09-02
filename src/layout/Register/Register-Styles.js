import styled, { css } from 'styled-components';
import { RowContainer } from '../../components/RowContainer/Row-Styles.js';
import { AuthContainer } from '../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles.js';
import { BubbleContainer } from '../../components/Bubble/Bubble-Styles.js';
import { TextElement } from '../../components/elements/Text/Text-Styles.js';
import { FloatingHeaderContainer } from '../../components/Headers/FloatingHeader/FloatingHeader-Styles.js';
import { NavContainer } from '../../components/Nav/Nav-Styles.js';
import { IconContainer } from '../../components/elements/IconDiv/IconDiv-Styles.js';
import { FloatingMenuContainer } from '../../components/FloatingMenu/FloatingMenu-Styles.js';
import { ButtonElement } from '../../components/elements/Button/Button-Styles.js';

export const RegisterWrapper = styled.div`
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

export const RegisterPage = styled.section`
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
     height: 100%;
     width: 100%;
     min-height: 1000px;
     flex-direction: center;
     justify-content: space-around;
     gap: ${theme.spacings.medium};
     padding-top: 110px;
     padding-left: ${theme.spacings.large};
     padding-right: ${theme.spacings.large};
     padding-bottom: ${theme.spacings.large};
    

     @media (max-width: 1440px){
      flex-direction: column;
      align-items: center;
     }


     ${RowContainer} {
      justify-content: center;
      
      @media ${theme.medias.smallpc} {
        flex-direction: row;
      }
     }

     ${AuthContainer} {

      @media ${theme.medias.tablet} {
        width: 100%;
      }
      
      ${TextElement} {
        text-align: center
      }
     }

     ${BubbleContainer} {
      max-width: 400px;
      height: 100%;
      
      @media (max-width: 1440px) {
        max-width: 700px;
      }

      @media ${theme.medias.tablet} {
        width: 100%;
      }
    } 

    }
  `}
`;

export const PlansLayout = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.medium};
    flex-direction: column;


    @media (max-width: 1440px) {
      flex-wrap: wrap; /* Permite que os itens sejam quebrados em várias linhas */
      align-items: center;
      justify-content: center;
      flex-direction: row;
    }

    ${BubbleContainer} {
      flex: auto;
      flex-grow: 1;
      flex-basis: 200;
      width: 100%;

      
      @media (max-width: 1440px) {
       flex-wrap: wrap;
       align-items: center;
       justify-content: center;
       width: 40%;
       max-width: 500px;
      }

      @media ${theme.medias.tablet} {
        width: 100%;
        max-width: 700px;
      }
    } 
  `}
`;
