import { GET_ALL_ITEMS } from "../types";
import axios from "axios";

export const getAllItems = () => (dispatch) => {
  // GET request -> https://mirent-api.herokuapp.com/api/items
  axios
    .get("/items")
    .then((res) => {
      dispatch({
        type: GET_ALL_ITEMS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
