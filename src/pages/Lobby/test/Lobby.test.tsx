import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { render as originalRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { describe, test, expect, afterEach, beforeAll, afterAll } from 'vitest';

import { useMotionStore } from 'src/store/motion';
import theme from 'src/styles/theme';
import { render, screen, act } from 'src/test/testUtils';

import Home from '@pages/Home/Home';

import Lobby from '../Lobby';

beforeAll(() => {
  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal');
  document.body.appendChild(modalRoot);
});

afterAll(() => {
  const modalRoot = document.getElementById('modal');
  if (modalRoot) {
    document.body.removeChild(modalRoot);
  }
});

describe('Lobby 페이지 테스트', () => {
  test('타이틀 텍스트가 보여야 합니다', () => {
    render(<Lobby />);
    const titleElement = screen.getByText('Lobby');
    expect(titleElement).toBeInTheDocument();
  });

  test('게임 생성 버튼이 보여야 합니다', () => {
    render(<Lobby />);
    const buttonElement = screen.getByRole('button', {
      name: '게임 생성',
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test('뒤로 가기 버튼이 보여야 합니다', () => {
    render(<Lobby />);
    const buttonElement = screen.getByRole('button', {
      name: '뒤로 가기',
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test('게임 생성 버튼을 클릭하면, 게임 생성 모달이 떠야 합니다', async () => {
    render(<Lobby />);
    const buttonElement = screen.getByRole('button', {
      name: '게임 생성',
    });

    await userEvent.click(buttonElement);

    const modalElement = await screen.findByText('난이도');
    expect(modalElement).toBeInTheDocument();
  });

  test('게임 생성 모달에서 게임 생성 버튼을 누르면 로딩 화면이 떠야 합니다', async () => {
    render(<Lobby />);
    const buttonElement = screen.getByRole('button', {
      name: '게임 생성',
    });
    await userEvent.click(buttonElement);

    const modalElement = await screen.findByText('난이도');
    expect(modalElement).toBeInTheDocument();

    const createButtonElement = await screen.findAllByRole('button', {
      name: '게임 생성',
    });
    await userEvent.click(createButtonElement[0]);

    const titleElement = await screen.findByText('Loading');
    expect(titleElement).toBeInTheDocument();
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
        <MemoryRouter initialEntries={['/lobby']}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lobby" element={<Lobby />} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>,
    );

    act(() => {
      useMotionStore.setState({ motionString: '⇩⇦' });
    });

    // 홈으로 전환된 상태
    const titleElement = await screen.findByText('Gyro PONG');
    expect(titleElement).toBeInTheDocument();
  });

  test("모션 인식 결과가 ⇦⇨일 경우, '게임 생성'에 대한 모달이 떠야 합니다", async () => {
    render(<Lobby />);

    act(() => {
      useMotionStore.setState({ motionString: '⇦⇨' });
    });

    // '게임 생성'에 대한 모달이 떠야 합니다
    const modalElement = await screen.findByText('난이도');
    expect(modalElement).toBeInTheDocument();
  });
});
