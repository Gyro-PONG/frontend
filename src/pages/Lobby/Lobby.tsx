import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PATH } from 'src/constants/path';
import { EVENT } from 'src/constants/socketEvent';
import { useMotionStore } from 'src/store/motion';
import type { GameInfo } from 'src/types/game';
import { s_ResetMotionData, socket } from 'src/utils/socketAPI';

import Button from '@components/Button/Button';
import Modal from '@components/Modal/Modal';
import Title from '@components/Title/Title';

import GameList from './components/GameList/GameList';
import LobbyModal from './components/Modal/LobbyModal';
import Layout from './layout/Layout';

const Lobby = () => {
  const motionString = useMotionStore((state) => state.motionString);

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    socket.on(EVENT.CREATE_GAME_SUCCESS, (gameInfo: GameInfo) => {
      navigate(`/game/${gameInfo.gameId}`, { state: 'host' });
    });

    return () => {
      socket.off(EVENT.CREATE_GAME_SUCCESS);
    };
  }, [navigate]);

  useEffect(() => {
    if (motionString === '⇩⇦') {
      navigate(PATH.HOME);
      s_ResetMotionData();
    }

    if (motionString === '⇦⇨') {
      setShowModal(true);
      s_ResetMotionData();
    }
  }, [motionString, navigate]);

  return (
    <Layout>
      <Title size="md">Lobby</Title>
      <div className="listArea">
        <GameList />
      </div>
      <div className="buttonArea">
        <Button size="md" onClick={() => setShowModal(true)} $arrow="⇦⇨">
          게임 생성
        </Button>
        <Button size="md" onClick={() => navigate(PATH.HOME)} $arrow="⇩⇦">
          뒤로 가기
        </Button>
      </div>

      {showModal && (
        <Modal disableBackgroundExit>
          <LobbyModal setShowModal={setShowModal} />
        </Modal>
      )}
    </Layout>
  );
};

export default Lobby;
