"use client";

import { useState } from "react";
import { PageWrapper } from "../components/page-wrapper";
import ThankYou from "./thankyou";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <PageWrapper className={undefined}>
      <section>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-black">
            Contact
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-black sm:text-xl">
            Looking for aspiring Junior Fullstack Developer?
          </p>
          {submitted ? (
            <ThankYou />
          ) : (
            <form
              action="https://formsubmit.co/el/pubefa"
              method="POST"
              className="space-y-8"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="shadow-sm bg-green-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="name@email.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="block p-3 w-full text-sm text-black bg-green-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="block p-2.5 w-full text-sm text-black bg-green-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:bg-green-900 transition duration-300 ease-in-out"
                >
                  Send message
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </PageWrapper>
  );
};
export default Contact;
