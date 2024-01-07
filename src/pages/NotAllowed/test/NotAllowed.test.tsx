import { describe, test, expect } from 'vitest';

import { render, screen } from 'src/test/testUtils';

import NotAllowed from '../NotAllowed';

describe('NotAllowed 페이지 테스트', () => {
  test('PC 접속이 허용되지 않을 경우, 관련된 안내가 보여야 합니다', () => {
    render(<NotAllowed type="pc" />);
    const titleElement = screen.getByText('Not Allowed');
    expect(titleElement).toBeInTheDocument();

    const textAreaElement1 = screen.getByText(
      '이 페이지는 PC에서 접속할 수 없습니다',
    );
    expect(textAreaElement1).toBeInTheDocument();

    const textAreaElement2 = screen.getByText('모바일에서 시도해주세요');
    expect(textAreaElement2).toBeInTheDocument();
  });

  test('모바일 접속이 허용되지 않을 경우, 관련된 안내가 보여야 합니다', () => {
    render(<NotAllowed type="mobile" />);
    const titleElement = screen.getByText('Not Allowed');
    expect(titleElement).toBeInTheDocument();

    const textAreaElement1 = screen.getByText(
      '이 페이지는 모바일에서 접속할 수 없습니다',
    );
    expect(textAreaElement1).toBeInTheDocument();

    const textAreaElement2 = screen.getByText('PC에서 시도해주세요');
    expect(textAreaElement2).toBeInTheDocument();
  });
});
