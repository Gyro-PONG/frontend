import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { render as originalRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { describe, test, expect, afterEach } from 'vitest';

import { useMotionStore } from 'src/store/motion';
import theme from 'src/styles/theme';
import { render, screen, act } from 'src/test/testUtils';

import Home from '@pages/Home/Home';

import Guides from '../Guides';

describe('Guide 페이지 테스트', () => {
  test('텍스트가 보여야 합니다', () => {
    render(<Guides />);
    const titleElement = screen.getByText('Guides');
    expect(titleElement).toBeInTheDocument();
  });

  test('이전 버튼이 보여야 합니다', () => {
    render(<Guides />);
    const buttonElement = screen.getByRole('button', {
      name: '이전',
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test('다음 버튼이 보여야 합니다', () => {
    render(<Guides />);
    const buttonElement = screen.getByRole('button', {
      name: '다음',
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test('나가기 버튼이 보여야 합니다', () => {
    render(<Guides />);
    const buttonElement = screen.getByRole('button', {
      name: '나가기',
    });
    expect(buttonElement).toBeInTheDocument();
  });
});

describe('모션을 이용한 화면 전환 테스트', () => {
  afterEach(() => {
    act(() => {
      useMotionStore.setState({ motionString: '' });
    });
  });

  test('모션 인식 결과가 ⇩⇦일 경우, 홈 페이지로 이동해야 합니다', async () => {
    originalRender(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/guides']}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guides" element={<Guides />} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>,
    );

    act(() => {
      useMotionStore.setState({ motionString: '⇩⇦' });
    });

    // 홈 페이지로 전환된 상태
    const titleElement = await screen.findByText('Gyro PONG');
    expect(titleElement).toBeInTheDocument();
  });

  test('모션 인식 결과가 ⇧⇨일 경우, 다음 단계로 이동해야 합니다.', async () => {
    render(<Guides />);

    act(() => {
      useMotionStore.setState({ motionString: '⇧⇨' });
    });

    // 다음 단계로 이동한 상태
    const cardElement = await screen.findByTestId('page-1');
    expect(cardElement).toBeInTheDocument();
  });

  test('모션 인식 결과가 ⇧⇦일 경우, 이전 단계로 이동해야 합니다.', async () => {
    render(<Guides />);

    act(() => {
      useMotionStore.setState({ motionString: '⇧⇨' });
    });

    // 다음 단계로 이동한 상태
    const cardElement1 = await screen.findByTestId('page-1');
    expect(cardElement1).toBeInTheDocument();

    act(() => {
      useMotionStore.setState({ motionString: '⇧⇦' });
    });

    // 이전 단계로 이동한 상태
    const cardElement0 = await screen.findByTestId('page-0');
    expect(cardElement0).toBeInTheDocument();
  });
});
