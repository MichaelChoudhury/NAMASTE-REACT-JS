import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
//import About from "./components/About";
import Contact from "./components/Contact";
//import Grocery from "./components/Grocery.js";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"))

const AppLayout = () => {
    const [userName, setUserName] = useState();

    //authentication
    useEffect(() => {
        // Make an API call and send username and password
        const data = {
            name: "Akshay Saini",
        };
        setUserName(data.name);
    },   []);
    return(
        //Default
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            {/* Akshay Saini */}
            <div className="app">  
                <Header />    
                <Outlet />
            </div>
        </UserContext.Provider> 
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








