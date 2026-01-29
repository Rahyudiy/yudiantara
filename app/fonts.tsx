import localFont from "next/font/local";

export const sfProDisplay = localFont({
  src: [
    {
      path: "../public/fonts/SFPRODISPLAYREGULAR.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sfpro",
  display: "swap",
});
