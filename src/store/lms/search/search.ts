import { create } from "zustand";

const initialState = {
  searchCategory: "All Categories",
  searchPrice: "All Prices",
  searchCourse: "",
};
const useSearchStore = create((set) => ({
  ...initialState,
  setSearchCategory: (category: string) => set({ searchCategory: category }),
  setSearchPrice: (price: string) => set({ searchPrice: price }),
  setSearchCourse: (course: string) => set({ searchCourse: course }),
  resetSearch: () =>
    set(initialState),
}));
 export default useSearchStore;