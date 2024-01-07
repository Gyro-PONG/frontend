import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { EVENT } from 'src/constants/socketEvent';
import { useControllerStore } from 'src/store/controller';
import { GameInfo } from 'src/types/game';
import {
  s_CreateGameCallback,
  s_DisconnectByUserCallback,
  s_ExitGameCallback,
  s_FinishGameCallback,
  s_JoinGameCallback,
  socket,
} from 'src/utils/socketAPI';

import Check from './components/Check';
import Connection from './components/Connection';
import Expiration from './components/Expiration';
import Game from './components/Game';
import Home from './components/Home';
import Reset from './components/Reset';
import Sync from './components/Sync';
import Layout from './layout/Layout';
import { activate, deactivate } from './utils/sensor';

import type { Step } from './types/step';

interface GameResult {
  winner: 'host' | 'guest';
  gameId: string;
}

type VibrtionType = 'hp' | 'gp' | 'hs' | 'gs';

const Controller = () => {
  const { userid } = useParams();

  const userType = useRef<'host' | 'guest' | ''>('');
  const vibration = useRef(false);

  const setMotion = useControllerStore((state) => state.setMotion);

  const [step, setStep] = useState<Step>('check');

  useEffect(() => {
    socket.on(EVENT.DISCONNECT_BY_USER, () => {
      deactivate('normal');
      s_DisconnectByUserCallback();
      setStep('expiration');
    });

    socket.on(EVENT.CLOSE_ANGLE_CHECK, () => {
      setStep('home');
    });

    socket.on(EVENT.RESET_ANGLE, () => {
      setStep('reset');
    });

    socket.on(EVENT.CREATE_GAME_SUCCESS, (gameInfo: GameInfo) => {
      s_CreateGameCallback(gameInfo.gameId);
      userType.current = 'host';
      setStep('game');
    });

    socket.on(EVENT.EXIT_GAME_BY_HOST, (gameId: string) => {
      s_ExitGameCallback(gameId);
      userType.current = '';
      setStep('home');
    });

    socket.on(EVENT.JOIN_GAME, (gameId: string) => {
      s_JoinGameCallback(gameId);
      userType.current = 'guest';
      setStep('game');
    });

    socket.on(EVENT.EXIT_GAME_BY_GUEST, (gameId: string) => {
      s_ExitGameCallback(gameId);
      userType.current = '';
      setStep('home');
    });

    socket.on(EVENT.START_GAME, async () => {
      await activate('normal');
    });

    socket.on(EVENT.FINISH_GAME, (gameResult: GameResult) => {
      deactivate('normal');
      s_FinishGameCallback(gameResult.gameId);
      userType.current = '';
      setStep('home');
    });

    socket.on(EVENT.SET_VIBRATION, (set: boolean) => {
      vibration.current = set;
    });

    socket.on(EVENT.SEND_VIBRATION, (type: VibrtionType) => {
      if (vibration.current === false) return;

      if (userType.current === 'host') {
        if (type === 'hp') {
          window.navigator.vibrate([80]);
        } else if (type === 'hs') {
          window.navigator.vibrate([100, 10, 100]);
        } else if (type === 'gs') {
          window.navigator.vibrate([500]);
        }
      } else if (userType.current === 'guest') {
        if (type === 'gp') {
          window.navigator.vibrate([80]);
        } else if (type === 'hs') {
          window.navigator.vibrate([500]);
        } else if (type === 'gs') {
          window.navigator.vibrate([100, 10, 100]);
        }
      }
    });

    socket.on(EVENT.SET_MOTION, (set: boolean) => {
      setMotion(set);
    });

    return () => {
      socket.off(EVENT.DISCONNECT_BY_USER);
      socket.off(EVENT.CLOSE_ANGLE_CHECK);
      socket.off(EVENT.RESET_ANGLE);
      socket.off(EVENT.CREATE_GAME_SUCCESS);
      socket.off(EVENT.EXIT_GAME_BY_HOST);
      socket.off(EVENT.JOIN_GAME);
      socket.off(EVENT.EXIT_GAME_BY_GUEST);
      socket.off(EVENT.START_GAME);
      socket.off(EVENT.FINISH_GAME);
      socket.off(EVENT.SET_VIBRATION);
      socket.off(EVENT.SEND_VIBRATION);
      socket.off(EVENT.SET_MOTION);
    };
  }, [setMotion]);

  return (
    <Layout>
      {step === 'check' && <Check setStep={setStep} />}
      {step === 'connection' && userid && (
        <Connection userId={userid} setStep={setStep} />
      )}
      {step === 'sync' && <Sync setStep={setStep} />}
      {step === 'expiration' && <Expiration />}
      {step === 'home' && <Home />}
      {step === 'game' && <Game />}
      {step === 'reset' && <Reset setStep={setStep} />}
    </Layout>
  );
};

export default Controller;
