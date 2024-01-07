import { Scene } from 'phaser';
import { Socket } from 'socket.io-client';

import { EVENT } from 'src/constants/socketEvent';
import theme from 'src/styles/theme';
import { s_LoadGameInfo, socket } from 'src/utils/socketAPI';

import { IGameData } from '../types/gameData';

export class PreloadScene extends Scene {
  private socket!: Socket;
  private initData!: IGameData;
  private type: 'host' | 'guest';

  constructor(type: 'host' | 'guest') {
    super({ key: 'PreloadScene' });
    this.type = type;
  }

  private loadAudios() {
    this.load.audio('paddle', 'assets/audios/paddle_hit.mp3');
    this.load.audio('wall', 'assets/audios/wall_hit.mp3');
    this.load.audio('extinction', 'assets/audios/extinction.mp3');
  }

  private addAudios() {
    this.sound.add('paddle', { loop: false });
    this.sound.add('wall', { loop: false });
    this.sound.add('extinction', { loop: false });
  }

  public init() {
    this.registry.set('socket', socket);
  }

  public preload() {
    this.socket = this.registry.get('socket');
    this.loadAudios();

    this.socket.on(EVENT.LOAD_GAME_INFO, (gameData: IGameData) => {
      this.initData = gameData;
    });

    this.socket.on(EVENT.ENGINE_ON, () => {
      this.scene.start('MainScene', { level: this.initData.level });
    });
  }

  public create() {
    this.addAudios();
    this.add
      .text(this.scale.width / 2, this.scale.height / 2, '게임을 불러오는 중', {
        color: theme.colors.green,
        fontSize: '50px',
        fontFamily: 'NeoDunggeunmo',
      })
      .setOrigin(0.5)
      .setScale(window.devicePixelRatio);
    s_LoadGameInfo(this.type);
  }
}
