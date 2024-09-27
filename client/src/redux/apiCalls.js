import { publicRequest } from "../requestMethod.js";
import { loginFailure, loginStart, loginSuccess } from "./authSlice.js";

export const login = async (dispatch, auth) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", auth);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
