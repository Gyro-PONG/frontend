import styled from 'styled-components';

const LayoutBase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`;

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <LayoutBase>{children}</LayoutBase>;
};

export default Layout;
