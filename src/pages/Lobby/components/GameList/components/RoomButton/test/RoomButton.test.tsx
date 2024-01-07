import { describe, test, expect } from 'vitest';

import { render, screen } from 'src/test/testUtils';

import RoomButton from '../RoomButton';

describe('RoomButton 컴포넌트 테스트', () => {
  test('기본적인 텍스트가 보여야 합니다 -1-', () => {
    render(<RoomButton available={false} level="easy" targetScore={11} />);
    const buttonElement = screen.getByRole('button', {
      name: '난이도: easy 목표 점수: 11 입장 불가',
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test('기본적인 텍스트가 보여야 합니다 -1-', () => {
    render(<RoomButton available={true} level="easy" targetScore={11} />);
    const buttonElement = screen.getByRole('button', {
      name: '난이도: easy 목표 점수: 11 입장 가능',
    });
    expect(buttonElement).toBeInTheDocument();
  });
});
