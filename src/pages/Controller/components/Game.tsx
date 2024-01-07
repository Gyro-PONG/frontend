import styled from 'styled-components';

import Title from '@components/Title/Title';

const LayoutBase = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Game = () => {
  return (
    <LayoutBase>
      <Title size="xs">Game</Title>
    </LayoutBase>
  );
};

export default Game;
