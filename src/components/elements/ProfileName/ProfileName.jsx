import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import * as Styled from './ProfileName-Styles';

export function ProfileName() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
          throw new Error(t('token_not_found'));
        }

        const response = await axios.get('https://talent2show.onrender.com/api/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data && response.data.username) {
          setUsername(response.data.username);
        } else {
          console.error(t('username_not_found_response'), response.data);
          setError('Username not found');
        }
      } catch (error) {
        if (error.response) {
          // Server responded with a status other than 200 range
          console.error(t('error_response_server'), error.response);
          setError(`Error: ${error.response.status} - ${error.response.data.message || 'Internal Server Error'}`);
        } else if (error.request) {
          // Request was made but no response received
          console.error(t('no_response'), error.request);
          setError('No response from server');
        } else {
          // Something else happened while setting up the request
          console.error(t('error_setting_request'), error.message);
          setError('Error setting up request');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsername();
  }, []); // Runs only once after the component mounts

  if (loading) {
    return <Styled.ProfileNameElement>Loading...</Styled.ProfileNameElement>;
  }

  if (error) {
    return (
      <Styled.ProfileNameElement>
        Error:
        {error}
      </Styled.ProfileNameElement>
    );
  }

  return (
    <Styled.ProfileNameElement>
      <Styled.Name>{username}</Styled.Name>
    </Styled.ProfileNameElement>
  );
}
