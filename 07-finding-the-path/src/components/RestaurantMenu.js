import { useEffect } from "react";

const RestaurantMenu = () => {

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            `https://michaelchoudhury-bookish-acorn-r964pg5v5g2p4jj-3001.preview.app.github.dev/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=22.72646&lng=88.36389500000001&restaurantId=101421&submitAction=ENTER`,
           );
        const json = await data.json();

        console.log("testing");

        console.log(json);
    };

    return(
    <div>
        <h1>Name of the Restaurant</h1>
        <h2>Menu</h2>
        <ul>
            <li>Biryani</li>
            <li>Burgers</li>
            <li>Diet Coke</li>
        </ul>
    </div>
    );  
};

export default RestaurantMenu;