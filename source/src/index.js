import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/rootReducer";
import reduxThunk from "redux-thunk";
import "./styles/index.css";


const loggetMiddleware = (store) => {
  return (next) => {
    return function (action) {
      const result = next(action)
      console.log('Middleware', store.getState())
      return result
    }
  }
}


const store = createStore(rootReducer, applyMiddleware(
  loggetMiddleware,
  reduxThunk));




const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<StrictMode>{app}</StrictMode>, rootElement);
