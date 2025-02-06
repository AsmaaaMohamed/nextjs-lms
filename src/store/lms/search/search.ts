import { create } from "zustand";

// Define the type for the store
type SearchStore = {
  searchCourse: string; // The state
  setSearchCourse: (value: string) => void; // The updater function
  searchPrice: number; // The state
  setSearchPrice: (value: number) => void; // The updater function
  searchCategory: string; // The state
  setSearchCategory: (value: string) => void; // The updater function
};
const initialState = {
  searchCategory: "",
  searchPrice: 0,
  searchCourse: "",
};
const useSearchStore = create<SearchStore>((set) => ({
  ...initialState,
  setSearchCategory: (category: string) => set({ searchCategory: category }),
  setSearchPrice: (price: number) => set({ searchPrice: price }),
  setSearchCourse: (course: string) => set({ searchCourse: course }),
  resetSearch: () =>
    set(initialState),
}));
 export default useSearchStore;