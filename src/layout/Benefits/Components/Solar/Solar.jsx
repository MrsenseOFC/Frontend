import Prop from 'prop-types';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './Solar-Styles';
import { Text } from '../../../../components/elements/Text/Text';
import { Title } from '../../../../components/elements/Title/Title';
import { BannerSlide } from '../../../../components/elements/BannerSlide/BannerSlide';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';
import { Slide } from '../../../../components/elements/Slide/Slide';
import { VerticalMiniSlide } from '../../../../components/elements/VerticalMiniSlide/VerticalMiniSlide';
import { VerticalSoloSlide } from '../../../../components/elements/VerticalSoloSlide/VerticalSoloSlide';
import { StyledLink } from '../../../../components/elements/StyledLink/StyledLink';
import { ListContainer, ListItem, ListWrapper } from '../../../../components/elements/List/List-Styles';
import { s2tData } from '../../../../contexts/s2tContext/s2tData';
import { Banner } from '../../../../components/elements/Banner/Banner';
import { AuthForm } from '../../../../components/elements/AuthElements/AuthForm/AuthForm';
import { AuthInput } from '../../../../components/elements/AuthElements/AuthInput/AuthInput';
import { AuthButton } from '../../../../components/elements/AuthElements/AuthButton/AuthButton';
import { AuthWrapper } from '../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper';
import { AuthContainer } from '../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';
import { Subtitle } from '../../../../components/elements/Subtitle/Subtitle';
import { Column } from '../../../../components/ColumnContainer/Column';
import { Row } from '../../../../components/RowContainer/Row';

export function Solar() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  const { t } = useTranslation();

  return (
    <Styled.SolarContainer>

      <Banner backgroundimagesrc="/assets/images/backgrounds/slider-bg-1.png">

        <Title text={t('welcome_t2s_solar')} uppercase />

        <Text text={t('solar_text_1')} />
        <Text text={t('solar_text_2')} />

        <ListWrapper>
          <ListContainer>
            <ListItem>
              {t('solar_step_1')}
            </ListItem>

            <ListItem>
              {t('solar_step_2')}
            </ListItem>

            <ListItem>
              {t('solar_step_3')}
            </ListItem>

            <ListItem>
              {t('solar_step_4')}
            </ListItem>
          </ListContainer>
        </ListWrapper>

      </Banner>

      <BannerSlide autoplay slidesperview={3}>

        <StyledLink path="https://beneficios.plataformalions.com/categoria/novidades/" newtab>
          <img src="/assets/images/others/business.png" alt="" />
        </StyledLink>

        <StyledLink path="https://beneficios.plataformalions.com/categoria/novidades/" newtab>
          <img src="/assets/images/others/business.png" alt="" />
        </StyledLink>

        <StyledLink path="https://beneficios.plataformalions.com/categoria/novidades/" newtab>
          <img src="/assets/images/others/business.png" alt="" />
        </StyledLink>

        <StyledLink path="https://beneficios.plataformalions.com/categoria/novidades/" newtab>
          <img src="/assets/images/others/business.png" alt="" />
        </StyledLink>

        <StyledLink path="https://beneficios.plataformalions.com/categoria/novidades/" newtab>
          <img src="/assets/images/others/business.png" alt="" />
        </StyledLink>

        <StyledLink path="https://beneficios.plataformalions.com/categoria/novidades/" newtab>
          <img src="/assets/images/others/business.png" alt="" />
        </StyledLink>

      </BannerSlide>

      <Banner backgroundimagesrc="/assets/images/backgrounds/slider-bg-2.png">
        <AuthWrapper>

          <AuthContainer>
            <Subtitle text="Subtitle" uppercase />

            <AuthForm>
              <Row>
                <Column>
                  <AuthInput
                    type="text"
                    name="completeName"
                    id="completeName_input"
                    placeholder={t('owner_house_complete_name')}
                    title={t('complete_name')}
                    required
                  />

                  <AuthInput
                    type="email"
                    name="email"
                    id="email_input"
                    placeholder={t('your_email')}
                    title={t('email')}
                    required
                  />

                  <AuthInput
                    type="text"
                    name="playerPrimaryBirthCountry_input"
                    id="playerPrimaryBirthCountry_input"
                    title={t('primary_nationality')}
                    placeholder={t('your_primary_nationality')}
                  />

                  <AuthInput
                    type="text"
                    name="playerBirthState_input"
                    id="playerBirthState_input"
                    title={t('state')}
                    placeholder={t('your_birth_state')}
                  />
                </Column>

                <Column>
                  <AuthInput
                    type="text"
                    name="playerBirthState_input"
                    id="playerBirthState_input"
                    title={t('state')}
                    placeholder={t('your_birth_state')}
                  />

                  <AuthInput
                    type="text"
                    name="playerBirthState_input"
                    id="playerBirthState_input"
                    title={t('state')}
                    placeholder={t('your_birth_state')}
                  />

                  <AuthInput
                    type="text"
                    name="playerBirthState_input"
                    id="playerBirthState_input"
                    title={t('state')}
                    placeholder={t('your_birth_state')}
                  />

                  <AuthInput
                    type="email"
                    name="email"
                    id="email_input"
                    placeholder={t('your_email')}
                    title={t('email')}
                    required
                  />

                  {/* <AuthButton
                    name="login_submit"
                    id="login_submit"
                    value={t('login')}
                  /> */}

                </Column>

              </Row>

            </AuthForm>
          </AuthContainer>
        </AuthWrapper>

      </Banner>
      <Slide items={s2tData.photos.benefits} title={t('others_t2s_benefits')} />

      <BannerSlide backgroundimagesrc="/assets/images/backgrounds/slider-bg-2.png" gradientdirection="to top">
        <VerticalMiniSlide title={t('events')} type="events" items={s2tData.events} />

        <VerticalSoloSlide title={t('social')} size="400px" items={s2tData.news} />

        <VerticalMiniSlide title={t('news')} type="news" items={s2tData.news} />
      </BannerSlide>

    </Styled.SolarContainer>
  );
}

Solar.propTypes = {
};
