import styled, { css } from 'styled-components';
import { AuthContainer } from '../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';
import { PopupElement } from '../../components/elements/Popup/Popup-Styles';
import { NavContainer } from '../../components/Nav/Nav-Styles';
import { FloatingMenuContainer } from '../../components/FloatingMenu/FloatingMenu-Styles';
import { FloatingHeaderContainer } from '../../components/Headers/FloatingHeader/FloatingHeader-Styles';
import { IconContainer } from '../../components/elements/IconDiv/IconDiv-Styles';
import { ButtonElement } from '../../components/elements/Button/Button-Styles';

export const ForgotPasswordWrapper = styled.div`
  ${({ theme }) => css`
   ${FloatingHeaderContainer} {
      justify-content: space-between;


      ${NavContainer} {
        @media ${theme.medias.smallpc} {
         display: none;
        }
      }

      ${IconContainer} {
        display: none;
        animation: none;

        @media ${theme.medias.smallpc} {
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

      @media ${theme.medias.smallpc} {
        display: flex;
      }
    }
  }

> ${FloatingMenuContainer} {
  display: none;
  flex-direction: column;
  gap: ${theme.spacings.small};
  padding: ${theme.spacings.medium};

  @media ${theme.medias.smallpc} {
    display: flex;
  }
}

  ${NavContainer} {
    @media ${theme.medias.smallpc} {
      display: none;
    }
  }
  `}
`;

export const ForgotPasswordPage = styled.section`
  ${({ theme, backgroundimagesrc }) => css`
      background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 1)
      ),
      url(${backgroundimagesrc});

     background-position: center;
     background-size: cover;

     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

     height: 100vh;


     ${AuthContainer} {
      max-width: 500px;
      height: auto;

      @media ${theme.medias.tablet} {
       width: 90%;
      }
     }

     ${PopupElement} {
       gap: ${theme.spacings.small};
     }
  `}
`;
