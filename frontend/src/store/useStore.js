import { create } from "zustand";

const useStore = create((set) => ({
  wallet: null,
  setUser: (wallet) => set({ wallet }),
}))