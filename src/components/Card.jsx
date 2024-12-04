import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
const Card = ({ width, start, para, hover="false"}) => {
  return (
    <motion.div whileHover={{backgroundColor : hover==="true" && "#7443ff", padding : "25px"}} className={`bg-zinc-800 p-5 rounded-xl hover:${hover} ${width} min-h-[25rem] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>one heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-2xl font-medium mt-2">whatever heading</h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-7xl font-semibold tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="rounded-full mt-5 py-1 px-4 border-[1px] border-zinc-50">
              Contact us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
