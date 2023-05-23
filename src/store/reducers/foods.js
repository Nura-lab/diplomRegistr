import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  showSidebar: false,
};

export const foodsSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    addToOrders(state, action) {
      state.orders.push({ ...action.payload, count: 1 });
    },
    deletFoodFormOrder(state, action) {
      state.orders = state.orders.filter((item) => item.id !== action.payload);
    },
    toggleSidebar(state) {
      if (state.showSidebar) {
        state.showSidebar = false;
      } else {
        state.showSidebar = true;
      }
    },
    incrementCount: (state, action) => {
      const index = state.orders.findIndex(
        (item) => item.id === action.payload
      );
      if (index !== -1) {
        state.orders[index].count += 1;
      }
    },
    decrementCount: (state, action) => {
      const index = state.orders.findIndex(
        (item) => item.id === action.payload
      );
      if (index !== -1) {
        if (state.orders[index].count === 1) {
          state.orders = state.orders.filter(
            (item) => item.id !== action.payload
          );
        } else {
          state.orders[index].count -= 1;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToOrders,
  deletFoodFormOrder,
  toggleSidebar,
  addOrSubtract,
  decrementCount,
  incrementCount,
} = foodsSlice.actions;

export default foodsSlice.reducer;
