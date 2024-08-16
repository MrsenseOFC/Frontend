import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next'; // Hook do i18next para tradução
import { Close as CloseIcon } from '@styled-icons/material-outlined';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import * as Styled from './Home-Styles';
import { theme } from '../../styles/theme';
import { Nav } from '../../components/Nav/Nav';
import { Logo } from '../../components/elements/Logo/Logo';
import { StandardHeader } from '../../components/Headers/StandardHeader/StandardHeader';
import { BannerSlide } from '../../components/elements/BannerSlide/BannerSlide';
import { Button } from '../../components/elements/Button/Button';
import { S2tContext } from '../../contexts/s2tContext/S2tContext';
import { Slide } from '../../components/elements/Slide/Slide';
import { IconDiv } from '../../components/elements/IconDiv/IconDiv';
import { MobileNav } from '../../components/MobileNav/MobileNav';
import { GridLayout } from '../../components/GridLayout/GridLayout';
import { VerticalMiniSlide } from '../../components/elements/VerticalMiniSlide/VerticalMiniSlide';
import { VerticalSoloSlide } from '../../components/elements/VerticalSoloSlide/VerticalSoloSlide';
import { VerticalVideoSlide } from '../../components/elements/VerticalVideoSlide/VerticalVideoSlide';
import { AuthDropdown } from '../../components/elements/AuthElements/AuthDropdown/AuthDropdown';
import { MiniSlide } from '../../components/elements/MiniSlide/MiniSlide';
import { useAuth } from '../../contexts/AuthContext/AuthContext';

