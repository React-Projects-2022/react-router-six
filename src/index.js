import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Provider from "./application/provider";

ReactDOM.render(
  <Suspense fallback={<div>Loading</div>}>
    <Provider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  </Suspense>,
  document.getElementById("root")
);
