import { GET_ALL_ITEMS, CREATE_ITEM } from "../types";
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

export const createItem = (item) => (dispatch) => {
  axios
    .post("/items", item)
    .then((res) => {
      console.log(res);
      dispatch({
        type: CREATE_ITEM,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
