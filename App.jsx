import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";
// this is the one way
// import './styles.css'; 
import   Title from "./scr/components/Title"
import   Header from "./scr/components/Header"
import   Body from "./scr/components/Body"
import   Footer from "./scr/components/Footer"
import  {config} from "./scr/components/config"
import {RestaurantCard} from "./scr/components/RestaurantCard";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./scr/components/About";
import Error from "./scr/components/Error";
import Contact from "./scr/components/Contact";
import {Cart} from "./scr/components/Cart";
import CardMenu from "./scr/components/CardMenu";
import ProfileCard from "./scr/components/Profile";

// this the another way for import we many thing imoprt same file
// import * as XYZ from "./scr/components/Title.js"
const AppLayout = () => {
    return (
      <>
        <Header/>
        
        {/* <CardMenu/> */}
        <Outlet/>
      </>
    );
  };
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/home",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path:"/about/profile",
          element:<ProfileCard/>
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/restaurant/:id",
          element: <CardMenu />,
        },
      ],
    },
  ]);
    
  const root = document.getElementById("root");
  ReactDOM.createRoot(root).render(<RouterProvider router={appRouter} />);
  