import styled from 'styled-components';

import MotionReceiver from '@components/MotionReceiver/MotionReceiver';

const LayoutBase = styled.div`
  height: 100%;

  &:has(div.game) {
    & > header {
      display: none;
    }

    & > footer {
      display: none;
    }
  }

  header {
    width: 100%;
    height: 5rem;
    min-height: 5rem;
  }

  main {
    &:not(:has(div.game)) {
      height: calc(100% - 10rem);
      padding: 0 5rem;
    }

    &:has(div.game) {
      min-height: 100%;
      height: 100%;
    }
  }

  footer {
    width: 100%;
    height: 5rem;
    min-height: 5rem;
  }
`;

interface Props {
  children: React.ReactNode;
}

const PcLayout = ({ children }: Props) => {
  return (
    <LayoutBase className="pc">
      <header></header>
      <main>{children}</main>
      <footer>
        <MotionReceiver />
      </footer>
    </LayoutBase>
  );
};

export default PcLayout;
