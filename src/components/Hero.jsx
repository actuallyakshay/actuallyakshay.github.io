import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";
import { DownloadIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

function Hero({ colorMode }) {
  const [text, count] = useTypewriter({
    words: [
      "{ A FULL STACK WEB DEVELOPER }",
      "Guy-who-loves-Coffee.jsx",
      "<ButLoveToCodeMore/>",
    ],
    loop: true,
    typeSpeed: 80,
    delaySpeed: 2000,
    deleteSpeed: 70,
  });
  return (
    <>
      <Box
        position={"absolute"}
        top="10"
        // zIndex={-1}
        opacity={colorMode === "light" ? ".9" : ".7"}
        left={{ base: "0", md: "350px", lg: "530px" }}
        overflow={"hidden"}
        display={{ base: "none", md: "flex" }}
      >
        <Image
          src="https://i.ibb.co/TW1CXQH/My-project.png"
          h={{ md: "45vh", lg: "94vh" }}
          w={{base:'0' , md:"60vw" , lg :'98vw'}}
        />
      </Box>
      <Flex
        className="overflow-hidden"
        flexDirection={"column"}
        justifyContent="center"
        textAlign="center"
        alignItems={"center"}
        gap="10"
        mt={{ base: "10", md: "20" }}
        w={{ base: "98%", md: "60%" }}
        fontFamily="Poppins"
        // border="2px solid black"
        pl={{ base: "3", md: "4" , lg:'10' }}
      >
        <motion.div
          initial={{
            x: -1000,
            opacity: 0,
            scale: 0,
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
          <Text
            fontSize="20px"
            color={colorMode === "light" ? "blackAlpha.700" : "gray.300"}
          >
            Hi, I am
          </Text>
          <Heading
            // color={colorMode === "light" ? "red.500" : "orange.200"}
            color={colorMode === "light" ? "blue.700" : "orange.200"}
            fontFamily="Poppins"
            letterSpacing="1px"
            fontSize={"46px"}
          >
            Akshay Rajput
          </Heading>
        </motion.div>
        <Heading
          letterSpacing="1px"
          size="md"
          fontFamily="Poppins"
          color={colorMode === "light" ? "blackAlpha.700" : "gray.300"}
        >
          <span>{text}</span>
          <Cursor cursorColor="red" />
        </Heading>
        <motion.div
          initial={{
            x: -1000,
            opacity: 0,
            scale: 0,
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
          <Text
            fontSize="xs"
            letterSpacing="1px"
            fontFamily="Poppins"
            width={{ base: "300px", md:"280px", lg: "650px" }}
            color={colorMode === "light" ? "blackAlpha.700" : "gray.300"}
          >
            A Mern Stack Developer who loves solving problems and building
            projects. I am equipped with a variety of technologies and tools to
            help me build the best possible product.
          </Text>
        </motion.div>
        <Flex justifyContent="center">
          <SocialIcon
            className="cursor-pointer"
            network="github"
            bgColor="transparent"
            fgColor={colorMode === "light" ? "#2C5282" : "#FFFAF0"}
          />
          <SocialIcon
            className="cursor-pointer"
            network="email"
            bgColor="transparent"
            fgColor={colorMode === "light" ? "#2C5282" : "#FFFAF0"}
          />
          <SocialIcon
            className="cursor-pointer"
            network="linkedin"
            bgColor="transparent"
            fgColor={colorMode === "light" ? "#2C5282" : "#FFFAF0"}
          />
        </Flex>
        <Button
          rightIcon={<DownloadIcon />}
          w="120px"
          borderRadius={"25px"}
          colorScheme={"facebook"}
        >
          Resume
        </Button>
      </Flex>
    </>
  );
}

export default Hero;
