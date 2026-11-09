import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { mockUsers } from '../constants/mockData';

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      loading: false,
      error: null,

      login: async (email, password) => {
        set({ loading: true, error: null });
        await new Promise((r) => setTimeout(r, 800));
        const found = mockUsers.find(
          (u) => u.email === email && u.password === password
        );
        if (!found) {
          set({ loading: false, error: 'Неверный email или пароль' });
          return false;
        }
        set({ user: found, isAuthenticated: true, loading: false });
        return true;
      },

      logout: () => set({ user: null, isAuthenticated: false }),

      clearError: () => set({ error: null }),
    }),
    {
      name: 'auth-storage',
      storage: AsyncStorage,
    }
  )
);
