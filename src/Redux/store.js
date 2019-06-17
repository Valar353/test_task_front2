import {createStore} from "redux";
import userProducts from "./reducer";
const initialState = {};

let store = createStore(userProducts);
export {store, initialState};