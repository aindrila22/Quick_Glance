import Link from "next/link";
import React from "react";

const Button = ({ title, href }) => {
  return (
    <Link
      className="border border-gray-700 rounded px-4 py-3 hover:bg-purple-400 hover:text-white hover hover:border-purple-600 transition-all duration-500"
      href={href}
    >
      {title}
    </Link>
  );
};

export default Button;
