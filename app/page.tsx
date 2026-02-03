import Image from "next/image";
import { Banner } from "./components/Banner";
import { DetailComponent } from "./components/DetailComponent";
import { Footer } from "./components/Footer";
import { MusicPlayer } from "./components/MusicPlayer";
import { Navbar } from "./components/Navbar";
import { Slidder } from "./components/Slidder";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center  py-4 px-16 ">
        <div
          id="hero"
          className="bg-[url('/vector-1.jpg')] bg-no-repeat bg-contain w-full p-2  h-fit  font-poppins"
        >
          <div className="flex flex-row justify-between  w-full font-poppins">
            <div className="flex gap-20">
              <strong>Yudiantara</strong>
              <div className="text-[#20BB3B]">
                <a href="" className=" flex justify-center gap-2 items-center">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#20BB3B] opacity-75 animate-ping"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#20BB3B]"></span>
                  </span>
                  <p>Available</p>
                </a>
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
        <div className="bg-[#F6F6F6] bg-no-repeat bg-contain w-full p-2 h-full rounded-2xl  px-15 py-20">
          <Footer></Footer>
        </div>
        <div className="">
          <div className="flex gap-2 font-poppins">
            <a href="" className=" hover:opacity-70 duration-150">
              #Instagram
            </a>
            <a href="" className=" hover:opacity-70 duration-150">
              #Threads
            </a>
            <a href="" className=" hover:opacity-70 duration-150">
              #Linkedin
            </a>
            <a href="" className=" hover:opacity-70 duration-150">
              #Youtube
            </a>
          </div>
        </div>
        <MusicPlayer></MusicPlayer>
      </main>
    </div>
  );
}
