import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  SET_UNAUTHENTICATED,
} from "../types";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const loginUser = (user, history) => (dispatch) => {
  axios
    .post("/login", user)
    .then((res) => {
      // console.log(res);
      const token = res.data.token;
      localStorage.setItem("token", token);
      axios.defaults.headers.common["auth-token"] = token;
      const decodedToken = jwtDecode(token);
      dispatch({
        type: SET_USER,
        payload: decodedToken._id,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  delete axios.defaults.headers.common["auth-token"];
  dispatch({
    type: SET_UNAUTHENTICATED,
  });
};

export const clearErrors = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
