import { useEffect } from 'react';

import styled from 'styled-components';

import { EVENT } from 'src/constants/socketEvent';
import { useUserStore } from 'src/store/user';
import { s_ConnectControllerCallback, socket } from 'src/utils/socketAPI';

import useCopyStatus from '@pages/Settings/hooks/useCopyStatus';
import { Step } from '@pages/Settings/types/step';
import { copyToClipboard } from '@pages/Settings/utils/copyToClipboard';
import { getControllerUrl } from '@pages/Settings/utils/getControllerUrl';

import Button from '@components/Button/Button';
import Qrcode from '@components/Qrcode/Qrcode';
import Title from '@components/Title/Title';

const LayoutBase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  .messageArea {
    font-size: 2rem;
  }

  .buttonArea {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`;

interface Props {
  setShowModal: (value: boolean) => void;
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

const Connection = ({ setShowModal, setStep }: Props) => {
  const socketId = useUserStore((state) => state.socketId);
  const setControllerSocketId = useUserStore(
    (state) => state.setControllerSocketId,
  );

  const { copyStatus, setCopyStatus } = useCopyStatus();

  const handleCopyButtonClick = async () => {
    try {
      await copyToClipboard(getControllerUrl(socketId));
      setCopyStatus('success');
    } catch (error) {
      setCopyStatus('fail');
    }
  };

  useEffect(() => {
    socket.on(EVENT.CONNECT_CONTROLLER_SUCCESS, (controllerId: string) => {
      setControllerSocketId(controllerId);
      s_ConnectControllerCallback();
      setStep('sync');
    });

    return () => {
      socket.off(EVENT.CONNECT_CONTROLLER_SUCCESS);
    };
  }, [setStep, setControllerSocketId]);

  return (
    <LayoutBase>
      <Title size="sm">모바일 기기를 연결해주세요</Title>
      <div className="messageArea">
        {copyStatus === 'idle' ? (
          <p>QR코드나 링크를 통해 모바일 기기를 연결할 수 있습니다</p>
        ) : copyStatus === 'success' ? (
          <p>링크가 복사되었습니다</p>
        ) : (
          <p>링크 복사에 실패하였습니다</p>
        )}
      </div>
      <Qrcode link={getControllerUrl(socketId)} size={250} />
      <div className="buttonArea">
        <Button size="sm" onClick={handleCopyButtonClick}>
          링크 복사하기
        </Button>
        <Button size="sm" onClick={() => setShowModal(false)}>
          나가기
        </Button>
      </div>
    </LayoutBase>
  );
};

export default Connection;
