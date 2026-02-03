"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="">
      <div className="">
        <p className="text-[#000000] md:text-8xl text-6xl mt-4 md:leading-20 text-center font-sfpro font-bold">
          Let's do <br />
          something
          <br />
          <span className="font-extralight font-sans tracking-tighter italic">
            amazing
          </span>{" "}
          <br />
          together
        </p>

        <p className="font-poppins uppercase text-center font-semibold text-sm my-20">
          If you want to work with me,
          <br />
          collaborate, learn something new <br />
          or just say hello
        </p>
        <p className="font-poppins text-[#7c7c7c] uppercase font-semibold text-center text-sm">
          drop me a dm in direct
        </p>
        <a
          href="https://www.instagram.com/ngurahyudiantaraa/"
          target="_blank"
          className="font-poppins md:text-3xl text-xl underline underline-offset-4 transition-opacity hover:opacity-70 text-center flex justify-center"
        >
          @ydntara
        </a>
        <p className="font-poppins text-[#7c7c7c] uppercase font-semibold text-center text-sm mt-10">
          or send me a message
        </p>
        <a
          href="mailto:gdengurahyudiantara@gmail.com"
          target="_blank"
          className="font-poppins md:text-3xl text-xl underline underline-offset-4 transition-opacity hover:opacity-70 text-center flex justify-center"
        >
          ngurahyudiantara@gmail.com
        </a>
        <div className="flex justify-center">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();

              document.getElementById("hero")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="mt-10 px-3 py-5 border w-fit rounded-full border-black hover:text-[#F6F6F6] scale-80 hover:scale-100 hover:bg-black duration-200"
            >
              <ArrowUp size={28} strokeWidth={1.5} />
            </motion.div>
          </a>
        </div>
      </div>
    </footer>
  );
};
