import { useEffect } from 'react';

import styled from 'styled-components';

import { EVENT } from 'src/constants/socketEvent';
import { useMotionStore } from 'src/store/motion';
import { s_ResetMotionData, socket } from 'src/utils/socketAPI';

const LayoutBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100%;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.green};
`;

const MotionReceiver = () => {
  const motionData = useMotionStore((state) => state.motionData);
  const setMotionData = useMotionStore((state) => state.setMotionData);
  const reset = useMotionStore((state) => state.reset);

  useEffect(() => {
    if (motionData.length >= 3) {
      reset();
      s_ResetMotionData();
    }
  }, [motionData.length, reset]);

  useEffect(() => {
    socket.on(EVENT.SEND_MOTION_UP, () => {
      setMotionData((prev) => [...prev, '⇧']);
    });

    socket.on(EVENT.SEND_MOTION_DOWN, () => {
      setMotionData((prev) => [...prev, '⇩']);
    });

    socket.on(EVENT.SEND_MOTION_LEFT, () => {
      setMotionData((prev) => [...prev, '⇦']);
    });

    socket.on(EVENT.SEND_MOTION_RIGHT, () => {
      setMotionData((prev) => [...prev, '⇨']);
    });

    socket.on(EVENT.RESET_MOTION_DATA, () => {
      reset();
    });

    return () => {
      socket.off(EVENT.SEND_MOTION_UP);
      socket.off(EVENT.SEND_MOTION_DOWN);
      socket.off(EVENT.SEND_MOTION_LEFT);
      socket.off(EVENT.SEND_MOTION_RIGHT);
      socket.off(EVENT.RESET_MOTION_DATA);
    };
  }, [setMotionData, reset]);

  return (
    <LayoutBase>
      {motionData.map((arrow, index) => (
        <span key={index}>{arrow}</span>
      ))}
    </LayoutBase>
  );
};

export default MotionReceiver;
