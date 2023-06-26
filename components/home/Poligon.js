import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/Animation.module.css";

function Poligon() {
  const [first, setfirst] = useState("60% 0, 100% 50%, 50% 100%, 0 50%");

  const [counter, setCounter] = React.useState(50);
  const [test, setTest] = React.useState(false);
  let ref = useRef("60% 0, 100% 50%, 50% 100%, 0 50%");
  let ref2 = useRef(50);

  const [number, setNumber] = useState(50);
  const [isIncrementing, setIsIncrementing] = useState(true);

  return (
    <div
      data-scrolled-into-view="true"
      className=" lg:h-[56rem] min-h-[18rem] lg:p-20 p-10 "
    >
      <h1 className="lg:text-[4rem] text-3xl lg:w-6/12 leading-none font-bold">
        Explore how other entrepreneurs use their Talent
      </h1>
      <div className="lg:overflow-x-auto lg:flex ">
        <div
          className="lg:m-[3rem] mt-12 w-[5rem]"
          style={{
            width: "100% !important",
            // margin: "3rem",
            minWidth: "fit-content",
          }}
        >
          <img
            src="/images/profile/men1.jpg"
            alt="profile"
            className={styles.element}
            style={{
              objectFit: "cover",
              height: "25rem",
              // minWidth: "max-content",
            }}
          />
          <h1 className="text-4xl mt-8 text-center">Gaurav</h1>
          <p className="text-md mt-2 text-center">Android developer</p>
        </div>
        <div
          className="lg:m-[3rem] mt-12"
          style={{
            width: "100% !important",
            // margin: "3rem",
            minWidth: "fit-content",
          }}
        >
          <img
            src="/images/profile/wmen2.jpg"
            alt="profile"
            className={styles.element1}
            style={{
              objectFit: "cover",
              height: "25rem",
              // minWidth: "max-content",
            }}
          />
          <h1 className="text-4xl mt-8 text-center">Bishal</h1>
          <p className="text-md mt-2 text-center">Android developer</p>
        </div>
        <div
          className="lg:m-[3rem] mt-12"
          style={{
            width: "100% !important",
            // margin: "3rem",
            minWidth: "fit-content",
          }}
        >
          <img
            src="/images/profile/wmen4.jpg"
            alt="profile"
            className={styles.element}
            // style={{ width: "25%", height: "30rem", margin: "3rem" }}
            style={{
              objectFit: "cover",
              height: "25rem",
              // minWidth: "max-content",
            }}
          />
          <h1 className="text-4xl mt-8 text-center">Anjana</h1>
          <p className="text-md mt-2 text-center">UI/UX Designer</p>
        </div>
        <div
          className="lg:m-[3rem] mt-12"
          style={{
            width: "100% !important",
            // margin: "3rem",
            minWidth: "fit-content",
          }}
        >
          <img
            src="/images/profile/wmen3.jpg"
            alt="profile"
            className={styles.element1}
            style={{
              objectFit: "cover",
              height: "25rem",
              // minWidth: "max-content",
            }}
            // style={{ width: "25%", height: "30rem", margin: "3rem" }}
          />
          <h1 className="text-4xl mt-8 text-center">Deepa</h1>
          <p className="text-md mt-2 text-center">Ops Head</p>
        </div>
        <div
          className="lg:m-[3rem] mt-12"
          style={{
            width: "100% !important",
            // margin: "3rem",
            minWidth: "fit-content",
          }}
        >
          <img
            src="/images/profile/men2.jpg"
            alt="profile"
            className={styles.element}
            style={{
              objectFit: "cover",
              height: "25rem",
              // minWidth: "max-content",
            }}
            // style={{ width: "25%", height: "30rem", margin: "3rem" }}
          />
          <h1 className="text-4xl mt-8 text-center">Swaroop</h1>
          <p className="text-md mt-2 text-center">Software Developer</p>
        </div>
        <div
          className="lg:m-[3rem] mt-12"
          style={{
            width: "100% !important",
            // margin: "3rem",
            minWidth: "fit-content",
          }}
        >
          <img
            src="/images/profile/wmen1.jpg"
            alt="profile"
            className={styles.element1}
            style={{
              objectFit: "cover",
              height: "25rem",
              // minWidth: "max-content",
            }}
            // style={{ width: "25%", height: "30rem", margin: "3rem" }}
          />
          <h1 className="text-4xl mt-8 text-center">Sneha</h1>
          <p className="text-md mt-2 text-center">HR</p>
        </div>
        <div
          className="lg:m-[3rem] mt-12"
          style={{
            width: "100% !important",
            // margin: "3rem",
            minWidth: "fit-content",
          }}
        >
          <img
            src="/images/profile/wmen5.jpg"
            alt="profile"
            className={styles.element}
            style={{
              objectFit: "cover",
              height: "25rem",
              // minWidth: "max-content",
            }}
            // style={{ width: "25%", height: "30rem", margin: "3rem" }}
          />
          <h1 className="text-4xl mt-8 text-center">Nayana</h1>
          <p className="text-md mt-2 text-center">Business Head</p>
        </div>
      </div>
    </div>
  );
}

export default Poligon;
