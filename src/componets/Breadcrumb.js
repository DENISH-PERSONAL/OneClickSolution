import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";


const Breadcrumb = () => {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumbs) => crumbs !== "")
    .map((crumb) => {
      currentLink = +`/${crumb}`;

      return (
        <>
          <div className="py-[100px] md:py-[150px] lg:pt-[200px] pb-[100px] container px-5 mx-auto items-start flex justify-center flex-col">
            <div className="flex gap-3 ml-3 md:ml-10">
              <Link
                className="bradcrumbs capitalize font-medium hover:text-primary duration-200 text-light"
                to={"/"}
              >
                Home
              </Link>
              <span className="font-semibold text-light"> / </span>
              <div
                className="crumb capitalize font-medium text-primary"
                key={crumb}
              >
                {crumb}
              </div>
            </div>
            <div className="w-full text-center mt-1 md:mt-5 font-medium text-2xl md:text-3xl lg:text-5xl capitalize">
              {crumb}
            </div>
          </div>
        </>
      );
    });

  return (
    <div className="">
      <div className="myClass background-color">{crumbs}</div>
    </div>
  );
};

export default Breadcrumb;
