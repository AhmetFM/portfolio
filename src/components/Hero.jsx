"use client";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
//Typing Animation
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Image from "next/image";

function Hero() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Athlete", "Developer"],
    });
  }, []);

  return (
    <div
      id="home"
      className="scroll-mt-20 mx-auto flex flex-col justify-center pt-10 items-center gap-12  w-full px-2 h-[calc(100vh-160px)]"
    >
      <div className="border-2 border-inherit rounded-full">
        <div className="w-40 h-40 rounded-full overflow-hidden">
          <Image
            className=""
            src="/images/afm.jpeg"
            width={160}
            height={160}
            alt="Profile Picture"
          />
        </div>
      </div>
      <div className="text-center flex flex-col gap-4 w-[30ch] sm:w-[50ch]">
        <p className="text-3xl font-bold ">Hi, I&apos;m Ahmet</p>
        <p className="text-xl">
          <span className="opacity-75">Half</span>{" "}
          <span className="text-red-600" ref={textRef}></span>{" "}
        </p>
        <p className="text-sm opacity-50 sm:text-lg">
          As a front-end developer, I bridge the gap between imagination and
          reality, crafting visually stunning and seamlessly interactive digital
          landscapes.
        </p>
      </div>
      <div>
        <ul className="flex gap-4">
          <li className="opacity-60 hover:scale-125 hover:opacity-100 transition">
            <a
              href="https://www.linkedin.com/in/ahmet-furkan-meri%C3%A7-218579196/"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li className="opacity-60 hover:scale-125 hover:opacity-100 transition">
            <a href="https://github.com/AhmetFM" target="_blank">
              <GitHubIcon />
            </a>
          </li>
          <li className="opacity-60 hover:scale-125 hover:opacity-100 transition">
            <a href="https://www.instagram.com/ahmeetmeric/" target="_blank">
              <InstagramIcon />
            </a>
          </li>
          <li className="opacity-60 hover:scale-125 hover:opacity-100 transition">
            <a href="mailto:afurkanmeric@gmail.com">
              <MailIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
