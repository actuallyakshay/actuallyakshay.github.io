import { Box, Button, Text, useColorMode } from "@chakra-ui/react";
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
          pl={{ base: "5", md: "20" }}
        >
          <Text
            fontWeight="600"
            color="#cdcdff"
            fontFamily="Poppins"
            className="text-md  cursor-pointer "
          >
            Home
          </Text>
          <Text
            fontWeight="600"
            color="#cdcdff"
            fontFamily="Poppins"
            className="text-md cursor-pointer"
          >
            About
          </Text>
          <Text
            fontWeight="600"
            color="#cdcdff"
            fontFamily="Poppins"
            className=" text-md  cursor-pointer"
          >
            Skills
          </Text>
          <Text
            fontWeight="600"
            color="#cdcdff"
            fontFamily="Poppins"
            className="text-md  cursor-pointer"
          >
            Projects
          </Text>
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
          fgColor="#cdcdff"
          bgColor="transparent"
        />
        <Text
          fontWeight="600"
          color="#cdcdff"
          display={{ base: "none", md: "inline-block" }}
          pr={{ base: "5", md: "20" }}
        >
          Get In Touch
        </Text>
      </motion.div>
    </header>
  );
}

export default Header;
