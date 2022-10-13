import React from "react";
import MenuItem from "./cards/MenuItem";
import menu from "../data/menu";

function Header() {
  return (
    <div className="header">
      <div className="header-bar">
        <a className="branding">
          <img src="" alt="" className="logo" />
          <h1 className="site-title">New Life Church</h1>
        </a>

        <div className="main-navigation">
          <ul className="menu">
            {menu.map((card) => {
              return <MenuItem title={card} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
