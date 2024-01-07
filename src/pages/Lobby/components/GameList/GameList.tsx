import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { EVENT } from 'src/constants/socketEvent';
import { s_JoinGame, s_LoadGameRoomList, socket } from 'src/utils/socketAPI';

import RoomButton from './components/RoomButton/RoomButton';

const LayoutBase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  overflow-y: auto;
`;

interface Room {
  gameId: string;
  targetScore: number;
  level: string;
  available: boolean;
}

const GameList = () => {
  const [roomList, setRoomList] = useState<Room[]>([]);

  const navigate = useNavigate();

  const handleRoomButtonClick = (gameId: string) => {
    s_JoinGame(gameId);
    navigate(`/game/${gameId}`, { state: 'guest' });
  };

  useEffect(() => {
    s_LoadGameRoomList();

    socket.on(EVENT.LOAD_GAME_ROOM_LIST, (data) => {
      setRoomList(data);
    });

    return () => {
      socket.off(EVENT.LOAD_GAME_ROOM_LIST);
    };
  }, []);

  return (
    <LayoutBase>
      {roomList.map((room) => (
        <RoomButton
          key={room.gameId}
          level={room.level}
          targetScore={room.targetScore}
          available={room.available}
          onClick={() => handleRoomButtonClick(room.gameId)}
        />
      ))}
    </LayoutBase>
  );
};

export default GameList;
