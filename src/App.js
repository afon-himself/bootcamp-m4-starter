import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ListPage from "./pages/ListPage/ListPage";

import "./reset.css";
import "./common.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/list/:id" element={<ListPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
