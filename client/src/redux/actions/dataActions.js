import { GET_ALL_ITEMS, CREATE_ITEM, DELETE_ITEM, UPDATE_ITEM } from "../types";
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
      dispatch({
        type: CREATE_ITEM,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteItem = (itemId) => (dispatch) => {
  axios
    .delete(`/items/${itemId}`)
    .then((res) => {
      dispatch({
        type: DELETE_ITEM,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateItem = (itemId, updatedName) => (dispatch) => {
  axios
    .patch(`/items/${itemId}`, updatedName)
    .then((res) => {
      dispatch({
        type: UPDATE_ITEM,
        payload: {
          id: itemId,
          updatedName: updatedName.name,
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
