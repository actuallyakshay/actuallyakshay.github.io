import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className="sticky top-0 pl-5 pr-5 flex items-start justify-between items-center max-w-7xl mx-auto">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.4,
        }}
      >
        <Box
          className="flex flex-row items-center items-center"
          gap={{ base: 5, md: 20 }}
        >
          <Text fontFamily="Poppins" className="text-md text-gray-400 cursor-pointer ">HOME</Text>
          <Text fontFamily="Poppins" className="text-md text-gray-400 cursor-pointer">ABOUT</Text>
          <Text fontFamily="Poppins" className=" text-md text-gray-400 cursor-pointer">SKILL</Text>
          <Text fontFamily="Poppins" className="text-md text-gray-400 cursor-pointer">PROJECTS</Text>
        </Box>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.4,
        }}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <Text className="uppercase hidden md:inline-flex text-md text-gray-400 cursor-pointer">
          get in touch
        </Text>
      </motion.div>
    </header>
  );
}

export default Header;
