import { create } from 'zustand';

type State = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

export const useThemeStore = create<State>((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
