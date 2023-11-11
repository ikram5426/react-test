import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action to fetch API users
export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const response = await fetch("https://reqres.in/api/users?page=1");
  return response.json();
});

export const fetchLocalUser = createAsyncThunk(
  "fetchLocalUser",
  async (_ignored, { getState }) => {
    const localUser = window.localStorage.getItem("user");
    if (localUser) {
      return JSON.parse(localUser);
    }
    return null;
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        console.log("Error fetching API users: " + action.payload);
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(fetchLocalUser.fulfilled, (state, action) => {
        if (action.payload) {
          // Merge local and API users
          state.data = {
            ...state.data,
            ...action.payload,
          };
        }
      });
  },
});

export default userSlice.reducer;
