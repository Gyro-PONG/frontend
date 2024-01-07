import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { PATH } from 'src/constants/path';
import { EVENT } from 'src/constants/socketEvent';
import {
  s_ExitGameByGuest,
  s_ExitGameByHost,
  s_ExitGameByHostCallback,
  s_StartGame,
  socket,
} from 'src/utils/socketAPI';

import Button from '@components/Button/Button';
import Loading from '@components/Loading/Loading';

const LayoutBase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  .textArea {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 2rem 0;

    & > p {
      font-size: 1.75rem;
    }
  }

  .buttonArea {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

interface Props {
  type: 'host' | 'guest';
}

const Waiting = ({ type }: Props) => {
  const [guestEntered, setGuestEntered] = useState(false);

  const navigate = useNavigate();

  const handleHostExitButtonClick = () => {
    s_ExitGameByHost();
    navigate(PATH.LOBBY);
  };

  const handleGuestExitButtonClick = () => {
    s_ExitGameByGuest();
    navigate(PATH.LOBBY);
  };

  const handleStartButtonClick = () => {
    s_StartGame();
  };

  useEffect(() => {
    socket.on(EVENT.JOIN_GAME, () => {
      setGuestEntered(true);
    });

    socket.on(EVENT.EXIT_GAME_BY_HOST, (gameId: string) => {
      s_ExitGameByHostCallback(gameId);
      navigate(PATH.LOBBY);
    });

    socket.on(EVENT.EXIT_GAME_BY_GUEST, () => {
      setGuestEntered(false);
    });

    return () => {
      socket.off(EVENT.JOIN_GAME);
      socket.off(EVENT.EXIT_GAME_BY_HOST);
      socket.off(EVENT.EXIT_GAME_BY_GUEST);
    };
  }, [navigate]);

  return (
    <LayoutBase>
      {type === 'host' && (
        <>
          <div className="textArea">
            {guestEntered ? (
              <p>상대방이 게임에 참여했습니다</p>
            ) : (
              <Loading message="상대방의 참가를 기다리고 있습니다" />
            )}
          </div>
          <div className="buttonArea">
            {guestEntered && (
              <Button onClick={handleStartButtonClick}>게임 시작</Button>
            )}
            <Button onClick={handleHostExitButtonClick}>나가기</Button>
          </div>
        </>
      )}
      {type === 'guest' && (
        <>
          <Loading message="방장이 게임을 시작할 때까지 잠시 기다려 주세요" />
          <div className="buttonArea">
            <Button onClick={handleGuestExitButtonClick}>나가기</Button>
          </div>
        </>
      )}
    </LayoutBase>
  );
};

export default Waiting;
