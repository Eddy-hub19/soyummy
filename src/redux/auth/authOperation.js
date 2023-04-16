import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../service/API/AuthUserAPI";
import { toast } from "react-toastify";

export const register = createAsyncThunk("auth/register", async (credentials, thunkAPI) => {
  try {
    const data = await api.postUser(credentials);
    return data;
  } catch (error) {
    if (error.response.status === 400) {
      toast.error(`${error.response?.data?.message}!`);
    }
    if (error.response.status === 409) {
      toast.error(`This email already in use `);
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logIn = createAsyncThunk("auth/signin", async (credentials, thunkAPI) => {
  try {
    const data = await api.logIn(credentials);
    return data;
  } catch (error) {
    if (error.response.status === 401) {
      toast.error(`${error.response?.data?.message ?? "Email is not verified"}!`);
    }

    if (error.response.status === 404) {
      toast.error(`${error.response?.data?.message ?? "Email or password wrong or invalid!"}!`);
    }

    if (error.response.status === 400) {
      toast.error(`${error.response?.data?.message ?? "Failed to login, try again pls!"}!`);
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  try {
    await api.logOut();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchCurrentUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persisterToken = state.auth.token;
  if (persisterToken === null) {
    return thunkAPI.rejectWithValue();
  }
  try {
    const data = await api.fetchCurrentUser(persisterToken);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
