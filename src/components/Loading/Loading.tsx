import { useEffect, useState } from 'react';

import styled from 'styled-components';

import Title from '@components/Title/Title';

type Size = 'xs' | 'sm' | 'md' | 'lg';

interface StyledProps {
  size?: Size;
}

const LoadingBase = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;

  & > p {
    font-size: 1.75rem;
  }
`;

interface LoadingProps extends StyledProps {
  message: string;
}

const Loading = ({ message, ...rest }: LoadingProps) => {
  const [dot, setDot] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDot((prev) => {
        if (prev.length === 3) {
          return '';
        }

        return prev + '.';
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <LoadingBase>
      <Title {...rest}>Loading</Title>
      <p>
        {message}
        {dot}
      </p>
    </LoadingBase>
  );
};

export default Loading;
