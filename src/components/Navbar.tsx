"use client";
import { AssignmentReturnTwoTone, Route } from "@mui/icons-material";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface routeType {
  id: number;
  title: string;
  link: string;
}

const routes: routeType[] = [
  {
    id: 0,
    title: "About",
    link: "/",
  },
  {
    id: 1,
    title: "Project",
    link: "/project",
  },
  {
    id: 2,
    title: "Resume",
    link: "/resume",
  },
  {
    id: 3,
    title: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<number>(0);

  return (
    <div className="lg:static flex justify-between h-16 items-center fixed  bottom-0  w-full z-50 bg-eerie-black-2 ">
      <h1 className="hidden lg:block  text-xl mx-2 w-[200px]  text-center relative  z-50">
        {routes[activeLink].title}

        <motion.div
          key={activeLink} // Add key to re-trigger animation
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="absolute -bottom-2 left-0 right-0 h-1   bg-gradient-to-r  from-slate-50  to-slate-100 rounded-md origin-center w-[200px]"
        ></motion.div>
      </h1>

      <div className="hidden lg:flex flex-1 border-purple !border-t-0  !border-r-0  rounded-bl-3xl gap-10 h-full items-center px-6 justify-between   z-50">
        {routes.map((route) => {
          if (route.id !== activeLink)
            return (
              <Link
                key={route.id}
                href={route.link}
                onClick={() => setActiveLink(route.id)}
              >
                {route.title}
              </Link>
            );
        })}
      </div>

      <div className="flex lg:hidden flex-1 border-purple rounded  gap-1 w-full h-full items-center px-2 justify-between    z-50">
        {routes.map((route) => (
          <Link
            className="relative"
            key={route.id}
            href={route.link}
            onClick={() => setActiveLink(route.id)}
          >
            {route.title}
            {activeLink === route.id ? (
              <>
                <motion.div
                  className="absolute -bottom-1 left-0 right-0  h-[1px] bg-white   z-50"
                  layoutId="underline"
                />
              </>
            ) : null}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
