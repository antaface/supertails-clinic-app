import { create } from 'zustand';

interface UIState {
  wireframe: boolean;
  toggle: () => void;
  setWireframe: (value: boolean) => void;
}

export const useUI = create<UIState>((set) => ({
  wireframe: false, // Start in polished mode
  toggle: () => set((state) => ({ wireframe: !state.wireframe })),
  setWireframe: (value) => set({ wireframe: value }),
}));