import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { render as originalRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { describe, test, expect } from 'vitest';

import theme from 'src/styles/theme';
import { render, screen } from 'src/test/testUtils';

import Home from '@pages/Home/Home';

import NotFound from '../NotFound';

describe('NotFound 페이지 테스트', () => {
  test('타이틀 텍스트가 보여야 합니다', () => {
    render(<NotFound />);
    const titleElement = screen.getByText('Not Found');
    expect(titleElement).toBeInTheDocument();
  });

  test('홈으로 돌아가기 버튼이 보여야 합니다', () => {
    render(<NotFound />);
    const buttonElement = screen.getByRole('button', {
      name: '홈으로 돌아가기',
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test('홈으로 돌아가기 버튼을 클릭하면, 홈으로 이동해야 합니다', async () => {
    originalRender(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/invalid-url']}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>,
    );

    const buttonElement = screen.getByRole('button', {
      name: '홈으로 돌아가기',
    });
    await userEvent.click(buttonElement);

    // 홈으로 전환된 상태
    const titleElement = await screen.findByText('Gyro PONG');
    expect(titleElement).toBeInTheDocument();
  });
});
