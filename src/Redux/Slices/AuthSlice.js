import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance"

const initialState = {
    isLoggedIn: localStorage.getItem('isLoading') || false,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem('data') || {},
};

// function to handle signup
export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
    try {
      let res = axiosInstance.post("user/register", data);
  
      toast.promise(res, {
        loading: "Wait! Creating your account",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to create account",
      });
  
      // getting response resolved here
      res = await res;
      return res.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  });
  
// function to handle login
export const login = createAsyncThunk("/auth/login", async (data) => {
    try {
      let res = axiosInstance.post("user/login", data);
  
      toast.promise(res, {
        loading: "Wait! authentication in progress...",
        success: (data) => {
          return data?.data?.message;
        },
        error: "Failed to log in",
      });
  
      // getting response resolved here
      res = await res;
      return res.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  });
  
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(login.fulfilled, (state, action)=>{
        localStorage.setItem("data", JSON.stringify(action?.payload?.user));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("role", action?.payload?.user?.role);
        state.isLoggedIn = true;
        state.data = action?.payload?.user;
        state.role = action?.payload?.user?.role;
      } )
    }
})

export const {} = authSlice.actions;
export default authSlice.reducer