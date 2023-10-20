import React from "react";
import {
  ContactCall,
  ContactEmail,
  ContactLocation,
} from "../../componets/SvgIcon";

const Contact = () => {
  return (
    <>
      <div className="container mx-auto py-10 md:py-16 lg:py-20 px-5">
        <div className="contact-us">
          <div className="contact-form">
            <div className="contact-icone">
              <ContactLocation />
            </div>
            <h4 className="text-2xl font-bold my-4">Address</h4>
            <p className="text-center text-lg font-medium">
              3010, Silver Business Point, VIP Circle, Utran, Surat-394105
            </p>
          </div>
          <div className="contact-form">
            <div className="contact-icone">
              <ContactCall />
            </div>
            <h4 className="text-2xl font-bold my-4">Contact</h4>
            <a
              href="tel:+91 75674 25650"
              className="hover:text-primary text-center text-lg font-medium"
            >
              +91 75674 25650
            </a>
          </div>
          <div className="contact-form">
            <div className="contact-icone">
              <ContactEmail />
            </div>
            <h4 className="text-2xl font-bold my-4">Email</h4>
            <a
              href="mailto:dongadenish3@gmail.com"
              className="hover:text-primary text-center text-lg font-medium"
            >
              dongadenish3@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-10 md:py-16 lg:py-20 px-5">
        <div className="grid md:grid-cols-2 gap-5 md:gap-10">
          <div
            className="p-5 md:p-10 col-span-1 rounded-xl my-5"
            style={{
              boxShadow:
                "7px 7px 12px rgba(0, 0, 0, 0.4), -7px -7px 12px rgba(255, 255, 255, 0.9)",
            }}
          >
            <h1 className="mb-5 text-center text-primary font-bold text-4xl">
              Get In Touch
            </h1>
            <p className="mb-4 text-center text-dark font-medium text-lg">
              Collaboratively promote client-focused convergence vis-a-vis
              customer directed alignments via standardized infrastructures.
            </p>
            <div className="mb-3">
              <label className="labels">
                Name <span className="text-primary">*</span>
              </label>
              <input className="inputs" type="text" />
            </div>
            <div className="mb-3">
              <label className="labels">
                Email <span className="text-primary">*</span>
              </label>
              <input className="inputs" type="email" />
            </div>
            <div className="mb-3">
              <label className="labels">
                Phone<span className="text-primary">*</span>
              </label>
              <input className="inputs" type="number" />
            </div>
            <div className="mb-10">
              <label className="labels">
                Massage<span className="text-primary">*</span>
              </label>
              <textarea className="inputs" rows={4} />
              {/* <input type="text" /> */}
            </div>
            <div className="mt-3">
              <button className="py-2 px-6 bg-primary hover:bg-primaryDark text-white rounded ease-linear	duration-200 font-semibold w-full" style={{boxShadow: "7px 7px 12px rgba(0, 0, 0, 0.4), -7px -7px 12px rgba(255, 255, 255, 0.9"}}>
                Submit
              </button>
            </div>
          </div>
          <div className="col-span-1 my-5">
            <div className="maps p-2 rounded" style={{boxShadow: "7px 7px 12px rgba(0, 0, 0, 0.4), -7px -7px 12px rgba(255, 255, 255, 0.9)"}}>
              <iframe
                className="w-full h-[300px] md:h-[702px]"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5903.468774318553!2d72.85931901251791!3d21.233748615945714!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f2652963ac9%3A0x7d9787a5b5c4275d!2sSilver%20Business%20Point!5e0!3m2!1sen!2sus!4v1697700370292!5m2!1sen!2sus"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              {/* <iframe className="block w-full h-[702px] " src="//maps.app.goo.gl/o1ypk8wUviKfKSSNA"></iframe> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
