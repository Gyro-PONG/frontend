import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { PATH } from 'src/constants/path';
import { useMotionStore } from 'src/store/motion';
import { s_ResetMotionData } from 'src/utils/socketAPI';

import Button from '@components/Button/Button';

import Card from './Card';

const ViewerBase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 1rem 0 0;

  .textArea {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: calc(100% - 4.5rem);
  }

  .buttonArea {
    display: flex;
    justify-content: space-evenly;
    height: 4.5rem;
  }
`;

interface Props {
  data: {
    question: string;
    imageSrc: string[];
    answer: string;
  }[][];
}

const Viewer = ({ data }: Props) => {
  const motionString = useMotionStore((state) => state.motionString);
  const reset = useMotionStore((state) => state.reset);

  const [page, setPage] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (motionString === '⇧⇦') {
      page > 0 && setPage((prev) => (prev -= 1));
      reset();
      s_ResetMotionData();
    }

    if (motionString === '⇩⇦') {
      navigate(PATH.HOME);
      reset();
      s_ResetMotionData();
    }

    if (motionString === '⇧⇨') {
      page < data.length - 1 && setPage((prev) => (prev += 1));
      reset();
      s_ResetMotionData();
    }
  }, [motionString, navigate, page, data.length, reset]);

  return (
    <ViewerBase>
      <div className="textArea" data-testid={`page-${page}`}>
        {data[page].map((value) => (
          <Card
            key={value.question}
            question={value.question}
            imageSrc={value.imageSrc}
            answer={value.answer}
          />
        ))}
      </div>
      <div className="buttonArea">
        <Button
          size="md"
          onClick={() => setPage((prev) => (prev -= 1))}
          $arrow="⇧⇦"
          disabled={page <= 0}
        >
          이전
        </Button>
        <Button size="md" onClick={() => navigate(PATH.HOME)} $arrow="⇩⇦">
          나가기
        </Button>
        <Button
          size="md"
          onClick={() => setPage((prev) => (prev += 1))}
          $arrow="⇧⇨"
          disabled={page >= data.length - 1}
        >
          다음
        </Button>
      </div>
    </ViewerBase>
  );
};

export default Viewer;
