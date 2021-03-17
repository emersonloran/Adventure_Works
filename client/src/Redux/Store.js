import { createStore, combineReducers } from "redux";
import Reducer from "./Reducers";

const rootReducer = combineReducers({
  reducer: Reducer,
});

const store = createStore(rootReducer);

export default store;