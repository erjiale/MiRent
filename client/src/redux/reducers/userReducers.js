import {
  SET_USER,
  SET_UNAUTHENTICATED,
  SET_ERRORS,
  CLEAR_ERRORS,
  SET_CREATION,
} from "../types";

const initialState = {
  authenticated: false,
  errors: null,
  user_id: "",
  message: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        authenticated: true,
        user_id: action.payload,
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
