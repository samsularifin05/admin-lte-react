import { create } from "zustand";
import { calculateWindowSize } from "../components/utils/function";

export const useLoadingStore = create((set) => ({
  loading: {
    button: false,
    content: false,
    tabel: false
  },
  setLoading: (newLoading) =>
    set((state) => ({ loading: { ...state.loading, ...newLoading } }))
}));

export const useModalStore = create((set) => ({
  modal: {
    isModalShow: false,
    isEdit: false,
    data: []
  },
  setModal: (newModal) =>
    set((state) => ({ modal: { ...state.modal, ...newModal } }))
}));

export const useScreenSizeStore = create((set) => ({
  screenSize: calculateWindowSize(
    typeof window !== "undefined" ? window.innerWidth : 0
  ),
  setScreenSize: (width) => set({ screenSize: width })
}));

export const useSidebarStore = create((set) => ({
  menuSidebarCollapsed: false,
  toggleSidebar: () =>
    set((state) => ({ menuSidebarCollapsed: !state.menuSidebarCollapsed }))
}));
