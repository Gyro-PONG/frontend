import styled from 'styled-components';

import ModalPortal from 'src/ModalPortal';

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.black50};
  z-index: 900;
`;

interface Props {
  children: React.ReactNode;
  disableBackgroundExit?: boolean;
  setShowModal?: (value: boolean) => void;
}

const Modal = ({
  children,
  setShowModal,
  disableBackgroundExit = false,
}: Props) => {
  const handleBackgroundClick = () => {
    if (disableBackgroundExit) return;
    setShowModal && setShowModal(false);
  };

  return (
    <ModalPortal>
      <Background onClick={handleBackgroundClick}>{children}</Background>
    </ModalPortal>
  );
};

export default Modal;
