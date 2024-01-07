import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { PATH } from 'src/constants/path';

import Button from '@components/Button/Button';
import Title from '@components/Title/Title';

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
  width: 80%;
  height: 70%;
  padding: 2rem;

  & > p {
    font-size: 3rem;
  }
`;

interface Props {
  win: boolean;
}

const GameModal = ({ win }: Props) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(PATH.LOBBY);
  };

  return (
    <LayoutBase>
      <Title size="sm">Result</Title>
      <p>{win ? '승리' : '패배'}했습니다</p>
      <Button size="sm" onClick={handleButtonClick}>
        나가기
      </Button>
    </LayoutBase>
  );
};

export default GameModal;
