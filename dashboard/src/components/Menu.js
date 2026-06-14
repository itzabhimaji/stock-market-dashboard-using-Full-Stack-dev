import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [username, setUsername] = useState("");
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const avatarRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    axios
      .post("http://localhost:3002/me", {}, { withCredentials: true })
      .then((res) => {
        if (res.data.status) {
          setUserEmail(res.data.user.email);
          setUsername(res.data.user.username);
        } else {
          window.location.href = "http://localhost:3001/signup";
        }
      })
      .catch(() => {
        window.location.href = "http://localhost:3001/signup";
      });
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        avatarRef.current &&
        !avatarRef.current.contains(e.target)
      ) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAvatarClick = () => {
    if (avatarRef.current) {
      const rect = avatarRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + 8,
        left: rect.left - 120,
      });
    }
    setIsProfileDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "http://localhost:3001/signup";
  };

  const avatarLetter = userEmail ? userEmail[0].toUpperCase() : "?";
  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" className="logo" alt="logo" />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => setSelectedMenu(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/Orders"
              onClick={() => setSelectedMenu(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/Holdings"
              onClick={() => setSelectedMenu(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/Positions"
              onClick={() => setSelectedMenu(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/Funds"
              onClick={() => setSelectedMenu(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/Apps"
              onClick={() => setSelectedMenu(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        <div className="profile profile-clickable">
          <div className="avatar" ref={avatarRef} onClick={handleAvatarClick}>
            {avatarLetter}
          </div>
          <p className="username">{username || userEmail}</p>
        </div>
      </div>

      {/* Dropdown */}
      {isProfileDropdownOpen && (
        <div
          ref={dropdownRef}
          className="dropdown"
          style={{ top: `${dropdownPos.top}px`, left: `${dropdownPos.left}px` }}
        >
          <div className="dropdown-user-info">
            <div className="dropdown-avatar">{avatarLetter}</div>
            <div>
              <p className="dropdown-name">{username}</p>
              <p className="dropdown-email">{userEmail}</p>
            </div>
          </div>

          <div className="dropdown-item">👤 Profile</div>
          <div className="dropdown-item">⚙️ Account</div>

          <div className="dropdown-item logout" onClick={handleLogout}>
            🚪 Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
