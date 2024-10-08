"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeaderFooter = () => {
  return (
    <>
      <div className="flex absolute z-10 left-5  top-2 items-center gap-x-3 justify-center">
        <Link
          href="/"
          className=" flex  items-center justify-center gap-x-2 cursor-pointer"
        >
          {" "}
          <Image
            src="/alaap_logo.png"
            width={50}
            height={50}
            alt="headerlogo"
            className="h-[50px] w-[50px] object-cover rounded-full"
          />
        </Link>
        <h2 className="text-4xl text-primary_text font-logo_text  font-bold ">
          Alaap
        </h2>
      </div>

      <div className="flex absolute z-10 right-5 bottom-2 items-center justify-between ">
        <div className="flex flex-col  items-center justify-center">
          <div className="flex items-center justify-center gap-x-1 font-medium  text-xs md:text-base  font-lato">
            <Link className="text-accent" href="/privacy">
              Privacy
            </Link>
            <p>|</p>
            <Link className="text-accent" href="/disclaimer">
              Disclaimer
            </Link>
            <p>|</p>
            <Link className="text-accent" href="/sitemap">
              Sitemap
            </Link>
          </div>
          <div className=" text-primary_text text-sm  text-primary-text font-semibold font-open_sans text-center">
            <p>© 2024 Alaap. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderFooter;
