import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

function Quote() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const render = (e) => {
    console.log(e, "e data");
    if (!isVisible) {
      setIsVisible(e);
    }
  };
  const render1 = (e) => {
    if (!isVisible1) {
      setIsVisible1(e);
    }
  };
  const render2 = (e) => {
    if (!isVisible2) {
      setIsVisible2(e);
    }
  };

  return (
    <div
      data-scrolled-into-view="true"
      className="lg:text-[186px] text-[40px] text-white bg-black lg:h-[58rem] h-[18rem] lg:p-20 p-10"
    >
      <InView onChange={(e) => render(e)}>
        {isVisible && (
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
          >
            GROW YOUR
          </motion.div>
        )}
      </InView>
      <InView onChange={(e) => render1(e)}>
        {isVisible1 && (
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 3 }}
          >
            <div className="flex justify-center">BUSINESS</div>
          </motion.div>
        )}
      </InView>
      <InView onChange={(e) => render2(e)}>
        {isVisible2 && (
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 4 }}
          >
            <div className="flex justify-end">ONLINE</div>
          </motion.div>
        )}
      </InView>
    </div>
  );
}

export default Quote;
