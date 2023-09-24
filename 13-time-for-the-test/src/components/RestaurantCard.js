import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const { resData } = props

    // console.log(resData);
    const {loggedInUser} = useContext(UserContext);

    const {
      cloudinaryImageId, 
      name, 
      avgRating, 
      cuisines, 
      costForTwo, 
      sla
    } = resData;
    
    return(
        <div data-testid="resCard" className="m-4 p-2 w-[200px] h-[350px] bg-gray-100 rounded-lg hover:bg-gray-200">
            <img 
              className="rounded-lg"
              alt="res-logo"
              src={ CDN_URL + cloudinaryImageId }
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.deliveryTime} minutes</h4> 
            <h4>User: {loggedInUser}</h4> 

        </div>
    );
};

// Higher Order Component

// input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted 4.4+</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
