import Prop from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import * as Styled from './ReportModal-Styles';
import { AuthDropdown } from '../AuthElements/AuthDropdown/AuthDropdown';
import { IconDiv } from '../IconDiv/IconDiv';
import { Subtitle } from '../Subtitle/Subtitle';
import { Column } from '../../ColumnContainer/Column';
import { TextArea } from '../TextArea/TextArea';
import { AuthForm } from '../AuthElements/AuthForm/AuthForm';
import { AuthButton } from '../AuthElements/AuthButton/AuthButton';
import { Row } from '../../RowContainer/Row';
import { theme } from '../../../styles/theme';
import { Popup } from '../Popup/Popup';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';
import { FloatingMenu } from '../../FloatingMenu/FloatingMenu';
import { reportMedia } from '../../../contexts/s2tContext/s2tActions';
import { S2tContext } from '../../../contexts/s2tContext/S2tContext';

export function ReportModal({ onclick, id }) {
  const [reported, setReported] = useState(false);

  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const [reportData, setReportData] = useState({
    mediaId: '',
    reportReason: '',
    reportDetails: '',
  });

  useEffect(() => {
    setReportData((prevData) => ({ ...prevData, mediaId: id }));
  }, [id]);

  const handleEndReport = () => {
    // Seta o reported de volta para false para quando o componente ser chamado de novo ele estar resetado
    setReported(false);

    // disparada a função recebida na prop
    onclick();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (reportData.reportReason) {
      reportMedia(s2tDispatch, reportData);
      setReported(!reported);
      setReportData({
        mediaId: '',
        reportReason: '',
        reportDetails: '',
      });
    }
  };

  return (
    <>
      {id && (
        <FloatingMenu>
          <Styled.ReportModalElement>
            {!reported && (
            <>
              <Row>
                <Subtitle text="Reportar" uppercase size={theme.sizes.xxlarge} />

                <IconDiv
                  onclick={onclick}
                  name="Fechar"
                  hovercolor={theme.colors.red}
                >
                  <CloseIcon />
                </IconDiv>

              </Row>

              <AuthForm onSubmit={handleSubmit}>
                <AuthDropdown
                  title="Por qual motivo está reportando essa foto ou vídeo?"
                  id="competitiveCategory"
                  placeholder="Escolha o motivo"
                  options={s2tState.formOptions.reportMedia}
                  onDropdownChange={(option) => setReportData((prevData) => ({ ...prevData, reportReason: option }))}
                  required
                />

                <Column>
                  <TextArea
                    placeholder="Insira mais detalhes sobre o motivo (Opcional)"
                    info="reportDetails"
                    name="reportDetails"
                    onChange={(e) => setReportData((prevData) => ({ ...prevData, reportDetails: e.target.value }))}
                  />
                </Column>

                {reportData.reportReason && (
                <AuthButton
                  name="report_submit"
                  id="report_submit"
                  value="Confirmar"
                />
                )}

              </AuthForm>
            </>
            )}

            {reported && (
            <>
              <Text text="Recebemos a sua denúncia!" uppercase />
              <Text text="Obrigado por nos ajudar a manter nossa plataforma segura e livre de conteúdo impróprio. Sua denúncia será cuidadosamente analisada por nossa equipe. " />
              <Button
                text="Fechar"
                bgcolor={theme.colors.secondary}
                bghover={theme.colors.quaternary}
                textcolor={theme.colors.white}
                texthover={theme.colors.white}
                border={theme.colors.white}
                borderhover={theme.colors.white}
                onclick={handleEndReport}
              />
            </>
            )}

          </Styled.ReportModalElement>
        </FloatingMenu>
      )}
    </>
  );
}

ReportModal.propTypes = {
  onclick: Prop.func,
  id: Prop.oneOfType([Prop.string, Prop.number]),
};
