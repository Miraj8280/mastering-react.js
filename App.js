import React from "react";
import ReactDOM from "react-dom/client";

// Header component
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="Logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYwpvQmMux7nupK6YNrI-fkfDK2rFFQREvKw&usqp=CAU"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Sign In</li>
        </ul>
      </div>
    </div>
  );
};

// Restaurant Card
const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        alt="Restaurant logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5a148e63e9c54942e37627da1aa156be"
      />
      <h3>Wow! Momo</h3>
      <h4>
        Tibetan, Healthy Food, Asian, Chinese, Snacks
      </h4>
      <h4>4.4 Stars</h4>
      <h4>25-30 mins</h4>
    </div>
  );
};

// Body component
const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search </div>
      <div className="restaurant-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
