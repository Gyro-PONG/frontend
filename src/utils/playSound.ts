import click from '/assets/audios/click.mp3';
import extinction from '/assets/audios/extinction.mp3';
import paddleHit from '/assets/audios/paddle_hit.mp3';
import wallHit from '/assets/audios/wall_hit.mp3';

const clickSound = new Audio(click);
const extinctionSound = new Audio(extinction);
const paddleHitSound = new Audio(paddleHit);
const wallHitSound = new Audio(wallHit);

export const playClickSound = () => {
  clickSound.play();
};

export const playExtinctionSound = () => {
  extinctionSound.play();
};

export const playPaddleHitSound = () => {
  paddleHitSound.play();
};

export const playWallHitSound = () => {
  wallHitSound.play();
};
