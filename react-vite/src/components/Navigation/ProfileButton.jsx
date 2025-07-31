import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle } from 'react-icons/fa';
import { thunkLogout } from "../../redux/session";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { useNavigate } from "react-router-dom";

function ProfileButton() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((store) => store.session.user);
  const ulRef = useRef();
  let navigate = useNavigate()

  const toggleMenu = (e) => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;
    const closeMenu = (e) => {
      if (ulRef.current && !ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);



  const logout = (e) => {
    e.preventDefault();
    dispatch(thunkLogout());
    closeMenu();
  };



  const userPosts = (num) => {
    if (num === 1) {
      navigate('/user/posts')
    } else {
      navigate('/user/reviews')
    }
    setShowMenu(false)
  }

  return (
    <>
      <button className="profile-button-dropdown" onClick={toggleMenu}>
        <FaUserCircle />
      </button>
      {showMenu && (
        <div className={"profile-dropdown"} ref={ulRef}>
          {user ? (
            <div className="profile-dropdown-info">
              <div>{user.username}</div>
              <div>{user.email}</div>
              <div className="user-posts-profile" onClick={() => userPosts(1)}>Posts</div>
              <div className="user-posts-profile" onClick={() => userPosts(2)}>Reviews</div>
              <div>
                <button className="logout-user" onClick={logout}>Log Out</button>
              </div>
            </div>
          ) : (
            <div className="profile-dropdown-info-login-signup">
              <OpenModalMenuItem
                itemText="Log In"
                onItemClick={closeMenu}
                modalComponent={<LoginFormModal />}
              />
              <OpenModalMenuItem
                // className="signup-button-space"
                itemText="Sign Up"
                onItemClick={closeMenu}
                modalComponent={<SignupFormModal />}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default ProfileButton;
