import React, { useState } from "react";
import { CloseMenu, MenuIcone } from "./SvgIcon";
import { Link, NavLink } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

const Header = () => {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 150) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  return (
    <>
      <div className="container mx-auto">
        <nav
          class={
            fix
              ? "w-full fixed top-0 left-0 duration-500 bg-white shadow-lg z-50"
              : "absolute top-5 px-5 rounded-xl bg-white container mx-auto "
          }
        >
          <ul class="navigation flex flex-wrap justify-between items-center z-50 relative p-4 lg:p-6">
            <Link class="logo cursor-pointer" to="/">
              <h3 class="font-bold text-lg md:text-2xl text-primary">LOGO</h3>
            </Link>
            <input type="checkbox" id="check" />

            <span class="menu flex items-center md:[&>li]:pl-7 md:[&>button]:ml-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
              <li className="w-full text-center">
                <NavLink id="navbar-link" to="/" href="#" data-replace="Home">
                  <span>Home</span>
                </NavLink>
              </li>
              <li className="w-full text-center">
                <NavLink id="navbar-link" to="/service" data-replace="Services">
                  <span>Services</span>
                </NavLink>
              </li>
              <li className="w-full text-center">
                <NavLink
                  id="navbar-link"
                  to="/portfolio"
                  data-replace="Portfolio"
                >
                  <span>Portfolio</span>
                </NavLink>
              </li>
              <li className="w-full text-center">
                <NavLink id="navbar-link" to="/career" data-replace="Career">
                  <span>Career</span>
                </NavLink>
              </li>
              <li className="w-full text-center">
                <NavLink id="navbar-link" to="about" data-replace="About">
                  <span>About</span>
                </NavLink>
              </li>
              <li className="my-class">
                <Link
                  to="/contact"
                  className="py-2 px-6 bg-primary hover:bg-primaryDark text-white rounded ease-linear	duration-200 font-semibold"
                >
                  Contact
                </Link>
              </li>
              <label htmlFor="check" class="close-menu">
                <CloseMenu />
              </label>
            </span>

            <label htmlFor="check" class="open-menu">
              <MenuIcone className="h-[20px] md:h-full" />
            </label>
          </ul>
        </nav>
      </div>
      <Breadcrumb />
    </>
  );
};

export default Header;
