import { RenderOptions, render } from '@testing-library/react';

import AppContainer from '../container/AppContainer';

const customRender = (ui: React.ReactElement, options?: RenderOptions) => {
  render(ui, { wrapper: AppContainer, ...options });
};

export { screen, act } from '@testing-library/react';
export { customRender as render };
