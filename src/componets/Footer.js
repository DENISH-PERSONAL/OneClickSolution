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
      <div className="md:py-10 p-5 bg-primary border-b-2 border-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-6">
              <Link class="logo cursor-pointer" to="/">
                <h3 class="font-bold text-lg md:text-2xl text-white">LOGO</h3>
              </Link>
              <p className="font-normal md:text-xl text-white whitespace-normal mt-5">
                Fusce varius, dolor tempor interdum tristique, dui urna bib
                endum magna, ut ullamcorper purus
              </p>
            </div>
            <div className="col-span-12 md:col-span-3 flex md:justify-center mt-5 md:mt-0">
              <div>
                <h3 className="font-semibold text-xl text-white mb-5">
                  Our Services
                </h3>
                <ul className="[&>a]:block [&>a]:text-white [&>a]:mb-2 hover:[&>a]:translate-x-2 [&>a]:font-semibold [&>a]:duration-300">
                  <Link>Web Development</Link>
                  <Link>Mobile App Development</Link>
                  <Link>UI/UX Design</Link>
                  <Link>QA & Testing</Link>
                  <Link>IT Consultancy</Link>
                  <Link>Dedicated Team</Link>
                </ul>
              </div>
            </div>
            <div className="col-span-12 md:col-span-3 flex md:justify-center mt-5 md:mt-0">
              <div>
                <h3 className="font-semibold text-xl text-white mb-5">
                  Support
                </h3>
                <ul className="[&>a]:block [&>a]:text-white [&>a]:mb-2 hover:[&>a]:translate-x-2 [&>a]:font-semibold [&>a]:duration-300">
                  <Link>Contact</Link>
                  <Link>Privacy Policy</Link>
                  <Link>Terms of Use</Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 bg-primary">
        <div className="flex justify-between">
          <div className="flex items-center text-white font-medium">
            © 2023 Oneclick Solution. All Rights Reserved.
          </div>
          <div className="flex me-5 gap-5 items-center">
            <div
              className="flex items-center justify-center rounded-full h-12 w-12 cursor-pointer"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.4) 7px 7px 12px, rgba(255, 255, 255, 0.9) -2px -2px 12px",
              }}
            >
              <i class="fa-brands fa-linkedin-in text-xl text-white"></i>
            </div>
            <div
              className="flex items-center justify-center rounded-full h-12 w-12 cursor-pointer"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.4) 7px 7px 12px, rgba(255, 255, 255, 0.9) -2px -2px 12px",
              }}
            >
              <i class="fa-brands fa-instagram text-xl text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
