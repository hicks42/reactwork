import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Nav";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Outlet />
          </PersistGate>
        </Provider>
      </div>
    </>
  );
}
