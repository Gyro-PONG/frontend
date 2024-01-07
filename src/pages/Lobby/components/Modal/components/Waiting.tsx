import styled from 'styled-components';

import Loading from '@components/Loading/Loading';

const LayoutBase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Waiting = () => {
  return (
    <LayoutBase>
      <Loading size="sm" message="게임을 생성하고 있습니다" />
    </LayoutBase>
  );
};

export default Waiting;
