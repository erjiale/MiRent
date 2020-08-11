import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'react-thunk'; // store-enhancer/middleware
// Reducers

const initialState = {};
const middleware = [thunk];

const reducers = combineReducers({

});

const store = createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(...middleware),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // compose() to use Redux DEVTOOLS chrome extension
    )
)

export default store;