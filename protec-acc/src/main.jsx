import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
// import nav & product pages
import App from "./App.jsx";
import Error from "../components/Error";
import Home from "../components/Home";
import ShopAll from "../components/ShopAll";

// import custom styles
import "./index.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/shopAll',
        element: <ShopAll />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<StrictMode>
  <RouterProvider router={router} />
</StrictMode>
);

