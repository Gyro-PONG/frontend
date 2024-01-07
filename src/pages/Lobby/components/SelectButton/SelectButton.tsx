import { useEffect, useState } from 'react';

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

const LayoutBase = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.div<StyleProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 20rem;
  min-height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.green};
  border-left: none;

  ${BoxSize};
`;

interface Props extends StyleProps {
  data: string[] | number[];
  children: React.ReactNode;
  setState: React.Dispatch<React.SetStateAction<string | number>>;
}

const SelectButton = ({ children, data, setState, ...rest }: Props) => {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prev) => {
      if (prev === data.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  };

  useEffect(() => {
    setState(data[index]);
  }, [data, setState, index]);

  return (
    <LayoutBase>
      <Button {...rest} onClick={handleClick}>
        {children}
      </Button>
      <Box>{data[index]}</Box>
    </LayoutBase>
  );
};

export default SelectButton;
