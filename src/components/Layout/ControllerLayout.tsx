import styled from 'styled-components';

const LayoutBase = styled.div`
  height: 100%;

  @media screen and (orientation: landscape) {
    padding: 1rem 5rem;
  }

  @media screen and (orientation: portrait) {
    padding: 1rem 1.25rem;
  }
`;

interface Props {
  children: React.ReactNode;
}

const ControllerLayout = ({ children }: Props) => {
  return <LayoutBase className="mobile">{children}</LayoutBase>;
};

export default ControllerLayout;
