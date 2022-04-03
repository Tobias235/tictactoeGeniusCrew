import { createStore } from "redux";
import Reducer from "./reducers/reducer";

//Creating store and providing state to the app through index.js file and an redux extension devtool
//for better visibility of what is happening
const Store = createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

export default Store;
