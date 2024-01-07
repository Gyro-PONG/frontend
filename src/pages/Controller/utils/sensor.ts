import { EVENT } from 'src/constants/socketEvent';
import {
  s_SendBeta,
  s_InvalidSensor,
  socket,
  s_SendMotionUp,
  s_SendMotionDown,
  s_SendMotionLeft,
  s_SendMotionRight,
} from 'src/utils/socketAPI';

interface DeviceOrientationEventIOS extends DeviceOrientationEvent {
  requestPermission?: () => Promise<'granted' | 'denied'>;
}

let cache = Number.MIN_SAFE_INTEGER;

const handleOrientation = (event: DeviceOrientationEvent) => {
  const { beta } = event;

  if (beta === null) {
    s_InvalidSensor();
    return;
  }

  const intBeta = Number(beta.toFixed(0));

  if (cache !== intBeta) {
    s_SendBeta(intBeta);
    cache = intBeta;
  }
};

let cacheX = 0;
let cacheZ = 0;

let topBorder = 0;
let bottomBorder = 0;
let leftBorder = 0;
let rightBorder = 0;

let hasSent = false;
let isInit = true;

let lastInput: 'up' | 'down' | 'left' | 'right' | '' = '';

const handleMotion = (event: DeviceOrientationEvent) => {
  let { alpha } = event;
  const { beta } = event;

  if (alpha === null || beta === null) {
    s_InvalidSensor();
    return;
  }

  if (alpha > 180) {
    alpha -= 361;
  }

  if (isInit && alpha && beta) {
    cacheZ = alpha;
    cacheX = beta;
    isInit = false;
  }

  topBorder = cacheX + 20;
  bottomBorder = cacheX - 20;
  leftBorder = cacheZ + 20;
  rightBorder = cacheZ - 20;

  if (beta > topBorder && !isInit) {
    if (lastInput !== 'up') {
      lastInput = 'up';
      hasSent = true;
      s_SendMotionUp();
    }
  } else if (beta < bottomBorder && !isInit) {
    if (lastInput !== 'down') {
      lastInput = 'down';
      hasSent = true;
      s_SendMotionDown();
    }
  } else if (alpha > leftBorder && !isInit) {
    if (lastInput !== 'left') {
      lastInput = 'left';
      hasSent = true;
      s_SendMotionLeft();
    }
  } else if (alpha < rightBorder && !isInit) {
    if (lastInput !== 'right') {
      lastInput = 'right';
      hasSent = true;
      s_SendMotionRight();
    }
  } else {
    hasSent = false;
  }

  if (hasSent) {
    cacheX = beta;
    cacheZ = alpha;
  }
};

/**
 *
 * @description active 함수의 실행을 중지시킨다. 즉 센서 값의 송출을 중단시킨다.
 * * active 함수를 실행시켰을 때 인자에 넣은 type 그대로 넣는다.
 */
export const deactivate = (type: 'normal' | 'motion') => {
  if (type === 'normal') {
    window.removeEventListener('deviceorientation', handleOrientation);
  } else if (type === 'motion') {
    isInit = true;
    lastInput = '';
    window.removeEventListener('deviceorientation', handleMotion);
  }
};

/**
 *
 * @description 디바이스에서 orientation을 지원하는지 확인하고, 지원한다면 해당 이벤트를 활성화한다.
 * 지원하지 않을 경우 에러를 발생시킨다.
 * * '일반 목적'으로 실행시키고자 할 경우 type에 'normal'을 넣는다.
 * * '움직임으로 버튼 클릭 목적'으로 실행시키고자 할 경우 type에 'motion'을 넣는다.
 */
export const activate = async (type: 'normal' | 'motion') => {
  // 디바이스에서 orientation을 지원하지 않을 경우
  if (!DeviceOrientationEvent) {
    throw new Error('error');
  }

  const requestPermission = (
    DeviceOrientationEvent as unknown as DeviceOrientationEventIOS
  ).requestPermission;

  if (typeof requestPermission === 'function') {
    // mobile safari 브라우저에서 접속할 경우
    const response = await requestPermission();

    if (response === 'granted') {
      if (type === 'normal') {
        window.addEventListener('deviceorientation', handleOrientation);
      } else if (type === 'motion') {
        window.addEventListener('deviceorientation', handleMotion);
      }
    } else {
      throw new Error('denied');
    }
  } else {
    // 그 외 브라우저에서 접속할 경우
    if (type === 'normal') {
      window.addEventListener('deviceorientation', handleOrientation);
    } else if (type === 'motion') {
      window.addEventListener('deviceorientation', handleMotion);
    }
  }
};

export const sensorTest = async () => {
  try {
    await activate('normal');
    await new Promise<void>((resolve, reject) => {
      socket.on(EVENT.INVALID_SENSOR, () => {
        socket.off(EVENT.INVALID_SENSOR);
        reject(new Error('error'));
      });
      socket.on(EVENT.SEND_BETA, () => {
        socket.off(EVENT.SEND_BETA);
        resolve();
      });
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  } finally {
    deactivate('normal');
  }
};
