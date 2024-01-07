import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { useUserStore } from 'src/store/user';

import Connection from './components/Connection';
import Reset from './components/Reset';
import Status from './components/Status';
import Sync from './components/Sync';

import type { Step } from '../../types/step';

const LayoutBase = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 5px solid ${({ theme }) => theme.colors.green};
  background-color: ${({ theme }) => theme.colors.black};
  width: 85%;
  height: 80%;
  padding: 2rem;
`;

interface Props {
  setShowModal: (value: boolean) => void;
}

const SettingsModal = ({ setShowModal }: Props) => {
  const controllerSocketId = useUserStore((state) => state.controllerSocketId);

  const [step, setStep] = useState<Step>(
    controllerSocketId ? 'status' : 'connection',
  );

  useEffect(() => {
    // 컨트롤러에 의해 연결이 끊겨 컨트롤러 id가 사라지면 연결 단계로 전환되어야 한다.
    if (!controllerSocketId) {
      setStep('connection');
    }
  }, [controllerSocketId]);

  return (
    <LayoutBase>
      {step === 'connection' && (
        <Connection setShowModal={setShowModal} setStep={setStep} />
      )}
      {step === 'sync' && (
        <Sync setShowModal={setShowModal} setStep={setStep} />
      )}
      {step === 'status' && (
        <Status setShowModal={setShowModal} setStep={setStep} />
      )}
      {step === 'reset' && (
        <Reset setShowModal={setShowModal} setStep={setStep} />
      )}
    </LayoutBase>
  );
};

export default SettingsModal;
