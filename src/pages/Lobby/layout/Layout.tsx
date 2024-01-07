import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const LayoutBase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  .listArea {
    width: 100%;
    height: calc(100% - 15.5rem);
  }

  .buttonArea {
    display: flex;
    justify-content: space-evenly;
    gap: 10rem;
    width: 100%;
  }
`;

const Layout = ({ children }: Props) => {
  return <LayoutBase>{children}</LayoutBase>;
};

export default Layout;
