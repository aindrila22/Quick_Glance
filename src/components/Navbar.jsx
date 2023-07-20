import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-28  lg:flex hidden justify-center items-center space-x-7 text-base bg-slate-100">
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={140} height={100} />
          </Link>
        </div>
        <div>presents</div>
        <div className="text-3xl font-semibold">
          Quick Glance{" "}
          <span className="text-slate-500 font-normal">
            (React.js & Next.js Questions )
          </span>{" "}
        </div>
      </div>
      <div className="w-full flex flex-col lg:hidden justify-center items-center space-x-7 text-base bg-slate-100 py-10">
        <div className="flex  justify-center items-center w-full pl-6">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
          </Link>
        </div>
        <div className="text-sm text-center">presents</div>
        <div className="text-2xl font-semibold text-center pt-5">
          Quick Glance <br />
          <span className="text-slate-500 font-normal text-left text-xl">
            (React.js & Next.js Questions )
          </span>{" "}
        </div>
      </div>
    </>
  );
};

export default Navbar;
