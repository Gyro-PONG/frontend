import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const LayoutBase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  .buttonArea {
    display: flex;
    justify-content: space-evenly;
    gap: 10rem;
  }
`;

const Layout = ({ children }: Props) => {
  return <LayoutBase>{children}</LayoutBase>;
};

export default Layout;
