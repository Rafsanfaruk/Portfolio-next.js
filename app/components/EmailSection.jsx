"use client";
import React, { useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h3 className="text-xl font-bold text-white my-2">Lets Connect</h3>
        <p className="text-white mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>

        <div className="socials flex flex-row gap-2 text-white ">
          <a
            href="https://www.facebook.com/Rafsan0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="rounded-full hover:bg-gradient-to-l from-purple-500 to-pink-500 p-1 h-8 w-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/md-omar-faruk-610239280/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="rounded-full hover:bg-gradient-to-l from-purple-500 to-pink-500 p-1 h-8 w-8" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="rounded-full hover:bg-gradient-to-l from-purple-500 to-pink-500 p-1 h-8 w-8" />
          </a>
          <a
            href="https://github.com/Rafsanfaruk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="rounded-full hover:bg-gradient-to-l from-purple-500 to-pink-500 p-1 h-8 w-8" />
          </a>
          <a href="mailto:mdomarfaruk2084@gmail.com">
            <BiLogoGmail className="rounded-full hover:bg-gradient-to-l from-purple-500 to-pink-500 p-1 h-8 w-8" />
          </a>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="border border-[#33353F]  text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="rafsan1652@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className=" border border-[#33353F]  text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className=" border border-[#33353F] placeholder-[#9CA2A9]  text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-800 text-sm mt-4">
              Email Sent Successfully
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
