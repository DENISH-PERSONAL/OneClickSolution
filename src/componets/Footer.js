import React from "react";
import { ContactCall, ContactEmail } from "./SvgIcon";

const Footer = () => {
  return (
    <div className="">
      <div className="footer-top">
        <div className="flex justify-center items-center gap-7 md:p-3">
          <div
            className="contact-icone"
            style={{
              boxShadow:
                "inset -3px -3px 12px rgba(255, 255, 255, 0.9), inset 3px 3px 12px rgba(0, 0, 0, 0.4)",
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
        <div className="flex justify-center items-center gap-7 md:p-3">
          <div
            className="contact-icone"
            style={{
              boxShadow:
                "inset -3px -3px 12px rgba(255, 255, 255, 0.9), inset 3px 3px 12px rgba(0, 0, 0, 0.4)",
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
        <div>3</div>
      </div>
      <div className="py-20">

      </div>
    </div>
  );
};

export default Footer;
