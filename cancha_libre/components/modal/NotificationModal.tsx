import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from "next/image";

import error from '../../assets/images/auth/modal/errorInfo.svg';
import info from '../../assets/images/auth/modal/info.svg';
import success from '../../assets/images/auth/modal/success.svg';
import warning from '../../assets/images/auth/modal/warning.svg';
import { COLOR_BUTTON_MODAL, COLOR_TITLE_MODAL, KEY_CODE_MODAL, LEVEL_MODAL, STATE_ANIMATION } from '@/utils/constant/modals';
import {
  ContainerButtons,
  ContainerModalImgInfo,
  ModalBackground, ModalButtonCancel, ModalButtonSubmit, ModalContainer, ModalSize, ModalTitleParagraph, ModalTitleParagraphAnimation, StyleBody,
} from "./notificationModal.style";

const NotificationModal = ({
  isOpen,
  level,
  title,
  body,
  onClick,
  onClose,
  labelOnClick,
  labelOnClose,
  setClose,
  stateAnimation,
}: any) => {
  const [element] = useState(document.createElement('div'));

  console.log('isOpen', isOpen)

  const stylesModal = useMemo(() => {
    if (level && level === LEVEL_MODAL.error) {
      return {
        iconModal: error,
        colorTitle: COLOR_TITLE_MODAL.error,
        colorButton: COLOR_BUTTON_MODAL.error,
      };
    }
    if (level === LEVEL_MODAL.info) {
      return {
        iconModal: info,
        colorTitle: COLOR_TITLE_MODAL.info,
        colorButton: COLOR_BUTTON_MODAL.info,
      };
    }
    if (level === LEVEL_MODAL.success) {
      return {
        iconModal: success,
        colorTitle: COLOR_TITLE_MODAL.success,
        colorButton: COLOR_BUTTON_MODAL.success,
      };
    }
    if (level === LEVEL_MODAL.warning) {
      return {
        iconModal: warning,
        colorTitle: COLOR_TITLE_MODAL.warning,
        colorButton: COLOR_BUTTON_MODAL.warning,
      };
    }
    return {
      iconModal: warning,
      colorTitle: COLOR_TITLE_MODAL.info,
      colorButton: COLOR_BUTTON_MODAL.info,
    };
  }, [level]);

  const closeModal = (e: any) => {
    if (e.key === KEY_CODE_MODAL.esc && level === LEVEL_MODAL.warning) {
      e.preventDefault();
      setClose(!isOpen);
    } else if (
      (e.key === KEY_CODE_MODAL.esc || e.key === KEY_CODE_MODAL.enter) &&
      (level === LEVEL_MODAL.success || level === LEVEL_MODAL.error || level === LEVEL_MODAL.info)
    ) {
      e.preventDefault();
      setClose(!isOpen);
    }
  };

  useEffect(() => {
    // if (isOpen) {
      console.log("Se suscribe al evento de teclado");
      document.addEventListener('keydown', (e) => closeModal(e));
      const handleKeyDown = (e: any) => closeModal(e);
      document.addEventListener('keydown', handleKeyDown);
    
      return () => {
        console.log("Se desuscribe del evento de teclado");
        document.removeEventListener('keydown', handleKeyDown);
      };
  }, [closeModal, isOpen, level]);

  useEffect(() => {
    const modalRoot = document.getElementById('overlay-root');
    if (!modalRoot) {
      const modalRoot = document.createElement('div');
      modalRoot.setAttribute('id', 'overlay-root');
      document.body.appendChild(modalRoot);
    }
    modalRoot && modalRoot.appendChild(element);
    return () => {
      modalRoot?.removeChild(element);
    };
  }, [element]);

  const modalStructure = () =>
    isOpen ? (
      <ModalBackground role="presentation">
        <ModalContainer>
          <ModalSize>
            {level !== LEVEL_MODAL.animation ? (
              <>
                <ContainerModalImgInfo>
                  <Image src={stylesModal.iconModal} alt={"iconModal"} />
                </ContainerModalImgInfo>
                <div>
                  <div>
                    <ModalTitleParagraph style={{ color: stylesModal.colorTitle }}>{title}</ModalTitleParagraph>
                  </div>
                  <div>
                    <div>
                      <StyleBody>{body}</StyleBody>
                    </div>
                    <ContainerButtons>
                      {labelOnClose && (
                        <ModalButtonCancel
                          onClick={onClose ? () => onClose() : () => setClose(!isOpen)}
                        >
                          {labelOnClose}
                        </ModalButtonCancel>
                      )}
                      <ModalButtonSubmit
                        onClick={onClick ? () => onClick() : () => setClose(!isOpen)}
                        style={{ backgroundColor: stylesModal.colorButton }}
                      >
                        {labelOnClick || 'aceptar'}
                      </ModalButtonSubmit>
                    </ContainerButtons>
                  </div>
                </div>
              </>
            ) : (
              <div>
                <div data-testid="deleteModalTitle">
                  <ModalTitleParagraphAnimation style={{ color: stylesModal.colorTitle }}>{title}</ModalTitleParagraphAnimation>
                </div>
                <ContainerModalImgInfo>
                  <div
                    className={
                      stateAnimation === STATE_ANIMATION.loading
                        ? 'animation-gif-loading'
                        : stateAnimation === STATE_ANIMATION.success
                        ? 'animation-gif-success'
                        : 'animation-gif-error'
                    }
                  />
                </ContainerModalImgInfo>
                <div>
                  <div>
                    <StyleBody>{body}</StyleBody>
                  </div>
                  <ContainerButtons>
                    <ModalButtonSubmit
                      onClick={onClick ? () => onClick() : () => setClose(!isOpen)}
                      disabled={stateAnimation === STATE_ANIMATION.loading}
                    >
                      {labelOnClick || 'Cancelar'}
                    </ModalButtonSubmit>
                  </ContainerButtons>
                </div>
              </div>
            )}
          </ModalSize>
        </ModalContainer>
      </ModalBackground>
    ) : null;

  return createPortal(modalStructure(), element);
};

export default NotificationModal;
