import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import FinanceScreen from "./FinanceScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Blog",
    element: <Blog />,
  },
  {
    path: "/FinanceScreen",
    element: <FinanceScreen />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
const showTime = () => {
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

setInterval(showTime, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
