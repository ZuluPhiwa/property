import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import HouseContextProvider from "./components/HouseContext.jsx";
import Home2 from "./components/Home2.jsx";
import Home from "./components/Home.jsx";
import PropertyDetails from "./components/PropertyDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/property/",
    element: <App />,
    children: [
      {
        path: "/property/",
        element: <Home2 />,
      },

      {
        path: "/property/search",
        element: <Home />,
      },
      {
        path: "/property/details",
        element: <PropertyDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <HouseContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </HouseContextProvider>
);
