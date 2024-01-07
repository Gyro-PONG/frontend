import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { EVENT } from 'src/constants/socketEvent';
import { useControllerStore } from 'src/store/controller';
import { s_ResetMotionData, socket } from 'src/utils/socketAPI';

import Button from '@components/Button/Button';
import Title from '@components/Title/Title';

import { activate, deactivate } from '../utils/sensor';

const LayoutBase = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .motionButtonArea {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;

    & > p {
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translate(-50%, -20%);
      width: 100%;
      text-align: center;
      font-size: 1.25rem;
    }
  }

  @media screen and (orientation: portrait) {
    .motionButtonArea > p {
      display: none;
    }
  }

  @media screen and (orientation: landscape) {
    .motionButtonArea > button {
      pointer-events: none;
      text-decoration: line-through;
      opacity: 0.4;
    }
  }
`;

const Home = () => {
  const motion = useControllerStore((state) => state.motion);

  const [motionDetection, setMotionDetection] = useState(false);

  const handleStartMotionDetection = async () => {
    await activate('motion');
    setMotionDetection(true);
  };

  const handleStopMotionDetection = () => {
    s_ResetMotionData();
  };

  useEffect(() => {
    // PC에 의해 모션 설정이 변경된 경우, 컨트롤러의 모션 설정은 항상 false로 시작되어야 함
    deactivate('motion');
    setMotionDetection(false);
  }, [motion]);

  useEffect(() => {
    socket.on(EVENT.RESET_MOTION_DATA, () => {
      deactivate('motion');
      setMotionDetection(false);
    });

    return () => {
      socket.off(EVENT.RESET_MOTION_DATA);
    };
  }, []);

  return (
    <LayoutBase>
      <Title size="xs">Gyro PONG</Title>
      {motion && (
        <div className="motionButtonArea">
          <p>세로모드로 전환하여 사용해주세요</p>
          {motionDetection ? (
            <Button size="sm" onClick={handleStopMotionDetection}>
              모션 감지 멈추기
            </Button>
          ) : (
            <Button size="sm" onClick={handleStartMotionDetection}>
              모션 감지 시작
            </Button>
          )}
        </div>
      )}
    </LayoutBase>
  );
};

export default Home;
