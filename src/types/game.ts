export interface GameInfo {
  gameId: string;
  targetScore: number;
  level: string;
  host: { userId: string; controllerId: string };
}
