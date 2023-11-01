"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="mb-5">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-pink-500 hover:text-purple-500">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Omar Faruk",
                1000,
                "Web Developer",
                1000,
                "React Developer",
                1000,
                "Next-js Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-white text-base sm:text-lg mb-6 lg:text-xl">
            I am a dedicated full stack web developer. I specialize in creating
            modern and responsive web applications using the latest
            technologies.
          </p>
          <div>
            <button className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-white">
              <a href="mailto:mdomarfaruk2084@gmail.com">Hire Me</a>
            </button>

            <button className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-white mt-3">
              <a
                href="https://drive.google.com/uc?export=download&id=1VHCWxgJFR4Dt4NS-S23qr6otCbH6KlSI"
                className="block bg-gray-900 hover:bg-slate-800 rounded-full px-5 py-2"
              >
                Download Resume
              </a>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/image/rafsan.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
