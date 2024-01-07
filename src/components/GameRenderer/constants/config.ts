const WIDTH = 1280;
const HEIGHT = 800;

export const CONFIG = {
  MIN_BUFFER_SIZE: 2,
  MAX_BUFFER_SIZE: 8,
} as const;

export const SIZE = {
  WIDTH,
  HEIGHT,
} as const;

export const FPS = 60;
export const UPDATE_INTERVAL = 1000 / FPS;

export const LINE_LOCATION = {
  START_X: WIDTH / 2,
  START_Y: 0,
  END_X: WIDTH / 2,
  END_Y: HEIGHT,
} as const;

export const TEXT_LOCATION = {
  HOST_X: WIDTH / 4,
  GUEST_X: WIDTH * (3 / 4),
  Y: HEIGHT / 4,
} as const;

export const PADDLE_LOCATION_X = {
  HOST: WIDTH / 16,
  GUEST: (WIDTH * 15) / 16,
} as const;

export const PADDLE_SIZE = {
  WIDTH: WIDTH / 40,
  EASY_MODE_HEIGHT: HEIGHT / 5,
  HARD_MODE_HEIGHT: HEIGHT / 8,
} as const;

export const BALL_SIZE = WIDTH / 40;

export const BALL_COLOR = 0x00ff2b;
export const PADDLE_COLOR = 0x00ff2b;
export const TEXT_COLOR = 0x00ff2b;
export const LINE_COLOR = 0x00ff2b;
