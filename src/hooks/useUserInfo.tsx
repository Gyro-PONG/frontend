import { useCallback } from 'react';

import { EVENT } from 'src/constants/socketEvent';
import { useUserStore } from 'src/store/user';
import { s_SocketId, socket } from 'src/utils/socketAPI';

const useUserInfo = () => {
  const setSocketId = useUserStore((state) => state.setSocketId);

  /**
   * @description 맨 처음 접속시 서버로부터 소켓 아이디를 받아와 zustand store에 저장함
   */
  const syncSocketId = useCallback(async () => {
    s_SocketId('user');
    await new Promise<void>((resolve) => {
      socket.on(EVENT.SOCKET_ID, (id: string) => {
        setSocketId(id);
        socket.off(EVENT.SOCKET_ID);
        resolve();
      });
    });
  }, [setSocketId]);

  return { syncSocketId };
};

export default useUserInfo;
