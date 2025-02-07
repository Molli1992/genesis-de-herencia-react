import { create } from "zustand";

const loginStore = create((set) => ({
  isLogin: false,
  userLogin: false,
  setIsLogin: (boolean) => set({ isLogin: boolean }),
  setUserLogin: (user) => set({ userLogin: user }),
}));

export default loginStore;
