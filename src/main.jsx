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
import ErrorPage from "./components/Error/ErrorPage.jsx";
import PrivateRoute from "./components/Private/PrivateRoute.jsx";
import About from "./components/About/About.jsx";
import PdfDowload from "./components/Pdfdownload/PdfDowload.jsx";

// import AwesomeSlider from "react-awesome-slider";
const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
            loader: () =>
               fetch(
                  "https://mycheif-master-server-monsur776.vercel.app/chefs"
               ),
         },
         {
            path: "/login",
            element: <Login></Login>,
         },
         {
            path: "signup",
            element: <Register></Register>,
         },
         {
            path: "/blog",
            element: <PdfDowload></PdfDowload>,
         },
         {
            path: "about",
            element: <About></About>,
         },
         {
            path: "/details/:id",
            element: (
               <PrivateRoute>
                  <ChefRecfipe></ChefRecfipe>
               </PrivateRoute>
            ),
            loader: () =>
               fetch(
                  "https://mycheif-master-server-monsur776.vercel.app/chefs"
               ),
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
