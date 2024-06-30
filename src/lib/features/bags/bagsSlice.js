import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bags: [],
};

export const bagsSlice = createSlice({
  name: "bags",
  initialState,
  reducers: {
    resetBags: () => initialState,
    addTobags: (state, actions) => {
      // find index
      const index = state.bags.findIndex(
        (bag) => bag.id === actions.payload.id
      );

      if (index === -1) {
        // item doesn't exist
        state.bags = [...state.bags, { ...actions.payload, count: 1 }];
      } else {
        // item already exists
        state.bags = state.bags.map((bag, i) =>
          index === i ? { ...bag, count: bag.count + 1 } : bag
        );
      }
    },

    removeFrombags: (state, actions) => {
      // find index
      const index = state.bags.findIndex((bag) => bag.id === actions.payload);

      // when item count reach 1 , no more items to remove
      if (state.bags[index]?.count > 1) {
        state.bags = state.bags.map((bag, i) =>
          index === i ? { ...bag, count: bag.count - 1 } : bag
        );
      }
    },

    deleteFromBags: (state, actions) => {
      state.bags = state.bags.filter((bag) => bag.id !== actions.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTobags, removeFrombags, deleteFromBags, resetBags } =
  bagsSlice.actions;

export default bagsSlice.reducer;
