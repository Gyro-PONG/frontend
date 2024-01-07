import userEvent from '@testing-library/user-event';
import { describe, test, expect, vi } from 'vitest';

import { render, screen } from 'src/test/testUtils';

import Button from '../Button';

describe('Button 컴포넌트 테스트', () => {
  test('텍스트가 보여야 합니다', () => {
    render(<Button>Hello World</Button>);
    const buttonElement = screen.getByText('Hello World');
    expect(buttonElement).toBeInTheDocument();
  });

  test('클릭 이벤트가 발생해야 합니다', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Hello World</Button>);
    const buttonElement = screen.getByText('Hello World');
    await userEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('disabled가 true일 때, 클릭 이벤트가 발생하지 않아야 합니다', async () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        Hello World
      </Button>,
    );
    const buttonElement = screen.getByText('Hello World');
    await userEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
