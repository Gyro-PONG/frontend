import { create } from 'zustand';

interface MotionState {
  motionData: string[];
  motionString: string;
  setMotionData: (updater: (prevMotionData: string[]) => string[]) => void;
  reset: () => void;
}

export const useMotionStore = create<MotionState>((set) => ({
  motionData: [],
  motionString: '',
  setMotionData: (updater) => {
    set((state) => ({
      motionData: updater(state.motionData),
      motionString: updater(state.motionData).join(''),
    }));
  },
  reset: () => set({ motionData: [], motionString: '' }),
}));
