import { ThemeState } from 'src/model/theme';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'light',
      changeTheme: () =>
        set((state: ThemeState) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),
    }),
    {
      name: 'theme',
    }
  )
);
