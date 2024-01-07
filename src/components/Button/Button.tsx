import styled, { css } from 'styled-components';

import { useUserStore } from 'src/store/user';
import { playClickSound } from 'src/utils/playSound';

type Size = 'sm' | 'md' | 'lg';

interface StyleProps {
  size?: Size;
}

const ButtonSize = css<StyleProps>`
  ${({ size = 'md' }) => {
    if (size === 'sm') {
      return css`
        min-height: 4rem;
        height: 4rem;
        font-size: 2rem;
      `;
    }

    if (size === 'md') {
      return css`
        min-height: 4.5rem;
        height: 4.5rem;
        font-size: 2.5rem;
      `;
    }

    if (size === 'lg') {
      return css`
        min-height: 5rem;
        height: 5rem;
        font-size: 3rem;
      `;
    }
  }}
`;

const ButtonStatus = css`
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: ${({ theme }) => theme.colors.black};
      background-color: ${({ theme }) => theme.colors.green};
    }
  }

  &:active {
    color: ${({ theme }) => theme.colors.green};
    background-color: ${({ theme }) => theme.colors.black};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.green};
    background-color: ${({ theme }) => theme.colors.black};
    text-decoration: line-through;
    opacity: 0.4;
    cursor: default;
  }
`;

const ButtonBase = styled.button<StyleProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  min-width: 16rem;
  height: 5rem;
  color: ${({ theme }) => theme.colors.green};
  background-color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.green};
  cursor: pointer;
  user-select: none;

  ${ButtonStatus};
  ${ButtonSize};
`;

interface ButtonProps extends StyleProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  $arrow?: string;
}

const Button = ({ children, onClick, $arrow, ...rest }: ButtonProps) => {
  const sfx = useUserStore((state) => state.sfx);
  const motion = useUserStore((state) => state.motion);

  const handleClick = () => {
    onClick && onClick();
    sfx && playClickSound();
  };

  return (
    <ButtonBase onClick={handleClick} {...rest}>
      {children}
      {motion && <p>{$arrow}</p>}
    </ButtonBase>
  );
};

export default Button;
