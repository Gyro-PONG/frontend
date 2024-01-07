import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { EVENT } from 'src/constants/socketEvent';
import { useUserStore } from 'src/store/user';
import {
  s_AngleInfo,
  s_DisconnectByUser,
  s_ResetAngle,
  socket,
} from 'src/utils/socketAPI';

import Button from '@components/Button/Button';
import Title from '@components/Title/Title';

import { Step } from '../../../types/step';

const LayoutBase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  .messageArea {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.75rem;
  }

  .buttonArea {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`;

type Angle = { left: number; right: number };
interface Props {
  setShowModal: (value: boolean) => void;
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

const Status = ({ setShowModal, setStep }: Props) => {
  const clear = useUserStore((state) => state.clear);

  const [angle, setAngle] = useState<Angle>({ left: 0, right: 0 });

  const handleDisconnectButtonClick = () => {
    s_DisconnectByUser();
    clear();
  };

  const handleResetButtonClick = () => {
    s_ResetAngle();
    setStep('reset');
  };

  useEffect(() => {
    s_AngleInfo();

    socket.on(EVENT.ANGLE_INFO, (angle: Angle) => {
      setAngle({ left: angle.left, right: angle.right });
    });

    return () => {
      socket.off(EVENT.ANGLE_INFO);
    };
  }, []);

  return (
    <LayoutBase>
      <Title size="sm">연결 정보</Title>
      <div className="messageArea">
        <p>모바일 기기와 연결되어 있습니다</p>
        <p>
          좌측 기울기: {angle.left}, 우측 기울기: {angle.right}
        </p>
      </div>
      <div className="buttonArea">
        <Button size="sm" onClick={handleResetButtonClick}>
          재설정 하기
        </Button>
        <Button size="sm" onClick={handleDisconnectButtonClick}>
          연결 끊기
        </Button>
        <Button size="sm" onClick={() => setShowModal(false)}>
          나가기
        </Button>
      </div>
    </LayoutBase>
  );
};

export default Status;
