import React, { Fragment, useContext, useState } from "react";
/// React router dom
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";
import logoTextWhite from "../../../images/logo-text-white.png";
import logoText from "../../../images/logo-text.png";
import logoWhite from "../../../images/logo-white.png";
/// images
import logo from "../../../images/logo.png";

const NavHader = () => {
  const [toggle, setToggle] = useState(false);
  const { navigationHader, openMenuToggle, background } = useContext(
    ThemeContext
  );
  return (
    <div className="nav-header">
      <Link to="/" className="brand-logo">
        {background.value === "dark" || navigationHader !== "color_1" ? (
          <Fragment>
            <img src={logo} />
          </Fragment>
        ) : (
          <Fragment>
            <img src={logo} />
          </Fragment>
        )}
      </Link>

      {/* <div
        className="nav-control"
        onClick={() => {
          setToggle(!toggle);
          openMenuToggle();
        }}
      >
        <div className={`hamburger ${toggle ? "is-active" : ""}`}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div> */}
    </div>
  );
};

export default NavHader;
