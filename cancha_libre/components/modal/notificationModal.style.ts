import styled from "styled-components";

export const ModalBackground = styled.div`
  background: #00000040;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2000;
  position: absolute;
`;

export const ModalContainer = styled.div`
  opacity: 1;
  visibility: visible;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  font-family: sans-serif;
  height: 100%;
  justify-content: center;
  padding: 0 10px;
  position: fixed;
  transition: all 300ms;
  width: 100%;
  z-index: 4;
`;

export const ModalSize = styled.div`
  width: 350px;
  height: auto;
  visibility: visible;
  opacity: 1;
  border-radius: 25px;
  background: #fff;
`;

export const ContainerModalImgInfo = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
`;

export const ModalTitle = styled.div`
  margin-top: 10px;
  border-radius: 25px 25px 0 0;
  padding: 1px 30px;
  display: flex;
  justify-content: center;
`;

export const ModalTitleParagraph = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.25px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;

`;

export const ModalTitleParagraphAnimation = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.25px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 17px;

`;

export const StyleBody = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #33558B;
`;

export const AnimationGifLoading = styled.div`
  width: var(--width);
  height: var(--height);
  background: url('../../assets/images/auth/modal/animationLoading.gif') 50% 50% no-repeat;
`;

export const AnimationGifSuccess = styled.div`
  width: var(--width);
  height: var(--height);
  background: url('../../assets/images/auth/modal/animationSuccess.gif') 50% 50% no-repeat;
`;

export const AnimationGifError = styled.div`
  width: var(--width);
  height: var(--height);
  background: url('../../assets/images/auth/modal/animationError.gif') 50% 50% no-repeat;
`;

export const ContainerButtons = styled.div`
  margin-top: 55px;
  display: flex;
  justify-content: space-around;
`;

export const ModalButtonCancel = styled.button`
  width: 119px;
  height: 30px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  color: #9f9f9f;
  font-size: 10px;
  line-height: 15px;
  text-align: center;
  cursor: pointer;
  border-radius: 9px;
  border: none;
  margin: 2rem;
`;

export const ModalButtonSubmit = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 7px 19px;
  gap: 10px;
  width: auto;
  height: 29px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  color: #ffffff;
  justify-content: center;
  border-width: 0px;
  border-radius: 9px;
  margin: 2rem;
`;