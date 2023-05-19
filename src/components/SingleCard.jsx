"use client";

import Image from "next/image";
import React from "react";

function SingleCard({ user }) {
  return (
    <div className="w-80 h-60 flex justify-center mx-auto rounded-lg text-white  relative">
      <div className="relative max-w-[400] max-h-[320] transition flex items-center rounded-lg ">
        <Image
          className="rounded-lg"
          src={user.photo}
          alt="fylo desktop"
          width={400}
          height={320}
        />
      </div>
      <div
        className="absolute px-3 rounded-lg flex flex-col gap-8 
      items-center justify-center w-80 h-60 
      bg-slate-600
      opacity-0 transition hover:opacity-100"
      >
        <div className="gap-2 flex flex-col">
          <h4 className="text-xl font-semibold">{user.projectName}</h4>
          <p>{user.projectInfo}</p>
          <p className="uppercase text-sm text-cyan-600 font-bold">
            {user.usedTech}
          </p>
        </div>
        <div className="flex gap-4">
          {user.liveURL && (
            <a
              href={user.liveURL}
              target="_blank"
              className="px-4 py-2 bg-slate-900  rounded-xl hover:opacity-75 transition"
            >
              See live
            </a>
          )}
          {user.codeURL && (
            <a
              href={user.codeURL}
              target="_blank"
              className="px-4 py-2 bg-slate-900 rounded-xl hover:opacity-75 transition"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
