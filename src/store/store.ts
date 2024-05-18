import { create } from "zustand";

export const useAppStore = create((set) => ({
  keranjang: [],
  setKeranjang: (data: any) =>
    set((state: any) => ({ keranjang: [...state.keranjang, data] })),
}));
