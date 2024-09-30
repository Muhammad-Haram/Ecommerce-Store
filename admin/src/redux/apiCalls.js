import { publicRequest } from "../requestMethod.js";
import { loginFailure, loginStart, loginSuccess } from "./authSlice.js";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
} from "./productSlice.js";

export const login = async (dispatch, auth) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", auth);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (error) {
    dispatch(getProductFailure());
  }
};
