import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../constant";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {

  const { resId } = useParams();

  // const[restaurant, setRestaurant] = useState(null)
  const restaurant = useRestaurant(resId);
  console.log(restaurant)



  // console.log(resId);

  return !restaurant ? (<Shimmer/>) : (
    <div className="menu">
      <div>
      <h1>Restaurant id : {resId}</h1>
      <h2>{restaurant?.name}</h2>
      <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt="Logo" /> 
      <h3>{restaurant.areaName}</h3>
      <h3>{restaurant.city}</h3>
      <h3>{restaurant.avgRating} stars</h3>
      <h3>{restaurant.costForTwoMessage}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>

        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;