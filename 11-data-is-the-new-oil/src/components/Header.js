import { LOGO_URL } from "../utils/constants"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();
    
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
                    <li className="px-2">Cart</li>
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
                </ul>
            </div>
        </div> 
    );
};

export default Header;
