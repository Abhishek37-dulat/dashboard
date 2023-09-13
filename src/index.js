import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./context/authContext";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider>
      <Provider store={store}>
        <ToastContainer />

        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </DataProvider>
  </React.StrictMode>
);
