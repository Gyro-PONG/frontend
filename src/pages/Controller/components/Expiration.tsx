import styled from 'styled-components';

import Title from '@components/Title/Title';

const LayoutBase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: 100%;

  .textArea {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Expiration = () => {
  return (
    <LayoutBase>
      <Title size="xs">만료된 컨트롤러</Title>
      <div className="textArea">
        <p>더이상 컨트롤러를 사용할 수 없습니다</p>
        <p>다시 사용하시려면 새 창을 열고 처음부터 다시 연결 해주세요</p>
      </div>
    </LayoutBase>
  );
};

export default Expiration;
