import React, { useContext, useEffect, useState } from 'react';
import Prop from 'prop-types';
import { ImageAdd as AddImageIcon } from '@styled-icons/fluentui-system-filled';
import axios from 'axios';
import * as Styled from './ProfilePicture-Styles';
import { Button } from '../Button/Button';
import { theme } from '../../../styles/theme';
import { AuthIconFile } from '../AuthElements/AuthIconFile/AuthIconFile';
import { useAuth } from '../../../contexts/AuthContext/AuthContext.tsx';

export function ProfilePicture({
  badge = '', type = '', competitivecategory, ownerview,
}) {
  const { currentUser } = useAuth();
  const [profilePicture, setProfilePicture] = useState(currentUser?.profileImage || '');

  const handlePictureChange = async (event) => {
    if (!currentUser) {
      console.error('Usuário não está logado ou não possui um ID válido');
      return;
    }

    const newFile = event.target.files[0];
    if (newFile) {
      const formData = new FormData();
      formData.append('image_file', newFile);

      try {
        const response = await axios.post(
          `http://localhost:7320/api/userPhotos/${currentUser.id}/upload`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        );

        setProfilePicture(response.data.image_file);
      } catch (error) {
        console.error('Erro ao enviar a imagem:', error.response ? error.response.data : error.message);
      }
    }
  };

  useEffect(() => {
    setProfilePicture(currentUser?.profileImage || '');
  }, [currentUser]);

  return (
    <Styled.ProfilePictureContainer>
      <Styled.ProfilePictureElement>
        <Styled.Picture
          src={
            profilePicture
              ? `http://localhost:7320/uploads/${profilePicture}`
              : '/assets/images/logos/vertical-background.png'
          }
          alt="Foto de perfil do usuário"
        />
        {ownerview && (
          <Styled.Badge>
            <AuthIconFile
              id="changeProfilePicture"
              hovercolor={theme.colors.primary}
              name="Botão para alterar a foto do seu perfil"
              onChange={handlePictureChange}
            >
              <AddImageIcon />
            </AuthIconFile>
          </Styled.Badge>
        )}
      </Styled.ProfilePictureElement>
      {type && (
        <Button
          text={`${type}  ${competitivecategory || ''}`}
          bgcolor={theme.colors.secondary}
          bghover={theme.colors.secondary}
          textcolor={theme.colors.black}
          texthover={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.black}
        />
      )}
    </Styled.ProfilePictureContainer>
  );
}

ProfilePicture.propTypes = {
  competitivecategory: Prop.string,
  badge: Prop.string,
  type: Prop.string,
  ownerview: Prop.bool.isRequired,
};
