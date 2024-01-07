import { io } from 'socket.io-client';

import { EVENT } from 'src/constants/socketEvent';

// 연결 관련 API

export const socket = io(import.meta.env.VITE_SERVER_URL, {
  reconnection: true,
  transports: ['websocket'],
});

type Type = 'controller' | 'user';

export const s_SocketId = (type: Type) => {
  socket.emit(EVENT.SOCKET_ID, type);
};

export const s_ConnectController = (userId: string) => {
  socket.emit(EVENT.CONNECT_CONTROLLER, userId);
};

export const s_ConnectControllerCallback = () => {
  socket.emit(EVENT.CONNECT_CONTROLLER_CALLBACK);
};

export const s_DisconnectByUser = () => {
  socket.emit(EVENT.DISCONNECT_BY_USER);
};

export const s_DisconnectByUserCallback = () => {
  socket.emit(EVENT.DISCONNECT_BY_USER_CALLBACK);
};

export const s_DisconnectByController = () => {
  socket.emit(EVENT.DISCONNECT_BY_CONTROLLER);
};

export const s_DisconnectByControllerCallback = () => {
  socket.emit(EVENT.DISCONNECT_BY_CONTROLLER_CALLBACK);
};

// 자이로 센서 관련 API

export const s_SendBeta = (beta: number) => {
  socket.emit(EVENT.SEND_BETA, beta);
};

export const s_InvalidSensor = () => {
  socket.emit(EVENT.INVALID_SENSOR);
};

export const s_LeftAngleCheck = () => {
  socket.emit(EVENT.LEFT_ANGLE_CHECK);
};

export const s_RightAngleCheck = (leftBeta: number) => {
  socket.emit(EVENT.RIGHT_ANGLE_CHECK, leftBeta);
};

export const s_FinishAngleCheck = (rightBeta: number) => {
  socket.emit(EVENT.FINISH_ANGLE_CHECK, rightBeta);
};

export const s_CloseAngleCheck = () => {
  socket.emit(EVENT.CLOSE_ANGLE_CHECK);
};

export const s_SetMotion = (set: boolean) => {
  socket.emit(EVENT.SET_MOTION, set);
};

export const s_ResetMotionData = () => {
  socket.emit(EVENT.RESET_MOTION_DATA);
};

export const s_SendMotionUp = () => {
  socket.emit(EVENT.SEND_MOTION_UP);
};

export const s_SendMotionDown = () => {
  socket.emit(EVENT.SEND_MOTION_DOWN);
};

export const s_SendMotionLeft = () => {
  socket.emit(EVENT.SEND_MOTION_LEFT);
};

export const s_SendMotionRight = () => {
  socket.emit(EVENT.SEND_MOTION_RIGHT);
};

export const s_ResetAngle = () => {
  socket.emit(EVENT.RESET_ANGLE);
};

export const s_AngleInfo = () => {
  socket.emit(EVENT.ANGLE_INFO);
};

// 진동 관련 API
export const s_SetVibration = (set: boolean) => {
  socket.emit(EVENT.SET_VIBRATION, set);
};

/**
 *
 * @param type 'hp': host paddle | 'gp': guest paddle | 'hs': host get score | 'gs': guest get score
 */
export const s_SendVibration = (type: 'hp' | 'gp' | 'hs' | 'gs') => {
  socket.emit(EVENT.SEND_VIBRATION, type);
};

// 소리 관련 API
export const s_SendSfx = (type: 'paddle' | 'wall' | 'extinction') => {
  socket.emit(EVENT.SEND_SFX, type);
};

// 게임 관련 API

interface GameInfo {
  level: string;
  targetScore: number;
}

export const s_CreateGame = (gameInfo: GameInfo) => {
  socket.emit(EVENT.CREATE_GAME, gameInfo);
};

export const s_CreateGameCallback = (gameId: string) => {
  socket.emit(EVENT.CREATE_GAME_CALLBACK, gameId);
};

export const s_JoinGame = (gameId: string) => {
  socket.emit(EVENT.JOIN_GAME, gameId);
};

export const s_JoinGameCallback = (gameId: string) => {
  socket.emit(EVENT.JOIN_GAME_CALLBACK, gameId);
};

export const s_StartGame = () => {
  socket.emit(EVENT.START_GAME);
};

export const s_ExitGameByHost = () => {
  socket.emit(EVENT.EXIT_GAME_BY_HOST);
};

export const s_ExitGameByHostCallback = (gameId: string) => {
  socket.emit(EVENT.EXIT_GAME_BY_HOST_CALLBACK, gameId);
};

export const s_ExitGameByGuest = () => {
  socket.emit(EVENT.EXIT_GAME_BY_GUEST);
};

export const s_ExitGameByGuestCallback = (gameId: string) => {
  socket.emit(EVENT.EXIT_GAME_BY_GUEST_CALLBACK, gameId);
};

export const s_ExitGameCallback = (gameId: string) => {
  socket.emit(EVENT.EXIT_GAME_CALLBACK, gameId);
};

export const s_LoadGameRoomList = () => {
  socket.emit(EVENT.LOAD_GAME_ROOM_LIST);
};

export const s_LoadGameInfo = (type: 'host' | 'guest') => {
  socket.emit(EVENT.LOAD_GAME_INFO, type);
};

export const s_FinishGame = (winner: 'host' | 'guest') => {
  socket.emit(EVENT.FINISH_GAME, winner);
};

export const s_FinishGameCallback = (gameId: string) => {
  socket.emit(EVENT.FINISH_GAME_CALLBACK, gameId);
};
