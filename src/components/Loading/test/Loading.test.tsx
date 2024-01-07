import { describe, test, expect, vi, beforeAll, afterEach } from 'vitest';

import { render, screen, act } from 'src/test/testUtils';

import Loading from '../Loading';

describe('Loading 컴포넌트 테스트', () => {
  test('텍스트가 보여야 합니다', () => {
    render(<Loading message="Hello World" />);
    const loadingElement = screen.getByText('Hello World');
    expect(loadingElement).toBeInTheDocument();
  });
});

describe('타이머 테스트', async () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
  });

  test('1초 뒤에 텍스트 뒤에 .이 추가되어야 합니다', () => {
    render(<Loading message="Hello World" />);

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    const loadingElement = screen.getByText('Hello World.');
    expect(loadingElement).toBeInTheDocument();
  });

  test('2초 뒤에 텍스트 뒤에 ..이 추가되어야 합니다', () => {
    render(<Loading message="Hello World" />);

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    const loadingElement = screen.getByText('Hello World..');
    expect(loadingElement).toBeInTheDocument();
  });

  test('3초 뒤에 텍스트 뒤에 ....이 추가되어야 합니다', () => {
    render(<Loading message="Hello World" />);

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    const loadingElement = screen.getByText('Hello World...');
    expect(loadingElement).toBeInTheDocument();
  });

  test('4초 뒤에 텍스트 뒤에 .이 사라져야 합니다', () => {
    render(<Loading message="Hello World" />);

    act(() => {
      vi.advanceTimersByTime(4000);
    });

    const loadingElement = screen.getByText('Hello World');
    expect(loadingElement).toBeInTheDocument();
  });
});
