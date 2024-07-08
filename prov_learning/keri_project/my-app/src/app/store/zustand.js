"use client";
import { create } from "zustand";
export const useStore = create((set) => ({
  client:Object,
    email:"",
    name:"",
    aid:"",
    agentAid:"",
    oobiUrl:"",
    setClient: (client) => set({ client: client }),
    setOobiUrl: (oobiUrl) => set({ oobiUrl: oobiUrl }),
    setAgentAid: (agentAid) => set({ agentAid: agentAid }),
    setAid: (aid) => set({ aid: aid }),
    setName: (name) => set({ name: name }),
  setEmail: (email) => set({ email: email }),
}));

// Selector functions
export const useEmail = () => useStore((state) => state.email);
export const useSetEmail = () => useStore((state) => state.setEmail);
export const useName = () => useStore((state) => state.name);
export const useSetName = () => useStore((state) => state.setName);
export const useAgentAid = () => useStore((state) => state.agentAid);
export const useSetAgentAid = () => useStore((state) => state.setAgentAid);
export const useAid = () => useStore((state) => state.aid);
export const useSetAid = () => useStore((state) => state.setAid);
export const useOobiUrl = () => useStore((state) => state.oobiUrl);
export const useSetOobiUrl = () => useStore((state) => state.setOobiUrl);
export const useClient = () => useStore((state) => state.client);
export const useSetClient = () => useStore((state) => state.setClient);