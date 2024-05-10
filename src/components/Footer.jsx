import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const Footer = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-24">
      <p className="dark:text-gray-200 text-gray-700 text-center m-20">
        {`© ${new Date().getFullYear()} All rights reserved by`}{" "}
        <a href="https://www.sidakvats.in/" target="_blank"><span style={{ color: currentColor }}>www.sidakvats.in</span></a>
      </p>
    </div>
  );
};

export default Footer;
