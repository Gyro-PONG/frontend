import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { EVENT } from 'src/constants/socketEvent';
import {
  s_CloseAngleCheck,
  s_DisconnectByController,
  s_FinishAngleCheck,
  s_LeftAngleCheck,
  s_RightAngleCheck,
  socket,
} from 'src/utils/socketAPI';

import Button from '@components/Button/Button';
import Title from '@components/Title/Title';

import { activate, deactivate } from '../utils/sensor';

import type { Step } from '../types/step';

const LayoutBase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;

  .textArea {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .buttonArea {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

interface Props {
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

type Stage = 'info' | 'left' | 'right' | 'finish' | 'close';

const Sync = ({ setStep }: Props) => {
  const [beta, setBeta] = useState(0);
  const [stage, setState] = useState<Stage>('info');

  const handleNextButtonClick = async (next: Stage) => {
    if (stage === 'info') {
      await activate('normal');
      s_LeftAngleCheck();
    }

    if (stage === 'left') {
      s_RightAngleCheck(beta);
    }

    if (stage === 'right') {
      deactivate('normal');
      s_FinishAngleCheck(beta);
    }

    if (stage === 'finish') {
      s_CloseAngleCheck();
      setStep('home');
    }

    setState(next);
  };

  const handleInterruptButtonClick = () => {
    s_DisconnectByController();
    setStep('expiration');
  };

  useEffect(() => {
    socket.on(EVENT.SEND_BETA, (beta: number) => {
      setBeta(beta);
    });

    return () => {
      socket.off(EVENT.SEND_BETA);
    };
  }, []);

  return (
    <LayoutBase>
      {stage === 'info' && (
        <>
          <Title size="xs">PC 연결에 성공했습니다</Title>
          <div className="textArea">
            <p>기울임 각도를 조정합니다</p>
            <p>양손으로 기기를 잡은 다음 설정하기 버튼을 눌러주세요</p>
          </div>
          <div className="buttonArea">
            <Button onClick={() => handleNextButtonClick('left')} size="sm">
              움직임 범위 설정하기
            </Button>
            <Button onClick={handleInterruptButtonClick} size="sm">
              중단하기
            </Button>
          </div>
        </>
      )}
      {stage === 'left' && (
        <>
          <Title size="xs">기기를 왼쪽으로 기울여 주세요</Title>
          <div className="textArea">
            <p>최대한 기울일 수 있을 때까지 기기를 왼쪽으로 기울여 주세요</p>
            <p>기기를 기울인 상태로 다음 버튼을 눌러주세요</p>
          </div>
          <div className="buttonArea">
            <Button
              onClick={() => handleNextButtonClick('right')}
              size="sm"
              disabled={beta >= 0}
            >
              다음
            </Button>
          </div>
        </>
      )}
      {stage === 'right' && (
        <>
          <Title size="xs">기기를 오른쪽으로 기울여 주세요</Title>
          <div className="textArea">
            <p>최대한 기울일 수 있을 때까지 기기를 오른쪽으로 기울여 주세요</p>
            <p>기기를 기울인 상태로 다음 버튼을 눌러주세요</p>
          </div>
          <div className="buttonArea">
            <Button
              onClick={() => handleNextButtonClick('finish')}
              size="sm"
              disabled={beta <= 0}
            >
              다음
            </Button>
          </div>
        </>
      )}
      {stage === 'finish' && (
        <>
          <Title size="xs">설정이 완료되었습니다</Title>
          <div className="textArea">
            <p>이제 게임을 시작할 수 있습니다</p>
          </div>
          <div className="buttonArea">
            <Button onClick={() => handleNextButtonClick('close')} size="sm">
              설정 마치기
            </Button>
          </div>
        </>
      )}
    </LayoutBase>
  );
};

export default Sync;
