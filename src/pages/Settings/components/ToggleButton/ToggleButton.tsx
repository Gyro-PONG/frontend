import styled, { css } from 'styled-components';

import Button from '@components/Button/Button';

type Size = 'sm' | 'md' | 'lg';

interface StyleProps {
  size?: Size;
}

const BoxSize = css<StyleProps>`
  ${({ size = 'md' }) => {
    if (size === 'sm') {
      return css`
        font-size: 2rem;
      `;
    }

    if (size === 'md') {
      return css`
        font-size: 2.5rem;
      `;
    }

    if (size === 'lg') {
      return css`
        font-size: 3rem;
      `;
    }
  }}
`;

const Box = styled.div<StyleProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 5rem;
  min-height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.green};
  border-left: none;

  ${BoxSize};
`;

const ToggleButtonBase = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

interface ButtonProps extends StyleProps {
  children: React.ReactNode;
  status: boolean;
  onClick?: () => void;
  $arrow?: string;
}

const ToggleButton = ({ children, onClick, status, ...rest }: ButtonProps) => {
  return (
    <ToggleButtonBase {...rest}>
      <Button {...rest} onClick={onClick}>
        {children}
      </Button>
      <Box {...rest} data-testid={`test-${children}`}>
        {status ? 'O' : 'X'}
      </Box>
    </ToggleButtonBase>
  );
};

export default ToggleButton;
