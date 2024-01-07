import { useCallback, useEffect, useState } from 'react';

import styled from 'styled-components';

import { useMotionStore } from 'src/store/motion';
import { s_CreateGame, s_ResetMotionData } from 'src/utils/socketAPI';

import Button from '@components/Button/Button';

import SelectButton from '../../SelectButton/SelectButton';

import type { Step } from '../../../types/step';

const LayoutBase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  .selectionArea {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    width: 100%;
  }

  .buttonArea {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    width: 100%;
  }
`;

const levelData = ['easy', 'hard'];
const targetScoreData = [11, 21];

interface Props {
  setShowModal: (value: boolean) => void;
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

const Setting = ({ setShowModal, setStep }: Props) => {
  const motionString = useMotionStore((state) => state.motionString);

  const [level, setLevel] = useState<string | number>(levelData[0]);
  const [targetScore, setTargetScore] = useState<string | number>(
    targetScoreData[0],
  );

  const handleCreateButtonClick = useCallback(() => {
    s_CreateGame({ level: String(level), targetScore: Number(targetScore) });
    setStep('waiting');
  }, [level, targetScore, setStep]);

  useEffect(() => {
    if (motionString === '⇨⇧') {
      handleCreateButtonClick();
      s_ResetMotionData();
    }

    if (motionString === '⇨⇩') {
      setShowModal(false);
      s_ResetMotionData();
    }
  }, [motionString, handleCreateButtonClick, setShowModal]);

  return (
    <LayoutBase>
      <div className="selectionArea">
        <SelectButton size="md" data={levelData} setState={setLevel}>
          난이도
        </SelectButton>
        <SelectButton
          size="md"
          data={targetScoreData}
          setState={setTargetScore}
        >
          목표 점수
        </SelectButton>
      </div>
      <div className="buttonArea">
        <Button size="md" onClick={handleCreateButtonClick} $arrow="⇨⇧">
          게임 생성
        </Button>
        <Button size="md" onClick={() => setShowModal(false)} $arrow="⇨⇩">
          나가기
        </Button>
      </div>
    </LayoutBase>
  );
};

export default Setting;
