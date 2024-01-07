import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { render as originalRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { describe, test, expect, afterEach, beforeAll, afterAll } from 'vitest';

import { useMotionStore } from 'src/store/motion';
import { useUserStore } from 'src/store/user';
import theme from 'src/styles/theme';
import { render, screen, act } from 'src/test/testUtils';

import Home from '@pages/Home/Home';

import Settings from '../Settings';

describe('Settings 페이지 테스트', () => {
  beforeAll(() => {
    act(() => {
      useUserStore.setState({
        controllerSocketId: 'controllerSocketId',
        motion: false,
        vibration: false,
        sfx: false,
      });
    });
  });

  afterEach(() => {
    act(() => {
      useMotionStore.setState({ motionString: '' });
      useUserStore.setState({ motion: false, vibration: false, sfx: false });
    });
  });

  afterAll(() => {
    act(() => {
      useUserStore.setState({
        controllerSocketId: '',
      });
    });
  });

  test('타이틀 텍스트가 보여야 합니다', () => {
    render(<Settings />);
    const titleElement = screen.getByText('Settings');
    expect(titleElement).toBeInTheDocument();
  });

  test('나가기 버튼이 보여야 합니다', () => {
    render(<Settings />);
    const buttonElement = screen.getByRole('button', {
      name: '나가기',
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test('효과음 버튼이 보여야 합니다', () => {
    render(<Settings />);
    const buttonElement = screen.getByRole('button', {
      name: '효과음',
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test('진동 버튼이 보여야 합니다', () => {
    render(<Settings />);
    const buttonElement = screen.getByRole('button', {
      name: '진동',
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test('컨트롤러 움직임으로 버튼 누르기 버튼이 보여야 합니다', () => {
    render(<Settings />);
    const buttonElement = screen.getByRole('button', {
      name: '컨트롤러 움직임으로 버튼 누르기',
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test('효과음 버튼을 누른 경우 토글되어야 합니다', async () => {
    render(<Settings />);

    const buttonElement = screen.getByRole('button', {
      name: '효과음',
    });
    await userEvent.click(buttonElement);

    const boxElement = await screen.findByTestId('test-효과음');
    expect(boxElement).toHaveTextContent('O');
  });

  test('진동 버튼을 누른 경우 토글되어야 합니다', async () => {
    render(<Settings />);

    const buttonElement = screen.getByRole('button', {
      name: '진동',
    });
    await userEvent.click(buttonElement);

    const boxElement = await screen.findByTestId('test-진동');
    expect(boxElement).toHaveTextContent('O');
  });

  test('컨트롤러 움직임으로 버튼 누르기 버튼을 누른 경우 토글되어야 합니다', async () => {
    render(<Settings />);

    const buttonElement = screen.getByRole('button', {
      name: '컨트롤러 움직임으로 버튼 누르기',
    });
    await userEvent.click(buttonElement);

    const boxElement = await screen.findByTestId(
      'test-컨트롤러 움직임으로 버튼 누르기',
    );
    expect(boxElement).toHaveTextContent('O');
  });
});

describe('모션을 이용한 버튼 클릭 테스트', async () => {
  beforeAll(() => {
    act(() => {
      useUserStore.setState({ controllerSocketId: 'controllerSocketId' });
    });
  });

  afterEach(() => {
    act(() => {
      useMotionStore.setState({ motionString: '' });
      useUserStore.setState({ motion: false, vibration: false, sfx: false });
    });
  });

  afterAll(() => {
    act(() => {
      useUserStore.setState({
        motion: false,
        vibration: false,
        sfx: false,
        controllerSocketId: '',
      });
    });
  });

  test('모션 인식 결과가 ⇨⇧일 때, 효과음 버튼이 토글되어야 합니다', async () => {
    render(<Settings />);

    act(() => {
      useMotionStore.setState({ motionString: '⇨⇧' });
    });

    const buttonElement = await screen.findByTestId('test-효과음');
    expect(buttonElement).toHaveTextContent('O');
  });

  test('모션 인식 결과가 ⇨⇩일 때, 진동이 토글되어야 합니다', () => {
    render(<Settings />);

    act(() => {
      useMotionStore.setState({ motionString: '⇨⇩' });
    });

    const buttonElement = screen.getByTestId('test-진동');
    expect(buttonElement).toHaveTextContent('O');
  });

  test('모션 인식 결과가 ⇩⇦일 때, 홈으로 이동해야 합니다', async () => {
    originalRender(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/settings']}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
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

  describe('모달 테스트', () => {
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

    test('컨트롤러 연결 설정 버튼을 누르면 모달이 떠야 합니다.', async () => {
      act(() => {
        useUserStore.setState({ controllerSocketId: '' });
      });

      render(<Settings />);

      const buttonElement = screen.getByRole('button', {
        name: '컨트롤러 연결 설정',
      });
      await userEvent.click(buttonElement);

      const modalElement =
        await screen.findByText('모바일 기기를 연결해주세요');
      expect(modalElement).toBeInTheDocument();
    });
  });
});
