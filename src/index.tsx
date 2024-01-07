import ReactDOM from 'react-dom/client';

import App from './App';
import AppContainer from './container/AppContainer';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <AppContainer>
    <App />
  </AppContainer>,
);
