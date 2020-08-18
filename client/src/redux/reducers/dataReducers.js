import {
  //  Items
  GET_ALL_ITEMS,
} from "../types";

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}