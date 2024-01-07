import { useCallback } from 'react';

import { EVENT } from 'src/constants/socketEvent';
import { useControllerStore } from 'src/store/controller';
import { s_SocketId, s_ConnectController, socket } from 'src/utils/socketAPI';

const useControllerInfo = () => {
  const setSocketId = useControllerStore((state) => state.setSocketId);

  /**
   * @description 맨 처음 접속시 서버로부터 소켓 아이디를 받아와 zustand store에 저장함
   */
  const syncSocketId = useCallback(async () => {
    s_SocketId('controller');
    await new Promise<void>((resolve) => {
      socket.on(EVENT.SOCKET_ID, (id: string) => {
        setSocketId(id);
        socket.off(EVENT.SOCKET_ID);
        resolve();
      });
    });
  }, [setSocketId]);

  /**
   * @description 유저 id를 받아서 서버에게 유저의 컨트롤러로 등록을 요청함.
   * 만약 유저 id가 유효하지 않다면 에러를 발생시킴
   */
  const register = useCallback(async (userId: string) => {
    s_ConnectController(userId);
    await new Promise<void>((resolve, reject) => {
      socket.on(EVENT.INVALID_USER_ID, () => {
        socket.off(EVENT.INVALID_USER_ID);
        reject(new Error('error'));
      });
      socket.on(EVENT.CONNECT_CONTROLLER_SUCCESS, () => {
        socket.off(EVENT.CONNECT_CONTROLLER_SUCCESS);
        resolve();
      });
    });
  }, []);

  return { syncSocketId, register };
};

export default useControllerInfo;
