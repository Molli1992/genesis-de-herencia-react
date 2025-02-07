import { create } from "zustand";

const loginStore = create((set) => ({
  login: false,
  setLogin: (login) => set({ login: login }),
}));

export default loginStore;
