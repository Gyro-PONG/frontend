import styled from 'styled-components';

import Button from '@components/Button/Button';

const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
`;

interface Props {
  level: string;
  targetScore: number;
  available: boolean;
  onClick?: () => void;
}

const RoomButton = ({
  level,
  targetScore,
  available,
  onClick,
  ...rest
}: Props) => {
  return (
    <div>
      <Button onClick={onClick} {...rest} disabled={!available}>
        <Content>
          <p>난이도: {level}</p>
          <p>목표 점수: {targetScore}</p>
          <p>입장 {available ? '가능' : '불가'}</p>
        </Content>
      </Button>
    </div>
  );
};

export default RoomButton;
