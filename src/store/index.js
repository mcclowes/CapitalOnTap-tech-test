import reducer from "./reducers";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { products } from "./actions";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.dispatch(products.getAllProducts());

export default store;
