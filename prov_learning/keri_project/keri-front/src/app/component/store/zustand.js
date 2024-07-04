import { create } from "zustand";
export const useStore = create((set) => ({
    email:"",
  setEmail: (email) => set({ email: email }),
}));

// Selector functions
export const useEmail = () => useStore((state) => state.email);
export const useSetEmail = () => useStore((state) => state.setEmail);


