import React from "react";
import { motion } from "framer-motion";

function BackGroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.3, 0.2, 0.8, 0.1, 0.1],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-[100px] w-[100px] mt-15 animate-ping" />
      <div className=" border border-[#333333] rounded-full h-[200px] w-[200px] mt-15  absolute" />
      <div className=" border border-[#333333] rounded-full h-[300px] w-[300px] mt-15  absolute" />
      <div className=" border border-[#F7AB0A] mt-15 opacity-20 rounded-full h-[450px] w-[450px] animate-pulse " />
      <div className="absolute mt-15 border border-[#333333] rounded-full h-[550px] w-[550px] mt-15" />
    </motion.div>
  );
}

export default BackGroundCircles;
