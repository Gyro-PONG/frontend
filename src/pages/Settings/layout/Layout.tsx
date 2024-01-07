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

  .buttonArea {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.25rem;
    width: 100%;
    max-width: 80rem;
  }

  & > button {
    max-width: 80rem;
  }
`;

const Layout = ({ children }: Props) => {
  return <LayoutBase>{children}</LayoutBase>;
};

export default Layout;
