import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./reducers/userReducers";
import thunk from 'redux-thunk';

export default createStore(combineReducers({
    userReducer
}), applyMiddleware(thunk));