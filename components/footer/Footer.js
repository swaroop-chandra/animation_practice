import React, { useEffect, useRef, useState } from "react";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import { header } from "../constants/footer/header";
import { products } from "../constants/footer/products";
import { follow } from "../constants/footer/follow";
import { customer } from "../constants/footer/customer";
import { company } from "../constants/footer/company";
import { community } from "../constants/footer/community";

function Footer() {
  const [id, setId] = useState("");
  return (
    <div
      data-scrolled-into-view="true"
      className=" text-stone-400 bg-black lg:h-[48rem] min-h-[18rem] lg:p-15 p-10 lg:flex lg:pt-40"
    >
      <div className="lg:w-4/12">
        <div className="flex">
          <img
            src="/images/logo/logoNormal.png"
            alt="logo"
            className="w-[8rem] h-[5rem]"
          />
          <div className=" flex  items-center">
            <img
              src="/images/logo/sigBlue.png"
              alt="logo"
              className="w-[20rem] h-[4rem]"
            />
          </div>
        </div>
        <div className="ms-10">
          <button className="flex text-stone-400 px-5 py-2 bg-zinc-800 gap-4 lg:w-4/12 w-9/12 justify-between lg:mt-20">
            Money{" "}
            <FiArrowUp
              style={{ height: "25px", color: "#a8a29d" }}
              className="w-[4rem]"
              onClick={() => setToggle(!toggle)}
            />
          </button>

          <button className="flex text-stone-400 px-5 py-2 bg-zinc-800 gap-4 lg:w-4/12 w-9/12 justify-between mt-10">
            Language{" "}
            <FiArrowUp
              style={{ height: "25px", color: "#a8a29d" }}
              className="w-[4rem]"
              onClick={() => setToggle(!toggle)}
            />
          </button>
        </div>
      </div>
      <div className="lg:w-8/12 ">
        <div className="lg:flex justify-around text-capitalize  mt-5 hidden">
          <div>
            <div className="text-2xl">Products</div>
            <ul className="mt-4">
              {products.map((prod) => (
                <li className="text-md font-thin mt-2">{prod}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-2xl">Customers</div>
            <ul className="mt-4">
              {customer.map((prod) => (
                <li className="text-md font-thin mt-2">{prod}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-2xl">Compnay</div>
            <ul className="mt-4">
              {company.map((prod) => (
                <li className="text-md font-thin mt-2">{prod}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-2xl">Community</div>
            <ul className="mt-4">
              {community.map((prod) => (
                <li className="text-md font-thin mt-2">{prod}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-2xl">Follow</div>
            <ul className="mt-4">
              {follow.map((prod) => (
                <li className="text-md font-thin mt-2">{prod}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-capitalize  mt-5 lg:hidden flex flex-col justify-center divide-y capitalize">
          <div className="mb-5">
            <div
              className="text-2xl flex justify-between mt-5"
              onClick={() => (id == "1" ? setId("") : setId("1"))}
            >
              Products{" "}
              {id == "1" ? (
                <FiArrowUp
                  style={{ height: "25px", color: "#a8a29d" }}
                  className="w-[4rem] mt-1 "
                />
              ) : (
                <FiArrowDown
                  style={{ height: "25px", color: "#a8a29d" }}
                  className="w-[4rem] mt-1 "
                />
              )}
            </div>
            {id == "1" && (
              <ul className="mt-4">
                {products.map((prod) => (
                  <li className="text-md font-thin mt-2">{prod}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="mb-5">
            <div
              className="text-2xl flex justify-between mt-5"
              onClick={() => (id == "2" ? setId("") : setId("2"))}
            >
              Customers{" "}
              {id == "2" ? (
                <FiArrowUp
                  style={{ height: "25px", color: "#a8a29d" }}
                  className="w-[4rem] mt-1 "
                />
              ) : (
                <FiArrowDown
                  style={{ height: "25px", color: "#a8a29d" }}
                  className="w-[4rem] mt-1 "
                />
              )}
            </div>
            {id == "2" && (
              <ul className="mt-4">
                {customer.map((prod) => (
                  <li className="text-md font-thin mt-2">{prod}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="mb-5">
            <div
              className="text-2xl flex justify-between mt-5"
              onClick={() => (id == "3" ? setId("") : setId("3"))}
            >
              Compnay{" "}
              {id == "3" ? (
                <FiArrowUp
                  style={{ height: "25px", color: "#a8a29d" }}
                  className="w-[4rem] mt-1 "
                />
              ) : (
                <FiArrowDown
                  style={{ height: "25px", color: "#a8a29d" }}
                  className="w-[4rem] mt-1 "
                />
              )}
            </div>
            {id == "3" && (
              <ul className="mt-4">
                {company.map((prod) => (
                  <li className="text-md font-thin mt-2">{prod}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="mb-5">
            <div
              className="text-2xl flex justify-between mt-5"
              onClick={() => (id == "4" ? setId("") : setId("4"))}
            >
              Community{" "}
              {id == "4" ? (
                <FiArrowUp
                  style={{ height: "25px", color: "#a8a29d" }}
                  className="w-[4rem] mt-1 "
                />
              ) : (
                <FiArrowDown
                  style={{ height: "25px", color: "#a8a29d" }}
                  className="w-[4rem] mt-1 "
                />
              )}
            </div>
            {id == "4" && (
              <ul className="mt-4">
                {community.map((prod) => (
                  <li className="text-md font-thin mt-2">{prod}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="mb-5">
            <div
              className="text-2xl flex justify-between mt-5"
              onClick={() => (id == 5 ? setId("") : setId("5"))}
            >
              Follow{" "}
              {id == "5" ? (
                <FiArrowUp
                  style={{ height: "25px", color: "#a8a29d" }}
                  className="w-[4rem] mt-1 "
                />
              ) : (
                <FiArrowDown
                  style={{ height: "25px", color: "#a8a29d" }}
                  className="w-[4rem] mt-1 "
                />
              )}
            </div>
            {id == "5" && (
              <ul className="mt-4">
                {follow.map((prod) => (
                  <li className="text-md font-thin mt-2">{prod}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
