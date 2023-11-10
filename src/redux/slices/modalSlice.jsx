import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addModal: false,
  deleteModal: false,
  updateModal: false,
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state[action.payload] = true;
    },
    closeModal: (state, action) => {
      state[action.payload] = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const selectModalState = (state) => state.modals;

export default modalSlice.reducer;
