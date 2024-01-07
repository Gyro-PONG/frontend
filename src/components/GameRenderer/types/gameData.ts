import { IPosition } from './position';
import { IVelocity } from './velocity';

interface IBall {
  position: IPosition;
  velocity: IVelocity;
}

interface IPaddle {
  position: IPosition;
  velocity: IVelocity;
}

export interface IGameState {
  ball: IBall;
  paddles: IPaddle[];
  hostScore: number;
  guestScore: number;
  lastUpdatedTime: number;
}

export interface IGameData {
  level: string;
  targetScore: number;
}
