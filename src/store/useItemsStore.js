javascript
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { mockItems } from '../constants/mockData';

export const useItemsStore = create(
  persist(
    (set, get) => ({
      items: [],
      loading: false,
      error: null,
      initialized: false,

      fetchItems: async () => {
        if (get().initialized) return;
        set({ loading: true, error: null });
        try {
          await new Promise((r) => setTimeout(r, 1000));
          set({ items: mockItems, loading: false, initialized: true });
        } catch (e) {
          set({ loading: false, error: 'Ошибка загрузки данных' });
        }
      },

      addItem: (data) => {
        const newItem = {
          id: `item_${Date.now()}`,
          status: 'new',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          photos: [],
          history: [{ status: 'new', changedAt: new Date().toISOString() }],
          ...data,
        };
        set((state) => ({ items: [newItem, ...state.items] }));
        return newItem;
      },

      updateItem: (id, patch) => {
        set((state) => ({
          items: state.items.map((it) =>
            it.id === id
              ? {
                  ...it,
                  ...patch,
                  updatedAt: new Date().toISOString(),
                  history:
                    patch.status && patch.status !== it.status
                      ? [
                          ...it.history,
                          { status: patch.status, changedAt: new Date().toISOString() },
                        ]
                      : it.history,
                }
              : it
          ),
        }));
      },

      deleteItem: (id) => {
        set((state) => ({ items: state.items.filter((it) => it.id !== id) }));
      },

      getItemById: (id) => get().items.find((it) => it.id === id),
    }), 
{ 
    name: 'items-storage',
    storage: AsyncStorage,
}
  )
);
