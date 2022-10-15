import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackGroundCircles from "./BackGroundCircles";

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hi! My Name is AKSHAY RAJPUT",
      "{ A FULL STACK DEVELOPER }",
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
      <BackGroundCircles />
      <Flex
        className="overflow-hidden"
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
        textAlign="center"
        // border="2px solid white"
        position={"absolute"}
        top="120"
        w="full"
        gap="20"
      >
        <img
          className="rounded-full mx-auto"
          src="https://avatars.githubusercontent.com/u/107462720?v=4"
          alt=""
          height="200px"
          width="200px"
          //   marginTop="-40px"
          //   position="sticky"
        />
        <Heading size="lg" fontFamily="Poppins" color="#959CA7">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </Heading>
      </Flex>
    </>
  );
}

export default Hero;
