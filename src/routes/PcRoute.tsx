import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { Outlet, useNavigate } from 'react-router-dom';

import { PATH } from 'src/constants/path';
import { EVENT } from 'src/constants/socketEvent';
import useUserInfo from 'src/hooks/useUserInfo';
import { useUserStore } from 'src/store/user';
import { s_DisconnectByControllerCallback, socket } from 'src/utils/socketAPI';

import NotAllowed from '@pages/NotAllowed/NotAllowed';

import ControllerLayout from '@components/Layout/ControllerLayout';
import PcLayout from '@components/Layout/PcLayout';
import Loading from '@components/Loading/Loading';

/**
 *
 * @description
 * 모바일 환경에서 접속하면 NotAllowed 컴포넌트를 렌더링하고, PC 환경에서 접속하면 Outlet 컴포넌트를 렌더링합니다.
 * Outlet 컴포넌트를 랜더링하기 전, 소켓 서버와 연결을 확인하며, 연결이 되어있지 않으면 Loading 컴포넌트를 렌더링합니다.
 */

const PcRoute = () => {
  const socketId = useUserStore((state) => state.socketId);
  const clear = useUserStore((state) => state.clear);
  const { syncSocketId } = useUserInfo();

  const navigate = useNavigate();

  useEffect(() => {
    syncSocketId();
  }, [syncSocketId]);

  useEffect(() => {
    socket.on(EVENT.DISCONNECT_BY_CONTROLLER, () => {
      clear();
      s_DisconnectByControllerCallback();
      navigate(PATH.HOME);
    });

    return () => {
      socket.off(EVENT.DISCONNECT_BY_CONTROLLER);
    };
  }, [navigate, clear]);

  return (
    <>
      {isMobile ? (
        <ControllerLayout>
          <NotAllowed type="mobile" />
        </ControllerLayout>
      ) : (
        <PcLayout>
          {socketId ? (
            <Outlet />
          ) : (
            <Loading size="md" message="서버와의 연결을 확인하고 있습니다" />
          )}
        </PcLayout>
      )}
    </>
  );
};

export default PcRoute;
