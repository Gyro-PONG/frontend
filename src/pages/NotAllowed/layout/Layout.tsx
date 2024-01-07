import styled from 'styled-components';

const LayoutBase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .textArea {
    text-align: center;
  }
`;

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <LayoutBase>{children}</LayoutBase>;
};

export default Layout;
