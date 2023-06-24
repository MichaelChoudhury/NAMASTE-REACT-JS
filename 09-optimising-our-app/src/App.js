import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
//import About from "./components/About";
import Contact from "./components/Contact";
//import Grocery from "./components/Grocery.js";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"))

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Body />,
                },
                {
                    path: "/about",
                    element: <Suspense fallback={<h1>Loading ...</h1>}><About /></Suspense>,
                },
                ,
                {
                    path: "/contact",
                    element: <Contact />,
                },
                {
                    path: "/grocery",
                    element: <Suspense fallback={<h1>Loading ...</h1>}><Grocery /></Suspense>,
                },
                {
                    path: "/restaurants/:resId",
                    element: <RestaurantMenu />,
                },

            ],
            errorElement: <Error />,
        }, 
    ]);

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(<RouterProvider router={appRouter} />);








