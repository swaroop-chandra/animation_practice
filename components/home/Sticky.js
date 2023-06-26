import React, { useEffect, useRef, useState } from "react";

function Sticky() {
  return (
    <div
      data-scrolled-into-view="true"
      className="lg:text-[10rem] text-[4rem] text-white bg-black lg:h-[80rem] h-[18rem] lg:p-20 p-10 lg:flex justify-center"
    >
      <p className="lg:sticky  top-5 lg:h-[5rem] lg:w-6/12">Create a Website</p>
      <img
        src="/images/background/bg.jpg"
        alt="bg"
        className="lg:absolute lg:w-8/12 lg:mt-[52rem] mt-[5rem] flex items-end "
      />
    </div>
  );
}

export default Sticky;
