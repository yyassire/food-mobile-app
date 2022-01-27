import { createSlice } from "@reduxjs/toolkit";

const RootSlice = createSlice({
  name: "root",
  initialState: {
    orders: [],
    total: 0,
    modelIsVisible: false,
    restaurantName: "",
  },
  reducers: {
    addDishes: (state, action) => {
      const num = state.total + action.payload.price;
      state.total = Math.round((num + Number.EPSILON) * 100) / 100;
      state.orders = [...state.orders, action.payload.food];
    },
    removeDishes: (state, action) => {
      const num = state.total - action.payload.price;
      state.total = Math.round((num + Number.EPSILON) * 100) / 100;
      const newDishes = state.orders.filter(
        (item) => item.title !== action.payload.title
      );
      state.orders = newDishes;
    },
    openModel: (state, action) => {
      state.modelIsVisible = true;
    },
    closeModel: (state, action) => {
      state.modelIsVisible = false;
    },
    addRestaurantName: (state, action) => {
      state.restaurantName = action.payload;
    },
  },
});

export const {
  addCart,
  openModel,
  closeModel,
  removeDishes,
  addDishes,
  addRestaurantName,
} = RootSlice.actions;
export default RootSlice.reducer;
