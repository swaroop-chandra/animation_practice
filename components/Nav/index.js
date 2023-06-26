import styles from "../../styles/Navigation.module.css";
import Link from "next/Link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MenuItems } from "./NavContent";
import ButtonComponent from "../common/ButtonComponent";
import { AiOutlineMenu } from "react-icons/ai";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function index() {
  const [navClick, setNavClick] = useState("");
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(true);
  const router = useRouter();
  // document.title = `Thishi | ${router.pathname}`;
  const [colorChange, setColorchange] = useState(true);
  const changeNavbarColor = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= 80) {
        setColorchange(false);
      } else {
        setColorchange(true);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeNavbarColor);

      return () => {
        window.removeEventListener("scroll", changeNavbarColor);
      };
    }
  }, []);

  return (
    <div
      className={`fixed flex flex-row bg-blend-multiply drop-shadow-md items-center p z-10 ${
        colorChange ? "bg-transparent" : "bg-black"
      }`}
      style={{ height: "75px", width: "100vw" }}
    >
      <div
        className={`grow ml-5 flex justify-start items-center lg:gap-4 gap-2 lg:text-2xl text-md ${
          colorChange ? "text-black" : "text-white"
        }`}
      >
        <Link href={`/`}>
          <img
            src={"/images/logo/logoNormal.png"}
            alt="logo"
            className="lg:w-[8rem] lg:h-[5rem] w-[6rem] h-[4rem]"
          />
        </Link>
        {/* SWAPO CHAN */}
      </div>
      <ul className="hidden lg:flex basis-1/2 flex justify-around py-2 items-center text-white">
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                href={`/${item.url}`}
                onClick={() => {
                  setNavClick(index);
                }}
                style={
                  MenuItems.findIndex((e) => e.url == router.pathname) ==
                    index || navClick == index
                    ? {
                        fontSize: "20px",
                        color: "white",
                      }
                    : { fontSize: "16px", opacity: "0.5" }
                }
              >
                <button
                  className={`transition p-3 ease-in-out delay-150  duration-300  `}
                >
                  {item.title}
                </button>
              </Link>
            </li>
          );
        })}

        <li>
          <ButtonComponent
            name="Get Started"
            color="bg-white"
            text_color="text-gray-700"
            text_size="text-xl"
            width="w-[10rem]"
            height="h-[3rem]"
          />
        </li>
      </ul>
      <div className="lg:hidden flex mr-4">
        {/* <img
          src="/images/nav/menu.svg"
          alt="menu"
          width={35}
          height={35}
          onClick={() => setToggle(!toggle)}
        /> */}
        <AiOutlineMenu
          style={{ width: "25px", height: "25px", color: "white" }}
          onClick={() => setToggle(!toggle)}
        />
      </div>
      {toggle && (
        <div
          className="lg:hidden fixed top-0 right-0 w-48 h-100 p-6"
          style={{ height: "100vh", background: "#fff" }}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-base text-slate-600">Menu</h3>

            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
              onClick={() => setToggle(!toggle)}
            >
              <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
            </svg>
          </div>
          <ul className="py-6 items-center" onClick={() => setToggle(!toggle)}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    href={`/${item.url}`}
                    onClick={() => {
                      setNavClick(index);
                    }}
                    style={
                      MenuItems.findIndex((e) => e.url == router.pathname) ==
                        index || navClick == index
                        ? {
                            fontSize: "18px",
                            color: "black",
                          }
                        : { fontSize: "16px", opacity: "0.5" }
                    }
                  >
                    <button
                      className={`transition p-3 ease-in-out delay-150  duration-300  `}
                    >
                      {item.title}
                    </button>
                  </Link>
                </li>
              );
            })}
            <li className="pt-4">
              <Link href="/lets_talk">
                <ButtonComponent
                  name="Get Started"
                  color="bg-white"
                  text_color="text-gray-700"
                  text_size="text-xl"
                  width="w-[10rem]"
                  height="h-[3rem]"
                />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
