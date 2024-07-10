"use client";
import { create } from "zustand";
export const useStore = create((set) => ({
  client:Object,
    email:"",
    name:"",
    aid:"",
    bran:"",
    oobiUrl:"",
    ids:[],
    setIds: (ids) => set({ ids: ids }),
    setClient: (client) => set({ client: client }),
    setOobiUrl: (oobiUrl) => set({ oobiUrl: oobiUrl }),
    setAid: (aid) => set({ aid: aid }),
    setBran: (bran) => set({ bran: bran }),
    setName: (name) => set({ name: name }),
    setEmail: (email) => set({ email: email }),
}));

// Selector functions
export const useEmail = () => useStore((state) => state.email);
export const useSetEmail = () => useStore((state) => state.setEmail);
export const useName = () => useStore((state) => state.name);
export const useSetName = () => useStore((state) => state.setName);
export const useAid = () => useStore((state) => state.aid);
export const useSetAid = () => useStore((state) => state.setAid);
export const useOobiUrl = () => useStore((state) => state.oobiUrl);
export const useSetOobiUrl = () => useStore((state) => state.setOobiUrl);
export const useClient = () => useStore((state) => state.client);
export const useSetClient = () => useStore((state) => state.setClient);
export const useBran = () => useStore((state) => state.bran);
export const useSetBran = () => useStore((state) => state.setBran);
export const useIds = () => useStore((state) => state.ids);
export const useSetIds = () => useStore((state) => state.setIds);