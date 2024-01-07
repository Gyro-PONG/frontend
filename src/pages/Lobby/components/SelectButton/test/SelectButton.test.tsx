import userEvent from '@testing-library/user-event';
import { describe, test, expect, vi } from 'vitest';

import { render, screen } from 'src/test/testUtils';

import SelectButton from '../SelectButton';

describe('SelectButton 컴포넌트 테스트', () => {
  test('텍스트가 보여야 합니다', () => {
    const setState = vi.fn();

    render(
      <SelectButton size="sm" data={['foo', 'bar']} setState={setState}>
        Hello World
      </SelectButton>,
    );

    const titleElement = screen.getByRole('button', {
      name: 'Hello World',
    });
    expect(titleElement).toBeInTheDocument();
  });

  test('size가 sm일 때, font-size는 2rem이어야 합니다', () => {
    const setState = vi.fn();

    render(
      <SelectButton size="sm" data={['foo', 'bar']} setState={setState}>
        Hello World
      </SelectButton>,
    );

    const titleElement = screen.getByRole('button', {
      name: 'Hello World',
    });
    expect(titleElement).toHaveStyle({ fontSize: '2rem' });
  });

  test('size가 md일 때, font-size는 2.5rem이어야 합니다', () => {
    const setState = vi.fn();

    render(
      <SelectButton size="md" data={['foo', 'bar']} setState={setState}>
        Hello World
      </SelectButton>,
    );

    const titleElement = screen.getByRole('button', {
      name: 'Hello World',
    });
    expect(titleElement).toHaveStyle({ fontSize: '2.5rem' });
  });

  test('size가 lg일 때, font-size는 3rem이어야 합니다', () => {
    const setState = vi.fn();

    render(
      <SelectButton size="lg" data={['foo', 'bar']} setState={setState}>
        Hello World
      </SelectButton>,
    );

    const titleElement = screen.getByRole('button', {
      name: 'Hello World',
    });
    expect(titleElement).toHaveStyle({ fontSize: '3rem' });
  });

  test('size가 지정되지 않았을 때, 기본 md 사이즈로 보여야 합니다.', () => {
    const setState = vi.fn();

    render(
      <SelectButton data={['foo', 'bar']} setState={setState}>
        Hello World
      </SelectButton>,
    );

    const titleElement = screen.getByRole('button', {
      name: 'Hello World',
    });
    expect(titleElement).toHaveStyle({ fontSize: '2.5rem' });
  });

  test('버튼을 클릭했을 때, 데이터의 다음 항목이 보여야 합니다', async () => {
    const setState = vi.fn();

    render(
      <SelectButton size="lg" data={['foo', 'bar']} setState={setState}>
        Hello World
      </SelectButton>,
    );
    const buttonElement = screen.getByRole('button', {
      name: 'Hello World',
    });

    await userEvent.click(buttonElement);

    const boxText = screen.getByText('bar');
    expect(boxText).toBeInTheDocument();
  });

  test('항목이 모두 표시되었다면, 다음 클릭시에는 처음 항목이 보여야 합니다', async () => {
    const setState = vi.fn();

    render(
      <SelectButton size="lg" data={['foo', 'bar']} setState={setState}>
        Hello World
      </SelectButton>,
    );
    const buttonElement = screen.getByRole('button', {
      name: 'Hello World',
    });

    await userEvent.click(buttonElement);

    const boxText1 = screen.getByText('bar');
    expect(boxText1).toBeInTheDocument();

    await userEvent.click(buttonElement);

    const boxText2 = screen.getByText('foo');
    expect(boxText2).toBeInTheDocument();
  });
});
