import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Layout/Main.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import AuthProvider from "./components/Provider/AuthProvider.jsx";
import ChefRecfipe from "./components/ChefRecipe/ChefRecfipe.jsx";
// import AwesomeSlider from "react-awesome-slider";
const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("http://localhost:5000/chefs"),
         },
         {
            path: "/login",
            element: <Login></Login>,
         },
         {
            path: "/register",
            element: <Register></Register>,
         },
         {
            path: "/blog",
            element: <Blogs></Blogs>,
         },
         {
            path: "/details/:id",
            element: <ChefRecfipe></ChefRecfipe>,
            loader: () => fetch("http://localhost:5000/chefs"),
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <AuthProvider>
         <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
   </React.StrictMode>
);
