import { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import { EVENT } from 'src/constants/socketEvent';
import {
  s_ExitGameByGuestCallback,
  s_ExitGameByHostCallback,
  s_FinishGameCallback,
  socket,
} from 'src/utils/socketAPI';

import GameModal from '@pages/Game/components/Modal/GameModal';

import GameRenderer from '@components/GameRenderer/GameRenderer';
import Modal from '@components/Modal/Modal';

const LayoutBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .game {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .background {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .unit {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

interface GameResult {
  winner: 'host' | 'guest';
  gameId: string;
}

interface Props {
  type: 'host' | 'guest';
  sfx: boolean;
}

const Pong = ({ type, sfx }: Props) => {
  const layoutRef = useRef<HTMLDivElement>(null);

  const [showModal, setShowModal] = useState(false);
  const [isUserWinner, setIsUserWinner] = useState(false);

  useEffect(() => {
    socket.on(EVENT.EXIT_GAME_BY_HOST, (gameId: string) => {
      s_ExitGameByHostCallback(gameId);
      setShowModal(true);

      if (type === 'host') {
        setIsUserWinner(false);
      } else {
        setIsUserWinner(true);
      }
    });

    socket.on(EVENT.EXIT_GAME_BY_GUEST, (gameId: string) => {
      s_ExitGameByGuestCallback(gameId);
      setShowModal(true);

      if (type === 'host') {
        setIsUserWinner(true);
      } else {
        setIsUserWinner(false);
      }
    });

    socket.on(EVENT.FINISH_GAME, (gameResult: GameResult) => {
      if (gameResult.winner === type) {
        setIsUserWinner(true);
      }
      setShowModal(true);
      s_FinishGameCallback(gameResult.gameId);
    });

    return () => {
      socket.off(EVENT.EXIT_GAME_BY_HOST);
      socket.off(EVENT.EXIT_GAME_BY_GUEST);
      socket.off(EVENT.FINISH_GAME);
    };
  }, [type]);

  return (
    <LayoutBase ref={layoutRef}>
      {showModal ? (
        <Modal disableBackgroundExit>
          <GameModal win={isUserWinner} />
        </Modal>
      ) : (
        <div className="game">
          <GameRenderer type={type} sfx={sfx} />
        </div>
      )}
    </LayoutBase>
  );
};

export default Pong;
