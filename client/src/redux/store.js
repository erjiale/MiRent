import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"; // store-enhancer/middleware
// Reducers
import userReducer from "./reducers/userReducers";
import dataReducer from "./reducers/dataReducers";

const initialState = {};
const middleware = [thunk];

const reducers = combineReducers({
  user: userReducer,
  data: dataReducer,
});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // compose() to use Redux DEVTOOLS chrome extension
  )
);

export default store;
