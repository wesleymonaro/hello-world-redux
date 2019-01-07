import ReduxThunk from "redux-thunk";
import reducers from "./appReducers";

import { applyMiddleware, createStore } from "redux";

const middleware = [ReduxThunk];

const store = createStore(reducers, applyMiddleware(...middleware));

export default store;
