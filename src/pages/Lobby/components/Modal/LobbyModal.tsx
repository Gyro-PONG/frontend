import { useState } from 'react';

import styled from 'styled-components';

import Setting from './components/Setting';
import Waiting from './components/Waiting';

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
  height: 70%;
  padding: 2rem;
`;

interface Props {
  setShowModal: (value: boolean) => void;
}

const LobbyModal = ({ setShowModal }: Props) => {
  const [step, setStep] = useState<Step>('setting');

  return (
    <LayoutBase>
      {step === 'setting' && (
        <Setting setShowModal={setShowModal} setStep={setStep} />
      )}
      {step === 'waiting' && <Waiting />}
    </LayoutBase>
  );
};

export default LobbyModal;
