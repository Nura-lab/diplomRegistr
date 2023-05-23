import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  check: true,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    // search(state,action){
    //   state.filteredProducts =state.products.filter((item)=>item.name.toLowerCase().includes(action.payload.toLowerCase()))
    // }
  },
});

// Action creators are generated for each case reducer function
export const { search } = productsSlice.actions;

export default productsSlice.reducer;
