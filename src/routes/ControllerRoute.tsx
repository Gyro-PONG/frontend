import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { Outlet } from 'react-router-dom';

import useControllerInfo from 'src/hooks/useControllerInfo';
import { useControllerStore } from 'src/store/controller';

import NotAllowed from '@pages/NotAllowed/NotAllowed';

import ControllerLayout from '@components/Layout/ControllerLayout';
import PcLayout from '@components/Layout/PcLayout';
import Loading from '@components/Loading/Loading';

/**
 *
 * @description
 * PC 환경에서 접속하면 NotAllowed 컴포넌트를 렌더링하고, 모바일 환경에서 접속하면 Outlet 컴포넌트를 렌더링합니다.
 * Outlet 컴포넌트를 랜더링하기 전, 소켓 서버와 연결을 확인하며, 연결이 되어있지 않으면 Loading 컴포넌트를 렌더링합니다.
 */

const ControllerRoute = () => {
  const socketId = useControllerStore((state) => state.socketId);

  const { syncSocketId } = useControllerInfo();

  useEffect(() => {
    syncSocketId();
  }, [syncSocketId]);

  return (
    <>
      {isMobile ? (
        <ControllerLayout>
          {socketId ? (
            <Outlet />
          ) : (
            <Loading size="xs" message="서버와의 연결을 확인하고 있습니다" />
          )}
        </ControllerLayout>
      ) : (
        <PcLayout>
          <NotAllowed type="pc" />
        </PcLayout>
      )}
    </>
  );
};

export default ControllerRoute;
