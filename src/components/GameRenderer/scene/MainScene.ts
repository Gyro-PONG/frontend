import { Scene } from 'phaser';
import { Socket } from 'socket.io-client';

import { EVENT } from 'src/constants/socketEvent';
import theme from 'src/styles/theme';

import {
  BALL_COLOR,
  BALL_SIZE,
  CONFIG,
  LINE_COLOR,
  LINE_LOCATION,
  PADDLE_COLOR,
  PADDLE_SIZE,
  UPDATE_INTERVAL,
} from '../constants/config';
import { Position } from '../entities/Position';
import { IGameData, IGameState } from '../types/gameData';

export class MainScene extends Scene {
  private ball!: Phaser.GameObjects.Rectangle;
  private socket!: Socket;
  private gameStateButter: IGameState[];
  private lastReceivedTime: number | null;
  private initData!: IGameData;
  private hostPaddle!: Phaser.GameObjects.Rectangle;
  private guestPaddle!: Phaser.GameObjects.Rectangle;
  private hostScore!: Phaser.GameObjects.Text;
  private guestScore!: Phaser.GameObjects.Text;
  private sfx: boolean;

  constructor(sfx: boolean) {
    super({ key: 'MainScene' });
    this.sfx = sfx;
    this.gameStateButter = [];
    this.lastReceivedTime = null;
  }

  private initBall() {
    this.ball = this.add
      .rectangle(
        this.scale.width / 2,
        this.scale.height / 2,
        BALL_SIZE,
        BALL_SIZE,
        BALL_COLOR,
      )
      .setScale(window.devicePixelRatio);
  }

  private initPlayers() {
    this.hostPaddle = this.add
      .rectangle(
        this.scale.width / 16,
        this.scale.height / 2,
        PADDLE_SIZE.WIDTH,
        this.initData.level === 'easy'
          ? PADDLE_SIZE.EASY_MODE_HEIGHT
          : PADDLE_SIZE.HARD_MODE_HEIGHT,
        PADDLE_COLOR,
      )
      .setScale(window.devicePixelRatio);

    this.guestPaddle = this.add
      .rectangle(
        this.scale.width * (15 / 16),
        this.scale.height / 2,
        PADDLE_SIZE.WIDTH,
        this.initData.level === 'easy'
          ? PADDLE_SIZE.EASY_MODE_HEIGHT
          : PADDLE_SIZE.HARD_MODE_HEIGHT,
        PADDLE_COLOR,
      )
      .setScale(window.devicePixelRatio);
  }

  private initScores() {
    this.hostScore = this.add
      .text(this.scale.width / 4, this.scale.height / 4, '0', {
        color: theme.colors.green,
        fontFamily: 'NeoDunggeunmo',
        fontSize: '80px',
      })
      .setOrigin(0.5)
      .setScale(window.devicePixelRatio);

    this.guestScore = this.add
      .text(this.scale.width * (3 / 4), this.scale.height / 4, '0', {
        color: theme.colors.green,
        fontFamily: 'NeoDunggeunmo',
        fontSize: '80px',
      })
      .setOrigin(0.5)
      .setScale(window.devicePixelRatio);
  }

  private initLine() {
    const graphics = this.add.graphics({
      lineStyle: { width: 4, color: LINE_COLOR },
    });
    graphics.beginPath();
    graphics.moveTo(LINE_LOCATION.START_X, LINE_LOCATION.START_Y);
    graphics.lineTo(LINE_LOCATION.END_X, LINE_LOCATION.END_Y);
    graphics.closePath();
    graphics.strokePath();
    graphics.setScale(window.devicePixelRatio);
  }

  private getCurrentTime() {
    return Date.now();
  }

  private getInterpolationAlpha() {
    const previousState = this.gameStateButter[0];
    const currentState = this.gameStateButter[1];

    const timeDiff =
      currentState.lastUpdatedTime - previousState.lastUpdatedTime;
    if (timeDiff === 0) return 0;

    return timeDiff / UPDATE_INTERVAL;
  }

  private handleReconcilationComplete() {
    this.gameStateButter.shift();
  }

  private handleReconcilation() {
    if (
      !this.lastReceivedTime ||
      this.gameStateButter.length < CONFIG.MIN_BUFFER_SIZE
    )
      return;

    const previousState = this.gameStateButter[0];
    const currentState = this.gameStateButter[1];
    const interpolationAlpha = this.getInterpolationAlpha();

    const ballPosition = Position.fromJson(
      previousState.ball.position,
    ).interpolateXY(
      currentState.ball.position.x,
      currentState.ball.position.y,
      interpolationAlpha,
    );
    this.ball.setPosition(
      ballPosition.x * window.devicePixelRatio,
      ballPosition.y * window.devicePixelRatio,
    );

    const hostPaddlePosition = Position.fromJson(
      previousState.paddles[0].position,
    ).interpolateXY(
      currentState.paddles[0].position.x,
      currentState.paddles[0].position.y,
      interpolationAlpha,
    );
    this.hostPaddle.setPosition(
      hostPaddlePosition.x * window.devicePixelRatio,
      hostPaddlePosition.y * window.devicePixelRatio,
    );

    const guestPaddlePosition = Position.fromJson(
      previousState.paddles[1].position,
    ).interpolateXY(
      currentState.paddles[1].position.x,
      currentState.paddles[1].position.y,
      interpolationAlpha,
    );
    this.guestPaddle.setPosition(
      guestPaddlePosition.x * window.devicePixelRatio,
      guestPaddlePosition.y * window.devicePixelRatio,
    );

    this.handleReconcilationComplete();
  }

  private addToBuffer(gameState: IGameState) {
    this.gameStateButter.push(gameState);

    if (this.gameStateButter.length > CONFIG.MAX_BUFFER_SIZE) {
      this.gameStateButter.shift();
    }
  }

  private handleGameStateUpdate(gameState: IGameState) {
    this.lastReceivedTime = this.getCurrentTime();
    this.addToBuffer(gameState);
  }

  public init(gameData: IGameData) {
    this.socket = this.registry.get('socket') as Socket;
    this.initData = gameData;
  }

  public preload() {
    this.socket.on(EVENT.SEND_GAME_DATA, (gameState: IGameState) => {
      this.handleGameStateUpdate(gameState);
      this.hostScore.setText(gameState.hostScore.toString());
      this.guestScore.setText(gameState.guestScore.toString());
    });

    this.socket.on(EVENT.SEND_SFX, (type: 'paddle' | 'wall' | 'extinction') => {
      if (!this.sfx) return;
      if (type === 'paddle') {
        this.sound.play('paddle');
      } else if (type === 'wall') {
        this.sound.play('wall');
      } else if (type === 'extinction') {
        this.sound.play('extinction');
      }
    });
  }

  public create() {
    this.initBall();
    this.initPlayers();
    this.initScores();
    this.initLine();
  }

  public update() {
    this.handleReconcilation();
  }
}