export function Home() {
  const { t, i18n } = useTranslation(); // Hook do i18next para tradução
  const s2tContext = useContext(S2tContext);
  const { s2tState } = s2tContext;
  const { currentUser } = useAuth();

  const [menuVisibility, setMenuVisibility] = useState(false);

  const languageOptions = [
    { value: 'pt', text: 'Português' },
    { value: 'en', text: 'Inglês' },
    { value: 'es', text: 'Espanhol' },
    { value: 'fr', text: 'Francês' },
  ];

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Muda o idioma no i18next
  };

  return (
    <Styled.HomePage>
      <StandardHeader>
        <Logo size="150px" logo="/assets/images/pngs/logo.png" />
        {menuVisibility ? (
          <IconDiv name={t('menu')} onclick={() => setMenuVisibility(!menuVisibility)}>
            <CloseIcon />
          </IconDiv>
        ) : (
          <IconDiv name={t('close_menu')} onclick={() => setMenuVisibility(!menuVisibility)}>
            <MenuIcon />
          </IconDiv>
        )}
        <Nav>
          <AuthDropdown
            id="languageOptions"
            placeholder={t('select_language')} // Traduz o placeholder
            options={languageOptions}
            onDropdownChange={handleLanguageChange} // Handler para mudar o idioma
            selectedvalue={i18n.language} // Valor selecionado atualmente
          />

          {currentUser ? (
            <>
              <Button
                path="/"
                text={t('home_page')} // Traduz o texto do botão
                bgcolor={theme.colors.mediumblack}
                bghover={theme.colors.black}
                textcolor={theme.colors.primary}
                texthover={theme.colors.primary}
                border={theme.colors.primary}
                borderhover={theme.colors.primary}
                active
              />
              <Button
                path="/player-dashboard"
                text={t('my_area')} // Traduz o texto do botão
                bgcolor={theme.colors.mediumblack}
                bghover={theme.colors.mediumblack}
                textcolor={theme.colors.white}
                texthover={theme.colors.primary}
                border={theme.colors.white}
                borderhover={theme.colors.primary}
              />
            </>
          ) : (
            <>
              <Button
                path="/"
                text={t('home_page')} // Traduz o texto do botão
                bgcolor={theme.colors.mediumblack}
                bghover={theme.colors.black}
                textcolor={theme.colors.primary}
                texthover={theme.colors.primary}
                border={theme.colors.primary}
                borderhover={theme.colors.primary}
                active
              />
              <Button
                path="/login"
                text={t('login')} // Traduz o texto do botão
                bgcolor={theme.colors.mediumblack}
                bghover={theme.colors.mediumblack}
                textcolor={theme.colors.white}
                texthover={theme.colors.primary}
                border={theme.colors.white}
                borderhover={theme.colors.primary}
              />
              <Button
                path="/register"
                text={t('register')} // Traduz o texto do botão
                bgcolor={theme.colors.mediumblack}
                bghover={theme.colors.mediumblack}
                textcolor={theme.colors.white}
                texthover={theme.colors.primary}
                border={theme.colors.white}
                borderhover={theme.colors.primary}
              />
            </>
          )}
        </Nav>
      </StandardHeader>
      {menuVisibility && (
        <MobileNav>
          <AuthDropdown
            id="languageOptions"
            placeholder={t('select_language')} // Traduz o placeholder
            options={languageOptions}
            onDropdownChange={handleLanguageChange}
            selectedvalue={i18n.language}
          />
          {currentUser ? (
            <>
              <Button
                path="/"
                text={t('home_page')}
                bgcolor={theme.colors.mediumblack}
                bghover={theme.colors.black}
                textcolor={theme.colors.primary}
                texthover={theme.colors.primary}
                border={theme.colors.primary}
                borderhover={theme.colors.primary}
                active
              />
              <Button
                path="/player-dashboard"
                text={t('my_area')}
                bgcolor={theme.colors.mediumblack}
                bghover={theme.colors.mediumblack}
                textcolor={theme.colors.white}
                texthover={theme.colors.primary}
                border={theme.colors.white}
                borderhover={theme.colors.primary}
              />
            </>
          ) : (
            <>
              <Button
                path="/"
                text={t('home_page')}
                bgcolor={theme.colors.mediumblack}
                bghover={theme.colors.black}
                textcolor={theme.colors.primary}
                texthover={theme.colors.primary}
                border={theme.colors.primary}
                borderhover={theme.colors.primary}
                active
              />
              <Button
                path="/login"
                text={t('login')}
                bgcolor={theme.colors.mediumblack}
                bghover={theme.colors.mediumblack}
                textcolor={theme.colors.white}
                texthover={theme.colors.primary}
                border={theme.colors.white}
                borderhover={theme.colors.primary}
              />
              <Button
                path="/register"
                text={t('register')}
                bgcolor={theme.colors.mediumblack}
                bghover={theme.colors.mediumblack}
                textcolor={theme.colors.white}
                texthover={theme.colors.primary}
                border={theme.colors.white}
                borderhover={theme.colors.primary}
              />
            </>
          )}
        </MobileNav>
      )}
      <BannerSlide backgroundimagesrc="/assets/images/backgrounds/slider-bg-1.png" backgroundfixed>
        <VerticalMiniSlide title={t('events')} type="events" items={s2tState.events || []} />
        <VerticalSoloSlide title={t('social')} size="400px" items={s2tState.news || []} />
        <VerticalMiniSlide title={t('opportunities')} type="proposals" items={s2tState.proposals.male.professional.agents || []} />
        <VerticalMiniSlide title={t('news')} type="news" items={s2tState.news || []} />
      </BannerSlide>

      <GridLayout>
        <Button
          text={t('professional')}
          bgcolor={theme.colors.black}
          textcolor={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.black}
          gradient
        />
        <Button
          text={t('semi_professional')}
          bgcolor={theme.colors.black}
          textcolor={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.black}
          gradient
        />
        <Button
          text={t('university')}
          bgcolor={theme.colors.black}
          textcolor={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.black}
          gradient
        />
        <Button
          text={t('amateur')}
          bgcolor={theme.colors.black}
          textcolor={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.black}
          gradient
        />
        <Button
          text={t('recreational')}
          bgcolor={theme.colors.black}
          textcolor={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.black}
          gradient
          active
        />
      </GridLayout>

      <Slide items={s2tState.photos?.usersType || []} />

      <BannerSlide title={t('trending_videos')} lazy backgroundimagesrc="/assets/images/backgrounds/slider-bg-2.png" backgroundfixed>
        <VerticalVideoSlide size="300px" items={s2tState.videos?.trending || []} title={t('professional')} />
        <VerticalVideoSlide size="300px" items={s2tState.videos?.trending || []} title={t('semi_professional')} />
        <VerticalVideoSlide size="300px" items={s2tState.videos?.trending || []} title={t('university')} />
        <VerticalVideoSlide size="300px" items={s2tState.videos?.trending || []} title={t('amateur')} />
        <VerticalVideoSlide size="300px" items={s2tState.videos?.trending || []} title={t('recreational')} />
      </BannerSlide>
      <Slide items={s2tState.photos?.benefits || []} title={t('benefits')} />

      <MiniSlide type="partners" title={t('partners_supporters')} autoplay items={s2tState.partners || []} />
    </Styled.HomePage>
  );
}
