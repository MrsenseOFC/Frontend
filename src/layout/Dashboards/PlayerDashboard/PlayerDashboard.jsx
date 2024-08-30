import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Settings as SettingsIcon, Share } from '@styled-icons/fluentui-system-filled';
import { Close as CloseIcon } from '@styled-icons/material-outlined';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { useTranslation } from 'react-i18next';
import * as Styled from './PlayerDashboard-Styles';
import { PlayerContext } from '../../../contexts/userContext/PlayerProvider/PlayerContext';
import { theme } from '../../../styles/theme';

import { ProfilePicture } from '../../../components/elements/ProfilePicture/ProfilePicture';
import { Slide } from '../../../components/elements/Slide/Slide';
import { ProfileName } from '../../../components/elements/ProfileName/ProfileName';
import { ProfileHeader } from '../../../components/ProfileHeader/ProfileHeader';
import { Button } from '../../../components/elements/Button/Button';
import { MobileMenu } from '../../../components/MobileMenu/MobileMenu';
import { FloatingIcon } from '../../../components/elements/FloatingIcon/FloatingIcon';
import { ProfileBanner } from '../../../components/elements/ProfileBanner/ProfileBanner';
import { Column } from '../../../components/ColumnContainer/Column';
import { PlayerNav } from '../../../components/ProfileHeader/Components/PlayerNav/PlayerNav';
import { PlayerMenu } from '../../../components/MobileMenu/Components/PlayerMenu/PlayerMenu';
import { IconDiv } from '../../../components/elements/IconDiv/IconDiv';
import { Row } from '../../../components/RowContainer/Row';
import { FloatingMenu } from '../../../components/FloatingMenu/FloatingMenu';
import { SettingsMenu } from '../../../components/FloatingMenu/Components/SettingsMenu/SettingsMenu';
import { FloatingHeader } from '../../../components/Headers/FloatingHeader/FloatingHeader';
import { Nav } from '../../../components/Nav/Nav';
import { MobileNav } from '../../../components/MobileNav/MobileNav';
import { ShareMenu } from '../../../components/FloatingMenu/Components/ShareMenu/ShareMenu';

export function PlayerDashboard() {
  const { t } = useTranslation();
  const playerContext = useContext(PlayerContext);
  const { playerState, playerDispatch } = playerContext;
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [mobileHeader, setMobileHeader] = useState(false);
  const [settingsMenuVisibility, setSettingsMenuVisibility] = useState(false);
  const [shareMenuVisibility, setShareMenuVisibility] = useState(false);

  const handleShareMenuVisibility = () => {
    setShareMenuVisibility(!shareMenuVisibility);
    setSettingsMenuVisibility(false);
  };

  const handleSettingsMenuVisibility = () => {
    setSettingsMenuVisibility(!settingsMenuVisibility);
    setShareMenuVisibility(false);
  };

  return (
    <Styled.PlayerDashboardContainer>

      <FloatingHeader>

        <Nav>
          <Button
            path="/"
            text={t('home_page')}
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.white}
            texthover={theme.colors.primary}
            border={theme.colors.white}
            borderhover={theme.colors.primary}
          />

          <Button
            path="/player-dashboard"
            text={t('my_area')}
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.black}
            textcolor={theme.colors.primary}
            texthover={theme.colors.primary}
            border={theme.colors.primary}
            borderhover={theme.colors.primary}
            active
          />

          <Button
            path="/benefits"
            text={t('benefits')}
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.white}
            texthover={theme.colors.primary}
            border={theme.colors.white}
            borderhover={theme.colors.primary}
          />
        </Nav>

        {mobileHeader ? (
          <IconDiv name={t('menu')} onclick={() => setMobileHeader(!mobileHeader)}>
            <CloseIcon />
          </IconDiv>
        ) : (
          <IconDiv name={t('close_menu')} onclick={() => setMobileHeader(!mobileHeader)}>
            <MenuIcon />
          </IconDiv>
        ) }

      </FloatingHeader>

      {mobileHeader && (
      <FloatingMenu>
        <Button
          path="/"
          text={t('home_page')}
          bgcolor={theme.colors.mediumblack}
          bghover={theme.colors.mediumblack}
          textcolor={theme.colors.white}
          texthover={theme.colors.primary}
          border={theme.colors.white}
          borderhover={theme.colors.primary}
        />

        <Button
          path="/player-dashboard"
          text={t('my_area')}
          bgcolor={theme.colors.mediumblack}
          bghover={theme.colors.black}
          textcolor={theme.colors.primary}
          texthover={theme.colors.primary}
          border={theme.colors.primary}
          borderhover={theme.colors.primary}
          active
        />

        <Button
          path="/benefits"
          text={t('benefits')}
          bgcolor={theme.colors.mediumblack}
          bghover={theme.colors.mediumblack}
          textcolor={theme.colors.white}
          texthover={theme.colors.primary}
          border={theme.colors.white}
          borderhover={theme.colors.primary}
        />

      </FloatingMenu>

      )}

      <ProfileBanner backgroundimagesrc={playerState.profile.banner.backgroundImageSrc} ownerview>
        <ProfilePicture
          imagesrc={playerState.profile.banner.profileImageSrc}
          badge={playerState.profile.banner.badge}
          type={playerState.profile.info.profileType}
          ownerview
        />

        <ProfileName name={playerState.profile.banner.name} />

        <Row>
          <Button
            path="profile-edit"
            text={t('edit_profile')}
            bgcolor={theme.colors.primary}
            bghover={theme.colors.black}
            textcolor={theme.colors.black}
            texthover={theme.colors.primary}
            border={theme.colors.black}
            borderhover={theme.colors.primary}
          />
          <IconDiv
            active={settingsMenuVisibility}
            hovercolor={theme.colors.primary}
            name={t('settings')}
            onclick={handleSettingsMenuVisibility}
          >
            <SettingsIcon />
          </IconDiv>

          <IconDiv
            active={shareMenuVisibility}
            hovercolor={theme.colors.primary}
            name={t('share')}
            onclick={handleShareMenuVisibility}
          >
            <Share />
          </IconDiv>

          {settingsMenuVisibility && (
          <FloatingMenu onclick={() => setSettingsMenuVisibility(false)}>
            <SettingsMenu />
          </FloatingMenu>
          )}

          {shareMenuVisibility && (
          <FloatingMenu onclick={() => setShareMenuVisibility(false)}>
            <ShareMenu />
          </FloatingMenu>
          )}
        </Row>

      </ProfileBanner>

      <ProfileHeader>
        <PlayerNav />
      </ProfileHeader>

      {menuVisibility ? (
        <MobileMenu onclick={() => setMenuVisibility(!menuVisibility)}>
          <PlayerMenu />
        </MobileMenu>
      ) : (
        <FloatingIcon name={t('menu')} onclick={() => setMenuVisibility(!menuVisibility)}>
          <MenuIcon />
        </FloatingIcon>
      )}

      <Column color={theme.colors.black}>
        <Outlet />
      </Column>

      <Slide items={playerState.benefits} title={t('my_benefits')} />

    </Styled.PlayerDashboardContainer>
  );
}
