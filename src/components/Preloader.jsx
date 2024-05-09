// Preloader.js
import React from "react";

const Preloader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div class="relative ">
        <div class="w-20 h-20 border-violet-200 border-2 rounded-full"></div>
        <div class="w-20 h-20 border-violet-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
      </div>

      <div class="relative">
        <div class="w-10 h-10 border-violet-200 border-2 rounded-full"></div>
        <div class="w-10 h-10 border-violet-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
      </div>

      <div class="relative">
        <div class="w-5 h-5 border-violet-200 border-2 rounded-full"></div>
        <div class="w-5 h-5 border-violet-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
      </div>
    </div>
  );
};

export default Preloader;
