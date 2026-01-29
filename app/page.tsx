"use client";

import Image from "next/image";
import { Banner } from "./components/Banner";
import { DetailComponent } from "./components/DetailComponent";
import { Navbar } from "./components/Navbar";
import { Slidder } from "./components/Slidder";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center  py-4 px-16 ">
        <div className="bg-[url('/vector-1.jpg')] bg-no-repeat bg-contain w-full p-2  h-fit  font-poppins">
          <div className="flex flex-row justify-between  w-full font-poppins">
            <div className="flex gap-20">
              <strong>Yudiantara</strong>
              <div className="text-[#20BB3B]">
                <p>Available</p>
              </div>
            </div>
            <div className="ml-[14vw]">
              <Navbar></Navbar>
            </div>
          </div>
          <div className="px-15 py-30 flex flex-col gap-10">
            <Banner></Banner>
            <DetailComponent></DetailComponent>
          </div>
        </div>
        <div className="w-full h-fit flex flex-col items-end font-poppins">
          <picture className="block overflow-hidden rounded-2xl">
            <Image
              src="/vector-2.png"
              width={1000}
              height={1000}
              alt="Ngurah Yudiantara"
              className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            ></Image>
          </picture>
          <h2 className="px-8 py-3 font-semibold text-md -mt-[5dvh]">
            Yudiantara
          </h2>
        </div>

        <div className="bg-[#F6F6F6] bg-no-repeat bg-contain w-full p-2 m-4 h-full rounded-2xl  font-poppins px-15 py-20">
          <h3 className="text-3xl">
            Design <br />& Code Execution
          </h3>
          <p className="text-[#7c7c7c] mt-4 leading-7">
            Real projects where I design the experience, code the solution, and
            turn ideas into clean, smooth interfaces that perform seamlessly
            across modern devices.
          </p>
          <div className="pt-20">
            <Slidder></Slidder>
          </div>
        </div>
        <div className="bg-[#F6F6F6] bg-no-repeat bg-contain w-full p-2 m-4 h-full rounded-2xl  px-15 py-20">
          <p className="text-[#000000] text-8xl mt-4 leading-20 text-center font-sfpro font-bold">
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
            className="font-poppins text-3xl underline underline-offset-4 transition-opacity hover:opacity-70 text-center flex justify-center"
          >
            @ydntara
          </a>
          <p className="font-poppins text-[#7c7c7c] uppercase font-semibold text-center text-sm mt-10">
            or send me a message
          </p>
          <a
            href="mailto:gdengurahyudiantara@gmail.com"
            target="_blank"
            className="font-poppins text-3xl underline underline-offset-4 transition-opacity hover:opacity-70 text-center flex justify-center"
          >
            ngurahyudiantara@gmail.com
          </a>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="flex justify-center"
          >
            <ArrowUp size={28} strokeWidth={1.5} />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
