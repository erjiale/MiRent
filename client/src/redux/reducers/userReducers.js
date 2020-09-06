import {
  //  Users
  SET_USER,
  SET_UNAUTHENTICATED,
  SET_ERRORS,
  CLEAR_ERRORS,
  SET_CREATION,
} from "../types";

const initialState = {
  authenticated: false,
  errors: null,
  username: "",
  message: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        authenticated: true,
        username: action.payload,
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_ERRORS:
      return {
        ...state,
        message: null,
        errors: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
        messages: null,
      };
    case SET_CREATION:
      return {
        ...state,
        errors: null,
        message: action.payload,
      };
    default:
      return state;
  }
}
