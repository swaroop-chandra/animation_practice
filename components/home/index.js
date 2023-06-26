import React from "react";
import bg from "../../public/images/background/back2.gif";
import ButtonComponent from "../common/ButtonComponent";
import { Parallax } from "react-scroll-parallax";

function index() {
  return (
    <div className="flex lg:flex-row flex-col lg:h-[48rem] h-[42.5rem] lg:h-screen overflow-hidden	">
      <div
        className=" w-full flex flex-col lg:flex-row bg-no-repeat bg-right h-[32rem] lg:h-screen lg:bg-cover text-white 
        pt-[4rem] lg:pt-0"
        style={{
          backgroundImage: `url(${bg.src})`,
          wordSpacing: "12px",
          position: "sticky",
          zIndex: "-3",
        }}
      >
        <div className=" w-full lg:w-6/12  text-left flex flex-col justify-end p-10">
          <h1 className="lg:text-8xl text-4xl">EVERYTHING TO SELL ANYTHING</h1>
          <p className="lg:text-3xl mt-5 text-lg">
            Start your free website trial today. <br /> No credit card required.
          </p>
          <div className="mt-10">
            <ButtonComponent
              name="Get Started"
              color="bg-white"
              text_color="text-gray-700"
              text_size="text-2xl"
              width="w-[15rem]"
              height="h-[5rem]"
            />
          </div>
        </div>

        {/* <div className=" w-full lg:w-6/12 h-full hidden lg:block	 rounded-lg">
          <div
            style={{
              height: "100vh",
              padding: "15.4rem 7rem 0rem 0",
              marginLeft: "-2.5rem",
              overflow: "scroll",
              color: "black",
            }}
          >
            <iframe
              src="/images/background/bgGif.gif"
              frameborder="0"
              className="w-[60rem] h-[33rem] absolute"
              style={{
                transform: "scale(0.82)",
                top: "21% ",
                left: "41%",
              }}
            ></iframe>
          </div>
        </div> */}
      </div>
      {/* <div
        className=" w-full bg-no-repeat h-[32rem] lg:hidden bg-contain text-white 
         lg:pt-0"
        style={{
          backgroundImage: `url(${bg.src})`,
          wordSpacing: "12px",
          position: "sticky",
          zIndex: "-3",
        }}
      >
        <div className=" w-full h-full">
          <div>
            <iframe
              src="/images/background/bgGif.gif"
              // allowFullScreen
              className="w-[46rem] h-[31rem] absolute"
              style={{
                transform: "scale(0.2)",
                top: " -9.1rem",
                left: "-9.1rem",
              }}
            ></iframe>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default index;
