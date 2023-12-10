import { Route, Routes } from 'react-router-dom';

import Controller from '@pages/Controller/Controller';
import Game from '@pages/Game/Game';
import Guides from '@pages/Guides/Guides';
import Home from '@pages/Home/Home';
import Lobby from '@pages/Lobby/Lobby';
import NotFound from '@pages/NotFound/NotFound';
import Settings from '@pages/Settings/Settings';

import { PATH } from './constants/path';
import ControllerRoute from './routes/ControllerRoute';
import PcRoute from './routes/PcRoute';

const App = () => {
  return (
    <Routes>
      <Route element={<PcRoute />}>
        <Route path={PATH.HOME} element={<Home />} />
        <Route path={PATH.GUIDES} element={<Guides />} />
        <Route path={PATH.SETTINGS} element={<Settings />} />
        <Route path={PATH.LOBBY} element={<Lobby />} />
        <Route path={PATH.GAME} element={<Game />} />
      </Route>
      <Route element={<ControllerRoute />}>
        <Route path={PATH.CONTROLLER} element={<Controller />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
