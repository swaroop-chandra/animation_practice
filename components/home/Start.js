import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/Button.module.css";

function Start() {
  return (
    <div
      data-scrolled-into-view="true"
      className=" text-black bg-white lg:h-[48rem] min-h-[18rem] lg:p-20 p-10 lg:flex"
    >
      <div className="lg:w-6/12 flex justify-center items-center">
        {" "}
        <img src="/images/background/web.gif" frameborder="0"></img>
      </div>
      <div className="lg:w-6/12 flex justify-center items-center flex-col lg:p-10">
        <div className="flex py-5 ">
          <div className="text-8xl lg:px-10 pe-6">1</div>
          <div className="text-capitalize ">
            <div className="text-2xl">create a website</div>
            <p>
              {" "}
              Select from any of our industry-leading website templates,
              designer fonts, and color palettes that best fit your personal
              style and professional needs.
            </p>
          </div>
        </div>
        <div className="flex py-5">
          <div className="text-8xl lg:px-10 pe-4">2</div>
          <div className="text-capitalize ">
            <div className="text-2xl">create a website</div>
            <p>
              {" "}
              Select from any of our industry-leading website templates,
              designer fonts, and color palettes that best fit your personal
              style and professional needs.
            </p>
          </div>
        </div>
        <div className="flex py-5">
          <div className="text-8xl lg:px-10 pe-4">3</div>
          <div className="text-capitalize ">
            <div className="text-2xl">create a website</div>
            <p>
              {" "}
              Select from any of our industry-leading website templates,
              designer fonts, and color palettes that best fit your personal
              style and professional needs.
            </p>
          </div>
        </div>
        <div className="mt-5">
          <button className={styles.cta}>
            <span className={styles.hover_underline_animation}> Shop now </span>
            <svg
              viewBox="0 0 46 16"
              height="10"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
              id="arrow-horizontal"
              style={{ marginTop: "-8px" }}
            >
              <path
                transform="translate(30)"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                data-name="Path 10"
                id="Path_10"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Start;
