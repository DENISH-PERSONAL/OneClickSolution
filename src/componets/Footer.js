import React from "react";
import { ContactCall, ContactEmail } from "./SvgIcon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <div
        className=""
        style={{
          boxShadow:
            "inset -3px -3px 12px rgba(255, 255, 255, 0.9), inset 3px 3px 12px rgba(0, 0, 0, 0.4)",
        }}
      >
        <div className="footer-top container mx-auto">
          <div className="flex justify-start items-center gap-7 p-3">
            <div
              className="contact-icone"
              style={{
                boxShadow:
                  "7px 7px 12px rgba(0, 0, 0, 0.4), -7px -7px 12px rgba(255, 255, 255, 0.9)",
              }}
            >
              <ContactCall />
            </div>
            <div>
              <h4 className="text-lg font-bold">Contact Support</h4>
              <a
                href="tel:+91 75674 25650"
                className="hover:text-primary text-center font-medium"
              >
                +91 75674 25650
              </a>
            </div>
          </div>
          <div className="flex justify-start items-center gap-7 p-3">
            <div
              className="contact-icone"
              style={{
                boxShadow:
                  "7px 7px 12px rgba(0, 0, 0, 0.4), -7px -7px 12px rgba(255, 255, 255, 0.9)",
              }}
            >
              <ContactEmail />
            </div>
            <div>
              <h4 className="text-lg font-bold">Email Support</h4>
              <a
                href="mailto:dongadenish3@gmail.com"
                className="hover:text-primary text-center font-medium"
              >
                dongadenish3@gmail.com
              </a>
            </div>
          </div>
          <div className="flex justify-start items-center p-3">
            {/* <h4 className="text-lg font-bold">News Latters</h4> */}
            <div className="subscribe grid grid-cols-7 my-4">
              <input
                type="email"
                className="py-3 ps-3 outline-none rounded-s-md col-span-5 text-dark font-medium bg-background"
                placeholder="Enter your email"
                style={{
                  boxShadow:
                    "inset -3px -3px 12px rgba(255, 255, 255, 0.9), inset 3px 3px 12px rgba(0, 0, 0, 0.4)",
                }}
              />
              <button className="py-2 px-3 md:py-3 md:px-6 col-span-2 bg-primary hover:bg-primaryDark text-white rounded-e-md ease-linear	duration-200 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 bg-primary">
        <div className="container mx-auto">
          <div className="">
            <div>
              <Link class="logo cursor-pointer" to="/">
                <h3 class="font-bold text-lg md:text-2xl text-white">LOGO</h3>
              </Link>
              <p className="font-normal md:text-xl text-white">Fusce varius, dolor tempor interdum tristique, dui urna bib endum magna, ut ullamcorper purus</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
