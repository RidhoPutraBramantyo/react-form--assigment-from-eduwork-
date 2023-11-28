import { combineReducers, createStore, compose } from "redux";
import counterReducer from "./counterFeatures/reducer";

let rootReducers = combineReducers({
  counter: counterReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOL_EXTENTION_COMPOSE__ || compose;
let store = createStore(rootReducers, composeEnhancers());

export default store;
