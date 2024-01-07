import styled, { css } from 'styled-components';

type Size = 'xs' | 'sm' | 'md' | 'lg';

interface StyleProps {
  size?: Size;
  $fade?: boolean;
}

const TitleSize = css<StyleProps>`
  ${({ size = 'md' }) => {
    if (size === 'xs') {
      return css`
        height: 3rem;
        font-size: 2rem;
      `;
    }

    if (size === 'sm') {
      return css`
        height: 4.5rem;
        font-size: 4rem;
      `;
    }

    if (size === 'md') {
      return css`
        height: 9rem;
        font-size: 6.5rem;
      `;
    }

    if (size === 'lg') {
      return css`
        height: 19rem;
        font-size: 12.5rem;
      `;
    }
  }}
`;

const TitleDecoration = css`
  &::before {
    display: flex;
    align-items: center;
    content: '|';
    margin: 0 auto;
  }

  &::after {
    display: flex;
    align-items: center;
    content: '|';
    margin: 0 auto;
  }
`;

const TitleAnimation = css<StyleProps>`
  @keyframes flicker {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  ${({ $fade }) => {
    if ($fade) {
      return css`
        animation: 0.6s flicker steps(4);
      `;
    }
  }}
`;

const TitleBase = styled.h1<StyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  flex-wrap: nowrap;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.green};
  white-space: nowrap;

  ${TitleSize};
  ${TitleDecoration};
  ${TitleAnimation};
`;

interface TitleProps extends StyleProps {
  children: React.ReactNode;
}

const Title = ({ children, ...rest }: TitleProps) => {
  return <TitleBase {...rest}>{children}</TitleBase>;
};

export default Title;
