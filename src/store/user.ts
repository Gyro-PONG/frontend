import { create } from 'zustand';

interface UserState {
  socketId: string;
  setSocketId: (socketId: string) => void;
  controllerSocketId: string;
  setControllerSocketId: (controllerSocketId: string) => void;
  vibration: boolean;
  setVibration: (updater: (prevVibration: boolean) => boolean) => void;
  sfx: boolean;
  setSfx: (updater: (prevSfx: boolean) => boolean) => void;
  motion: boolean;
  setMotion: (motion: boolean) => void;
  clear: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  socketId: '',
  setSocketId: (socketId: string) => set({ socketId }),
  controllerSocketId: '',
  setControllerSocketId: (controllerSocketId: string) =>
    set({ controllerSocketId }),
  vibration: false,
  setVibration: (updater) =>
    set((state) => ({ vibration: updater(state.vibration) })),
  sfx: false,
  setSfx: (updater) => set((state) => ({ sfx: updater(state.sfx) })),
  motion: false,
  setMotion: (motion: boolean) => set({ motion }),
  clear: () => set({ controllerSocketId: '', vibration: false, motion: false }),
}));
