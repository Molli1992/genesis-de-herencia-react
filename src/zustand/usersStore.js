import { create } from "zustand";

const usersStore = create((set) => ({
  users: false,
  setUsers: (users) => set({ users: users }),
}));

export default usersStore;