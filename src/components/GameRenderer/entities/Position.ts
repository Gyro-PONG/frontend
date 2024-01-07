import { IPosition } from '../types/position';

export class Position implements IPosition {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public interpolate(target: Position, alpha: number): Position {
    const deltaX = target.x - this.x;
    const deltaY = target.y - this.y;
    const interpolatedX = this.x + deltaX * alpha;
    const interpolatedY = this.y + deltaY * alpha;
    return new Position(interpolatedX, interpolatedY);
  }

  public interpolateXY(
    targetX: number,
    targetY: number,
    alpha: number,
  ): Position {
    return this.interpolate(new Position(targetX, targetY), alpha);
  }

  public toJson(): IPosition {
    return {
      x: this.x,
      y: this.y,
    };
  }

  static fromJson({ x, y }: IPosition) {
    return new Position(x, y);
  }
}
