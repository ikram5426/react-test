import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchUsers = createAsyncThunk("fetchUser", async () => {
  const response = await fetch("https://reqres.in/api/users?page=1");
  return response.json();
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers:(builder) =>{
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    })
    builder.addCase(fetchUsers.rejected, (state, action) => { 
      console.log("Error: " + action.payload );
      state.isError = true;
      state.isLoading=false;
    })
}
});

export default userSlice.reducer;
