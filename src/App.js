import React from "react";
import { Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ListPage from "./pages/ListPage/ListPage";

import "./reset.css";
import "./common.css";

function App() {
  return (
    <div className="app">
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route path="/list/:id">
        <ListPage />
      </Route>
    </div>
  );
}

export default App;