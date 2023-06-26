import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/Button.module.css";
import card1 from "../../public/images/cards/blog.jpg";
import card2 from "../../public/images/cards/cv.jpg";
import card3 from "../../public/images/cards/game.jpg";
import card4 from "../../public/images/cards/overall.jpg";
import card5 from "../../public/images/cards/portfolio.jpg";
import { FiArrowRightCircle } from "react-icons/fi";

function CardsChange() {
  const [id, setId] = useState("1");
  return (
    <div
      data-scrolled-into-view="true"
      className=" text-white bg-black lg:h-[77rem] h-[68rem] lg:p-20 p-10 pt-[14rem] lg:flex justify-center "
    >
      <div className="lg:w-5/12 lg:pt-[18rem]">
        <h1 className="lg:text-[4rem] text-4xl text-white leading-none">
          Website templates for every purpose
        </h1>
        <p className="mt-10 lg:text-2xl text-lg">
          Start with a flexible template, then customize to fit your style and
          professional needs with our website builder.
        </p>
        <div className="mt-10">
          <ul className="lg:text-5xl text-lg w-auto">
            <li
              className={styles.hover_underline_animation_white}
              id="1"
              onMouseEnter={() => setId("1")}
            >
              Online Store{" "}
              {id == "1" && (
                <FiArrowRightCircle
                  style={{ width: "35px", height: "35px", color: "white" }}
                />
              )}
            </li>
            <li
              className={styles.hover_underline_animation_white}
              id="2"
              onMouseEnter={() => setId("2")}
            >
              Local Business
              {id == "2" && (
                <FiArrowRightCircle
                  style={{ width: "35px", height: "35px", color: "white" }}
                />
              )}
            </li>
            <li
              className={styles.hover_underline_animation_white}
              id="3"
              onMouseEnter={() => setId("3")}
            >
              Portfolio
              {id == "3" && (
                <FiArrowRightCircle
                  style={{ width: "35px", height: "35px", color: "white" }}
                />
              )}
            </li>
            <li
              className={styles.hover_underline_animation_white}
              id="5"
              onMouseEnter={() => setId("5")}
            >
              Blog
              {id == "5" && (
                <FiArrowRightCircle
                  style={{ width: "35px", height: "35px", color: "white" }}
                />
              )}
            </li>

            <li
              className={styles.hover_underline_animation_white}
              id="4"
              onMouseEnter={() => setId("4")}
            >
              Personal & CV
              {id == "4" && (
                <FiArrowRightCircle
                  style={{ width: "35px", height: "35px", color: "white" }}
                />
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:w-7/12 lg:pt-[20rem] pt-[5rem] flex justify-end items-center lg:p-10">
        <img
          src={
            id == "1"
              ? card1.src
              : id == "2"
              ? card2.src
              : id == "3"
              ? card3.src
              : id == "4"
              ? card4.src
              : card5.src
          }
          alt="banner"
        />
      </div>
    </div>
  );
}

export default CardsChange;
