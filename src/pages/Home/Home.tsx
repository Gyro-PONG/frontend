import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { PATH } from 'src/constants/path';
import { useMotionStore } from 'src/store/motion';
import { useUserStore } from 'src/store/user';
import { s_ResetMotionData } from 'src/utils/socketAPI';

import Button from '@components/Button/Button';
import Title from '@components/Title/Title';

import Layout from './layout/Layout';

const Home = () => {
  const controllerSocketId = useUserStore((state) => state.controllerSocketId);
  const motionString = useMotionStore((state) => state.motionString);

  const navigate = useNavigate();

  useEffect(() => {
    if (motionString === '⇦⇧') {
      s_ResetMotionData();
      navigate(PATH.SETTINGS);
    }

    if (motionString === '⇧⇩') {
      s_ResetMotionData();
      navigate(PATH.LOBBY);
    }

    if (motionString === '⇨⇧') {
      s_ResetMotionData();
      navigate(PATH.GUIDES);
    }
  }, [motionString, navigate]);

  return (
    <Layout>
      <Title size="lg" $fade={true}>
        Gyro PONG
      </Title>
      <div className="messageArea">
        {!controllerSocketId && (
          <p>설정 페이지로 이동하여 컨트롤러 연결을 해주세요</p>
        )}
      </div>
      <div className="buttonArea">
        <Button size="lg" onClick={() => navigate(PATH.SETTINGS)} $arrow="⇦⇧">
          설정
        </Button>
        <Button
          size="lg"
          onClick={() => navigate(PATH.LOBBY)}
          disabled={!controllerSocketId}
          $arrow="⇧⇩"
        >
          시작
        </Button>
        <Button size="lg" onClick={() => navigate(PATH.GUIDES)} $arrow="⇨⇧">
          도움말
        </Button>
      </div>
    </Layout>
  );
};

export default Home;
