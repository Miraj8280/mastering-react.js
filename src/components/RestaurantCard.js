import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props; // Destructuring
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    restaurantData?.info;

  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        alt="Restaurant logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
