import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";
import { ChevronRightIcon } from "@chakra-ui/icons";
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
    <Box
      id="HERO__"
      pt="7"
      overflow={"hidden"}
      position="relative"
      pb="12"
    >
      <Box position={"absolute"} w="100%">
        <Image
          src="https://d1edzrgaei4psf.cloudfront.net/newHome/12.svg"
          opacity=".3"
          w="100%"
        />
      </Box>
      <br />
      <VStack w="95%" m="auto" textAlign={"center"}>
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
            url="https://www.linkedin.com/in/akshay-rajput-422794220/"
            fgColor={colorMode === "light" ? "white" : "#FFFAF0"}
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            fgColor={colorMode === "light" ? "white" : "gray.300"}
            url="https://github.com/actuallyakshay"
            style={{ height: 40, width: 40 }}
          />
          <SocialIcon
            url="https://mail.google.com/mail/u/0/#inbox?compose=new"
            className="cursor-pointer"
            network="email"
            fgColor={colorMode === "light" ? "white" : "#FFFAF0"}
            bgColor="orange"
            style={{ height: 40, width: 40 }}
          />
        </HStack>
        <br />
        <a
          href="https://github.com/actuallyakshay/actuallyakshay.github.io/raw/master/Akshay-Rajput-Resume.pdf"
          download={"Akshay-Rajput-Resume"}
        >
          <Button
            leftIcon={<HiOutlineDownload />}
            borderRadius={"20px"}
            colorScheme={"orange"}
          >
            Resume
          </Button>
        </a>
      </VStack>
    </Box>
  );
}

export default Hero;
