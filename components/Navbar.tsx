"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      title: "Generate Url code |",
      link: "/generate-qrcode",
    },
    {
      id: 2,
      title: "Text code",
      link: "/qrcode-text",
    },
  ];

  return (
    <div className="flex justify-center items-center w-full h-20 px-4 text-white bg-gray-200 fixed nav">
      <div className="flex flex-row justify-start mr-[240px] ">
        <div className="flex justify-start items-end">
          <Image
            src={"/logo.svg"}
            width={100}
            height={70}
            alt={""}
            className="w-[150px] h-auto"
            priority
          />
          <p className="text-black text-xl xs:hidden">
            Jumbowire & Cable Co., Ltd.
          </p>
        </div>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, title }) => (
          <li
            key={id}
            className="nav-links cursor-pointer capitalize font-medium text-gray-500 hover:text-white duration-200 link-underline"
          >
            <Link href={link} className="text-black hover:text-blue-500 text-xl">
              {title}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, title }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
