// Footer.tsx

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-50 shadow p-4 dark:bg-gray-800">
      <div className="bg-orange-50 dark:bg-gray-800 w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Made with ❤️ by{" "}
          <a href="https://sundar.zingbizz.com" className="underline">
            Sundar
          </a>
        </span>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        {" "} © 2024{" "}
          <a href="https://www.zingbizz.com" className="hover:underline">
            ZingBizz
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
