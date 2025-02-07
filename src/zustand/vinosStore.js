import { create } from "zustand";

const vinosStore = create((set) => ({
  vinos: false,
  setVinos: (vinos) => set({ vinos: vinos }),
}));

export default vinosStore;