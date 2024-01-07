import { useState } from 'react';

import styled from 'styled-components';

import useControllerInfo from 'src/hooks/useControllerInfo';

import Button from '@components/Button/Button';
import Title from '@components/Title/Title';

import type { Step } from '../types/step';

const LayoutBase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;

  .textArea {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .buttonArea {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

interface Props {
  userId: string;
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

const Connection = ({ userId, setStep }: Props) => {
  const { register } = useControllerInfo();

  const [isError, setIsError] = useState(false);

  const handleActivateButtonClick = async () => {
    try {
      await register(userId);
      setStep('sync');
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <LayoutBase>
      <Title size="xs">
        {isError ? 'PC 연결 실패' : 'PC와 연결하시겠습니까?'}
      </Title>
      {isError ? (
        <div className="textArea">
          <p>user id가 올바르지 않습니다</p>
          <p>창을 닫고 올바른 경로로 다시 접속해주세요</p>
        </div>
      ) : (
        <div className="buttonArea">
          <Button onClick={handleActivateButtonClick} size="sm">
            연결하기
          </Button>
          <Button onClick={() => setStep('expiration')} size="sm">
            취소하기
          </Button>
        </div>
      )}
    </LayoutBase>
  );
};

export default Connection;
