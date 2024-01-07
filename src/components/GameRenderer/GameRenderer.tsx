import { useEffect, useRef } from 'react';

import Phaser from 'phaser';
import styled from 'styled-components';

import { FPS, SIZE } from './constants/config';
import { MainScene } from './scene/MainScene';
import { PreloadScene } from './scene/PreloadScene';

const LayoutBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

interface Props {
  type: 'host' | 'guest';
  sfx: boolean;
}

const GameRenderer = ({ type, sfx }: Props) => {
  const divRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      parent: 'phaser-div',
      width: SIZE.WIDTH,
      height: SIZE.HEIGHT,
      scale: {
        mode: Phaser.Scale.NONE,
        zoom: 1 / window.devicePixelRatio,
        width: 1280 * window.devicePixelRatio,
        height: 800 * window.devicePixelRatio,
      },
      disableContextMenu: true,
      pixelArt: true,
      fps: {
        target: FPS,
      },
      backgroundColor: '#111111',
      scene: [new PreloadScene(type), new MainScene(sfx)],
    };

    gameRef.current = new Phaser.Game(config);
  }, [type, sfx]);

  return <LayoutBase ref={divRef} id="phaser-div" />;
};

export default GameRenderer;
