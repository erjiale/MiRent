import {
  //  Items
  GET_ALL_ITEMS,
  CREATE_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
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
    case CREATE_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    case UPDATE_ITEM:
      let index = state.items.findIndex(
        (item) => item._id === action.payload.id
      );
      state.items[index].name = action.payload.updatedName;
      return {
        ...state,
        items: [...state.items],
      };
    default:
      return state;
  }
}
