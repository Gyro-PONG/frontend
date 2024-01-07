import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { EVENT } from 'src/constants/socketEvent';
import { s_CloseAngleCheck, socket } from 'src/utils/socketAPI';

import Button from '@components/Button/Button';
import Title from '@components/Title/Title';

import hold from '/assets/images/hold.webp';
import left from '/assets/images/left.webp';
import okay from '/assets/images/okay.webp';
import right from '/assets/images/right.webp';

import type { Step } from '../../../types/step';

const LayoutBase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  .messageArea {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.75rem;

    & > .alert {
      position: absolute;
      top: 110%;
      font-size: 1rem;
    }
  }

  .imageArea {
    height: 40%;

    & > img {
      height: 100%;
    }
  }

  .buttonArea {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

interface Props {
  setShowModal: (value: boolean) => void;
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

type Stage = 'info' | 'left' | 'right' | 'finish';
type Angle = { left: number; right: number };

const Reset = ({ setShowModal }: Props) => {
  const [stage, setState] = useState<Stage>('info');
  const [angle, setAngle] = useState<Angle>({ left: 0, right: 0 });
  const [beta, setBeta] = useState(0);

  const handleCloseButtonClick = () => {
    s_CloseAngleCheck();
    setShowModal(false);
  };

  useEffect(() => {
    socket.on(EVENT.LEFT_ANGLE_CHECK, () => {
      setState('left');
    });

    socket.on(EVENT.RIGHT_ANGLE_CHECK, () => {
      setState('right');
    });

    socket.on(EVENT.FINISH_ANGLE_CHECK, (angle: Angle) => {
      setState('finish');
      setAngle(angle);
    });

    socket.on(EVENT.SEND_BETA, (beta: number) => {
      setBeta(beta);
    });

    return () => {
      socket.off(EVENT.LEFT_ANGLE_CHECK);
      socket.off(EVENT.RIGHT_ANGLE_CHECK);
      socket.off(EVENT.FINISH_ANGLE_CHECK);
      socket.off(EVENT.SEND_BETA);
    };
  }, [setShowModal]);

  return (
    <LayoutBase>
      {stage === 'info' && (
        <>
          <Title size="sm">기울임 각도를 재설정합니다</Title>
          <div className="messageArea">
            <p>기울임 각도를 재조정합니다</p>
            <p>양손으로 기기를 잡은 다음 기기 내 설정하기 버튼을 눌러주세요</p>
            <p>반드시 기기의 상단이 왼쪽을 향해야 합니다</p>
          </div>
          <div className="imageArea">
            <img src={hold} />
          </div>
          <div className="buttonArea">
            <Button size="sm" onClick={handleCloseButtonClick}>
              나가기
            </Button>
          </div>
        </>
      )}
      {stage === 'left' && (
        <>
          <Title size="xs">기기를 왼쪽으로 기울여 주세요</Title>
          <div className="messageArea">
            <p>움직이기 편한 각도까지 기기를 왼쪽으로 기울여 주세요</p>
            <p>그 상태로 다음 버튼을 눌러주세요</p>
            <p>측정값: {beta}</p>
            {beta >= 0 && (
              <p className="alert">
                기기를 왼쪽으로 기울여 주세요. 기기의 상단이 왼쪽에 있는지
                확인해주세요.
              </p>
            )}
          </div>
          <div className="imageArea">
            <img src={left} />
          </div>
        </>
      )}
      {stage === 'right' && (
        <>
          <Title size="xs">기기를 오른쪽으로 기울여 주세요</Title>
          <div className="messageArea">
            <p>최대한 기울일 수 있을 때까지 기기를 오른쪽으로 기울여 주세요</p>
            <p>기기를 기울인 상태로 다음 버튼을 눌러주세요</p>
            <p>측정값: {beta}</p>
            {beta <= 0 && (
              <p className="alert">
                기기를 오른쪽으로 기울여 주세요. 기기의 상단이 왼쪽에 있는지
                확인해주세요.
              </p>
            )}
          </div>
          <div className="imageArea">
            <img src={right} />
          </div>
        </>
      )}
      {stage === 'finish' && (
        <>
          <Title size="xs">설정이 완료되었습니다</Title>
          <div className="messageArea">
            <p>이제 게임을 시작할 수 있습니다</p>
            <p>
              좌측 기울기: {angle.left}, 우측 기울기: {angle.right}
            </p>
            <p>하단의 나가기 버튼을 클릭해 창을 닫아주세요</p>
          </div>
          <div className="imageArea">
            <img src={okay} />
          </div>
          <div className="buttonArea">
            <Button size="sm" onClick={handleCloseButtonClick}>
              나가기
            </Button>
          </div>
        </>
      )}
    </LayoutBase>
  );
};

export default Reset;
