import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://michaelchoudhury-bookish-acorn-r964pg5v5g2p4jj-3000.preview.app.github.dev/api/restaurants?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING`,
      )

  const json = await data.json();

  setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);

  console.log(json);
  
    };


  console.log("Body Rendered");

    return(
      <div className="body">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.data.avgRating > 4.4
              );
              setListOfRestaurants(filteredList);
              console.log(listOfRestaurants);

            }}
            >
              Top Rated Restaurants
          </button>
        </div>
        <div className="res-container">
            {listOfRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            ))}
        </div>
      </div>            
    );
};

export default Body;
