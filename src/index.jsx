import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCSURRa89PXAP8K_QgMEOri0edoER6wXSY",
  authDomain: "coderhouse-83d05.firebaseapp.com",
  projectId: "coderhouse-83d05",
  storageBucket: "coderhouse-83d05.appspot.com",
  messagingSenderId: "152028861596",
  appId: "1:152028861596:web:01d9ed2f2e0a17514e0959"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
