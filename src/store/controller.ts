import { create } from 'zustand';

interface ControllerState {
  socketId: string;
  setSocketId: (socketId: string) => void;
  userSocketId: string;
  setUserSocketId: (userSocketId: string) => void;
  vibration: boolean;
  setVibration: (vibration: boolean) => void;
  motion: boolean;
  setMotion: (motion: boolean) => void;
}

export const useControllerStore = create<ControllerState>((set) => ({
  socketId: '',
  setSocketId: (socketId: string) => set({ socketId }),
  userSocketId: '',
  setUserSocketId: (userSocketId: string) => set({ userSocketId }),
  vibration: false,
  setVibration: (vibration: boolean) => set({ vibration }),
  motion: false,
  setMotion: (motion: boolean) => set({ motion }),
}));
