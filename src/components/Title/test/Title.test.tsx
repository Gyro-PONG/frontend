import { describe, test, expect } from 'vitest';

import { render, screen } from 'src/test/testUtils';

import Title from '../Title';

describe('Title 컴포넌트 테스트', () => {
  test('텍스트가 보여야 합니다', () => {
    render(<Title>Hello World</Title>);
    const titleElement = screen.getByText('Hello World');
    expect(titleElement).toBeInTheDocument();
  });
});

describe('size 테스트', () => {
  test('size가 xs일 때, height는 3rem이어야 합니다', () => {
    render(<Title size="xs">Hello World</Title>);
    const titleElement = screen.getByText('Hello World');
    expect(titleElement).toHaveStyle({ height: '3rem' });
  });

  test('size가 sm일 때, height는 4.5rem이어야 합니다', () => {
    render(<Title size="sm">Hello World</Title>);
    const titleElement = screen.getByText('Hello World');
    expect(titleElement).toHaveStyle({ height: '4.5rem' });
  });

  test('size가 md일 때, height는 9rem이어야 합니다', () => {
    render(<Title size="md">Hello World</Title>);
    const titleElement = screen.getByText('Hello World');
    expect(titleElement).toHaveStyle({ height: '9rem' });
  });

  test('size가 lg일 때, height는 19rem이어야 합니다', () => {
    render(<Title size="lg">Hello World</Title>);
    const titleElement = screen.getByText('Hello World');
    expect(titleElement).toHaveStyle({ height: '19rem' });
  });
});

describe('animation 테스트', () => {
  test('fade 속성이 부여되었을 때, 애니메이션이 적용되어야 합니다', () => {
    render(<Title $fade>Hello World</Title>);
    const titleElement = screen.getByText('Hello World');
    expect(titleElement).toHaveStyle({ animation: '0.6s flicker steps(4)' });
  });
});
