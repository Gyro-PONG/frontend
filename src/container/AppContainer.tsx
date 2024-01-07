import { HashRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'src/styles/GlobalStyles';
import theme from 'src/styles/theme';

interface Props {
  children: React.ReactNode;
}

const AppContainer = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <GlobalStyles />
        {children}
      </HashRouter>
    </ThemeProvider>
  );
};

export default AppContainer;
