import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://michaelchoudhury-bookish-acorn-r964pg5v5g2p4jj-3001.preview.app.github.dev/api/restaurants?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING`,
      
      );    

  const json = await data.json();

  console.log(json);

  setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus===false)
   return (
            <h1>
              Looks like you're offline! Please check your internet connection.
            </h1>
          )

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input 
              type="text" 
              className="search-box" 
              value={searchText}
              onChange={(e) => {
              setSearchText(e.target.value);
            }}
             />
            <button onClick={() => {

              console.log(searchText);

              const filteredRestaurants = listOfRestaurants.filter(
                (res) => res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurants(filteredRestaurants);

            }}>Search</button>
          </div>
             <button
            className="filter-btn"
             onClick={() => {
               const filteredRestaurants = listOfRestaurants.filter(
                 (res) => res.data.avgRating > 4.3
               );
               setFilteredRestaurants(filteredRestaurants);
               console.log(listOfRestaurants);
 
             }}
             >
              Top Rated Restaurants
          </button>
        </div>
        <div className="res-container">
            {filteredRestaurants.map((restaurant) => (
              <Link
                key={restaurant.data.id}
                to={"/restaurants/" + restaurant.data.id}
              >
              <RestaurantCard resData={restaurant} />
              </Link>
            ))}
        </div>
      </div>            
    );
};

export default Body;
