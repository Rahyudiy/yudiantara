import Image from "next/image";

export const Banner = () => {
  return (
    <div className="flex items-center md:gap-2 gap-4  ">
      <Image
        src="/rahyudi.png"
        width={500}
        height={500}
        alt="Ngurah Yudiantara Front-end Developer"
        className="rounded-full w-20 object-center"
      ></Image>
      <div className="">
        <h1 className="font-semibold tracking-wide">Ngurah Yudiantara</h1>
        <p className="font-normal text-[#7c7c7c] mt-1">Frontend Developer</p>
      </div>
    </div>
  );
};
