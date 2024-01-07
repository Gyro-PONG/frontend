import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { render as originalRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { describe, test, expect, afterEach } from 'vitest';

import { useMotionStore } from 'src/store/motion';
import theme from 'src/styles/theme';
import { render, screen, act } from 'src/test/testUtils';

import Guides from '@pages/Guides/Guides';
import Lobby from '@pages/Lobby/Lobby';
import Settings from '@pages/Settings/Settings';

import Home from '../Home';

describe('Home 페이지 테스트', () => {
  test('타이틀 텍스트가 보여야 합니다', () => {
    render(<Home />);
    const titleElement = screen.getByText('Gyro PONG');
    expect(titleElement).toBeInTheDocument();
  });

  test('설정 버튼이 보여야 합니다', () => {
    render(<Home />);
    const buttonElement = screen.getByRole('button', {
      name: '설정',
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test('시작 버튼이 보여야 합니다', () => {
    render(<Home />);
    const buttonElement = screen.getByRole('button', {
      name: '시작',
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test('도움말 버튼이 보여야 합니다', () => {
    render(<Home />);
    const buttonElement = screen.getByRole('button', {
      name: '도움말',
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test('설정 버튼을 클릭하면, 설정 페이지로 이동해야 합니다', async () => {
    originalRender(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>,
    );

    const buttonElement = screen.getByRole('button', {
      name: '설정',
    });
    await userEvent.click(buttonElement);

    // 설정 페이지로 전환된 상태
    const titleElement = await screen.findByText('Settings');
    expect(titleElement).toBeInTheDocument();
  });

  test('Home 컴포넌트에 맨 처음 진입했을 때, 시작 버튼이 비활성화 되어있어야 합니다', () => {
    render(<Home />);
    const buttonElement = screen.getByRole('button', {
      name: '시작',
    });
    expect(buttonElement).toBeDisabled();
  });

  test('도움말 버튼을 클릭하면, 도움말 페이지로 이동해야 합니다', async () => {
    originalRender(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guides" element={<Guides />} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>,
    );

    const buttonElement = screen.getByRole('button', {
      name: '도움말',
    });
    await userEvent.click(buttonElement);

    // 도움말 페이지로 전환된 상태
    const titleElement = await screen.findByText('Guides');
    expect(titleElement).toBeInTheDocument();
  });
});

describe('모션을 이용한 화면 전환 테스트', () => {
  afterEach(() => {
    act(() => {
      useMotionStore.setState({ motionString: '' });
    });
  });

  test('모션 인식 결과가 ⇦⇧일 경우, 설정 페이지로 이동해야 합니다', async () => {
    originalRender(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>,
    );

    act(() => {
      useMotionStore.setState({ motionString: '⇦⇧' });
    });

    // 설정 페이지로 전환된 상태
    const titleElement = await screen.findByText('Settings');
    expect(titleElement).toBeInTheDocument();
  });

  test('모션 인식 결과가 ⇨⇧일 경우, 도움말 페이지로 이동해야 합니다', async () => {
    originalRender(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guides" element={<Guides />} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>,
    );

    act(() => {
      useMotionStore.setState({ motionString: '⇨⇧' });
    });

    // 도움말 페이지로 전환된 상태
    const titleElement = await screen.findByText('Guides');
    expect(titleElement).toBeInTheDocument();
  });

  test('모션 인식 결과가 ⇧⇩일 경우, 로비 페이지로 이동해야 합니다.', async () => {
    originalRender(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lobby" element={<Lobby />} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>,
    );

    act(() => {
      useMotionStore.setState({ motionString: '⇧⇩' });
    });

    // 로비 페이지로 전환된 상태
    const titleElement = await screen.findByText('Lobby');
    expect(titleElement).toBeInTheDocument();
  });
});
