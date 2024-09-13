import styled, { css } from 'styled-components';
import { fadeIn, slideIn } from '../../../styles/animations';
import { VerticalSoloSlideElement } from '../VerticalSoloSlide/VerticalSoloSlide-Styles';
import { HorizontalVideoSlideWrapper } from '../HorizontalVideoSlide/HorizontalVideoSlide-Styles';

export const BannerSlideWrapper = styled.div`
  ${({
    theme, backgroundimagesrc, gradientdirection, backgroundfixed,
  }) => css`
    animation: ${fadeIn} 500ms;
    height: 600px;
    width: 100%;
    background: linear-gradient(
    ${gradientdirection || 'to bottom'},
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
    ),
    url(${backgroundimagesrc});
    background-size: cover;
    background-position: center;
    background-attachment: ${backgroundfixed ? 'fixed' : 'scroll'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.small};

    @media (max-width: 1050px) {
      height: 600px;
    }

    @media ${theme.medias.smallpc} {
      height: 600px;
    }

    @media ${theme.medias.tablet} {
      height: 550px;
    }

    @media ${theme.medias.mobile} {
      height: 350px;
    }

  `}
`;

export const BannerSlideContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;


    .swiper-slide {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    & ${VerticalSoloSlideElement} {

      @media ${theme.medias.smallpc} {
      width: 80%;
      }

      @media ${theme.medias.tablet} {
        width: 80%;
      }

      @media ${theme.medias.mobile} {
        width: 80%;
      }

      @media ${theme.medias.smallmobile} {
        width: 100%;
      }    
    }

    & ${HorizontalVideoSlideWrapper} {

      width: 85%;
      padding-bottom: ${theme.spacings.huge};
     

      @media (max-width: 1050px) {
       width: 70%;
      }

      @media ${theme.medias.smallpc} {
        width: 70%;
      }

      @media ${theme.medias.tablet} {
        width: 75%;
      }

      @media ${theme.medias.mobile} {
        width: 75%;
      }
    }


    
  `}
`;
