import styled, { css } from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import { slideInLeft } from '../../../styles/animations';
import { IconContainer } from '../IconDiv/IconDiv-Styles';
import { AuthIconFileContainer } from '../AuthElements/AuthIconFile/AuthIconFile-Styles';
import { AuthFormContainer } from '../AuthElements/AuthForm/AuthForm-Styles';
import { PopupElement } from '../Popup/Popup-Styles';
import { ColumnContainer } from '../../ColumnContainer/Column-Styles';
import { RowContainer } from '../../RowContainer/Row-Styles.js';

export const HorizontalVideoSlideWrapper = styled.div`
  ${({ theme }) => css`

  width: 100%;
  height: 100%;

    
  `}  
`;

export const HorizontalVideoSlideElement = styled.div`
  ${({ theme }) => css`

    .swiper-wrapper {
     height: 350px;
     aspect-ratio: 16 / 9; 
     container-type: size;


      @media (max-width: 1470px) {
        height: 400px;
      }

      @media (max-width: 1050px) {
        height: 450px;
      }

      @media ${theme.medias.smallpc} { 
        height: 410px;
      }

      @media ${theme.medias.tablet} { 
        height: 380px;
      }

      @media (max-width: 630px) {
        height: 310px;
      }
  
      @media ${theme.medias.mobile} { 
        height: 250px;
      }

      @media ${theme.medias.smallmobile} { 
        height: 210px;
      }

      @media (max-width: 280px) {
        height: 190px;
      }
    }


   .swiper-slide {
     height: 100%;
     width: 100%;
     background: rgba(0,0,0,0.5);
     border: ${theme.borders.xwhite};
     border-radius: 12px;
   
   }
 `}
`;

export const MediaWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xsmall};
    padding: ${theme.spacings.medium};

    ${IconContainer} {
    > svg {
        background: ${theme.colors.white};
    }
  }


    
    & img, video{
      /* object-fit: contain;
      width: 100%;
      height: 100%;
      border-radius: 15px;
      transition: all 500ms ease-in-out;
      box-sizing: border-box;
      border: ${theme.borders.xtransparent}; */
    }

    ${RowContainer} {
      justify-content: space-between;
      align-items: center;
      /* gap: ${theme.spacings.large} */

      @media ${theme.medias.smallpc} {
        flex-direction: row;
      }
    }
  `}
`;

export const BottomIconsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: ${theme.spacings.xsmall};
    height: 30px;
    z-index: 100;

    ${IconContainer} {
    width: auto;
    height: 100%;

    > svg {
     border-radius: 50%;
     /* background: rgba(0, 0, 0, 0.5); */

      &:hover {
        /* background: rgba(0, 0, 0, 0.8); */
        transform: scale(1.1);
      }

      @media ${theme.medias.mobile} {
       width: 25px;
       height: 25px;
      }
    }
  }
 `}
`;
