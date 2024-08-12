import React, { useContext, useState } from 'react';
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
  const s2tContext = useContext(S2tContext);
  const { s2tState } = s2tContext;
  const { currentUser } = useAuth();

  const [menuVisibility, setMenuVisibility] = useState(false);

  return (
    <Styled.HomePage>
      <StandardHeader>
        <Logo size="150px" logo="/assets/images/pngs/logo.png" />
        {menuVisibility ? (
          <IconDiv name="Menu" onclick={() => setMenuVisibility(!menuVisibility)}>
            <CloseIcon />
          </IconDiv>
        ) : (
          <IconDiv name="Fechar menu" onclick={() => setMenuVisibility(!menuVisibility)}>
            <MenuIcon />
          </IconDiv>
        )}
        <Nav>
          <AuthDropdown id="languageOptions" placeholder="Escolha o idioma" options={s2tState.formOptions.language} />
          {currentUser ? (
            <>
              <Button
                path="/"
                text="Página principal"
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
                text="Minha área"
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
                text="Página principal"
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
                text="Login"
                newtab
                bgcolor={theme.colors.mediumblack}
                bghover={theme.colors.mediumblack}
                textcolor={theme.colors.white}
                texthover={theme.colors.primary}
                border={theme.colors.white}
                borderhover={theme.colors.primary}
              />
              <Button
                path="/register"
                text="Registre-se"
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
            placeholder="Escolha o idioma"
            options={s2tState.formOptions.language}
          />
          {currentUser ? (
            <>
              <Button
                path="/"
                text="Página principal"
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
                text="Minha área"
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
                text="Página principal"
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
                text="Login"
                newtab
                bgcolor={theme.colors.mediumblack}
                bghover={theme.colors.mediumblack}
                textcolor={theme.colors.white}
                texthover={theme.colors.primary}
                border={theme.colors.white}
                borderhover={theme.colors.primary}
              />
              <Button
                path="/register"
                text="Registre-se"
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
        <VerticalMiniSlide title="Eventos" type="events" items={s2tState.events || []} />
        <VerticalSoloSlide title="Social" size="400px" items={s2tState.news || []} />
        <VerticalMiniSlide title="Notícias" type="news" items={s2tState.news || []} />
      </BannerSlide>
      <GridLayout>
        <Button
          text="Profissional"
          bgcolor={theme.colors.black}
          textcolor={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.black}
          gradient
        />
        <Button
          text="Semi-Profissional"
          bgcolor={theme.colors.black}
          textcolor={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.black}
          gradient
        />
        <Button
          text="Universitário"
          bgcolor={theme.colors.black}
          textcolor={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.black}
          gradient
        />
        <Button
          text="Amador"
          bgcolor={theme.colors.black}
          textcolor={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.black}
          gradient
        />
        <Button
          text="Recreacional"
          bgcolor={theme.colors.black}
          textcolor={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.black}
          gradient
          active
        />
      </GridLayout>

      <Slide items={s2tState.photos?.usersType || []} />

      <BannerSlide title="Vídeos em alta" lazy backgroundimagesrc="/assets/images/backgrounds/slider-bg-2.png" backgroundfixed>
        <VerticalVideoSlide size="300px" items={s2tState.videos?.trending || []} title="Profissional" />
        <VerticalVideoSlide size="300px" items={s2tState.videos?.trending || []} title="Semi-profissional" />
        <VerticalVideoSlide size="300px" items={s2tState.videos?.trending || []} title="Universitário" />
        <VerticalVideoSlide size="300px" items={s2tState.videos?.trending || []} title="Amador" />
        <VerticalVideoSlide size="300px" items={s2tState.videos?.trending || []} title="Recreacional" />
      </BannerSlide>
      <Slide items={s2tState.photos?.benefits || []} title="Benefícios" />

      <MiniSlide type="partners" title="Parceiros e apoiadores" autoplay items={s2tState.partners || []} />
    </Styled.HomePage>
  );
}
