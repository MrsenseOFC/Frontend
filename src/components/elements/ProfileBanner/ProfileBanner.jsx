import Prop from 'prop-types';
import React, { useState } from 'react';
import { ImageAdd as AddImageIcon } from '@styled-icons/fluentui-system-filled';
import axios from 'axios';
import * as Styled from './ProfileBanner-Styles';
import { AuthIconFile } from '../AuthElements/AuthIconFile/AuthIconFile';
import { theme } from '../../../styles/theme';
import { Button } from '../Button/Button';
import { Nav } from '../../Nav/Nav';
import { useAuth } from '../../../contexts/AuthContext/AuthContext';

export function ProfileBanner({ backgroundimagesrc, children, ownerview }) {
  const { currentUser } = useAuth();
  const [bannerPicture, setBannerPicture] = useState(currentUser?.profileImage || '');

  const handleBannerChange = async (event) => {
    if (!currentUser) {
      console.error('Usuário não está logado ou não possui um ID válido');
      return;
    }

    const newFile = event.target.files[0];
    console.log(newFile);

    if (newFile) {
      const formData = new FormData();
      formData.append('image_file', newFile);

      try {
        const response = await axios.post(`https://talent2show.onrender.com/api/userPhotos/${currentUser.id}/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        setBannerPicture(response.data.image_file);
      } catch (error) {
        console.error('Erro ao enviar a imagem:', error);
      }
    }
  };

  // useEffect(() => {
  //   setProfilePicture(currentUser?.profileImage || '');
  // }, [currentUser]);

  return (
    <Styled.ProfileBannerWrapper backgroundimagesrc={backgroundimagesrc}>

      <Styled.ProfileBannerContainer>
        {children}
      </Styled.ProfileBannerContainer>

      {ownerview && (
        <AuthIconFile
          id="changeBannerPicture"
          name="Botão para alterar o banner do seu perfil"
          hovercolor={theme.colors.primary}
          onChange={handleBannerChange}
        >
          <AddImageIcon />
        </AuthIconFile>
      )}

    </Styled.ProfileBannerWrapper>
  );
}

ProfileBanner.propTypes = {
  children: Prop.node.isRequired,
  ownerview: Prop.bool,
  backgroundimagesrc: Prop.string,
};
