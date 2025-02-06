import { create } from "zustand";

// Define the type for the store
type SearchStore = {
  searchCourse: string; // The state
  setSearchCourse: (value: string) => void; // The updater function
  searchPrice: string; // The state
  setSearchPrice: (value: string) => void; // The updater function
  searchCategory: string; // The state
  setSearchCategory: (value: string) => void; // The updater function
};
const initialState = {
  searchCategory: "",
  searchPrice: "",
  searchCourse: "",
};
const useSearchStore = create<SearchStore>((set) => ({
  ...initialState,
  setSearchCategory: (category: string) => set({ searchCategory: category }),
  setSearchPrice: (price: string) => set({ searchPrice: price }),
  setSearchCourse: (course: string) => set({ searchCourse: course }),
  resetSearch: () =>
    set(initialState),
}));
 export default useSearchStore;