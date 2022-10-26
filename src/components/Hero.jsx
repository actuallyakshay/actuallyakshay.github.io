import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { HiOutlineDownload } from "react-icons/hi";

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
      <br />
      <VStack
        w="95%"
        m="auto"
        h="80vh"
        textAlign={"center"}
        position="relative"
      >
        <Box
          position={"absolute"}
          opacity={colorMode === "light" ? ".5" : ".1"}
          w="500px"
          color={colorMode === "light" ? "blackAlpha.100" : "#F7AB0A"}
        >
          <BiMessageRoundedDetail fontSize="500px" />
        </Box>
        <Text mt="12" color={colorMode === "light" ? "gray.600" : "white"}>
          {" "}
          <span
            style={{
              fontSize: "30px",
              fontWeight: "500",
              color: "#dd6b20",
            }}
          >
            Hi,{" "}
          </span>
          I am
        </Text>
        <Heading
          as="i"
          color={colorMode === "light" ? "orange.500" : "white"}
          fontSize={{ base: "42px", md: "72px" }}
        >
          Akshay Rajput
        </Heading>
        <br />
        <Heading
          color={colorMode === "light" ? "gray.700" : "white"}
          size={{ base: "sm", md: "md" }}
        >
          {<ChevronRightIcon />} {text}{" "}
          <span>
            <Cursor />
          </span>
        </Heading>
        <br />
        <Text
          fontSize={"16px"}
          color={colorMode === "light" ? "blackAlpha.700" : "white"}
          width={{ base: "80%", md: "60%" }}
          letterSpacing={"1px"}
          as="i"
          fontWeight={"400"}
        >
          A Mern Stack Developer who loves solving problems and building
          projects. I am equipped with a variety of technologies and tools to
          help me build the best possible product.
        </Text>
        
        <br />
        <HStack justifyContent={"center"} spacing="4" mb="2">
          <SocialIcon
            url="https://linkedin.com/in/jaketrent"
            fgColor={colorMode === "light" ? "white" : "#FFFAF0"}
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            fgColor={colorMode === "light" ? "white" : "gray.300"}
            url="https://github.com"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://mail.com"
            className="cursor-pointer"
            network="email"
            fgColor={colorMode === "light" ? "white" : "#FFFAF0"}
            bgColor="orange"
            style={{ height: 40, width: 40 }}
          />
        </HStack>
        <br />
        <Button
          leftIcon={<HiOutlineDownload />}
          borderRadius={"20px"}
          colorScheme={"orange"}
        >
          Resume
        </Button>
      </VStack>
    </>
  );
}

export default Hero;
