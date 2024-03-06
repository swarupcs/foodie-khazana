import { IMG_CDN_URL } from "../constant";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
    sla,
  }) => {
    const { user } = useContext(UserContext);
    return (
      <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
        <img
          src={IMG_CDN_URL
             +
            cloudinaryImageId
          }
        />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines?.join(", ")}</h3>
        <h4>{sla?.slaString}</h4>
        <h5>{user.name} - {user.email}</h5>
      </div>
    );
  };

export default RestaurantCard;