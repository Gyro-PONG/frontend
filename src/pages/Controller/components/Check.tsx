import { useState } from 'react';

import styled from 'styled-components';

import Button from '@components/Button/Button';
import Loading from '@components/Loading/Loading';
import Title from '@components/Title/Title';

import { sensorTest } from '../utils/sensor';

import type { Step } from '../types/step';

const LayoutBase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

type Status = 'idle' | 'denied' | 'error' | 'loading';

interface Props {
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

const Check = ({ setStep }: Props) => {
  const [status, setStatus] = useState<Status>('idle');

  const handleCheck = async () => {
    try {
      setStatus('loading');
      await sensorTest();
      setStep('connection');
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'denied') {
          setStatus('denied');
        } else {
          setStatus('error');
        }
      }
    }
  };

  return (
    <LayoutBase>
      {status === 'idle' && (
        <>
          <Title size="xs">장치 검사</Title>
          <div className="textArea">
            <p>기기의 자이로 센서가 사용 가능한지 검사합니다</p>
            <p>권한 설정 팝업이 뜰 경우 반드시 허용을 클릭해주세요</p>
          </div>
          <div className="buttonArea">
            <Button onClick={handleCheck} size="sm">
              검사하기
            </Button>
            <Button onClick={() => setStep('expiration')} size="sm">
              나가기
            </Button>
          </div>
        </>
      )}
      {status === 'loading' && <Loading size="xs" message="검사 진행중" />}
      {status === 'denied' && (
        <>
          <Title size="xs">접근 차단됨</Title>
          <div className="textArea">
            <p>유저에 의해 센서 사용 권한이 거부되었습니다</p>
            <p>
              다시 이용하시려면 반드시 현재 창을 닫고 새 창에서 접속해주세요
            </p>
          </div>
        </>
      )}
      {status === 'error' && (
        <>
          <Title size="xs">오류</Title>
          <div className="textArea">
            <p>오류가 발생하여 기기를 사용할 수 없습니다</p>
            <p>같은 오류가 반복될 경우 다른 기기를 이용해주세요</p>
          </div>
        </>
      )}
    </LayoutBase>
  );
};

export default Check;
