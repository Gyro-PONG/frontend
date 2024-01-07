import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PATH } from 'src/constants/path';
import { EVENT } from 'src/constants/socketEvent';
import { useMotionStore } from 'src/store/motion';
import { useUserStore } from 'src/store/user';
import {
  s_ResetMotionData,
  s_SetMotion,
  s_SetVibration,
  socket,
} from 'src/utils/socketAPI';

import Button from '@components/Button/Button';
import Modal from '@components/Modal/Modal';
import Title from '@components/Title/Title';

import SettingsModal from './components/Modal/SettingsModal';
import ToggleButton from './components/ToggleButton/ToggleButton';
import Layout from './layout/Layout';

const Settings = () => {
  const controllerSocketId = useUserStore((state) => state.controllerSocketId);
  const vibration = useUserStore((state) => state.vibration);
  const setVibration = useUserStore((state) => state.setVibration);
  const sfx = useUserStore((state) => state.sfx);
  const setSfx = useUserStore((state) => state.setSfx);
  const motion = useUserStore((state) => state.motion);
  const setMotion = useUserStore((state) => state.setMotion);
  const motionString = useMotionStore((state) => state.motionString);

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleSfxButtonClick = useCallback(() => {
    setSfx((prev) => !prev);
  }, [setSfx]);

  const handleVibrationButtonClick = useCallback(() => {
    setVibration((prev) => {
      s_SetVibration(!prev);
      return !prev;
    });
  }, [setVibration]);

  const handleMotionButtonClick = () => {
    setMotion(!motion);
    s_SetMotion(!motion);
  };

  useEffect(() => {
    socket.on(EVENT.CLOSE_ANGLE_CHECK, () => {
      setShowModal(false);
    });

    return () => {
      socket.off(EVENT.CLOSE_ANGLE_CHECK);
    };
  }, []);

  useEffect(() => {
    if (motionString === '⇨⇧') {
      handleSfxButtonClick();
      s_ResetMotionData();
    }

    if (motionString === '⇨⇩') {
      handleVibrationButtonClick();
      s_ResetMotionData();
    }

    if (motionString === '⇩⇦') {
      navigate(PATH.HOME);
      s_ResetMotionData();
    }
  }, [
    motionString,
    handleSfxButtonClick,
    handleVibrationButtonClick,
    navigate,
  ]);

  return (
    <Layout>
      <Title size="md">Settings</Title>
      <div className="buttonArea">
        <ToggleButton
          size="md"
          status={sfx}
          $arrow="⇨⇧"
          onClick={handleSfxButtonClick}
        >
          효과음
        </ToggleButton>
        {controllerSocketId && (
          <>
            <ToggleButton
              size="md"
              status={vibration}
              $arrow="⇨⇩"
              onClick={handleVibrationButtonClick}
            >
              진동
            </ToggleButton>
            <ToggleButton
              size="md"
              status={motion}
              onClick={handleMotionButtonClick}
            >
              컨트롤러 움직임으로 버튼 누르기
            </ToggleButton>
          </>
        )}
        <Button size="md" onClick={() => setShowModal(true)}>
          컨트롤러 연결 설정
        </Button>
      </div>
      <Button size="md" onClick={() => navigate(PATH.HOME)} $arrow="⇩⇦">
        나가기
      </Button>

      {showModal && (
        <Modal disableBackgroundExit>
          <SettingsModal setShowModal={setShowModal} />
        </Modal>
      )}
    </Layout>
  );
};

export default Settings;
