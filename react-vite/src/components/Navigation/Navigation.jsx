import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="home-profile-buttons-holder">
      <div className="profile-button">
        <ProfileButton className="actual-profile-button" />
      </div>
      <div >
        <NavLink className="home-logo" to="/">DrinkRate</NavLink>
      </div>
    </div>
  );
}

export default Navigation;
