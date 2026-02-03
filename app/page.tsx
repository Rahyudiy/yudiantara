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
      <main
        className="flex min-h-screen w-full max-w-3xl flex-col items-center py-4 md:px-16 px-6"
        role="main"
      >
        {/* HERO / HEADER */}
        <header
          id="hero"
          className="bg-[url('/vector-1.jpg')] bg-no-repeat md:bg-contain bg-cover w-full p-2 h-fit font-poppins"
        >
          <div className="flex flex-row justify-between w-full">
            <div className="flex gap-[1vw] items-center">
              {/* H1 — PRIMARY SEO TARGET */}
              <h1 className="font-bold text-base">Ngurah Yudiantara</h1>

              <div className="text-[#20BB3B]">
                <a
                  href="https://www.linkedin.com/in/ngurah-yudiantara/"
                  className="flex justify-center gap-2 items-center"
                  aria-label="Availability status: Available for work"
                >
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#20BB3B] opacity-75 animate-ping"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#20BB3B]"></span>
                  </span>
                  <span>Available</span>
                </a>
              </div>
            </div>

            {/* NAVIGATION */}
            <nav className="ml-[14vw]" aria-label="Primary navigation">
              <Navbar />
            </nav>
          </div>

          {/* HERO CONTENT */}
          <section className="md:px-15 px-5 md:py-30 py-20 flex flex-col gap-10">
            <Banner />
            <DetailComponent />
          </section>
        </header>

        {/* PROFILE IMAGE */}
        <section
          className="w-full h-fit flex flex-col mt-4 md:mt-0 items-end font-poppins"
          aria-labelledby="profile-heading"
        >
          <figure className="block overflow-hidden rounded-2xl">
            <Image
              src="/vector-2.png"
              width={1000}
              height={1000}
              alt="Ngurah Yudiantara – Frontend Developer and UI UX Designer"
              className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              priority
            />
          </figure>

          <h2
            id="profile-heading"
            className="md:px-8 px-2 md:py-3 py-7 font-semibold md:text-base text-[10px] -mt-[5dvh]"
          >
            Yudiantara
          </h2>
        </section>

        {/* PROJECTS / WORK */}
        <section
          className="bg-[#F6F6F6] bg-no-repeat bg-contain w-full p-2 -m-3 md:m-4 h-full rounded-2xl font-poppins md:px-15 px-5 py-20"
          aria-labelledby="work-heading"
        >
          <h2 id="work-heading" className="text-3xl">
            Design <br /> & Code Execution
          </h2>

          <p className="text-[#7c7c7c] mt-4 leading-7">
            Real projects where I design the experience, code the solution, and
            turn ideas into clean, smooth interfaces that perform seamlessly
            across modern devices.
          </p>

          <div className="pt-20">
            <Slidder />
          </div>
        </section>

        {/* FOOTER SECTION */}
        <footer
          className="bg-[#F6F6F6] bg-no-repeat bg-contain w-full p-2 h-screen rounded-2xl md:px-15 px-5 py-20 mt-8 md:mt-0"
          aria-labelledby="footer-heading"
        >
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <Footer />
        </footer>

        {/* SOCIAL LINKS */}
        <section
          className="flex gap-2 font-poppins text-sm py-10"
          aria-label="Social media links"
          id="contact"
        >
          <a
            href="https://www.instagram.com/ngurahyudiantaraa/"
            className="hover:opacity-70 duration-150"
            target="_blank"
            rel="noopener noreferrer"
          >
            #Instagram
          </a>
          <a
            href="https://www.threads.com/@ngurahyudiantaraa"
            className="hover:opacity-70 duration-150"
            target="_blank"
            rel="noopener noreferrer"
          >
            #Threads
          </a>
          <a
            href="https://www.linkedin.com/in/ngurah-yudiantara/"
            className="hover:opacity-70 duration-150"
            target="_blank"
            rel="noopener noreferrer"
          >
            #LinkedIn
          </a>
          <a
            href="https://www.youtube.com/@Rahyudiy"
            className="hover:opacity-70 duration-150"
            target="_blank"
            rel="noopener noreferrer"
          >
            #YouTube
          </a>
        </section>

        {/* MUSIC PLAYER */}
        <aside aria-label="Background music player">
          <MusicPlayer />
        </aside>
      </main>
    </div>
  );
}
