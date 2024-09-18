import Prop from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Styled from './AcceptableUse-Styles';
import { Text } from '../../../../components/elements/Text/Text';
import { Title } from '../../../../components/elements/Title/Title';
import { Subtitle } from '../../../../components/elements/Subtitle/Subtitle';
import { Column } from '../../../../components/ColumnContainer/Column';
import { StyledLink } from '../../../../components/elements/StyledLink/StyledLink';
import { theme } from '../../../../styles/theme';

export function AcceptableUse({ children }) {
  const { t } = useTranslation();

  return (
    <Styled.AcceptableUseWrapper>
      <Styled.AcceptableUseContainer>

        <Title text={t('acceptable_use_police_title')} uppercase />

        <Column>
          <Text>
            {t('acceptable_use_police_text_1')}
            {' '}
            <StyledLink text={t('acceptable_use_police_link_1')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
            {' '}
            {t('acceptable_use_police_text_2')}
            {' '}
          </Text>

          <Text>
            {t('acceptable_use_police_text_3')}
            {' '}
            <StyledLink text={t('acceptable_use_police_link_2')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
            {' '}
            {t('acceptable_use_police_text_4')}
            {' '}
          </Text>
        </Column>

        <Column>
          <Subtitle text={t('no_security_violations_title')} as="h3" uppercase />
          <Text text={t('no_security_violations_text_1')} />
        </Column>

        <Column>
          <Subtitle text={t('no_security_violations_subtitle_1')} as="h4" />
          <Text text={t('no_security_violations_text_2')} />
        </Column>

        <Column>
          <Subtitle text={t('no_security_violations_subtitle_2')} as="h4" />
          <Text text={t('no_security_violations_text_3')} />
        </Column>

        <Column>
          <Subtitle text={t('no_security_violations_subtitle_3')} as="h4" />
          <Text text={t('no_security_violations_text_4')} />
        </Column>

        <Column>
          <Subtitle text={t('no_network_abuse_title')} as="h3" uppercase />
          <Text text={t('no_network_abuse_text_1')} />
        </Column>

        <Column>
          <Subtitle text={t('no_network_abuse_subtitle_1')} as="h4" />
          <Text text={t('no_network_abuse_text_2')} />
        </Column>

        <Column>
          <Subtitle text={t('no_network_abuse_subtitle_2')} as="h4" />
          <Text text={t('no_network_abuse_text_3')} />
        </Column>

        <Column>
          <Subtitle text={t('no_network_abuse_subtitle_3')} as="h4" />
          <Text text={t('no_network_abuse_text_4')} />
        </Column>

        <Column>
          <Subtitle text={t('no_network_abuse_subtitle_4')} as="h4" />
          <Text text={t('no_network_abuse_text_5')} />
        </Column>

        <Column>
          <Subtitle text={t('no_network_abuse_subtitle_5')} as="h4" />
          <Text text={t('no_network_abuse_text_6')} />
        </Column>

        <Column>
          <Subtitle text={t('authorized_use_title')} as="h3" uppercase />
          <Text text={t('authorized_use_text_1')} />
        </Column>

        <Column>
          <Subtitle text={t('monitoring_enforcement_title')} as="h3" uppercase />
          <Text text={t('monitoring_enforcement_text_1')} />
          <Text text={t('monitoring_enforcement_text_2')} />
          <Text text={t('monitoring_enforcement_text_3')} />
          <Text text={t('monitoring_enforcement_text_4')} />
          <Text>
            {t('monitoring_enforcement_text_5')}
            {' '}
            <StyledLink text={t('monitoring_enforcement_link_1')} color={theme.colors.lightprimary} hovercolor={theme.colors.primary} />
            {' '}
          </Text>
          <Text text={t('monitoring_enforcement_text_6')} />
          <Text text={t('monitoring_enforcement_text_7')} />
        </Column>

        <Column>
          <Subtitle text={t('reporting_violations_policy_title')} as="h3" uppercase />
          <Text text={t('reporting_violations_policy_text_1')} />
          <Text text={t('reporting_violations_policy_text_2')} />
          <Text text={t('reporting_violations_policy_text_3')} />
        </Column>

      </Styled.AcceptableUseContainer>
    </Styled.AcceptableUseWrapper>
  );
}

AcceptableUse.propTypes = {
  children: Prop.node,
};
