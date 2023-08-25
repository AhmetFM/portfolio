"use client";
import Header from "@/components/Header";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import { useEffect, useState } from "react";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);
  //Theme Alma İşlemi
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkTheme(true);
    }
  }, []);

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("darkTheme");
    } else {
      document.body.classList.remove("darkTheme");
    }
    localStorage.setItem("theme", darkTheme ? "dark" : "light");
  }, [darkTheme]);

  function handleTheme() {
    setDarkTheme(!darkTheme);
  }

  return (
    <html
      className={darkTheme ? "darkTheme" : "lightTheme"}
      // style={{ colorScheme: `${darkTheme ? "dark" : "light"}` }}
    >
      <head>
        {/* Icon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        {/* SEO */}
        <title>Ahmet Furkan Meriç</title>
        <meta
          name="description"
          content="Front-end developer, I bridge the gap between imagination and
          reality, crafting visually stunning and seamlessly interactive digital
          landscapes."
        />
        <link rel="canonical" href="https://meric-three.vercel.app/" />
        <meta property="og:url" content="https://meric-three.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ahmet Furkan Meriç" />
        <meta
          property="og:description"
          content="Front-end developer, I bridge the gap between imagination and
          reality, crafting visually stunning and seamlessly interactive digital
          landscapes."
        />
        <meta property="og:title" content="Ahmet Furkan Meriç" />
      </head>
      <body className={nunito.className}>
        <Header handleTheme={handleTheme} darkTheme={darkTheme} />
        {children}
      </body>
    </html>
  );
}
