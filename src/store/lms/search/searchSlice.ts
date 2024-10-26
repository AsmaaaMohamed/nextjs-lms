import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    text: "",
    category: "",
  },
  reducers: {
    setSearchText: (state, action) => {
      state.text = action.payload;
    },
    clearSearch: (state) => {
      state.text = "";
      state.category='';
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setSearchText, clearSearch, setCategory } = searchSlice.actions;
export default searchSlice.reducer;