import { LOGO_URL } from "../utils/constants"
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    // console.log(loggedInUser);

    // Subscribibg to the Store using a Selector

    const cartItems = useSelector((store) => store.cart.items);
    //console.log(cartItems);
    
    return(
        <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
            <div className="logo-container">
                <img 
                    className="w-28 logo"
                    src={ LOGO_URL }
                />
            </div>
            <div className="nav-items">
                <ul className="flex py-10">
                    <li className="px-2">
                        Online Status: {onlineStatus ? "✅": "🔴"}
                    </li>
                    <li className="px-2">
                       <Link to="/">Home</Link> 
                    </li>
                    <li className="px-2">
                        <Link to="/about">About Us </Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold text-xl">
                        <Link to="/cart">Cart - ({cartItems.length} items)</Link>
                    </li>
                    <button 
                    className="login" 
                    onClick={() => { 
                        btnNameReact === "Login" 
                        ? setBtnNameReact("Logout") 
                        : setBtnNameReact('Login');
                        console.log(btnNameReact);
                    }}
                >
                    {btnNameReact}
                    </button>

                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div> 
    );
};

export default Header;
